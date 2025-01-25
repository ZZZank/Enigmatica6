
onEvent('item.tags', (event) => {
    event
        .get('forge:stained_glass_pane')
        .add(colors.map((color) => 'minecraft:' + color + '_stained_glass_pane'));
});
