// priority: 1004

console.log(`Current packmode is: ${global.packmode}`);

onEvent('player.data_from_server.reload', (event) => {
    global.onReload();
});

onEvent('client.logged_in', (event) => {
    global.onReload();
});

const {
    packmode, isExpertMode, isNormalMode
} = global