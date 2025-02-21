onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
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

    const recipes = [
        {
            output: 'trashcans:item_trash_can',
            pattern: [' A ', 'CBC', 'CCC'],
            key: {
                A: 'engineersdecor:halfslab_sheetmetal_aluminum',
                B: 'quark:cactus_block',
                C: '#forge:nuggets/aluminum'
            },
            id: 'trashcans:item_trash_can'
        },
        {
            output: 'trashcans:liquid_trash_can',
            pattern: [' A ', 'CBC', 'CCC'],
            key: {
                A: 'engineersdecor:halfslab_sheetmetal_aluminum',
                B: 'create:item_drain',
                C: '#forge:nuggets/aluminum'
            },
            id: 'trashcans:liquid_trash_can'
        },
        {
            output: 'trashcans:energy_trash_can',
            pattern: [' A ', 'CBC', 'CCC'],
            key: {
                A: 'engineersdecor:halfslab_sheetmetal_aluminum',
                B: 'thermal:rf_coil',
                C: '#forge:nuggets/aluminum'
            },
            id: 'trashcans:energy_trash_can'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
