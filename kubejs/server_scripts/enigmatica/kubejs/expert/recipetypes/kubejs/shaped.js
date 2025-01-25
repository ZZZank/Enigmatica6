
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/kubejs/shaped/';
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
            output: 'kubejs:basic_circuit_package',
            pattern: ['AA ', 'BB ', 'CCD'],
            key: {
                A: 'appliedenergistics2:logic_processor',
                B: 'kubejs:memory_basic_filled',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}basic_circuit_package`
        },
        {
            output: 'kubejs:basic_memory_package',
            pattern: ['AAA', 'AAA', 'BC '],
            key: {
                A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                B: 'mekanism:cardboard_box',
                C: 'pneumaticcraft:unassembled_pcb'
            },
            id: `${id_prefix}basic_memory_package`
        },
        {
            output: Item.of('8x kubejs:scented_stick'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:stick',
                B: '#resourcefulbees:resourceful_honeycomb'
            },
            id: `${id_prefix}scented_stick`
        },
        {
            output: 'kubejs:cpu_core_500_package',
            pattern: ['BAB', 'ADA', 'BCB'],
            key: {
                A: '#forge:wires/lead',
                B: 'appliedenergistics2:calculation_processor',
                C: 'pneumaticcraft:unassembled_pcb',
                D: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}cpu_core_500`
        },
        {
            output: 'kubejs:cpu_core_1000_package',
            pattern: ['BAB', 'ADA', 'BCB'],
            key: {
                A: '#forge:wires/copper',
                B: 'appliedenergistics2:logic_processor',
                C: 'pneumaticcraft:unassembled_pcb',
                D: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}cpu_core_1000`
        },
        {
            output: 'kubejs:cpu_core_2000_package',
            pattern: ['BAB', 'ADA', 'BCB'],
            key: {
                A: '#forge:wires/electrum',
                B: 'appliedenergistics2:engineering_processor',
                C: 'pneumaticcraft:unassembled_pcb',
                D: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}cpu_core_2000`
        },
        {
            output: 'kubejs:mekasuit_helmet_package',
            pattern: ['AAA', 'BCD', 'EFF'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'rftoolsbuilder:shield_block1',
                C: Item.of('betterendforge:crystalite_helmet', '{Damage:0}').weakNBT(),
                D: 'mekanism:basic_induction_cell',
                E: 'mekanism:cardboard_box',
                F: '#forge:circuits/elite'
            },
            id: `${id_prefix}mekasuit_helmet`
        },
        {
            output: 'kubejs:mekasuit_bodyarmor_package',
            pattern: ['AAA', 'BCD', 'EFF'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'rftoolsbuilder:shield_block1',
                C: Item.of('betterendforge:crystalite_chestplate', '{Damage:0}').weakNBT(),
                D: 'mekanism:basic_induction_cell',
                E: 'mekanism:cardboard_box',
                F: '#forge:circuits/elite'
            },
            id: `${id_prefix}mekasuit_bodyarmor`
        },
        {
            output: 'kubejs:mekasuit_pants_package',
            pattern: ['AAA', 'BCD', 'EFF'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'rftoolsbuilder:shield_block1',
                C: Item.of('betterendforge:crystalite_leggings', '{Damage:0}').weakNBT(),
                D: 'mekanism:basic_induction_cell',
                E: 'mekanism:cardboard_box',
                F: '#forge:circuits/elite'
            },
            id: `${id_prefix}mekasuit_pants`
        },
        {
            output: 'kubejs:mekasuit_boots_package',
            pattern: ['AAA', 'BCD', 'EFF'],
            key: {
                A: 'mekanism:hdpe_sheet',
                B: 'rftoolsbuilder:shield_block1',
                C: Item.of('betterendforge:crystalite_boots', '{Damage:0}').weakNBT(),
                D: 'mekanism:basic_induction_cell',
                E: 'mekanism:cardboard_box',
                F: '#forge:circuits/elite'
            },
            id: `${id_prefix}mekasuit_boots`
        },

        // Storage Parts
        {
            output: 'kubejs:4k_cell_component_package',
            pattern: ['AAA', 'BCB', 'DEF'],
            key: {
                A: '#forge:gems/silicon',
                B: 'glassential:glass_ghostly',
                C: 'mekanism:cardboard_box',
                D: '#forge:circuits/basic',
                E: 'pneumaticcraft:ingot_iron_compressed',
                F: 'kubejs:dimensional_storage_crystal'
            },
            id: 'appliedenergistics2:network/cells/storage_components_cell_4k_part'
        },
        {
            output: 'kubejs:16k_cell_component_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'appliedenergistics2:calculation_processor',
                B: '#forge:circuits/basic',
                C: 'mekanism:cardboard_box',
                D: 'appliedenergistics2:4k_cell_component'
            },
            id: 'appliedenergistics2:network/cells/storage_components_cell_16k_part'
        },
        {
            output: 'kubejs:64k_cell_component_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'appliedenergistics2:logic_processor',
                B: '#forge:circuits/advanced',
                C: 'mekanism:cardboard_box',
                D: 'appliedenergistics2:16k_cell_component'
            },
            id: 'appliedenergistics2:network/cells/storage_components_cell_64k_part'
        },
        {
            output: 'kubejs:item_storage_component_256_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'appliedenergistics2:engineering_processor',
                B: '#forge:circuits/elite',
                C: 'mekanism:cardboard_box',
                D: 'appliedenergistics2:64k_cell_component'
            },
            id: 'aeadditions:components/item/256k'
        },
        {
            output: 'kubejs:item_storage_component_1024_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'packagedauto:package_component',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'aeadditions:item_storage_component_256'
            },
            id: 'aeadditions:components/item/1024k'
        },
        {
            output: 'kubejs:item_storage_component_4096_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'packagedauto:package_component',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'aeadditions:item_storage_component_1024'
            },
            id: 'aeadditions:components/item/4096k'
        },
        {
            output: 'kubejs:item_storage_component_16384_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'packagedauto:package_component',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'aeadditions:item_storage_component_4096'
            },
            id: 'aeadditions:components/item/16384k'
        },

        // Fluid Storage Parts
        {
            output: 'kubejs:4k_fluid_cell_component_package',
            pattern: ['AAA', 'BCB', 'DEF'],
            key: {
                A: '#forge:gems/silicon',
                B: 'mekanism:dynamic_tank',
                C: 'mekanism:cardboard_box',
                D: '#forge:circuits/basic',
                E: 'pneumaticcraft:ingot_iron_compressed',
                F: 'kubejs:dimensional_storage_crystal'
            },
            id: 'appliedenergistics2:network/cells/fluid_storage_components_cell_4k_part'
        },
        {
            output: 'kubejs:16k_fluid_cell_component_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'appliedenergistics2:calculation_processor',
                B: '#forge:circuits/basic',
                C: 'mekanism:cardboard_box',
                D: 'appliedenergistics2:4k_fluid_cell_component'
            },
            id: 'appliedenergistics2:network/cells/fluid_storage_components_cell_16k_part'
        },
        {
            output: 'kubejs:16k_fluid_cell_component_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'appliedenergistics2:logic_processor',
                B: '#forge:circuits/advanced',
                C: 'mekanism:cardboard_box',
                D: 'appliedenergistics2:4k_fluid_cell_component'
            },
            id: 'appliedenergistics2:network/cells/fluid_storage_components_cell_16k_part'
        },
        {
            output: 'kubejs:64k_fluid_cell_component_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'appliedenergistics2:engineering_processor',
                B: '#forge:circuits/elite',
                C: 'mekanism:cardboard_box',
                D: 'appliedenergistics2:16k_fluid_cell_component'
            },
            id: 'appliedenergistics2:network/cells/fluid_storage_components_cell_64k_part'
        },
        {
            output: 'kubejs:fluid_storage_component_256_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'packagedauto:package_component',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'appliedenergistics2:64k_fluid_cell_component'
            },
            id: 'aeadditions:components/fluid/256k'
        },
        {
            output: 'kubejs:fluid_storage_component_1024_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'packagedauto:package_component',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'aeadditions:fluid_storage_component_256'
            },
            id: 'aeadditions:components/fluid/1024k'
        },
        {
            output: 'kubejs:fluid_storage_component_4096_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'packagedauto:package_component',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'aeadditions:fluid_storage_component_1024'
            },
            id: 'aeadditions:components/fluid/4096k'
        },

        //Chemical Storage Parts
        {
            output: 'kubejs:chemical_storage_component_4_package',
            pattern: ['AAA', 'BCB', 'DEF'],
            key: {
                A: '#forge:gems/silicon',
                B: 'mekanism:enriched_gold',
                C: 'mekanism:cardboard_box',
                D: '#forge:circuits/basic',
                E: 'pneumaticcraft:ingot_iron_compressed',
                F: 'kubejs:dimensional_storage_crystal'
            },
            id: 'aeadditions:components/chemical/4k'
        },
        {
            output: 'kubejs:chemical_storage_component_16_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'appliedenergistics2:calculation_processor',
                B: '#forge:circuits/basic',
                C: 'mekanism:cardboard_box',
                D: 'aeadditions:chemical_storage_component_4'
            },
            id: 'aeadditions:components/chemical/16k'
        },
        {
            output: 'kubejs:chemical_storage_component_64_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'appliedenergistics2:logic_processor',
                B: '#forge:circuits/advanced',
                C: 'mekanism:cardboard_box',
                D: 'aeadditions:chemical_storage_component_16'
            },
            id: 'aeadditions:components/chemical/64k'
        },
        {
            output: 'kubejs:chemical_storage_component_256_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'appliedenergistics2:engineering_processor',
                B: '#forge:circuits/elite',
                C: 'mekanism:cardboard_box',
                D: 'aeadditions:chemical_storage_component_64'
            },
            id: 'aeadditions:components/chemical/256k'
        },
        {
            output: 'kubejs:chemical_storage_component_1024_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'packagedauto:package_component',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'aeadditions:chemical_storage_component_256'
            },
            id: 'aeadditions:components/chemical/1024k'
        },
        {
            output: 'kubejs:chemical_storage_component_4096_package',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: 'packagedauto:package_component',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:cardboard_box',
                D: 'aeadditions:chemical_storage_component_1024'
            },
            id: 'aeadditions:components/chemical/4096k'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
