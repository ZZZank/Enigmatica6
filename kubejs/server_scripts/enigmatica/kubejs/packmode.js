
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

const validPackMode = ['normal', 'expert'];
const defaultConfig = {
    mode: 'normal',
    message: `Valid modes are [${validPackMode}].`
};
const configName = 'mode.json';
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
    config = defaultConfig;
}
if (validPackMode.indexOf(config.mode) == -1) {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(
        `Overwrote ${configName}, because the mode ${config.mode} was found. Valid modes are [${validPackMode}].`
    );
}

let packMode = config.mode;
const isNormalMode = packMode == 'normal';
const isExpertMode = packMode == 'expert';

global.packmode = packMode;
global.isNormalMode = isNormalMode;
global.isExpertMode = isExpertMode;

console.log(`Current packmode is: ${global.packmode}`);
