onEvent('recipes', (event) => {
    if (global.isNormalMode || !Platform.isLoaded('extrastorage')) {
        return;
    }
    const id_prefix = 'enlightened6:expert/extrastorage/exchange/';

    const recipes = [];

    let exchanges = {
        // item storage
        'extrastorage:storagepart_256k': 'aeadditions:item_storage_component_256',
        'extrastorage:storagepart_1024k': 'aeadditions:item_storage_component_1024',
        'extrastorage:storagepart_4096k': 'aeadditions:item_storage_component_4096',
        'extrastorage:storagepart_16384k': 'aeadditions:item_storage_component_16384',
        // fluid storage
        'extrastorage:storagepart_16384k_fluid': 'aeadditions:fluid_storage_component_256',
        'extrastorage:storagepart_65536k_fluid': 'aeadditions:fluid_storage_component_1024',
        'extrastorage:storagepart_262144k_fluid': 'aeadditions:fluid_storage_component_4096',
        // 'extrastorage:storagepart_1048576k_fluid':
        // misc
        'extrastorage:neural_processor': 'packagedauto:package_component'
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
