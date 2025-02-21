onEvent('player.logged_in', (event) => {
    const modids = ['refinedstorage', 'extrastorage', 'rsinfinitybooster'];

    modids.forEach((modid) => {
        const loaded = Platform.isLoaded(modid);
        if (loaded) {
            event.addGameStage(modid);
        } else {
            event.removeGameStage(modid);
        }
    });
});
