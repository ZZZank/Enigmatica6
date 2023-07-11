onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/advanced_assembly_table/';
    const recipes = [
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:batch_basic_circuit_package', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:basic_circuit_package', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_circuit_package`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:batch_basic_memory_package', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:basic_memory_package', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_memory_package`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:batch_cpu_core_500_package', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:cpu_core_500_package', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_500_package`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:batch_cpu_core_1000_package', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:cpu_core_1000_package', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_1000_package`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:batch_cpu_core_2000_package', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:cpu_core_2000_package', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_2000_package`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:batch_unassembled_pcb', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:empty_pcb', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_pcb`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:batch_unassembled_advanced_pressure_tube', count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'pneumaticcraft:compressed_iron_block', count: 32 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_advanced_pressure_tube`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'kubejs:batch_unassembled_machine_frame', count: 1 }
                }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:rough_machine_frame', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_machine_frame`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'advanced_assembly_table_structure';
        recipe.controllerId = 'advanced_assembly_table';
        event.custom(recipe).id(recipe.id);
    });
});
