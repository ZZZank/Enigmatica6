onEvent('item.right_click', (event) => {
    const { player, item } = event;
    if (event.hand != MAIN_HAND || player.fake || item.empty || item.id != 'kubejs:soggy_treasure_box') {
        return;
    }

    item.count--;
    const playerCoords = `${player.x} ${player.y + 1} ${player.z}`;
    // universial solutions for both fake and real player
    event.server.runCommandSilent(
        `/execute positioned ${playerCoords} run loot spawn ${playerCoords} loot enigmatica:chests/soggy_treasure_box`
    );
});
