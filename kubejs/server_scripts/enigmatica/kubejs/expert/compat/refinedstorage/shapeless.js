onEvent('recipes', (event) => {
    if (global.isNormalMode || !Platform.isLoaded('refinedstorage')) {
        return;
    }
    const id_prefix = 'enlightened6:expert/refinedstorage/shapeless/';
    const recipes = [];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
