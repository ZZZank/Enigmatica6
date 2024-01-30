'use strict';

onEvent('jei.remove.categories', (event) => {
    // console.log('JEI RECIPE CATEGORIES: ' + event.getCategoryIds());

    let categories = [
        'masterfulmachinery:machine_structure_auto_iridescent_altar',
        'masterfulmachinery:machine_structure_advanced_assembly_table',
        'masterfulmachinery:machine_structure_enigmatic_tree_of_life',
        'masterfulmachinery:machine_structure_wicked_altar',
        'masterfulmachinery:machine_structure_industrial_deuterium_plant',
        'masterfulmachinery:machine_structure_gaia_reactor',
        'masterfulmachinery:machine_structure_stellar_neutron_activator',
        'occultism:miner'
    ];

    event.remove(categories);
});
