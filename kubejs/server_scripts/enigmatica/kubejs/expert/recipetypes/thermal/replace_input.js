onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const recipes = [
        {
            replaceTarget: { id: 'thermal:machine_bottler' },
            toReplace: 'thermal:machine_frame',
            replaceWith: 'thermal:fluid_cell_frame'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});
