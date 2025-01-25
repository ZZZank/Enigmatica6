
onEvent('item.tags', (event) => {
    event.get('forge:wool').add(colors.map((color) => `minecraft:${color}_wool`));
});
