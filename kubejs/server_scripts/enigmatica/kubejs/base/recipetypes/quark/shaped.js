'use strict';
onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'quark:backpack',
            pattern: ['A A', 'ABA', 'ACA'],
            key: {
                A: 'betterendforge:leather_stripe',
                B: '#forge:chests',
                C: '#forge:ingots/iron'
            },
            id: 'quark:oddities/crafting/backpack'
        },
        {
            output: 'quark:crate',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:ingots/iron',
                B: '#forge:planks/palm',
                C: '#forge:chests'
            },
            id: 'quark:oddities/crafting/crate'
        },
        {
            output: Item.of('4x quark:turf'),
            pattern: ['AA', 'AA'],
            key: {
                A: [
                    'minecraft:grass',
                    'atum:oasis_grass',
                    'byg:short_grass',
                    'byg:weed_grass',
                    'byg:wilted_grass',
                    'projectvibrantjourneys:beach_grass',
                    'projectvibrantjourneys:prairie_grass',
                    'projectvibrantjourneys:short_grass'
                ]
            },
            id: 'quark:building/crafting/turf'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
