
onEvent('item.tags', (event) => {
    let items = ['byg:yellow_spruce_sapling', 'byg:joshua_sapling'];
    event.get('minecraft:saplings').add(items);
});
