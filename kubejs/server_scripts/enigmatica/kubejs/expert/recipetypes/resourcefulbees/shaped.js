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
            output: 'resourcefulbees:apiary_breeder',
            pattern: ['ACA', 'DBD', 'ACA'],
            key: {
                A: 'resourcefulbees:bee_jar',
                B: 'resourcefulbees:apiary_storage',
                C: 'naturesaura:token_joy',
                D: '#minecraft:flowers'
            },
            id: 'resourcefulbees:apiary_breeder'
        },
        {
            output: 'resourcefulbees:centrifuge',
            pattern: ['CBC', 'CAC', 'EDE'],
            key: {
                A: 'thermal:machine_frame',
                B: 'immersiveengineering:circuit_board',
                C: 'emendatusenigmatica:steel_ingot',
                D: 'minecraft:piston',
                E: 'minecraft:smooth_stone'
            },
            id: 'resourcefulbees:centrifuge'
        },
        {
            output: Item.of('resourcefulbees:centrifuge_casing', 4),
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: 'rftoolsbase:machine_frame',
                B: 'minecraft:redstone',
                C: 'naturesaura:infused_iron'
            },
            id: 'resourcefulbees:centrifuge_casing'
        },
        {
            output: 'resourcefulbees:centrifuge_controller',
            pattern: ['EBE', 'CAC', 'EDE'],
            key: {
                A: 'rftoolsbase:machine_frame',
                B: 'immersiveengineering:rs_engineering',
                C: 'naturesaura:infused_iron',
                D: 'resourcefulbees:centrifuge',
                E: 'resourcefulbees:centrifuge_casing'
            },
            id: 'resourcefulbees:centrifuge_controller'
        },
        {
            output: Item.of('resourcefulbees:elite_centrifuge_casing', 4),
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: 'resourcefulbees:centrifuge_casing',
                B: 'minecraft:redstone',
                C: 'occultism:iesnium_ingot'
            },
            id: 'resourcefulbees:elite_centrifuge_casing'
        },
        {
            output: 'resourcefulbees:elite_centrifuge_controller',
            pattern: ['EBE', 'CAC', 'EDE'],
            key: {
                A: 'industrialforegoing:machine_frame_advanced',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'occultism:iesnium_ingot',
                D: 'resourcefulbees:centrifuge_controller',
                E: 'resourcefulbees:elite_centrifuge_casing'
            },
            id: 'resourcefulbees:elite_centrifuge_controller'
        },
        {
            //Gate T1 Hive Upgrade behind starting Nature's Aura
            output: 'resourcefulbees:t1_hive_upgrade',
            pattern: ['ACA', 'ABA', 'ACA'],
            key: {
                A: 'minecraft:grass',
                B: '#minecraft:planks',
                C: 'naturesaura:gold_powder'
            },
            id: 'resourcefulbees:t1_hive_upgrade'
        },
        {
            output: 'resourcefulbees:honey_generator',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'thermal:rf_coil',
                B: 'ars_nouveau:magic_clay',
                C: 'naturesaura:token_joy',
                D: '#resourcefulbees:resourceful_honeycomb',
                E: 'resourcefulbees:wooden_honey_tank'
            },
            id: 'resourcefulbees:honey_generator'
        },
        {
            output: 'resourcefulbees:honey_congealer',
            pattern: ['AAA', 'ABA', 'CDC'],
            key: {
                A: '#forge:glass_panes/colorless',
                B: 'resourcefulbees:wax',
                C: 'minecraft:smooth_stone',
                D: 'minecraft:packed_ice'
            },
            id: 'resourcefulbees:honey_congealer'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
