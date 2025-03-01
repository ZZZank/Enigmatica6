if (false) {
    onEvent('item.right_click', (event) => {
        const player = event.player;
        if (
            player.creativeMode &&
            player.crouching &&
            event.hand == MAIN_HAND &&
            event.item.id == 'redstone_arsenal:obsidian_rod'
        ) {
            player.tell(
                Item.of("abnormals_delight:duck_fillet")
                    .withName("magic")
                    .nbt
                    .prettyDisplay
            )
            player.tell(
                Text.of(Item.of("abnormals_delight:duck_fillet").nbt)
            )
            player.tell(
                Item.of("abnormals_delight:duck_fillet")
                    .withNBT({
                        'magic': true,
                        'not_that_magic': "string arg"
                    })
                    .nbt
                    .prettyDisplay
            )
            // player.tell(Ingredient.of('#forge:nuggets/lead').stacks.size());
            // player.tell(`global['isExpertMode']: ${global['isExpertMode']}`);
            // player.tell(`global['isNormalMode']: ${global['isNormalMode']}`);
        }
    });
}
