
onEvent('item.tags', (event) => {
    let items = [
        'botania:bauble_box',
        'botania:ender_hand',
        'botania:flower_bag',
        'sophisticatedbackpacks:backpack',
        'industrialforegoing:infinity_backpack',
        'thermal:satchel',
        'occultism:satchel',
        '#create:toolboxes',
        'tetra:modular_toolbelt'
    ];

    let tags = ['forge:storage', 'forge:storage/bag'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/bit_bag/)
            .add(/sophisticatedbackpacks:\w+backpack/);
    });
});
