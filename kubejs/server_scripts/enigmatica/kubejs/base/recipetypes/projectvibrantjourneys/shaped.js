onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/projectvibrantjourneys/shaped/';
    const recipes = [
        {
            output: Item.of('projectvibrantjourneys:twigs', 12),
            pattern: ['  A', ' A ', 'A  '],
            key: {
                A: '#minecraft:leaves'
            },
            id: `${id_prefix}twigs`
        },
        {
            output: Item.of('projectvibrantjourneys:seashells', 8),
            pattern: ['ABC', 'ACC', 'ACC'],
            key: {
                A: 'minecraft:prismarine_shard',
                B: 'minecraft:prismarine_crystals',
                C: 'minecraft:nautilus_shell'
            },
            id: `projectvibrantjourneys:seashells`
        },
        {
            output: Item.of('projectvibrantjourneys:pinecones', 6),
            pattern: [' A ', 'A A', ' A '],
            key: {
                A: '#minecraft:leaves'
            },
            id: `${id_prefix}pinecones`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
