onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const id_prefix = 'enigmatica:expert/masterful_machinery/advanced_assembly_table/';
    const recipes = [
        {
            outputs: ['kubejs:batch_basic_circuit_package'],
            inputs: [
                '32x kubejs:basic_circuit_package',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_circuit_package`
        },
        {
            outputs: ['kubejs:batch_basic_memory_package'],
            inputs: [
                '32x kubejs:basic_memory_package',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_basic_memory_package`
        },
        {
            outputs: ['kubejs:batch_cpu_core_500_package'],
            inputs: [
                '32x kubejs:cpu_core_500_package',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_500_package`
        },
        {
            outputs: ['kubejs:batch_cpu_core_1000_package'],
            inputs: [
                '32x kubejs:cpu_core_1000_package',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_1000_package`
        },
        {
            outputs: ['kubejs:batch_cpu_core_2000_package'],
            inputs: [
                '32x kubejs:cpu_core_2000_package',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_2000_package`
        },
        {
            outputs: ['kubejs:batch_unassembled_pcb'],
            inputs: [
                '32x pneumaticcraft:empty_pcb',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_pcb`
        },
        {
            outputs: ['kubejs:batch_unassembled_advanced_pressure_tube'],
            inputs: [
                '32x pneumaticcraft:compressed_iron_block',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_advanced_pressure_tube`
        },
        {
            outputs: ['kubejs:batch_unassembled_machine_frame'],
            inputs: [
                '32x kubejs:rough_machine_frame',
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}batch_unassembled_machine_frame`
        }
    ];

    for (let type in storagePartsAE) {
        for (let capacity in storagePartsAE[type]) {
            let [mod, name] = storagePartsAE[type][capacity].split(':');
            recipes.push({
                outputs: [`kubejs:batch_${name}_package`],
                inputs: [
                    `30x kubejs:${name}_package`,
                    { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
                ],
                ticks: 240,
                id: `${id_prefix}batch_${type}_${capacity}k_package`
            });
        }
    }

    recipes.forEach((recipe) => {
        recipe.inputs = recipe.inputs.map((val) => toMMJson(val));
        recipe.outputs = recipe.outputs.map((val) => toMMJson(val));
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'advanced_assembly_table_structure';
        recipe.controllerId = 'advanced_assembly_table';
        event.custom(recipe).id(recipe.id);
    });
});
