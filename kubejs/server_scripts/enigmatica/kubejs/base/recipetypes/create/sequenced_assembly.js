onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/sequenced_assembly/';

    /**
     * @type {{outputs: Internal.ItemStackJS_[], input: Internal.IngredientJS_, transitional: Internal.ItemStackJS_, loops: number, id: string,
     * sequence: ({type: 'deploying',with: Internal.IngredientJS_} | {type: 'filling',with: Internal.FluidStackJS} | {type: 'pressing'} | {type: 'cutting',time: number})[]
     * }[]}
     */
    const recipes = [
        {
            input: 'minecraft:enchanted_golden_apple',
            outputs: ['artifacts:everlasting_beef'],
            transitional: 'minecraft:enchanted_golden_apple',
            loops: 50,
            sequence: [
                { type: 'deploying', with: 'minecraft:beef' },
                { type: 'deploying', with: 'minecraft:beef' },
                {
                    type: 'filling',
                    with: Fluid.of('create:potion', 100, {
                        Bottle: 'LINGERING',
                        Potion: 'minecraft:strong_regeneration'
                    })
                },
                { type: 'deploying', with: 'minecraft:beef' },
                { type: 'deploying', with: 'minecraft:beef' },
                { type: 'pressing' }
            ],
            id: `${id_prefix}everlasting_beef`
        },
        {
            input: '#forge:plates/gold',
            outputs: ['create:precision_mechanism'],
            transitional: 'create:incomplete_precision_mechanism',
            loops: 5,
            sequence: [
                { type: 'deploying', with: 'create:cogwheel' },
                { type: 'deploying', with: 'create:large_cogwheel' },
                { type: 'deploying', with: '#forge:nuggets/iron' },
                { type: 'pressing' }
            ],
            id: 'create:precision_mechanism'
        },
        {
            input: 'create:andesite_alloy',
            outputs: ['12x create:cogwheel'],
            transitional: 'create:incomplete_cogwheel',
            loops: 4,
            sequence: [
                { type: 'deploying', with: '#minecraft:wooden_buttons' },
                { type: 'cutting', time: 50 }
            ],
            id: 'create:sequenced_assembly/cogwheel'
        },
        {
            input: 'create:andesite_alloy',
            outputs: ['6x create:large_cogwheel'],
            transitional: 'create:incomplete_large_cogwheel',
            loops: 3,
            sequence: [
                { type: 'deploying', with: '#minecraft:planks' },
                { type: 'deploying', with: '#minecraft:wooden_buttons' },
                { type: 'cutting', time: 50 }
            ],
            id: 'create:sequenced_assembly/large_cogwheel'
        },
        {
            outputs: ['kubejs:engineering_student_meals'],
            input: 'mekanism:cardboard_box',
            transitional: 'kubejs:partial_engineering_student_meals',
            loops: 60,
            sequence: [
                { type: 'deploying', with: 'create:builders_tea' },
                { type: 'deploying', with: 'create:builders_tea' },
                { type: 'deploying', with: 'sushigocrafting:salmon_maki' },
                { type: 'deploying', with: 'neapolitan:adzuki_cake' },
                { type: 'deploying', with: 'neapolitan:mint_milkshake' },
                { type: 'deploying', with: 'minecraft:enchanted_golden_apple' }
            ],
            id: 'enigmatica:base/create/sequenced_assembly/engineering_student_meals'
        },
        {
            outputs: ['kubejs:building_materials'],
            input: 'mekanism:cardboard_box',
            transitional: 'kubejs:partial_building_materials',
            loops: 500,
            sequence: [
                { type: 'deploying', with: '#forge:treated_wood' },
                { type: 'deploying', with: '#forge:treated_wood' },
                { type: 'deploying', with: '#forge:treated_wood' },
                { type: 'deploying', with: '#forge:treated_wood' },
                { type: 'deploying', with: 'create:copper_shingles' },
                { type: 'deploying', with: 'quark:framed_glass' }
            ],
            id: 'enigmatica:base/create/sequenced_assembly/building_materials'
        },
        {
            outputs: ['kubejs:landscaping_materials'],
            input: 'mekanism:cardboard_box',
            transitional: 'kubejs:partial_landscaping_materials',
            loops: 250,
            sequence: [
                { type: 'deploying', with: 'quark:turf' },
                { type: 'deploying', with: 'quark:turf' },
                { type: 'deploying', with: 'quark:turf' },
                { type: 'deploying', with: 'quark:turf' },
                { type: 'deploying', with: '#minecraft:small_flowers' },
                { type: 'deploying', with: '#minecraft:leaves' }
            ],
            id: 'enigmatica:base/create/sequenced_assembly/landscaping_materials'
        },
        {
            outputs: ['kubejs:construction_tools'],
            input: 'mekanism:cardboard_box',
            transitional: 'kubejs:partial_construction_tools',
            loops: 5,
            sequence: [
                { type: 'deploying', with: 'pneumaticcraft:jackhammer' },
                { type: 'deploying', with: 'pneumaticcraft:drill_bit_compressed_iron' },
                { type: 'deploying', with: 'pneumaticcraft:bandage' },
                { type: 'deploying', with: 'pneumaticcraft:bandage' },
                { type: 'deploying', with: 'pneumaticcraft:bandage' },
                { type: 'deploying', with: 'pneumaticcraft:bandage' }
            ],
            id: 'enigmatica:base/create/sequenced_assembly/construction_tools'
        },
        {
            outputs: ['kubejs:foundation_materials'],
            input: 'mekanism:cardboard_box',
            transitional: 'kubejs:partial_foundation_materials',
            loops: 500,
            sequence: [
                { type: 'deploying', with: 'immersiveengineering:concrete' },
                { type: 'deploying', with: 'immersiveengineering:concrete' },
                { type: 'deploying', with: 'immersiveengineering:concrete' },
                { type: 'deploying', with: '#immersiveengineering:scaffoldings/steel' },
                { type: 'deploying', with: 'engineersdecor:clinker_brick_block' },
                { type: 'deploying', with: 'engineersdecor:clinker_brick_block' }
            ],
            id: 'enigmatica:base/create/sequenced_assembly/foundation_materials'
        },
        {
            outputs: ['kubejs:computer_package'],
            input: 'mekanism:cardboard_box',
            transitional: 'kubejs:partial_computer_package',
            loops: 5,
            sequence: [
                { type: 'deploying', with: 'rftoolsbase:tablet' },
                { type: 'deploying', with: 'rftoolsbase:tablet' },
                { type: 'deploying', with: 'rftoolsbase:tablet' },
                { type: 'deploying', with: 'rftoolsbase:tablet' }
            ],
            id: 'enigmatica:base/create/sequenced_assembly/computer_package'
        },
        {
            outputs: ['kubejs:big_box_o_boom'],
            input: 'mekanism:cardboard_box',
            transitional: 'kubejs:partial_big_box_o_boom',
            loops: 64,
            sequence: [
                { type: 'deploying', with: 'minecraft:firework_rocket' },
                { type: 'deploying', with: 'minecraft:firework_rocket' },
                { type: 'deploying', with: 'minecraft:firework_rocket' },
                { type: 'deploying', with: 'minecraft:firework_rocket' }
            ],
            id: 'enigmatica:base/create/sequenced_assembly/big_box_o_boom'
        },
        {
            outputs: ['kubejs:mimirs_memory_box'],
            input: 'mekanism:cardboard_box',
            transitional: 'kubejs:partial_mimirs_memory_box',
            loops: 64,
            sequence: [
                { type: 'deploying', with: 'minecraft:experience_bottle' },
                { type: 'deploying', with: 'minecraft:experience_bottle' },
                { type: 'deploying', with: 'minecraft:experience_bottle' },
                { type: 'deploying', with: 'minecraft:experience_bottle' }
            ],
            id: 'enigmatica:base/create/sequenced_assembly/mimirs_memory_box'
        },
        {
            outputs: ['kubejs:box_of_thankful_dinners'],
            input: 'mekanism:cardboard_box',
            transitional: 'kubejs:partial_box_of_thankful_dinners',
            loops: 60,
            sequence: [
                { type: 'deploying', with: 'farmersdelight:roast_chicken' },
                { type: 'deploying', with: 'farmersdelight:stuffed_pumpkin' },
                { type: 'deploying', with: 'neapolitan:adzuki_curry' },
                { type: 'deploying', with: 'create:honeyed_apple' },
                { type: 'deploying', with: 'minecraft:pumpkin_pie' },
                { type: 'deploying', with: 'farmersdelight:apple_cider' }
            ],
            id: 'enigmatica:base/create/sequenced_assembly/box_of_thankful_dinners'
        },
        {
            outputs: ['kubejs:stim_pack'],
            input: 'mekanism:cardboard_box',
            transitional: 'kubejs:partial_stim_pack',
            loops: 30,
            sequence: [
                {
                    type: 'deploying',
                    with: Item.of('botania:incense_stick', '{brewKey:"botania:emptiness"}')
                },
                {
                    type: 'deploying',
                    with: [
                        Item.of(
                            'ars_nouveau:potion_flask',
                            '{CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:9600,Id:1b,Amplifier:0b}],Potion:"minecraft:strong_regeneration",count:8}'
                        ),
                        Item.of(
                            'ars_nouveau:potion_flask',
                            '{CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:450,Id:10b,Amplifier:1b}],Potion:"minecraft:long_swiftness",count:8}'
                        )
                    ]
                },
                {
                    type: 'deploying',
                    with: [
                        Item.of(
                            'ars_nouveau:potion_flask',
                            '{CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:1800,Id:11b,Amplifier:1b}],Potion:"apotheosis:long_absorption",count:8}'
                        ),
                        Item.of(
                            'ars_nouveau:potion_flask',
                            '{CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:3600,Id:22b,Amplifier:1b}],Potion:"apotheosis:strong_resistance",count:8}'
                        )
                    ]
                },
                { type: 'deploying', with: 'atum:linen_bandage' },
                { type: 'deploying', with: 'atum:linen_bandage' },
                { type: 'deploying', with: 'atum:linen_bandage' }
            ],
            id: 'enigmatica:base/create/sequenced_assembly/stim_pack'
        }
    ];

    recipes.forEach((recipe) => {
        const seq = recipe.sequence.map((process) => {
            if (process.type == 'cutting') {
                return event.recipes.create
                    .cutting(recipe.transitional, recipe.transitional)
                    .processingTime(process.time);
            } else if (process.type == 'deploying') {
                return event.recipes.create.deploying(recipe.transitional, [
                    recipe.transitional,
                    process.with
                ]);
            } else if (process.type == 'pressing') {
                return event.recipes.create.pressing(recipe.transitional, recipe.transitional);
            } else if (process.type == 'filling') {
                return event.recipes.create.filling(recipe.transitional, [recipe.transitional, process.with]);
            } else {
                throw 'Invalid process type';
            }
        });
        event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, seq)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitional)
            .id(recipe.id);
    });
});
