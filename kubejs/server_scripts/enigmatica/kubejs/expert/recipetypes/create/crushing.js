onEventExpert('recipes', (event) => {

    const id_prefix = 'enigmatica:expert/create/crushing/';
    const recipes = [];
    recipes.forEach((recipe) => {
        event.recipes.create.crushing(recipe.outputs, recipe.input).id(recipe.id);
    });
});
