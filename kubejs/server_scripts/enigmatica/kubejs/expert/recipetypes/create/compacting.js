onEventExpert('recipes', (event) => {
    const recipes = [
        {
            output: 'modularrouters:item_router',
            inputs: [
                'minecraft:observer',
                'immersiveengineering:circuit_board',
                'modularrouters:augment_core'
            ],
            heated: true,
            id: 'modularrouters:item_router'
        },
        {
            output: 'kubejs:rough_machine_frame',
            inputs: [
                'rftoolsbase:machine_base',
                'kubejs:coated_machine_frame_top',
                '#forge:plates/invar',
                '#forge:plates/invar'
            ],
            heated: true,
            id: 'kubejs:rough_machine_frame'
        },
        {
            output: '3x modularrouters:fluid_module',
            inputs: [
                '3x modularrouters:blank_module',
                'immersiveengineering:fluid_pump',
                'immersiveengineering:fluid_sorter'
            ],
            heated: false,
            id: 'modularrouters:fluid_module'
        },
        {
            output: '3x modularrouters:sender_module_1',
            inputs: [
                '3x modularrouters:blank_module',
                'immersiveengineering:conveyor_extract',
                'immersiveengineering:sorter'
            ],
            heated: false,
            id: 'modularrouters:sender_module_1'
        },
        {
            output: '3x modularrouters:puller_module_1',
            inputs: [
                '3x modularrouters:blank_module',
                'engineersdecor:factory_hopper',
                'immersiveengineering:sorter'
            ],
            heated: false,
            id: 'modularrouters:puller_module_1'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).heated().id(recipe.id);
        } else if (recipe.superheated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).superheated().id(recipe.id);
        } else {
            event.recipes.create.compacting(recipe.output, recipe.inputs).id(recipe.id);
        }
    });
});
