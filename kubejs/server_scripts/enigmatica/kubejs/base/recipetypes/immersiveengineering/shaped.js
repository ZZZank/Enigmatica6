onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('immersiveengineering:sawdust', 6),
            pattern: ['AAA', 'AAA'],
            key: {
                A: '#forge:sawdust'
            },
            id: 'immersiveengineering:crafting/sawdust'
        },
        {
            output: 'immersiveengineering:empty_casing',
            pattern: ['A ', ' A'],
            key: {
                A: 'create:fluid_pipe'
            },
            id: 'immersiveengineering:crafting/empty_casing'
        },
        {
            output: '2x immersiveengineering:empty_shell',
            pattern: ['AA', 'BC'],
            key: {
                A: 'immersiveengineering:empty_casing',
                B: 'minecraft:paper',
                C: '#forge:dyes/red'
            },
            id: 'immersiveengineering:crafting/empty_shell'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
