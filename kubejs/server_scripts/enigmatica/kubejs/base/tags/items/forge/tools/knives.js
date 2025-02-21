onEvent('item.tags', (event) => {
    let items = [
        'farmersdelight:flint_knife',
        'farmersdelight:iron_knife',
        'farmersdelight:diamond_knife',
        'farmersdelight:netherite_knife',
        'farmersdelight:golden_knife',
        'aquaculture:neptunium_fillet_knife',
        'occultism:butcher_knife'
    ];

    let exceptions = [
        'aquaculture:wooden_fillet_knife',
        'aquaculture:stone_fillet_knife',
        'aquaculture:iron_fillet_knife',
        'aquaculture:gold_fillet_knife',
        'aquaculture:diamond_fillet_knife',
        'abnormals_delight:silver_knife',
        'abnormals_delight:necromium_knife'
    ];

    let tags = [
        'forge:tools',
        'forge:tools/knives',
        'forge:tools/knife',
        'forge:fillet_knife',
        'farmersdelight:tools/knives',
        'farmersdelight:straw_harvesters'
    ];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
