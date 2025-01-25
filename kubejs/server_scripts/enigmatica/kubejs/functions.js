// priority: 1005


/**
 *
 * @param {string} str : e.g. `an example sTRing`
 * @returns {string}: e.g. `An Exmaple String`
 */
const titleCase = (str) => {
    return str
        .split(' ')
        .map((str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase())
        .join(' ');
};

/**
 * transform String/JSON style ingredient into Masterful Machinery JSON
 * @param {string|{type?:string,data:string|{},chance?:number}} ingredient
 * @returns {{type:string,data:{},chance?:number}}
 */
const toMMJson = (ingredient) => {
    if (typeof ingredient == 'string') {
        // '32x kubejs:rough_machine_frame'
        ingredient = { data: toJsonWithCount(ingredient) };
    } else if (typeof ingredient.data == 'string') {
        // { chance: 1.0, data: '2x mekanism:solar_neutron_activator' }
        ingredient.data = toJsonWithCount(ingredient.data);
    }
    if (!ingredient.type) {
        ingredient.type = 'masterfulmachinery:items';
    }
    // @ts-ignore
    return ingredient;
};

/**
 * transform string-style ingredient into JSON style
 * @param {string} ingredient like '3x #forge:grain' or 'minecraft:book'
 * @returns {{tag:string,item:null,count:number}|{tag:null,item:string,count:number}}
 */
const toJsonWithCount = (ingredient) => {
    const parsed = { tag: null, item: null, count: 1 };

    const splited = ingredient.split('x ', 2);
    if (splited.length != 1) {
        // "3x kubejs:no" -> ["3", "kubejs:no"]
        parsed.count = parseInt(splited[0]);
        ingredient = splited[1];
    }

    if (ingredient.startsWith('#')) {
        parsed.tag = ingredient.substring(1);
    } else {
        parsed.item = ingredient;
    }
    return parsed;
};

function randomOf(entries) {
    return Utils.randomOf(Utils.getRandom(), entries);
}

/**
 * @param {$ItemStackJS_} item
 * @param {string?} color
 * @returns {string}
 */
const rawItemStr = (item, color) => {
    item = Item.of(item)
    const count = item.count > 1 ? `${item.count}*` : '';
    let itemName;
    try {
        //@ts-ignore
        itemName = JSON.parse(item.getNbt().display.Name);
    } catch (e) {
        itemName = { translate: `${item.block ? 'block' : 'item'}.${item.id.replace(':', '.')}` };
    }
    // not `%s[%s]` because JSON.stringify() is buggy in KubeJS 1.16
    const rawItem = {
        translate: count + '[%s]',
        with: [itemName],
        hoverEvent: {
            action: 'show_item',
            contents: {
                id: item.id,
                count: item.count,
                tag: item.nbtString
            }
        }
    };
    if (color) {
        // @ts-ignore
        rawItem.color = color;
    }
    return JSON.stringify(rawItem);
};

/**
 * run `tellraw` command on a player
 * @param {import("packages/dev/latvian/kubejs/player/$PlayerJS").$PlayerJS<any>} player The target of tellraw command
 * @param {string} str The content of tellraw command
 */
const tellraw = (player, str) => {
    player.server.runCommandSilent('/tellraw ' + player.name + ' ' + str);
};

/**
 * @see unificationBlacklist
 * @param {string} material
 * @param {string} type
 */
const entryIsBlacklisted = (material, type) => {
    for (let blacklist of unificationBlacklist) {
        if (blacklist.material == material && blacklist.type == type) {
            return true;
        }
    }
    return false;
};

/**
 * get the most prefered item in a tag based on priorities from variable `modPriorities`
 * @see modPriorities
 * @param {$IngredientJS_} tag
 * @returns {$ItemStackJS_}
 */
const getPreferredItemInTag = (tag) => {
    const items = getItemsInTag(tag);
    if (items.length == 0) {
        return Item.of(air);
    }
    //use "max" instead of "sorting", to decrease time complexity from O(n*log(n)) to O(n)
    //being "bigger" here means having smaller index, which means -1, so there's an `-`
    return maxOf(items, (a, b) => -compareIndices(a.mod, b.mod, tag));
};

function maxOf(list, comparator) {
    if (list.length == 0) {
        return null;
    }
    if (!comparator) {
        comparator = (a, b) => a - b;
    }
    let targetIndex = 0;
    for (let i = 1; i < list.length; i++) {
        if (comparator(list[i], list[targetIndex]) > 0) {
            targetIndex = i;
        }
    }
    return list[targetIndex];
}

function toPagedArray(arr, pageSize) {
    if (pageSize <= 0) {
        throw 'Invalid param, `pageSize` must be positive number';
    }
    const paged = [];
    for (let i = 0; i < arr.length; i += pageSize) {
        let end = JavaMath.min(i + pageSize, arr.length);
        paged.push(arr.slice(i, end));
    }
    return paged;
}

/**
 * @param {$IngredientJS_} tag
 * @return {$ItemStackJS_[]}
 */
const getItemsInTag = (tag) => {
    return Ingredient.of(tag).getStacks().toArray();
};

/**
 * @param {string} a
 * @param {string} b
 * @param {$IngredientJS_?} tag
 */
const compareIndices = (a, b, tag) => {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error(
        '[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!')
    );
    return 0;
};

/**
 * Get the stripped variant of targeted log, or `minecraft:air` if not found
 * @param {string} logBlock The id of targeted log block
 * @see buildWoodVariants
 */
const getStrippedLogFrom = (logBlock) => {
    for (let wood of buildWoodVariants) {
        if (wood.logBlock == logBlock) {
            return wood.logBlockStripped;
        }
    }
    return air;
};

/**
 *
 * @param {$IngredientJS_} item
 * @param {import("packages/dev/latvian/kubejs/player/$PlayerJS").$PlayerJS<any>} player
 * @returns {boolean}
 */
const playerHas = (item, player) => {
    return player.inventory.find(item) != -1;
};

// lt  = .slice(0, index)
// lte = .slice(0, index + 1)
// gt  = .slice(index)
// gte = .slice(index + 1)

/**
 *
 * @param {string[]} tiers
 * @param {string} tier
 * @returns
 */
const getLowerTiers = (tiers, tier) => {
    return tiers.slice(0, tiers.indexOf(tier));
};

/**
 *
 * @param {string[]} tiers
 * @param {string} tier
 */
const getNextTier = (tiers, tier) => {
    const i = tiers.indexOf(tier);
    if (i == tiers.length - 1) {
        return tier;
    }
    return tiers[i + 1];
};

/**
 * transplant the md5 from `<type's mod>:kjs_<hash>` onto the supplied prefix
 * @param {$RecipeJS_} recipe
 * @param {string} id_prefix
 */
const fallback_id = (recipe, id_prefix) => {
    if (recipe.path.includes('kjs_')) {
        recipe.serializeJson(); // without this the hashes *will* collide
        recipe.id(id_prefix + 'md5_' + recipe.uniqueId);
    }
};
