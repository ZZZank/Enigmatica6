onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    /**
     * @type {ShapedlessRecipeJSType[]}
     */
    const recipes = [
        {
            output: '4x redstone_arsenal:flux_gem',
            inputs: ['redstone_arsenal:flux_gem_block'],
            id: 'redstone_arsenal:storage/flux_gem_from_block'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
