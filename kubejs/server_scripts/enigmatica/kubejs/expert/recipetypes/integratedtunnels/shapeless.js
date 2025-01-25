
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const recipes = [
        {
            output: 'integratedtunnels:part_exporter_item',
            inputs: [
                'integratedtunnels:part_interface_item',
                'modularrouters:puller_module_1',
                'modularrouters:stack_upgrade'
            ],
            id: 'integratedtunnels:crafting/part_exporter_item'
        },
        {
            output: 'integratedtunnels:part_importer_item',
            inputs: [
                'integratedtunnels:part_interface_item',
                'modularrouters:sender_module_1',
                'modularrouters:stack_upgrade'
            ],
            id: 'integratedtunnels:crafting/part_importer_item'
        },
        {
            output: 'integratedtunnels:part_interface_filter_item',
            inputs: [
                'integratedtunnels:part_interface_item',
                'integratedtunnels:part_interface_item',
                'create:filter'
            ],
            id: 'integratedtunnels:crafting/part_interface_filter_item'
        },
        {
            output: 'integratedtunnels:part_exporter_fluid',
            inputs: [
                'integratedtunnels:part_interface_fluid',
                'modularrouters:fluid_module',
                '#forge:dyes/orange'
            ],
            id: 'integratedtunnels:crafting/part_exporter_fluid'
        },
        {
            output: 'integratedtunnels:part_importer_fluid',
            inputs: [
                'integratedtunnels:part_interface_fluid',
                'modularrouters:fluid_module',
                '#forge:dyes/green'
            ],
            id: 'integratedtunnels:crafting/part_importer_fluid'
        },
        {
            output: 'integratedtunnels:part_interface_filter_fluid',
            inputs: [
                'integratedtunnels:part_interface_fluid',
                'integratedtunnels:part_interface_fluid',
                'create:filter'
            ],
            id: 'integratedtunnels:crafting/part_interface_filter_fluid'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
