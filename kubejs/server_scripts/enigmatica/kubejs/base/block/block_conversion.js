'use strict';

const blockRightClickRecipes = [
    {
        target: 'astralsorcery:marble_raw',
        output: 'astralsorcery:marble_runed',
        holding: 'naturesaura:gold_leaf',
        consume: true,
        id: `en6e:right_click_block/marble_runed`
    },
    {
        target: 'appliedenergistics2:crafting_unit',
        output: 'appliedenergistics2:crafting_accelerator',
        holding: 'appliedenergistics2:engineering_processor',
        consume: true,
        id: `en6e:right_click_block/crafting_accelerator`
    },
    {
        target: 'appliedenergistics2:crafting_unit',
        output: 'appliedenergistics2:1k_crafting_storage',
        holding: 'appliedenergistics2:1k_cell_component',
        consume: true,
        id: `en6e:right_click_block/1k_crafting_storage`
    },
    {
        target: 'appliedenergistics2:crafting_unit',
        output: 'appliedenergistics2:4k_crafting_storage',
        holding: 'appliedenergistics2:4k_cell_component',
        consume: true,
        id: `en6e:right_click_block/4k_crafting_storage`
    },
    {
        target: 'appliedenergistics2:crafting_unit',
        output: 'appliedenergistics2:16k_crafting_storage',
        holding: 'appliedenergistics2:16k_cell_component',
        consume: true,
        id: `en6e:right_click_block/16k_crafting_storage`
    },
    {
        target: 'appliedenergistics2:crafting_unit',
        output: 'appliedenergistics2:64k_crafting_storage',
        holding: 'appliedenergistics2:64k_cell_component',
        consume: true,
        id: `en6e:right_click_block/64k_crafting_storage`
    }
];

onEvent('block.right_click', (e) => {
    const /** @type {Internal.PlayerJS} */ player = e.player;
    if (!player || player.fake || player.mainHandItem.empty || !player.crouching) {
        return;
    }

    const mainHandItem = player.mainHandItem.id;
    for (let recipe of blockRightClickRecipes) {
        if (mainHandItem != recipe.holding) {
            continue;
        }
        e.cancel();
        const target = player.rayTrace(5).block;
        if (!target || target.id != recipe.target) {
            return;
        }
        target.set(recipe.output);
        if (recipe.consume) {
            player.mainHandItem.count--;
        }
        return;
    }
});

onEvent('recipes', (event) => {
    const id_prefix = 'en6e:right_click_block/';
    const recipes = [];

    blockRightClickRecipes.forEach((recipe) => {
        recipes.push({
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: recipe.output, count: 1 }
                }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: recipe.target, count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: recipe.holding, count: 1 }
                }
            ],
            ticks: 1,
            id: recipe.id
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'recipe_hint_right_click_block_structure';
        recipe.controllerId = 'recipe_hint_right_click_block';
        event.custom(recipe).id(recipe.id);
    });
});
