
onEvent('recipes', (event) => {
    const recipes = [
        {
            output: '8x upgrade_aquatic:luminous_elder_prismarine',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'quark:elder_prismarine',
                B: 'upgrade_aquatic:glowing_ink_sac'
            },
            id: 'upgrade_aquatic:luminous_elder_prismarine'
        },
        {
            output: 'upgrade_aquatic:mulberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'upgrade_aquatic:mulberry'
            },
            id: 'upgrade_aquatic:mulberry_pie'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
