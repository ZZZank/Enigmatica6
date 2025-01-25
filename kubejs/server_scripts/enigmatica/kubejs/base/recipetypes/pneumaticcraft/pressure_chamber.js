'use strict';
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            inputs: [
                industrialforegoing.laser_lens.purple,
                'industrialforegoing:fluid_laser_base',
                '4x industrialforegoing:laser_drill',
                '4x industrialforegoing:speed_addon_2',
                '4x industrialforegoing:efficiency_addon_2',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:fluid_drill_package'],
            id: `${id_prefix}fluid_drill_package`
        },
        {
            inputs: [
                '6x pneumaticcraft:pneumatic_cylinder',
                '10x mekanism:basic_logistical_transporter',
                '6x pneumaticcraft:reinforced_stone_slab',
                'pneumaticcraft:pneumatic_dynamo',
                '2x create:brass_hand',
                'mekanism:cardboard_box'
            ],
            pressure: 2.0,
            results: ['kubejs:assembly_io_package'],
            id: `${id_prefix}assembly_io_package`
        },
        {
            inputs: [
                '3x pneumaticcraft:pneumatic_cylinder',
                '5x mekanism:basic_logistical_transporter',
                '3x pneumaticcraft:reinforced_stone_slab',
                'pneumaticcraft:pneumatic_dynamo',
                '#powah:energizing_rod',
                'mekanism:cardboard_box'
            ],
            pressure: 2.0,
            results: ['kubejs:assembly_laser_package'],
            id: `${id_prefix}assembly_laser_package`
        },
        {
            inputs: [
                '3x pneumaticcraft:pneumatic_cylinder',
                '5x mekanism:basic_logistical_transporter',
                '3x pneumaticcraft:reinforced_stone_slab',
                'pneumaticcraft:pneumatic_dynamo',
                'pneumaticcraft:drill_bit_diamond',
                'mekanism:cardboard_box'
            ],
            pressure: 2.0,
            results: ['kubejs:assembly_drill_package'],
            id: `${id_prefix}assembly_drill_package`
        },
        {
            inputs: [
                '2x pneumaticcraft:pneumatic_cylinder',
                '2x pneumaticcraft:plastic',
                '4x pneumaticcraft:reinforced_stone_slab',
                '2x #forge:ingots/compressed_iron',
                'mekanism:cardboard_box'
            ],
            pressure: 2.0,
            results: ['kubejs:assembly_platform_package'],
            id: `${id_prefix}assembly_platform_package`
        },
        {
            inputs: [
                '3x pneumaticcraft:printed_circuit_board',
                '5x mekanism:basic_logistical_transporter',
                'rftoolsutility:screen',
                '3x pneumaticcraft:reinforced_stone_slab',
                'pneumaticcraft:pneumatic_dynamo',
                'mekanism:cardboard_box'
            ],
            pressure: 2.0,
            results: ['kubejs:assembly_controller_package'],
            id: `${id_prefix}assembly_controller_package`
        },
        {
            inputs: [
                'pneumaticcraft:pressure_chamber_valve',
                '2x pneumaticcraft:pressure_chamber_interface',
                '36x pneumaticcraft:pressure_chamber_glass',
                '59x pneumaticcraft:pressure_chamber_wall',
                '40x pneumaticcraft:speed_upgrade',
                '50x pneumaticcraft:volume_upgrade',
                '2x pneumaticcraft:regulator_tube_module',
                'pneumaticcraft:vacuum_pump',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_pressure_chamber'],
            id: `${id_prefix}diy_pressure_chamber`
        },
        {
            inputs: [
                'pneumaticcraft:drone',
                'pneumaticcraft:charging_station',
                'pneumaticcraft:programmer',
                '64x pneumaticcraft:programming_puzzle',
                '64x pneumaticcraft:programming_puzzle',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_drone_kit'],
            id: `${id_prefix}diy_drone_kit`
        },
        {
            inputs: [
                '16x modularrouters:item_router',
                '4x modularrouters:distributor_module',
                '4x modularrouters:sender_module_2',
                '4x modularrouters:puller_module_2',
                'modularrouters:vacuum_module',
                'modularrouters:player_module',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:assorted_router_kit'],
            id: `${id_prefix}assorted_router_kit`
        },
        {
            inputs: [
                'naturesaura:animal_spawner',
                '4x naturesaura:ancient_planks',
                '16x naturesaura:infused_brick',
                '16x minecraft:hay_block',
                '64x naturesaura:birth_spirit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:altar_of_birthing_kit'],
            id: `${id_prefix}altar_of_birthing_kit`
        },
        {
            inputs: [
                'mekanism:resistive_heater',
                'pneumaticcraft:heat_pipe',
                'minecraft:blast_furnace',
                'create:flywheel',
                'create:furnace_engine',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_furnace_engine_kit'],
            id: `${id_prefix}diy_furnace_engine_kit`
        },
        {
            inputs: [
                '3x immersiveengineering:fluid_pipe',
                '4x immersiveengineering:light_engineering',
                'immersiveengineering:rs_engineering',
                '4x immersiveengineering:sheetmetal_iron',
                'immersiveengineering:steel_fence',
                '5x immersiveengineering:steel_scaffolding_standard',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_mixer'],
            id: `${id_prefix}diy_mixer`
        },
        {
            inputs: [
                '3x immersiveengineering:conveyor_basic',
                '2x immersiveengineering:fluid_pump',
                '2x immersiveengineering:light_engineering',
                'immersiveengineering:rs_engineering',
                '2x immersiveengineering:sheetmetal_steel',
                '3x immersiveengineering:steel_scaffolding_standard',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_bottling_machine'],
            id: `${id_prefix}diy_bottling_machine`
        },
        {
            inputs: [
                'thermal:flux_drill',
                'thermal:upgrade_augment_3',
                '3x thermal:area_radius_augment',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:flux_bore_kit'],
            id: `${id_prefix}flux_bore_kit`
        },
        {
            inputs: [
                '4x minecraft:skeleton_skull',
                '4x minecraft:wither_skeleton_skull',
                '8x occultism:candle_white',
                '8x occultism:spirit_attuned_crystal',
                'occultism:golden_sacrificial_bowl',
                '12x occultism:sacrificial_bowl',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:artisinal_ritual_kit'],
            id: `${id_prefix}artisinal_ritual_kit`
        },
        {
            inputs: [
                'occultism:chalk_white',
                'occultism:chalk_gold',
                'occultism:chalk_purple',
                'occultism:chalk_red',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:artisinal_chalk_set'],
            id: `${id_prefix}artisinal_chalk_set`
        },
        {
            inputs: [
                'minecraft:chest_minecart',
                '64x create:mechanical_drill',
                '12x minecraft:powered_rail',
                '12x minecraft:redstone_torch',
                '64x create:linear_chassis',
                '32x create:deployer',
                '2x create:mechanical_plough',
                '2x enderstorage:ender_chest',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_create_quarry'],
            id: `${id_prefix}diy_create_quarry`
        },
        {
            inputs: [
                'mekanism:mekasuit_helmet',
                '2x mekanism:module_energy_unit',
                '4x mekanism:module_vision_enhancement_unit',
                'mekanism:module_inhalation_purification_unit',
                'mekanism:module_nutritional_injection_unit',
                '4x mekanism:module_electrolytic_breathing_unit',
                'mekanism:module_laser_dissipation_unit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_mekasuit_helmet'],
            id: `${id_prefix}diy_mekasuit_helmet`
        },
        {
            inputs: [
                'mekanism:mekasuit_bodyarmor',
                '2x mekanism:module_energy_unit',
                'mekanism:module_geiger_unit',
                'mekanism:module_gravitational_modulating_unit',
                'mekanism:module_dosimeter_unit',
                'mekanism:module_laser_dissipation_unit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_mekasuit_bodyarmor'],
            id: `${id_prefix}diy_mekasuit_bodyarmor`
        },
        {
            inputs: [
                'mekanism:mekasuit_pants',
                '2x mekanism:module_energy_unit',
                '8x mekanismgenerators:module_geothermal_generator_unit',
                'mekanism:module_laser_dissipation_unit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_mekasuit_pants'],
            id: `${id_prefix}diy_mekasuit_pants`
        },
        {
            inputs: [
                'mekanism:mekasuit_boots',
                '2x mekanism:module_energy_unit',
                '4x mekanism:module_hydraulic_propulsion_unit',
                'mekanism:module_laser_dissipation_unit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_mekasuit_boots'],
            id: `${id_prefix}diy_mekasuit_boots`
        },
        {
            inputs: [
                'mekanism:meka_tool',
                '2x mekanism:module_energy_unit',
                '4x mekanism:module_attack_amplification_unit',
                '4x mekanism:module_vein_mining_unit',
                '4x mekanism:module_excavation_escalation_unit',
                'mekanism:module_teleportation_unit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_meka_tool'],
            id: `${id_prefix}diy_meka_tool`
        },
        {
            inputs: [
                '27x immersiveengineering:blastbrick_reinforced',
                '10x immersiveengineering:light_engineering',
                '5x immersiveengineering:heavy_engineering',
                '5x #immersiveengineering:scaffoldings/steel',
                '6x #forge:storage_blocks/steel',
                '15x #forge:sheetmetals/steel',
                'minecraft:cauldron',
                'immersiveengineering:rs_engineering',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_arc_furnace'],
            id: `${id_prefix}diy_arc_furnace`
        },
        {
            inputs: [
                '11x #immersiveengineering:scaffoldings/steel',
                '2x immersiveengineering:light_engineering',
                '6x immersiveengineering:treated_fence',
                'immersiveengineering:rs_engineering',
                '2x immersiveengineering:heavy_engineering',
                '2x #forge:storage_blocks/steel',
                '4x #forge:sheetmetals/steel',
                '4x immersiveengineering:fluid_pipe',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_pumpjack'],
            id: `${id_prefix}diy_pumpjack`
        },
        {
            inputs: [
                '40x #immersiveengineering:scaffoldings/steel',
                '4x immersiveengineering:heavy_engineering',
                'immersiveengineering:rs_engineering',
                '60x #forge:sheetmetals/iron',
                '17x immersiveengineering:fluid_pipe',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_distillation_tower'],
            id: `${id_prefix}diy_distillation_tower`
        },
        {
            inputs: [
                '26x #immersiveengineering:scaffoldings/steel',
                '16x #forge:sheetmetals/steel',
                '3x immersiveengineering:radiator',
                '9x immersiveengineering:light_engineering',
                'immersiveengineering:rs_engineering',
                '4x immersiveengineering:heavy_engineering',
                '9x #forge:storage_blocks/steel',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_excavator'],
            id: `${id_prefix}diy_excavator`
        },
        {
            inputs: [
                'immersiveengineering:drill',
                'immersiveengineering:drillhead_steel',
                Item.of('pneumaticcraft:small_tank', {
                    BlockEntityTag: {
                        SavedTanks: { Tank: { Amount: 32000, FluidName: 'immersiveengineering:biodiesel' } }
                    }
                }).weakNBT().toJson(),
                'immersiveengineering:toolupgrade_drill_waterproof',
                'immersiveengineering:toolupgrade_drill_lube',
                '3x immersiveengineering:toolupgrade_drill_damage',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:mining_gadget_kit'],
            id: `${id_prefix}mining_gadget_kit`
        },

        {
            inputs: ['#forge:grain'],
            pressure: 1.5,
            results: ['create:wheat_flour'],
            id: 'pneumaticcraft:pressure_chamber/wheat_flour'
        },
        {
            inputs: ['atum:emmer'],
            pressure: 1.5,
            results: ['atum:emmer_flour'],
            id: `${id_prefix}emmer_flour`
        },
        {
            inputs: [
                Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
                'pneumaticcraft:lubricant_bucket',
                Item.of('pneumaticcraft:pneumatic_helmet').ignoreNBT().toJson()
            ],
            pressure: 4.5,
            results: [
                Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:pcbee_bee' })
            ],
            id: `${id_prefix}pcbee_jar`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: recipe.inputs.map((input) => {
                    if (typeof input != 'string') {
                        return input;
                    }
                    const parsed = toJsonWithCount(input);
                    parsed.type = 'pneumaticcraft:stacked_item';
                    return parsed;
                }),
                pressure: recipe.pressure,
                results: recipe.results.map((str) => Item.of(str).toResultJson())
            })
            .id(recipe.id);
    });
});
