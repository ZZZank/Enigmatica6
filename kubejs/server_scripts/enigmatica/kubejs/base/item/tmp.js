

onEvent('item.right_click', (e) => {
    const player = e.player;
    if (player.fake || player.offHandItem.id != 'minecraft:stick' || !player.creativeMode) {
        return;
    }
    console.warn('tmp script triggered');

    let a = [];

    a.forEach((s) => {
        player.give(s);
    });

    // player.tell(a);
});
