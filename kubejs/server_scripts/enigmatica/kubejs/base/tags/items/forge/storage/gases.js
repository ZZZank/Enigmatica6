onEvent('item.tags', (event) => {
    let items = ['mekanism:dynamic_tank', 'mekanism:dynamic_valve'];

    let tags = ['forge:storage', 'forge:storage/gas'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/chemical_tank/);
    });
});
