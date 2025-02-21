onEvent('entity.loot_tables', (event) => {
    event.addEntity('environmental:koi', (table) => {
        table.addPool((pool) => {
            pool.addItem('aquaculture:fish_bones');
            pool.addItem('bloodmagic:slate_ampoule');
        });
    });
});
