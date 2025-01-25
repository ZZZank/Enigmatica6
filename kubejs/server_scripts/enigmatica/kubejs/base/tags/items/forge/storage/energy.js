
onEvent('item.tags', (event) => {
    let items = ['immersiveengineering:powerpack', 'mekanism:energy_tablet'];

    let tags = ['forge:storage', 'forge:storage/energy'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/energy_cell/)
            .add(/energy_cube/)
            .add(/immersiveengineering:capacitor/)
            .add(/induction/)
            .add(/battery/);
    });
});
