onEvent('item.toss', (event) => {
    const player = event.player;
    if (!player.player || player.fake) {
        return;
    }

    if (event.item.hasTag('enigmatica:burning_hot') && !playerHas('#enigmatica:burning_hot', player)) {
        player.setOnFire(0);
    }
});
