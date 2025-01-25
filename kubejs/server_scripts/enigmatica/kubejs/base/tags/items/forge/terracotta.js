
onEvent('item.tags', (event) => {
    event
        .get('forge:terracotta')
        .add('minecraft:terracotta')
        .add(colors.map((color) => 'minecraft:' + color + '_terracotta'));
});
