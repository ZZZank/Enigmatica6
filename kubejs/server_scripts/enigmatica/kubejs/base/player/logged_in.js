
onEvent('player.logged_in', (event) => {
    const player = event.player;
    const startingItemsGameStage = 'starting_items';

    setMode(player);

    if (!player.stages.has(startingItemsGameStage)) {
        player.give('ftbquests:book');
        player.give(randomOf(Ingredient.of('#waystones:waystone').getStacks()));

        player.stages.add(startingItemsGameStage);
    }
});
