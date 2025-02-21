onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/interactio/item_explode/';
    const recipes = [
        {
            inputs: [{ tag: 'forge:grain', count: 1 }],
            output: {
                entries: [{ result: { item: 'create:wheat_flour', count: 1 }, weight: 1 }],
                empty_weight: 1,
                rolls: 1
            },
            id: 'pneumaticcraft:explosion_crafting/wheat_flour'
        },
        {
            inputs: [{ item: 'atum:emmer', count: 1 }],
            output: {
                entries: [{ result: { item: 'atum:emmer_flour', count: 1 }, weight: 1 }],
                empty_weight: 1,
                rolls: 1
            },
            id: `${id_prefix}emmer_flour`
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
