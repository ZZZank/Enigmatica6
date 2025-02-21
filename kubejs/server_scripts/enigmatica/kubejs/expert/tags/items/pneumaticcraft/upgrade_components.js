onEvent('item.tags', (event) => {
    if (global.isNormalMode) {
        return;
    }
    event.get('pneumaticcraft:upgrade_components').remove('minecraft:lapis_lazuli');
});
