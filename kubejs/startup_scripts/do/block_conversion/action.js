'use strict';

block_conversion: {
    const id_prefix = 'enlightened6:right_click_block/';

    onEvent('block.right_click', (event) => {
        const { player, item, hand } = event
        if (!player
            || player.fake
            || !player.crouching
            || item.empty
            || hand != Hand.MAIN_HAND
        ) {
            return;
        }

        const target = event.block;
        const recipes = blockConvCompiledRecipes[target.id]
        if (!recipes) {
            return
        }

        for (let recipe of recipes) {

            if (!recipe.holding.test(item)) {
                continue;
            }
            console.log('got it')
            player.playSound('ping:bloop');
            event.server.runCommandSilent(`particle minecraft:explosion ${target.x} ${target.y} ${target.z}`);

            player.mainHandItem.count -= 1;
            target.set(AIR_RL);

            let drop = event.world.createEntity('minecraft:item');
            // @ts-ignore
            drop.item = recipe.output;
            drop.setPosition(target);
            drop.setMotionY(0.2);
            drop.spawn();

            let additionalAction = recipe.additional
            if (additionalAction) {
                additionalAction(event)
            }

            event.cancel();
            return;
        }
    });

    onEvent('recipes', event => {
        const { deploying } = event.recipes.create

        blockConvRawRecipes.forEach(recipe => {
            deploying(recipe.output, [recipe.target, recipe.holding])
                .id(id_prefix + recipe.id + '/deploy');
        })
    })
}
