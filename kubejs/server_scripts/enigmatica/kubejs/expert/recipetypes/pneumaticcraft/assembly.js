onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/assembly/';
    const recipes = [
        {
            input: '2x thermal:machine_frame',
            output: 'kubejs:rough_machine_frame_top',
            program: 'drill',
            id: `${id_prefix}rough_machine_frame_top`
        },
        {
            input: 'kubejs:rough_machine_frame',
            output: 'rftoolsbase:machine_frame',
            program: 'laser',
            id: 'rftoolsbase:machine_frame'
        },
        {
            input: '#forge:storage_blocks/gold',
            output: '5x supplementaries:gold_trapdoor',
            program: 'drill',
            id: `${id_prefix}gold_trapdoor`
        },
        {
            input: 'kubejs:basic_circuit_package',
            output: 'kubejs:basic_circuit_assembly',
            program: 'drill',
            id: `${id_prefix}basic_circuit_assembly`
        },
        {
            input: 'kubejs:basic_circuit_assembly',
            output: '2x mekanism:basic_control_circuit',
            program: 'laser',
            id: 'mekanism:control_circuit/basic'
        },
        {
            input: 'kubejs:batch_basic_circuit_package',
            output: 'kubejs:batch_basic_circuit_assembly',
            program: 'drill',
            id: `${id_prefix}batch_basic_circuit_assembly`
        },
        {
            input: 'kubejs:batch_basic_circuit_assembly',
            output: '64x mekanism:basic_control_circuit',
            program: 'laser',
            id: `${id_prefix}batch_basic_control_circuit`
        },
        {
            input: 'kubejs:basic_lenses_package',
            output: '3x occultism:lenses',
            program: 'laser',
            id: 'occultism:crafting/lenses'
        },
        {
            input: 'kubejs:basic_memory_package',
            output: 'kubejs:basic_memory_assembly',
            program: 'drill',
            id: `${id_prefix}basic_memory_assembly`
        },
        {
            input: 'kubejs:basic_memory_assembly',
            output: '2x kubejs:memory_basic_empty',
            program: 'laser',
            id: `${id_prefix}memory_basic_empty`
        },
        {
            input: 'kubejs:batch_basic_memory_package',
            output: 'kubejs:batch_basic_memory_assembly',
            program: 'drill',
            id: `${id_prefix}batch_basic_memory_assembly`
        },
        {
            input: 'kubejs:batch_basic_memory_assembly',
            output: '64x kubejs:memory_basic_empty',
            program: 'laser',
            id: `${id_prefix}batch_memory_basic_empty`
        },
        {
            input: 'kubejs:cpu_core_500_package',
            output: 'kubejs:cpu_core_500_assembly',
            program: 'drill',
            id: `${id_prefix}cpu_core_500_assembly`
        },
        {
            input: 'kubejs:cpu_core_500_assembly',
            output: 'kubejs:cpu_core_mk_1026',
            program: 'laser',
            id: `${id_prefix}cpu_core_mk_1026`
        },
        {
            input: 'kubejs:batch_cpu_core_500_package',
            output: 'kubejs:batch_cpu_core_500_assembly',
            program: 'drill',
            id: `${id_prefix}batch_cpu_core_500_assembly`
        },
        {
            input: 'kubejs:batch_cpu_core_500_assembly',
            output: '32x kubejs:cpu_core_mk_1026',
            program: 'laser',
            id: `${id_prefix}batch_cpu_core_mk_1026`
        },
        {
            input: 'kubejs:cpu_core_1000_package',
            output: 'kubejs:cpu_core_1000_assembly',
            program: 'drill',
            id: `${id_prefix}cpu_core_1000_assembly`
        },
        {
            input: 'kubejs:cpu_core_1000_assembly',
            output: 'kubejs:cpu_core_eg_28222',
            program: 'laser',
            id: `${id_prefix}cpu_core_eg_28222`
        },
        {
            input: 'kubejs:batch_cpu_core_1000_package',
            output: 'kubejs:batch_cpu_core_1000_assembly',
            program: 'drill',
            id: `${id_prefix}batch_cpu_core_1000_assembly`
        },
        {
            input: 'kubejs:batch_cpu_core_1000_assembly',
            output: '32x kubejs:cpu_core_eg_28222',
            program: 'laser',
            id: `${id_prefix}batch_cpu_core_eg_28222`
        },
        {
            input: 'kubejs:cpu_core_2000_package',
            output: 'kubejs:cpu_core_2000_assembly',
            program: 'drill',
            id: `${id_prefix}cpu_core_2000_assembly`
        },
        {
            input: 'kubejs:cpu_core_2000_assembly',
            output: 'kubejs:cpu_core_as_81221',
            program: 'laser',
            id: `${id_prefix}cpu_core_as_81221`
        },
        {
            input: 'kubejs:batch_cpu_core_2000_package',
            output: 'kubejs:batch_cpu_core_2000_assembly',
            program: 'drill',
            id: `${id_prefix}batch_cpu_core_2000_assembly`
        },
        {
            input: 'kubejs:batch_cpu_core_2000_assembly',
            output: '32x kubejs:cpu_core_as_81221',
            program: 'laser',
            id: `${id_prefix}batch_cpu_core_as_81221`
        },
        {
            input: 'kubejs:batch_unassembled_pcb',
            output: '32x pneumaticcraft:unassembled_pcb',
            program: 'laser',
            id: `${id_prefix}batch_unassembled_pcb`
        },

        {
            input: 'kubejs:batch_unassembled_advanced_pressure_tube',
            output: '256x pneumaticcraft:advanced_pressure_tube',
            program: 'drill',
            id: `${id_prefix}batch_unassembled_advanced_pressure_tube`
        },
        {
            input: 'kubejs:batch_unassembled_machine_frame',
            output: '32x rftoolsbase:machine_frame',
            program: 'drill',
            id: `${id_prefix}batch_unassembled_machine_frame`
        },

        {
            input: 'kubejs:assembly_io_package',
            output: 'kubejs:assembly_io_assembly',
            program: 'drill',
            id: `${id_prefix}assembly_io_assembly`
        },
        {
            input: 'kubejs:assembly_io_assembly',
            output: '2x pneumaticcraft:assembly_io_unit_import',

            program: 'laser',
            id: `${id_prefix}assembly_io_alternate`
        },
        {
            input: 'kubejs:assembly_laser_package',
            output: 'kubejs:assembly_laser_assembly',
            program: 'drill',
            id: `${id_prefix}assembly_laser_assembly`
        },
        {
            input: 'kubejs:assembly_laser_assembly',
            output: 'pneumaticcraft:assembly_laser',
            program: 'laser',
            id: `${id_prefix}assembly_laser_alternate`
        },
        {
            input: 'kubejs:assembly_drill_package',
            output: 'kubejs:assembly_drill_assembly',
            program: 'drill',
            id: `${id_prefix}assembly_drill_assembly`
        },
        {
            input: 'kubejs:assembly_drill_assembly',
            output: 'pneumaticcraft:assembly_drill',
            program: 'laser',
            id: `${id_prefix}assembly_drill_alternate`
        },
        {
            input: 'kubejs:assembly_platform_package',
            output: 'kubejs:assembly_platform_assembly',
            program: 'drill',
            id: `${id_prefix}assembly_platform_assembly`
        },
        {
            input: 'kubejs:assembly_platform_assembly',
            output: 'pneumaticcraft:assembly_platform',

            program: 'laser',
            id: `${id_prefix}assembly_platform_alternate`
        },
        {
            input: 'kubejs:assembly_controller_package',
            output: 'kubejs:assembly_controller_assembly',
            program: 'drill',
            id: `${id_prefix}assembly_controller_assembly`
        },
        {
            input: 'kubejs:assembly_controller_assembly',
            output: 'pneumaticcraft:assembly_controller',
            program: 'laser',
            id: `${id_prefix}assembly_controller_alternate`
        },
        {
            input: '#forge:storage_blocks/brass',
            output: 'create:furnace_engine',
            program: 'drill',
            id: `${id_prefix}furnace_engine_alternate`
        },
        {
            input: '32x #forge:ingots/brass',
            output: 'create:flywheel',
            program: 'drill',
            id: `${id_prefix}flywheel_alternate`
        }
    ];

    for (let type in storagePartsAE) {
        for (let capacity in storagePartsAE[type]) {
            let part = storagePartsAE[type][capacity];
            let [mod, name] = part.split(':');
            recipes.push(
                {
                    input: `kubejs:${name}_package`,
                    output: `kubejs:${name}_assembly`,
                    program: 'drill',
                    id: `${id_prefix}${name}_assembly`
                },
                {
                    input: `kubejs:${name}_assembly`,
                    output: part,
                    program: 'laser',
                    id: `${id_prefix}${name}`
                },
                {
                    input: `kubejs:batch_${name}_package`,
                    output: `kubejs:batch_${name}_assembly`,
                    program: 'drill',
                    id: `${id_prefix}batch_${name}_assembly`
                },
                {
                    input: `kubejs:batch_${name}_assembly`,
                    output: `30x ${part}`,
                    program: 'laser',
                    id: `${id_prefix}batch_${name}`
                }
            );
        }
    }

    let armorSets = [
        {
            modID: 'pneumaticcraft',
            armorPieces: ['pneumatic_helmet', 'pneumatic_chestplate', 'pneumatic_leggings', 'pneumatic_boots']
        },
        {
            modID: 'mekanism',
            armorPieces: ['mekasuit_helmet', 'mekasuit_bodyarmor', 'mekasuit_pants', 'mekasuit_boots']
        }
    ];
    armorSets.forEach((armorSet) => {
        armorSet.armorPieces.forEach((armorPiece) => {
            recipes.push(
                {
                    input: `kubejs:${armorPiece}_package`,
                    output: `kubejs:${armorPiece}_assembly`,
                    program: 'drill',
                    id: `${id_prefix}${armorPiece}_assembly`
                },
                {
                    input: `kubejs:${armorPiece}_assembly`,
                    output: `${armorSet.modID}:${armorPiece}`,
                    program: 'laser',
                    id: `${id_prefix}${armorPiece}`
                }
            );
        });
    });

    recipes.forEach((recipe) => {
        let input = toJsonWithCount(recipe.input);
        let output = toJsonWithCount(recipe.output);
        input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: input,
                result: output,
                program: recipe.program
            })
            .id(recipe.id);
    });
});
