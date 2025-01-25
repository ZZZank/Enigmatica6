// priority: 1004


// This duplicate packmode file is here to get the packmode
// in the event that the client loads before the server
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

onEvent('player.data_from_server.reload', (event) => {
    global.onReload();
});

onEvent('client.logged_in', (event) => {
    global.onReload();
});
