
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/byg/shaped/';

    const recipes = [
        {
            output: Item.of('byg:embur_hyphae', 3),
            pattern: ['AA', 'AA'],
            key: {
                A: 'byg:embur_pedu'
            },
            id: `${id_prefix}embur_hyphae`
        },
        {
            output: Item.of('byg:pollen_block', 1),
            pattern: ['AA', 'AA'],
            key: {
                A: 'byg:pollen_dust'
            },
            id: `${id_prefix}pollen_dust`
        },
        {
            output: 'byg:blueberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/blueberries'
            },
            id: 'byg:blueberry_pie'
        },
        {
            output: 'byg:nightshade_berry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'byg:nightshade_berries'
            },
            id: 'byg:nightshade_berry_pie'
        },
        {
            output: 'byg:nightshade_berry_pie',
            pattern: ['ECE', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'integrateddynamics:menril_berries',
                E: 'botania:yellow_mushroom'
            },
            id: 'enigmatica:nightshade_berry_pie_alt'
        },
        {
            output: 'byg:crimson_berry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'byg:crimson_berries'
            },
            id: 'byg:crimson_berry_pie'
        },
        {
            output: 'byg:green_apple_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'byg:green_apple'
            },
            id: 'byg:green_apple_pie'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
