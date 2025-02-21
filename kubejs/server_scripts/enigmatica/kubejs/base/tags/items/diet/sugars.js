onEvent('item.tags', (event) => {
    event
        .get('diet:sugars')
        .add(combVariants.map((comb) => 'resourcefulbees:' + comb + '_honeycomb'))
        .add(
            honeyVarieties.map((honey) => {
                if (honey == 'resourcefulbees:honey') {
                    honey = 'minecraft:honey';
                }
                return honey + '_bottle';
            })
        )
        .add('mekanism:canteen');
});
