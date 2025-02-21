onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const id_prefix = 'enigmatica:expert/masterful_machinery/shaped/';
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
