'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/advanced_assembly_table/';
    const recipes = [
        {
            outputs: ['1x kubejs:batch_basic_circuit_package'],
            inputs: [
                '32x kubejs:basic_circuit_package',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_circuit_package`
        },
        {
            outputs: ['1x kubejs:batch_basic_memory_package'],
            inputs: [
                '32x kubejs:basic_memory_package',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_memory_package`
        },
        {
            outputs: ['1x kubejs:batch_cpu_core_500_package'],
            inputs: [
                '32x kubejs:cpu_core_500_package',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_500_package`
        },
        {
            outputs: ['1x kubejs:batch_cpu_core_1000_package'],
            inputs: [
                '32x kubejs:cpu_core_1000_package',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_1000_package`
        },
        {
            outputs: ['1x kubejs:batch_cpu_core_2000_package'],
            inputs: [
                '32x kubejs:cpu_core_2000_package',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_2000_package`
        },
        {
            outputs: ['1x kubejs:batch_unassembled_pcb'],
            inputs: [
                '32x pneumaticcraft:empty_pcb',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_pcb`
        },
        {
            outputs: ['1x kubejs:batch_unassembled_advanced_pressure_tube'],
            inputs: [
                '32x pneumaticcraft:compressed_iron_block',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_advanced_pressure_tube`
        },
        {
            outputs: ['1x kubejs:batch_unassembled_machine_frame'],
            inputs: [
                '32x kubejs:rough_machine_frame',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_machine_frame`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.inputs = recipe.inputs.map((val) => {
            if (typeof val == 'string') {
                // '32x kubejs:rough_machine_frame'
                return {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                };
            } else if (val.type == 'masterfulmachinery:items') {
                /*
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '2x mekanism:solar_neutron_activator'
                }
                 */
                val.data = toJsonWithCount(val.data);
            }
            return val;
        });
        recipe.outputs = recipe.outputs.map((val) => {
            if (typeof val == 'string') {
                return {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                };
            } else if (val.type == 'masterfulmachinery:items') {
                val.data = toJsonWithCount(val.data);
            }
            return val;
        });
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'advanced_assembly_table_structure';
        recipe.controllerId = 'advanced_assembly_table';
        event.custom(recipe).id(recipe.id);
    });
});
