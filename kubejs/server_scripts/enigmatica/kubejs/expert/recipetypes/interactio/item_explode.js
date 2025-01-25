
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/interactio/item_explode/';
    const recipes = [
        {
            inputs: ['#forge:stones/andesite', '#forge:ingots/iron'],
            output: {
                entries: [{ result: 'create:andesite_alloy', weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}andesite_alloy_from_iron`
        },
        {
            inputs: ['2x #forge:stones/andesite', '#forge:ingots/zinc'],
            output: {
                entries: [{ result: '2x create:andesite_alloy', weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}andesite_alloy_from_zinc`
        },
        {
            inputs: ['2x #forge:ingots/steel', '2x #forge:tar', '2x #forge:obsidian'],
            output: {
                entries: [{ result: '4x kubejs:superheated_steel_ingot', weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}superheated_steel_ingot`
        },
        {
            inputs: ['2x #forge:storage_blocks/steel', '18x #forge:tar', '18x #forge:obsidian'],
            output: {
                entries: [{ result: '4x kubejs:superheated_steel_block', weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}superheated_steel_block`
        },
        {
            inputs: [
                'bloodmagic:fortune_anointment',
                '7x atum:coin_gold',
                '7x resourcefulbees:nether_quartz_honeycomb'
            ],
            output: {
                entries: [{ result: 'meetyourfight:devils_ante', weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:devils_ante'
        },
        {
            inputs: ['2x thermal:phytogro', '2x #forge:dusts/iron', '#forge:dusts/nickel'],
            output: {
                entries: [{ result: 'emendatusenigmatica:invar_dust', weight: 7 }],
                empty_weight: 3,
                rolls: 3
            },
            id: `${id_prefix}invar_dust`
        },
        {
            inputs: ['#botania:runes/earth', '8x quark:rainbow_rune'],
            output: {
                entries: [
                    { result: 'quark:red_crystal_cluster', weight: 2 },
                    { result: 'quark:orange_crystal_cluster', weight: 2 },
                    { result: 'quark:yellow_crystal_cluster', weight: 2 },
                    { result: 'quark:green_crystal_cluster', weight: 2 },
                    { result: 'quark:blue_crystal_cluster', weight: 2 },
                    { result: 'quark:indigo_crystal_cluster', weight: 2 },
                    { result: 'quark:violet_crystal_cluster', weight: 2 },
                    { result: 'quark:white_crystal_cluster', weight: 2 }
                ],
                empty_weight: 84,
                rolls: 100
            },
            id: `${id_prefix}rainbow_crystal_clusters`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.output.entries.forEach((val, i) => {
            recipe.output.entries[i].result = toJsonWithCount(val.result);
        });
        recipe.inputs.forEach((input, i) => {
            recipe.inputs[i] = toJsonWithCount(input);
        });
        event
            .custom({
                type: 'interactio:item_explode',
                inputs: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
