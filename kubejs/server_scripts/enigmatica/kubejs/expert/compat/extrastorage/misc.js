onEvent('recipes', (event) => {
    if (global.isNormalMode || !Platform.isLoaded('extrastorage')) {
        return;
    }
    const id_prefix = 'enlightened6:expert/extrastorage/misc/';
    const recipes = [];

    event
        .custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: ['extrastorage:diamond_crafter'].map((input) => Ingredient.of(input)),
            inputFluid: `{FluidName:"tconstruct:molten_netherite",Amount:${144 * 9}}`,
            processingTime: 200,
            output: toJsonWithCount('extrastorage:netherite_crafter'),
            outputFluid: `{FluidName:"",Amount:0}`
        })
        .id('extrastorage:netherite_crafter');

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
