onEvent('item.tags', (event) => {
    var items = [
        'bloodmagic:bloodlightsigil',
        'engineersdecor:iron_bulb_light',
        'engineersdecor:iron_ceiling_edge_light',
        'engineersdecor:iron_floor_edge_light',
        'engineersdecor:iron_inset_light',
        'immersiveengineering:floodlight',
        'immersiveengineering:lantern',
        'immersiveengineering:balloon',
        'minecraft:beacon',
        'minecraft:end_rod',
        'minecraft:glowstone',
        'minecraft:lava_bucket',
        'minecraft:magma_block',
        'minecraft:shroomlight',
        'naturesaura:light_staff',
        'simplylight:edge_light',
        'simplylight:edge_light_top',
        'simplylight:lightbulb',
        'simplylight:rodlamp',
        'torchmaster:dreadlamp',
        'undergarden:tall_shimmerweed',
        'undergarden:shimmerweed',
        'betterendforge:glowing_pillar_luminophor'
    ];
    var exceptions = ['occultism:magic_lamp_empty'];

    event
        .get('forge:lights')
        .add(items)
        .add(/_lantern/)
        .add(/_lamp/)
        .add(/torch/)
        .add(/fire_pit/)
        .add(/shiny_flower/)
        .add(/floating_flower/)
        .add(/candle/)
        .add(/campfire/)
        .add(/_glowcane/)
        .add(/byg:\w+_glowshroom/)
        .add(/quark:\w+_glowshroom/)
        .add(/botania:\w+_mushroom/)
        .add(/atum:lantern/)
        .add(/illumin/)
        .add(/sconce/)
        .add(/candelabra/)
        .add(/chandelier/)
        .add(/brazier/)
        .add('#chipped:glowstone')
        .add('#chipped:sea_lantern')
        .add('#chipped:shroomlight')
        .add(/neon_light/)
        .remove(exceptions);
});
