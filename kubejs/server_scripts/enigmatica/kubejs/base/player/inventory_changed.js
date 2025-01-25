

onEvent('player.inventory.changed', (event) => {
    const player = event.player;
    if (player.fake) {
        return;
    }

    if (event.item.hasTag('enigmatica:burning_hot') && !player.inWater) {
        player.setStatusMessage([Text.of(`A hot item is burning you!`).red()]);
        player.onFire = 180;
    }
});
