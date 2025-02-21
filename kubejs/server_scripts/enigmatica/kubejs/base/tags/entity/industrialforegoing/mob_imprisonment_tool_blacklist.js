onEvent('entity_type.tags', (event) => {
    event
        .get('industrialforegoing:mob_imprisonment_tool_blacklist')
        .add(['#enigmatica:mob_spawner_blacklist']);
});
