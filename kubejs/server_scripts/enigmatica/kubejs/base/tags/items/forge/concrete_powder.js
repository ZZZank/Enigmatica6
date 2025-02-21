onEvent('item.tags', (event) => {
    event.get('forge:concrete_powder').add(colors.map((color) => 'minecraft:' + color + '_concrete_powder'));
});
