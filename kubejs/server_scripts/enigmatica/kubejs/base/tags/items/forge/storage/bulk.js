onEvent('item.tags', (event) => {
    let items = ['botania:black_hole_talisman', 'industrialforegoing:black_hole_controller'];

    let tags = ['forge:storage', 'forge:storage/bulk'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/black_hole_unit/)
            .add(/storagedrawers:\w+drawers/)
            .add(/qio_drive/)
            .add(/mekanism:\w+_bin/)
            .add(/framedcompactdrawers:framed/)
            .add(/appliedenergistics2:\w+storage_cell/)
            .add(/aeadditions:item_storage_cell_\w+/);
    });
});
