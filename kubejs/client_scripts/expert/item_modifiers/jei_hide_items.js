onEvent('jei.hide.items', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const items = [];
    items.push(disabledItemsExpert);

    event.hide(items);
});
