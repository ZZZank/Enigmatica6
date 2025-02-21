onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/supplementaries/shaped/';
    const recipes = [
        {
            output: 'supplementaries:candle_holder',
            pattern: ['A', 'B'],
            key: {
                A: '#quark:candles',
                B: '#forge:nuggets/pewter'
            },
            id: 'supplementaries:candle_holder'
        },
        {
            output: 'supplementaries:amethyst_arrow',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'betterendforge:crystal_shards',
                B: '#forge:rods/wooden',
                C: 'minecraft:feather'
            },
            id: `${id_prefix}amethyst_arrow`
        }
    ];

    event
        .shaped('8x supplementaries:firefly_jar', ['AAA', 'ABA', 'AAA'], {
            A: 'supplementaries:jar',
            B: 'ars_nouveau:bucket_of_mana'
        })
        .replaceIngredient('ars_nouveau:bucket_of_mana', 'minecraft:bucket')
        .id(`${id_prefix}firefly_jar`);

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
