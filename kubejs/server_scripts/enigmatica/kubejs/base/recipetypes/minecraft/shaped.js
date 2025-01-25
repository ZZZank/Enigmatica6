
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/minecraft/shaped/';
    const recipes = [
        {
            output: 'minecraft:lava_bucket',
            pattern: ['BDB', 'CAC', 'BDB'],
            key: {
                D: 'resourcefulbees:blaze_honeycomb',
                C: 'resourcefulbees:coal_honeycomb',
                B: 'resourcefulbees:wax',
                A: 'minecraft:bucket'
            },
            id: `${id_prefix}lava_bucket`
        },
        {
            output: 'minecraft:hopper',
            pattern: ['ABA', 'ABA', ' A '],
            key: {
                A: '#forge:ingots/iron',
                B: '#minecraft:logs'
            },
            id: `${id_prefix}hopper`
        },
        {
            output: 'minecraft:tube_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:tube_coral_fan'
            },
            id: `${id_prefix}tube_coral_block_from_fan`
        },
        {
            output: 'minecraft:brain_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:brain_coral_fan'
            },
            id: `${id_prefix}brain_coral_block_from_fan`
        },
        {
            output: 'minecraft:bubble_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:bubble_coral_fan'
            },
            id: `${id_prefix}bubble_coral_block_from_fan`
        },
        {
            output: 'minecraft:fire_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:fire_coral_fan'
            },
            id: `${id_prefix}fire_coral_block_from_fan`
        },
        {
            output: 'minecraft:horn_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:horn_coral_fan'
            },
            id: `${id_prefix}horn_coral_block_from_fan`
        },
        {
            output: 'minecraft:tube_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:tube_coral'
            },
            id: `${id_prefix}tube_coral_block`
        },
        {
            output: 'minecraft:brain_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:brain_coral'
            },
            id: `${id_prefix}brain_coral_block`
        },
        {
            output: 'minecraft:bubble_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:bubble_coral'
            },
            id: `${id_prefix}bubble_coral_block`
        },
        {
            output: 'minecraft:fire_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:fire_coral'
            },
            id: `${id_prefix}fire_coral_block`
        },
        {
            output: 'minecraft:horn_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:horn_coral'
            },
            id: `${id_prefix}horn_coral_block`
        },
        {
            output: Item.of('minecraft:ladder', 4),
            pattern: ['A A', 'ABA', 'A A'],
            key: {
                A: '#forge:rods/wooden',
                B: '#enigmatica:ladder_planks'
            },
            id: `${id_prefix}ladder`
        },
        {
            output: 'minecraft:pumpkin_pie',
            pattern: ['CDC', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: '#forge:eggs',
                D: 'minecraft:pumpkin'
            },
            id: 'minecraft:pumpkin_pie'
        },
        {
            output: 'minecraft:beehive',
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: '#minecraft:planks',
                B: '#resourcefulbees:resourceful_honeycomb'
            },
            id: 'minecraft:beehive'
        },
        {
            output: Item.of('minecraft:honeycomb_block'),
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'minecraft:honeycomb'
            },
            id: 'minecraft:honeycomb_block'
        },
        {
            output: Item.of('4x minecraft:stone_bricks'),
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:stone'
            },
            id: 'minecraft:stone_bricks'
        },
        {
            output: Item.of('2x minecraft:stick'),
            pattern: ['A', 'A'],
            key: {
                A: 'naturesaura:ancient_stick'
            },
            id: `${id_prefix}stick`
        }
    ];

    colors.forEach((color) => {
        const dyeTag = `#forge:dyes/${color}`;
        recipes.push(
            {
                output: `3x minecraft:${color}_carpet`,
                pattern: ['AA'],
                key: {
                    A: `minecraft:${color}_wool`
                },
                id: `${id_prefix}${color}_wool_to_carpet`
            },
            {
                output: `8x minecraft:${color}_stained_glass_pane`,
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'minecraft:glass_pane',
                    B: dyeTag
                },
                id: `${id_prefix}glass_pane_batch_dyeing_${color}`
            },
            {
                output: `8x minecraft:${color}_stained_glass`,
                pattern: ['AAA', 'ABA', 'AAA'],
                key: {
                    A: 'minecraft:glass',
                    B: dyeTag
                },
                id: `${id_prefix}glass_batch_dyeing_${color}`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
