onEvent('block.tags', (event) => {
    event.add('lootr:chests', lootrChests);
    event.add('lootr:loot_chests', lootrChests);
    event.add('lootr:loot', lootrChests);
});
