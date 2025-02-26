onEventExpert('jei.hide.items', (event) => {
    const items = [];
    items.push(disabledItemsExpert);

    event.hide(items);
});
