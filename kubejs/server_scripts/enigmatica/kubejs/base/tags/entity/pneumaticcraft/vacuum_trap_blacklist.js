onEvent('entity_type.tags', (event) => {
    event.get('pneumaticcraft:vacuum_trap_blacklisted').add(['#enigmatica:mob_spawner_blacklist']);
});
