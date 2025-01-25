

global.onReload = () => {
    //reload powah configs
    const $PowahConfigs = java('owmii.powah.config.Configs');
    $PowahConfigs.ALL.forEach((config) => config.reload());

    //reload packmenu config
    const $PackMenuClient = java('shadows.menu.PackMenuClient');
    $PackMenuClient.loadConfig();

    //reload randompatches config
    const $RandomPatches = java('com.therandomlabs.randompatches.RandomPatches');
    $RandomPatches.reloadConfig();
};

onEvent('postinit', (event) => {
    global.onReload();
});
