onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/atum/shaped/';
    const recipes = [
        {
            output: Item.of('atum:linen_thread', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:crops/flax',
                B: '#forge:rods/wooden'
            },
            id: `${id_prefix}atum/linen_thread_from_flax`
        },
        {
            output: Item.of('atum:linen_thread', 4),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'atum:cloth_scrap',
                B: '#forge:rods/wooden'
            },
            id: `${id_prefix}atum/linen_thread_from_cloth_scrap`
        },
        {
            output: Item.of('atum:marl', 4),
            pattern: ['AB', 'BA'],
            key: {
                A: 'atum:sand',
                B: 'minecraft:clay'
            },
            id: `${id_prefix}atum/marl_from_clay`
        },
        {
            output: 'atum:emmer_dough',
            pattern: ['A', 'B'],
            key: {
                A: 'atum:emmer_flour',
                B: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 1000 }
            },
            id: `${id_prefix}emmer_dough`
        },
        {
            output: Item.of('8x atum:nebu_chain'),
            pattern: ['A', 'B', 'A'],
            key: {
                A: '#forge:nuggets/nebu',
                B: '#forge:ingots/nebu'
            },
            id: 'atum:nebu_chain'
        },
        {
            output: Item.of('6x atum:sand_layer'),
            pattern: ['AAA'],
            key: {
                A: 'atum:sand'
            },
            id: `${id_prefix}sand_layer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
