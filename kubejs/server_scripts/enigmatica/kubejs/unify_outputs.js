// priority: 900

/*
    This scripts unifies the output of recipes.

    It uses three arrays that define what to unify into what. 
    You can find those arrays in the constants/materials.js script

    The functions used can be found in the functions.js script, 
    in the same directory as this script is in.

    You may use this script and modify it as you see fit, as
    long as you do not claim to have made it. Attribution is
    appreciated, but not required.
*/
onEvent('recipes', (event) => {
    for (let material of materialsToUnify) {
        for (let type of typesToUnify) {
            if (!entryIsBlacklisted(material, type)) {
                let tagString = `#forge:${type}s/${material}`;
                let items = getItemsInTag(tagString)
                if (items.length > 1) {
                    let replaceWith = maxOf(items, (a, b) => -compareIndices(a.mod, b.mod, tagString))
                    event.replaceOutput(tagString, replaceWith);
                }
            }
        }
    }
});
