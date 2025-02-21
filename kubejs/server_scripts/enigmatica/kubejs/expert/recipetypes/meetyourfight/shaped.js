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

    const newRecipes = [
        {
            output: 'meetyourfight:caged_heart',
            pattern: ['AAA', 'ABA', 'ACA'],
            key: {
                A: '#forge:bones',
                B: 'kubejs:zombie_heart',
                C: 'meetyourfight:mossy_tooth'
            },
            id: 'meetyourfight:caged_heart'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
