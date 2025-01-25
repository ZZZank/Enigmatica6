
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const recipes = [];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.create.splashing(recipe.output, recipe.inputs).id(recipe.id)
            : event.recipes.create.splashing(recipe.output, recipe.inputs);
    });
});
