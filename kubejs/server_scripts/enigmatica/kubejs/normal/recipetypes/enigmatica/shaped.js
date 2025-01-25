
onEvent('recipes', (event) => {
    if (global.isExpertMode) {
        return;
    }
    const id_prefix = 'enigmatica:normal/enigmatica/';
    const recipes = [
        {
            output: 'magicfeather:magicfeather',
            pattern: ['CFC', 'BDB', 'AEA'],
            key: {
                A: 'alexsmobs:roadrunner_feather',
                B: '#forge:ingots/enderium',
                C: 'ars_nouveau:mana_fiber',
                D: 'byg:leaf_pile',
                E: 'ars_nouveau:glyph_launch',
                F: 'ars_nouveau:glyph_slowfall'
            },
            id: `${id_prefix}magicfeather_magic`
        },
        {
            output: 'magicfeather:magicfeather',
            pattern: ['CFC', 'BDB', 'AEA'],
            key: {
                A: 'thermal:lightning_charge',
                B: '#mekanism:alloys/atomic',
                C: 'thermal:hazmat_fabric',
                D: 'byg:leaf_pile',
                E: 'thermal:hazmat_boots',
                F: 'alexsmobs:frontier_cap'
            },
            id: `${id_prefix}magicfeather_tech`
        },
        {
            output: 'losttrinkets:magical_feathers',
            pattern: ['FAF', 'EBE', 'CDC'],
            key: {
                A: '#forge:elytra',
                B: 'magicfeather:magicfeather',
                C: 'minecraft:prismarine_shard',
                D: '#forge:nether_stars',
                E: 'rftoolsbase:infused_diamond',
                F: 'minecraft:ender_eye'
            },
            id: `${id_prefix}magical_feathers`
        }
    ];

    powahTiers.forEach(function (tier) {
        let capacitor = 'powah:capacitor_' + tier,
            crystal = 'powah:crystal_' + tier,
            cable = 'powah:energy_cable_' + tier;

        if (tier == 'basic' || tier == 'starter') {
            return;
        } else if (tier == 'hardened') {
            crystal = 'powah:steel_energized';
        }

        let lower_tiers = getLowerTiers(powahTiers, tier);

        recipes.push(
            {
                output: Item.of(`powah:energizing_rod_${tier}`),
                pattern: ['   ', 'ACA', ' B '],
                key: {
                    A: capacitor,
                    B: `powah:energy_cable_${tier}`,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:energizing_rod_${item}`))
                },
                id: `${id_prefix}powah/energizing_rod_${tier}`
            },
            {
                output: Item.of(`powah:furnator_${tier}`),
                pattern: ['AAA', 'BCB', 'A A'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:furnator_${item}`))
                },
                id: `${id_prefix}powah/furnator_${tier}`
            },
            {
                output: Item.of(`powah:magmator_${tier}`),
                pattern: ['AAA', 'BCB', 'A A'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:magmator_${item}`))
                },
                id: `${id_prefix}powah/magmator_${tier}`
            },
            {
                output: Item.of(`powah:thermo_generator_${tier}`),
                pattern: [' A ', 'BCB'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:thermo_generator_${item}`))
                },
                id: `${id_prefix}powah/thermo_generator_${tier}`
            },
            {
                output: Item.of(`powah:energy_hopper_${tier}`),
                pattern: ['ABA'],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lower_tiers.map((item) => `powah:energy_hopper_${item}`))
                },
                id: `${id_prefix}powah/energy_hopper_${tier}`
            },
            {
                output: Item.of(`powah:energy_discharger_${tier}`),
                pattern: [' A ', ' B ', ' A '],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lower_tiers.map((item) => `powah:energy_discharger_${item}`))
                },
                id: `${id_prefix}powah/energy_discharger_${tier}`
            },
            {
                output: Item.of(`powah:ender_gate_${tier}`, 4),
                pattern: ['BAB', 'A A', 'BAB'],
                key: {
                    A: cable,
                    B: Ingredient.of(lower_tiers.map((item) => `powah:ender_gate_${item}`))
                },
                id: `${id_prefix}powah/ender_gate_${tier}`
            },
            {
                output: Item.of(`powah:reactor_${tier}`, 4),
                pattern: ['BAB', 'A A', 'BAB'],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lower_tiers.map((item) => `powah:reactor_${item}`))
                },
                id: `${id_prefix}powah/reactor_${tier}`
            }
        );
    });

    {
        let woodTypeDupes = [
            'palo_verde',
            'withering_oak',
            'blue_archwood',
            'green_archwood',
            'purple_archwood',
            'menril_filled',
            'watchful_aspen',
            'crustose',
            'sappy_maple',
            'avocado'
        ];
        let acceptedPlank = [];
        let acceptedSlab = [];
        buildWoodVariants.forEach((variant) => {
            if (variant.modId == 'minecraft' || woodTypeDupes.includes(variant.logType)) {
                return;
            }
            acceptedPlank.push(variant.plankBlock);
            acceptedSlab.push(variant.slabBlock);
        });
        recipes.push(
            {
                output: Item.of('storagedrawers:oak_full_drawers_1'),
                pattern: ['AAA', ' C ', 'AAA'],
                key: {
                    A: acceptedPlank,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_full_drawers_1_from_unvanilla_planks`
            },
            {
                output: Item.of('storagedrawers:oak_full_drawers_2', 2),
                pattern: ['ACA', 'AAA', 'ACA'],
                key: {
                    A: acceptedPlank,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_full_drawers_2_from_unvanilla_planks`
            },
            {
                output: Item.of('storagedrawers:oak_full_drawers_4', 4),
                pattern: ['CAC', 'AAA', 'CAC'],
                key: {
                    A: acceptedPlank,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_full_drawers_4_from_unvanilla_planks`
            },

            {
                output: Item.of('storagedrawers:oak_half_drawers_1'),
                pattern: ['AAA', ' C ', 'AAA'],
                key: {
                    A: acceptedSlab,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_half_drawers_1_from_unvanilla_slab`
            },
            {
                output: Item.of('storagedrawers:oak_half_drawers_2', 2),
                pattern: ['ACA', 'AAA', 'ACA'],
                key: {
                    A: acceptedSlab,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_half_drawers_2_from_unvanilla_slab`
            },
            {
                output: Item.of('storagedrawers:oak_half_drawers_4', 4),
                pattern: ['CAC', 'AAA', 'CAC'],
                key: {
                    A: acceptedSlab,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_half_drawers_4_from_unvanilla_slab`
            }
        );
    }

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
