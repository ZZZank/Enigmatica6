/*
onEvent('player.tick', (event) => {
    const player = event.player;
    if (!player.isPlayer() || player.isFake()) {
        return;
    }
    // Hot Ingot Cooling
    const hotIngot = 'kubejs:hot_compressed_iron_ingot';
    if (player.isInWater()) {
        let hotIngotCount = player.inventory.count(hotIngot);
        if (hotIngotCount > 0) {
            player.inventory.clear(Item.of(hotIngot));
            player.give(Item.of('pneumaticcraft:ingot_iron_compressed', hotIngotCount));
            player.sendInventoryUpdate();
        }
    }
});
*/
