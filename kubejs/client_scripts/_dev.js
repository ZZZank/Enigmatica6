if (false) {
    onEvent('item.right_click', (event) => {
        const player = event.player;
        if (
            player.creativeMode &&
            player.crouching &&
            event.hand == MAIN_HAND &&
            event.item.id == 'redstone_arsenal:obsidian_rod'
        ) {
            player.tell(Ingredient.of('#forge:nuggets/lead').stacks.size());
        }
    });
}
