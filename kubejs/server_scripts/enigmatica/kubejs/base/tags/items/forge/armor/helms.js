onEvent('item.tags', (event) => {
    var items = [
        'ars_nouveau:apprentice_hood',
        'ars_nouveau:archmage_hood',
        'ars_nouveau:novice_hood',
        'immersiveengineering:armor_faraday_head',
        'immersiveengineering:armor_steel_head',
        'mekanism:hazmat_mask',
        'mekanism:scuba_mask',
        'bloodmagic:livinghelmet',
        'alexsmobs:sombrero',
        'alexsmobs:frontier_cap',
        'alexsmobs:moose_headgear',
        'atum:halo_of_ra',
        'atum:eyes_of_atem',
        'environmental:thief_hood'
    ];

    var exceptions = ['kubejs:pneumatic_helmet_package', 'kubejs:pneumatic_helmet_assembly'];

    var tags = ['forge:armor', 'forge:armor/helm'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_helmet/)
            .remove(exceptions);
    });
});
