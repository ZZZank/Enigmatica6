onEvent('entity.attack', (event) => {
    const { source, entity } = event;
    const { player, immediate } = source;
    if (
        !player ||
        !source.actual ||
        !entity.monster ||
        source.type != 'trident' ||
        immediate.type != 'minecraft:trident'
    ) {
        return;
    }
    const nbt = immediate.fullNBT.Trident.tag;
    if (!nbt || !nbt.nullptrType || nbt.nullptrType != 1) {
        return;
    }

    player.potionEffects.add('minecraft:blindness', 20);

    const { x, y, z } = entity;
    event.world
        .getEntitiesWithin(AABB.of(x - 3, y - 1, z - 3, x + 3, y + 1, z + 3))
        .filter(
            (/** @type {Internal.LivingEntityJS} */ entity) =>
                //we mark `LivingEntityJS` here, or VSCode will say `entity.health` is wrong
                entity.living && entity.monster && entity.health <= 20
        )
        .forEach((/** @type {Internal.LivingEntityJS} */ entity) => {
            entity.potionEffects.add('minecraft:glowing', 120);
            entity.potionEffects.add('cofh_core:shocked', 120);
            entity.potionEffects.add('neapolitan:slipping', 120);
            event.server.scheduleInTicks(100, (event) => {
                entity.kill();
                const drop = entity.world.createEntity('item');
                // @ts-ignore
                drop.item = 'appliedenergistics2:charged_certus_quartz_crystal';
                drop.setPosition(entity.x, entity.y, entity.z);
                drop.setMotionY(0.4);
                drop.spawn();
            });
        });
});
