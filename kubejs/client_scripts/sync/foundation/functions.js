
/**
 * @param {string} str : e.g. `an example sTRing`
 * @returns {string}: e.g. `An Exmaple String`
 */
function titleCase(str) {
    return str
        .split(' ')
        .map((str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase())
        .join(' ');
}

/**
 * @template T
 * @param {$Collection_<T>} entries
 * @returns {T}
 */
function randomOf(entries) {
    return Utils.randomOf(Utils.getRandom(), entries);
}

/**
 * @param {$ItemStackJS_} item
 * @param {string?} color
 */
function rawItemStr(item, color) {
    item = Item.of(item);
    const count = item.count > 1 ? `${item.count}*` : '';
    let itemName;
    try {
        //@ts-ignore
        itemName = JSON.parse(item.getNbt().display.Name);
    } catch (e) {
        itemName = { translate: item.item.descriptionId };
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
}

/**
 * get the most prefered item in a tag based on priorities from variable `modPriorities`
 * @see modPriorities
 * @param {$IngredientJS_} tag
 */
function getPreferredItemInTag(tag) {
    const items = getItemsInTag(tag);
    if (items.length == 0) {
        return Item.of(air);
    }
    //use "max" instead of "sorting", to decrease time complexity from O(n*log(n)) to O(n)
    //being "bigger" here means having smaller index, which means -1, so there's an `-`
    return maxOf(items, (a, b) => -compareIndices(a.mod, b.mod, tag));
}

/**
 * @template T
 * @param {T[]} list
 * @param {((a: T, b: T) => number)} comparator
 * @returns {T}
 */
function maxOf(list, comparator) {
    if (list.length == 0) {
        return null;
    }
    let targetIndex = 0;
    for (let i = 1; i < list.length; i++) {
        if (comparator(list[i], list[targetIndex]) > 0) {
            targetIndex = i;
        }
    }
    return list[targetIndex];
}

/**
 * @param {$IngredientJS_} tag
 * @return {Internal.ItemStackJS[]}
 */
function getItemsInTag(tag) {
    return Ingredient.of(tag).getStacks().toArray();
}

/**
 * @param {string} a
 * @param {string} b
 * @param {$IngredientJS_?} tag
 */
function compareIndices(a, b, tag) {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error(
        '[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!')
    );
    return 0;
}

/**
 *
 * @param {$IngredientJS_} item
 * @param {Internal.PlayerJS<any>} player
 * @returns {boolean}
 */
function playerHas(item, player) {
    return player.inventory.find(item) != -1;
}

/**
 * Gets a ItemStackJS with its `chance` property displayed in its name, or itself if
 * its chance is not specified.
 *
 * `chance` will be displayed in `{name} {chance}%` format
 * @param {$ItemStackJS_} item
 * @param {number} chance
 */
function withChanceInName(item, chance) {
    const it = Item.of(item);
    return it.withName(it.name.append(text.of(' ' + (chance * 100).toPrecision(3) + '%').gray()));
}
