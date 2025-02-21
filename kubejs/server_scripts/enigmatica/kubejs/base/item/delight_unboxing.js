onEvent('item.right_click', (event) => {
    const { player, item } = event;
    if (event.hand != MAIN_HAND || player.fake || item.empty) {
        return;
    }
    const [mod, id] = item.id.split(':', 2);
    if (mod != 'kubejs' || !id.endsWith('_delight')) {
        return;
    }

    const lootTable = 'enigmatica:delights/' + id; // ('kubejs:'.length) is 7
    event.server.runCommandSilent(
        `/execute at ${player.name} run loot spawn ${player.x} ${player.y + 1} ${player.z} loot ${lootTable}`
    );
    // not handling 'gamemode creative' case, due to performance and rarity of such a case
    item.count--;
});
