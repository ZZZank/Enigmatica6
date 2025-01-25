
onEvent('recipes', (event) => {
    if (global.isNormalMode || !Platform.isLoaded('refinedstorage')) {
        return;
    }
    const id_prefix = 'enlightened6:expert/refinedstorage/exchange/';

    const recipes = [];

    let exchanges = {
        // item storage
        'refinedstorage:1k_storage_part': 'appliedenergistics2:1k_cell_component',
        'refinedstorage:4k_storage_part': 'appliedenergistics2:4k_cell_component',
        'refinedstorage:16k_storage_part': 'appliedenergistics2:16k_cell_component',
        'refinedstorage:64k_storage_part': 'appliedenergistics2:64k_cell_component',
        // fluid storage
        'refinedstorage:64k_fluid_storage_part': 'appliedenergistics2:1k_fluid_cell_component',
        'refinedstorage:256k_fluid_storage_part': 'appliedenergistics2:4k_fluid_cell_component',
        'refinedstorage:1024k_fluid_storage_part': 'appliedenergistics2:16k_fluid_cell_component',
        'refinedstorage:4096k_fluid_storage_part': 'appliedenergistics2:64k_fluid_cell_component',
        // 'extrastorage:storagepart_1048576k_fluid':
        // misc
        'refinedstorage:construction_core': 'appliedenergistics2:formation_core',
        'refinedstorage:destruction_core': 'appliedenergistics2:annihilation_core',
        'refinedstorage:basic_processor': 'appliedenergistics2:calculation_processor',
        'refinedstorage:improved_processor': 'appliedenergistics2:logic_processor',
        'refinedstorage:advanced_processor': 'appliedenergistics2:engineering_processor',
        'refinedstorage:upgrade': 'appliedenergistics2:basic_card',
        'refinedstorage:pattern': 'appliedenergistics2:blank_pattern',
        // machine
        'refinedstorage:controller': 'appliedenergistics2:controller',
        'refinedstorage:disk_drive': 'appliedenergistics2:drive'
    };

    for (let itemRS in exchanges) {
        let itemAE = exchanges[itemRS];
        let [mod, id] = itemRS.split(':');
        event.remove({ output: itemRS });
        recipes.push(
            {
                inputs: [itemAE],
                output: itemRS,
                id: `${id_prefix}ae_rs/${id}`
            },
            {
                inputs: [itemRS],
                output: itemAE,
                id: `${id_prefix}rs_ae/${id}`
            }
        );
    }

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
