'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    //Disable an item completely.
    itemsToRemoveAE.forEach((entry) => {
        event.remove({ output: entry });
        event.remove({ input: entry, id: '/appliedenergistics2/' });
    });

    //Remove a recipe by id
    const recipeIDs = [
        'appliedenergistics2:misc/meteors_sky_compass',
        'appliedenergistics2:decorative/fluix_block_pure',
        'appliedenergistics2:decorative/certus_quartz_block_pure',
        'appliedenergistics2:network/cells/storage_components_cell_1k_part',
        'appliedenergistics2:network/cells/fluid_storage_components_cell_1k_part'
    ];
    recipeIDs.forEach((recipesID) => {
        event.remove({ id: recipesID });
    });

    //Remove recipes by their output
    const recipeOutputs = [
        //blank for now
    ];
    recipeOutputs.forEach((recipeOutput) => {
        event.remove({ output: recipeOutput });
    });
});
