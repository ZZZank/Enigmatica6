
// priority: 1004

/**
 * Set FTBQuest for a player according to packmode
 * @param {Internal.PlayerJS<any>} player
 */
function setMode(player) {
    const expertModeQuestId = '0000000000000FEB';
    console.log(`setting mode for player: ${player}`);
    if (global.packmode == 'expert') {
        player.data.ftbquests.complete(expertModeQuestId);
        console.log(`set mode to expert for player: ${player}`);
    } else {
        player.data.ftbquests.reset(expertModeQuestId);
    }
}

onEvent('server.datapack.high_priority', (event) => {
    const server = event.getServer();
    if (!server) {
        return;
    }
    server.players.forEach((player) => {
        setMode(player);
    });
    server.sendDataToAll('reload', {});
    if (server.isDedicated()) {
        global.onReload();
    }
});

const packMode = global['packmode'];
const isNormalMode = global.isNormalMode;
const isExpertMode = global.isExpertMode;

console.log(`Current packmode is: ${global.packmode}`);
