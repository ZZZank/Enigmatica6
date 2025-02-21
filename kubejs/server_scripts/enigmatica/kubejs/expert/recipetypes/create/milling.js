onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const recipes = [];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.create
                  .milling(recipe.output, recipe.inputs)
                  .id(recipe.id)
                  .processingTime(recipe.processingTime)
            : event.recipes.create
                  .milling(recipe.output, recipe.inputs)
                  .processingTime(recipe.processingTime);
    });
});
