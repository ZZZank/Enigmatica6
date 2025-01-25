
onEvent('item.tags', (event) => {
    let items = [
        'rftoolsutility:tank',
        'astralsorcery:chalice',
        'thermal:fluid_cell',
        'industrialforegoing:black_hole_controller',
        'mekanism:dynamic_valve'
    ];
    let exceptions = [
        'pneumaticcraft:etching_tank',
        'immersivepetroleum:upgrade_tank',
        'mekanism:scuba_tank',
        'mekanism:basic_chemical_tank',
        'mekanism:advanced_chemical_tank',
        'mekanism:elite_chemical_tank',
        'mekanism:ultimate_chemical_tank',
        'mekanism:creative_chemical_tank'
    ];
    let tags = ['forge:storage', 'forge:storage/liquid', 'forge:storage/fluid'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_tank/)
            .add(/fluid_storage/)
            .add(/aeadditions:fluid_\w+/)
            .remove(exceptions);
    });
});
