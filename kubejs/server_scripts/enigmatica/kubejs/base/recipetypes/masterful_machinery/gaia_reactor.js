onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/masterful_machinery/gaia_reactor/';
    const recipes = [
        {
            outputs: [
                {
                    chance: 1.0,
                    data: '8x botania:life_essence'
                },
                {
                    chance: 0.5,
                    data: '4x botania:life_essence'
                },
                {
                    chance: 0.25,
                    data: '2x botania:life_essence'
                },
                { type: 'masterfulmachinery:botania_mana', data: { amount: 9000 * 300 } }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    perTick: true,
                    data: { amount: 2000000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'pneumaticcraft:memory_essence', amount: 16000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'astralsorcery:liquid_starlight', amount: 1000 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 300,
            id: `${id_prefix}gaia_spirit`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.inputs = recipe.inputs.map((val) => toMMJson(val));
        recipe.outputs = recipe.outputs.map((val) => toMMJson(val));
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'gaia_reactor_structure';
        recipe.controllerId = 'gaia_reactor';
        event.custom(recipe).id(recipe.id);
    });
});
