// priority: 1010

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
    // @ts-ignore
    config = defaultConfig;
}
if (validPackMode.indexOf(config.mode) == -1) {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(
        `Overwrote ${configName}, because the mode ${config.mode} was found. Valid modes are [${validPackMode}].`
    );
}

console.log(`Current packmode is: ${global.packmode}`);

const packMode = config.mode;
const isNormalMode = packMode == 'normal';
const isExpertMode = packMode == 'expert';

global.packmode = packMode;
global.isNormalMode = isNormalMode;
global.isExpertMode = isExpertMode;
