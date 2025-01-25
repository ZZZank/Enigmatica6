// priority: 1005

function addGeneralRecipeHint(recipe, event, additional) {

}

/**
 * Gets a ItemStackJS with its `chance` property displayed in its name, or itself if
 * its chance is not specified.
 *
 * `chance` will be displayed in `{name} {chance}%` format
 * @param {Internal.ItemStackJS} item
 */
const withChanceInName = (item) => {
    const chance = item.getChance();
    if (!chance) {
        return item;
    }
    return item.withName(item.name.append(text.of(' ' + (chance * 100).toPrecision(3) + '%').gray()));
};
