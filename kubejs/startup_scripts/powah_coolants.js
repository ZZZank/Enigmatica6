// Listen to post-init event, after all mods have loaded
'use strict';
onEvent('postinit', (event) => {
    // Load PowahAPI
    let PowahAPI = java('owmii.powah.api.PowahAPI');
    // Register the Coolants
    PowahAPI.registerSolidCoolant(Item.of('betterendforge:emerald_ice').item, 400, -20);
    PowahAPI.registerSolidCoolant(Item.of('betterendforge:dense_emerald_ice').item, 800, -40);
    PowahAPI.registerSolidCoolant(Item.of('betterendforge:ancient_emerald_ice').item, 1200, -100);
});
