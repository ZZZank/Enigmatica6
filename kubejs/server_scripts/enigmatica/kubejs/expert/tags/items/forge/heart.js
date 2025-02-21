onEvent('item.tags', (event) => {
    if (global.isNormalMode) {
        return;
    }
    event.get('forge:heart').add('kubejs:zombie_heart');
});
