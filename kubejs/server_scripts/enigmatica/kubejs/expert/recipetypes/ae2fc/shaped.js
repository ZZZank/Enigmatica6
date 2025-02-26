onEventExpert('recipes', (event) => {
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
            output: 'ae2fc:ingredient_buffer',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: 'appliedenergistics2:matter_ball',
                B: 'ironchest:iron_chest',
                C: 'appliedenergistics2:annihilation_core',
                D: 'appliedenergistics2:quartz_glass',
                E: 'appliedenergistics2:formation_core',
                F: 'pneumaticcraft:small_tank'
            },
            id: 'ae2fc:ingredient_buffer'
        },
        {
            output: 'ae2fc:large_ingredient_buffer',
            pattern: ['AB', 'BA'],
            key: {
                A: 'ae2fc:ingredient_buffer',
                B: 'appliedenergistics2:purple_paint_ball'
            },
            id: 'ae2fc:large_ingredient_buffer'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
