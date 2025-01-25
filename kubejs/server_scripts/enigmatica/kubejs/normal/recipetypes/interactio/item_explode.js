

onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/interactio/item_explode/';
    const recipes = [
        {
            inputs: [{ tag: 'forge:storage_blocks/iron', count: 1 }],
            output: {
                entries: [{ result: { item: 'pneumaticcraft:compressed_iron_block', count: 1 }, weight: 4 }],
                empty_weight: 1,
                rolls: 1
            },
            id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'
        },
        {
            inputs: [{ tag: 'forge:ingots/iron', count: 1 }],
            output: {
                entries: [{ result: { item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }, weight: 4 }],
                empty_weight: 1,
                rolls: 1
            },
            id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'interactio:item_explode',
                inputs: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
