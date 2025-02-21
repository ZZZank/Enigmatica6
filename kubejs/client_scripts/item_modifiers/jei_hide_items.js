onEvent('jei.hide.items', (event) => {
    // @ts-ignore
    itemsToHide.push(disabledItems);

    materialsToUnify
        .filter((material) => ['iesnium', 'graphite', 'hop_graphite'].indexOf(material) == -1)
        .forEach((material) => {
            itemsToHide.push(
                'occultism:' + material + '_ingot',
                'occultism:' + material + '_ore',
                'occultism:' + material + '_dust',
                'occultism:' + material + '_nugget',
                'occultism:' + material + '_block',
                'immersiveengineering:ingot_' + material,
                'immersiveengineering:dust_' + material,
                'immersiveengineering:nugget_' + material,
                'immersiveengineering:stick_' + material,
                'mekanism:nugget_' + material,
                'mekanism:dust_' + material,
                'mekanism:ingot_' + material,
                'mekanism:block_' + material,
                'thermal:' + material + '_block'
            );
        });

    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).empty) {
            event.hide(disabledItem);
        }
    });
});
