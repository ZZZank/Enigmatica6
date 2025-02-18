onEvent('block.right_click', (event) => {
    const { block, player, item } = event;
    /** @type {PatchouliMultiblock | null} */
    const multiblock = VisualizMultiblocks[item.id];
    if (!multiblock) {
        return;
    }
    player.addItemCooldown(item.item, 10);
    const key = 'kjs$multiblock';
    if (event.hand == OFF_HAND) {
        $PatchouliAPI.get().clearMultiblock();
        if (item.nbt != null) {
            item.nbt.remove(key);
        }
        return;
    }
    const nbt = item.nbt;
    if (nbt == null || nbt.getBoolean(key) != true) {
        $PatchouliAPI
            .get()
            .showMultiblock(
                multiblock.makePatchouliMultiblock(),
                Text.of('Atum Protal'),
                block.pos.above().above(),
                'none'
            );
        if (nbt == null) {
            item.nbt = { key: true };
        } else {
            item.nbt.putBoolean(key, true);
        }
    } else {
        player.tell('todo');
        item.nbt.remove(key);
    }
});
