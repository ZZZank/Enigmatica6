// priority: 1005

/**
 * transform String/JSON style ingredient into Masterful Machinery JSON
 * @param {string|{type?:string,data:string|{},chance?:number}} ingredient
 * @returns {{type:string,data:{},chance?:number}}
 */
function toMMJson(ingredient) {
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
}

/**
 * transform string-style ingredient into JSON style
 * @param {string} ingredient like '3x #forge:grain' or 'minecraft:book'
 * @returns {{tag:string,item:null,count:number}|{tag:null,item:string,count:number}}
 */
function toJsonWithCount(ingredient) {
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
}

/**
 * run `tellraw` command on a player
 * @param {Internal.PlayerJS<any>} player The target of tellraw command
 * @param {string} str The content of tellraw command
 */
function tellraw(player, str) {
    player.server.runCommandSilent('/tellraw ' + player.name + ' ' + str);
}

/**
 * @see unificationBlacklist
 * @param {string} material
 * @param {string} type
 */
function entryIsBlacklisted(material, type) {
    for (let blacklist of unificationBlacklist) {
        if (blacklist.material == material && blacklist.type == type) {
            return true;
        }
    }
    return false;
}

/**
 * Get the stripped variant of targeted log, or `minecraft:air` if not found
 * @param {string} logBlock The id of targeted log block
 * @see buildWoodVariants
 */
function getStrippedLogFrom(logBlock) {
    for (let wood of buildWoodVariants) {
        if (wood.logBlock == logBlock) {
            return wood.logBlockStripped;
        }
    }
    return air;
}

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
 * @param {Internal.RecipeJS} recipe
 * @param {string} id_prefix
 */
const fallback_id = (recipe, id_prefix) => {
    if (recipe.path.includes('kjs_')) {
        recipe.serializeJson(); // without this the hashes *will* collide
        recipe.id(id_prefix + 'md5_' + recipe.uniqueId);
    }
};
