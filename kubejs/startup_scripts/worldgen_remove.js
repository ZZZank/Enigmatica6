onEvent('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = [
            'minecraft:nether_quartz_ore',
            'minecraft:nether_gold_ore',
            /immersiveengineering:ore\w+/
        ];
    });
});
