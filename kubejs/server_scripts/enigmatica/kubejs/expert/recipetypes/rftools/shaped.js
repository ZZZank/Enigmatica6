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
            output: 'rftoolsutility:screen_controller',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:gears/signalum',
                B: '#forge:glass/black',
                C: 'thermal:charge_bench'
            },
            id: 'rftoolsutility:screen_controller'
        },
        {
            output: 'rftoolsutility:screen',
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: '#forge:glass/black',
                B: 'rftoolsbase:machine_base',
                C: 'immersiveengineering:slab_sheetmetal_aluminum'
            },
            id: 'rftoolsutility:screen'
        },
        {
            output: 'rftoolsutility:module_template',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:gems/dimensional',
                B: '#forge:ingots/iron_aluminum',
                C: 'pneumaticcraft:printed_circuit_board'
            },
            id: 'rftoolsutility:module_template'
        },
        {
            output: 'rftoolsutility:matter_receiver',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'mekanism:teleporter_frame',
                B: 'atum:yellow_stained_crystal_glass',
                C: 'occultism:stable_wormhole',
                D: '#industrialforegoing:machine_frame/pity'
            },
            id: 'rftoolsutility:matter_receiver'
        },
        {
            output: 'rftoolsutility:matter_transmitter',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'mekanism:teleporter_frame',
                B: 'atum:cyan_stained_crystal_glass',
                C: 'occultism:stable_wormhole',
                D: '#industrialforegoing:machine_frame/pity'
            },
            id: 'rftoolsutility:matter_transmitter'
        },
        {
            output: 'rftoolsutility:dialing_device',
            pattern: ['ABA', 'ACA', 'AAA'],
            key: {
                A: 'mekanism:teleporter_frame',
                B: 'mekanism:teleporter',
                C: 'xnet:wireless_router'
            },
            id: 'rftoolsutility:dialing_device'
        },
        {
            output: 'rftoolsutility:charged_porter',
            pattern: ['EAE', 'BCB', 'EDE'],
            key: {
                A: 'rftoolsutility:matter_beamer',
                B: 'mekanism:teleporter_frame',
                C: 'rftoolsbase:tablet',
                D: 'rftoolsutility:matter_transmitter',
                E: 'powah:capacitor_basic_large'
            },
            id: 'rftoolsutility:charged_porter'
        },
        {
            output: 'rftoolsbuilder:shape_card_pump',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:dusts/redstone',
                B: 'minecraft:water_bucket',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'rftoolsbuilder:shape_card_def',
                E: 'minecraft:lava_bucket'
            },
            id: 'rftoolsbuilder:shape_card_pump'
        },
        {
            output: 'rftoolsbuilder:shape_card_quarry',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:dusts/redstone',
                B: 'minecraft:diamond_pickaxe',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'rftoolsbuilder:shape_card_def',
                E: 'minecraft:diamond_shovel'
            },
            id: 'rftoolsbuilder:shape_card_quarry'
        },
        {
            output: 'rftoolsbase:machine_infuser',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gears/enderium',
                B: 'rftoolsbase:infused_diamond',
                C: '#forge:storage_blocks/nitro',
                D: '#industrialforegoing:machine_frame/advanced'
            },
            id: 'rftoolsbase:machine_infuser'
        },
        {
            output: 'rftoolsbuilder:builder',
            pattern: ['ADA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:bricks',
                B: 'mekanism:teleporter_frame',
                C: '#industrialforegoing:machine_frame/pity',
                D: 'mekanism:teleporter'
            },
            id: 'rftoolsbuilder:builder'
        },
        {
            output: 'rftoolsbase:machine_base',
            pattern: [' A ', 'ACA', 'BBB'],
            key: {
                A: '#forge:nuggets/invar',
                B: 'pneumaticcraft:reinforced_stone_slab',
                C: 'pneumaticcraft:advanced_pcb'
            },
            id: 'rftoolsbase:machine_base'
        },
        {
            output: 'rftoolsutility:flight_module',
            pattern: ['ABA', 'CDC', 'EFG'],
            key: {
                A: 'alexsmobs:mysterious_worm',
                B: Item.of(
                    'rftoolsutility:syringe',
                    '{mobName:"alexsmobs:warped_mosco",mobId:"alexsmobs:warped_mosco",level:10}'
                ),
                C: 'meetyourfight:aether_glazed_cupcake',
                D: 'rftoolsutility:moduleplus_template',
                E: Item.of(
                    'rftoolsutility:syringe',
                    '{mobName:"upgrade_aquatic:flare",mobId:"upgrade_aquatic:flare",level:10}'
                ),
                F: 'alexsmobs:tarantula_hawk_elytra',
                G: Item.of(
                    'rftoolsutility:syringe',
                    '{mobName:"alexsmobs:void_worm",mobId:"alexsmobs:void_worm",level:10}'
                )
            },
            id: 'rftoolsutility:flight_module'
        },
        {
            output: 'rftoolscontrol:program_card',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:plastic',
                B: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                C: 'pneumaticcraft:printed_circuit_board'
            },
            id: 'rftoolscontrol:program_card'
        },
        {
            output: 'rftoolscontrol:ram_chip',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'redstonepen:relay',
                B: ['#forge:wires/copper', '#forge:wires/lead'],
                C: 'immersiveengineering:circuit_board'
            },
            id: 'rftoolscontrol:ram_chip'
        },
        {
            output: 'rftoolscontrol:token',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:paper',
                B: 'pneumaticcraft:programming_puzzle'
            },
            id: 'rftoolscontrol:token'
        },
        {
            output: 'rftoolscontrol:craftingstation',
            pattern: ['ABA', 'CDE', 'ABA'],
            key: {
                A: 'create:mechanical_crafter',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'appliedenergistics2:annihilation_core',
                D: 'rftoolsbase:machine_frame',
                E: 'appliedenergistics2:formation_core'
            },
            id: 'rftoolscontrol:craftingstation'
        },
        {
            output: 'rftoolscontrol:processor',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: 'immersiveengineering:logic_unit',
                B: 'pneumaticcraft:smart_chest',
                C: 'rftoolsbase:machine_frame'
            },
            id: 'rftoolscontrol:processor'
        },
        {
            output: 'rftoolscontrol:graphics_card',
            pattern: ['ABA', 'CDA', 'EEE'],
            key: {
                A: 'pneumaticcraft:heat_sink',
                B: 'pneumaticcraft:turbine_rotor',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'appliedenergistics2:engineering_processor',
                E: '#forge:nuggets/copper'
            },
            id: 'rftoolscontrol:graphics_card'
        },
        {
            output: 'rftoolscontrol:network_card',
            pattern: ['ABC', 'DDD'],
            key: {
                A: 'appliedenergistics2:wireless_access_point',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'appliedenergistics2:engineering_processor',
                D: '#forge:nuggets/copper'
            },
            id: 'rftoolscontrol:network_card'
        },
        {
            output: 'rftoolscontrol:network_identifier',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'rftoolscontrol:token'
            },
            id: 'rftoolscontrol:network_identifier'
        },
        {
            output: 'rftoolscontrol:advanced_network_card',
            pattern: ['ABC'],
            key: {
                A: 'appliedenergistics2:wireless_booster',
                B: 'rftoolscontrol:network_card',
                C: 'packagedauto:package_component'
            },
            id: 'rftoolscontrol:advanced_network_card'
        },
        {
            output: 'rftoolscontrol:node',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'rftoolscontrol:network_card',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'rftoolsbase:machine_frame'
            },
            id: 'rftoolscontrol:node'
        },
        {
            output: 'rftoolsutility:syringe',
            pattern: ['  A', ' B ', 'C  '],
            key: {
                A: '#forge:rods/steel',
                B: 'minecraft:glass_bottle',
                C: 'pneumaticcraft:plastic'
            },
            id: 'rftoolsutility:syringe'
        },
        {
            output: 'rftoolsbase:tablet',
            pattern: ['AAA', 'BCD', 'EEE'],
            key: {
                A: 'rftoolsbase:information_screen',
                B: 'rftoolscontrol:advanced_network_card',
                C: 'kubejs:cpu_core_as_81221',
                D: 'rftoolscontrol:graphics_card',
                E: 'rftoolsbase:machine_base'
            },
            id: 'rftoolsbase:tablet'
        },
        {
            output: 'rftoolsutility:crafter1',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                B: 'pneumaticcraft:smart_chest',
                C: 'rftoolscontrol:craftingstation',
                D: 'rftoolsbase:machine_frame'
            },
            id: 'rftoolsutility:crafter1'
        },
        {
            output: 'rftoolsutility:crafter2',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                B: 'powah:capacitor_blazing',
                C: 'rftoolscontrol:craftingstation',
                D: 'rftoolsutility:crafter1'
            },
            id: 'rftoolsutility:crafter2'
        },
        {
            output: 'rftoolsutility:crafter3',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                B: 'powah:capacitor_nitro',
                C: 'rftoolscontrol:craftingstation',
                D: 'rftoolsutility:crafter2'
            },
            id: 'rftoolsutility:crafter3'
        },
        {
            output: 'rftoolsstorage:modular_storage',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'thermal:gray_rockwool',
                B: '#forge:plates/steel',
                C: 'thermal:machine_frame'
            },
            id: 'rftoolsstorage:modular_storage'
        },
        {
            output: 'rftoolsstorage:storage_module0',
            pattern: ['ADA', 'CBC', 'ADA'],
            key: {
                A: '#thermal:glass/hardened',
                B: 'ironchest:copper_chest',
                C: 'buildinggadgets:construction_paste',
                D: '#forge:gears/osmium'
            },
            id: 'rftoolsstorage:storage_module0'
        },
        {
            output: 'rftoolsbuilder:shape_card_quarry',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'mekanism:robit',
                B: 'mekanism:teleportation_core',
                C: 'rftoolsbuilder:shape_card_def',
                D: '#forge:circuits/ultimate',
                E: 'mekanismtools:refined_obsidian_paxel'
            },
            id: 'rftoolsbuilder:shape_card_quarry'
        },
        {
            output: 'rftoolsstorage:storage_scanner',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'fluxnetworks:flux_dust',
                B: '#xnet:cables',
                C: 'botania:forest_eye',
                D: 'xnet:wireless_router'
            },
            id: 'rftoolsstorage:storage_scanner'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
