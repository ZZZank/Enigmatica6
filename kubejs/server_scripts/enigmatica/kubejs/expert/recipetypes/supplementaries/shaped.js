onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/supplementaries/';

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
            output: 'supplementaries:bellows',
            pattern: ['AAA', 'B B', 'AAA'],
            key: {
                A: '#forge:treated_wood_slab',
                B: '#forge:fabric_hemp'
            },
            id: 'supplementaries:bellows'
        },
        {
            output: 'supplementaries:faucet',
            pattern: ['AB ', 'CCC', '  C'],
            key: {
                A: 'farmersdelight:tree_bark',
                B: 'minecraft:tripwire_hook',
                C: 'immersiveengineering:fluid_pipe'
            },
            id: 'supplementaries:faucet'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
