onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/interactio/item_anvil_smashing/';
    const recipes = [
        {
            inputs: [
                Ingredient.of('#minecraft:wooden_pressure_plates'),
                Ingredient.of('#forge:dusts/redstone'),
                Ingredient.of('#forge:dusts/redstone'),
                Item.of('minecraft:stonecutter')
            ],
            output: {
                entries: [{ result: { item: 'portable_stonecutter:portable_stonecutter' }, weight: 1 }],
                rolls: 1
            },
            damage: 0,
            id: `portable_stonecutter:portable_stonecutter_from_anvil_flattening`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_anvil_smashing';
        event.custom(recipe).id(recipe.id);
    });
});
