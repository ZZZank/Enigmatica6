onEvent('recipes', (event) => {
    if (global.isExpertMode) {
        return;
    }

    const id_prefix = 'enigmatica:normal/minecraft/stonecutter/';

    event.stonecutting('atum:crystal_glass', 'minecraft:glass').id(`${id_prefix}glass_from_crystal_glass`);
});
