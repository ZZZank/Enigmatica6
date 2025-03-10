onEventExpert('recipes', (event) => {
    const recipes = [
        /*{
            cast: {
                tag: 'tconstruct:casts/single_use/gem'
            },
            cast_consumed: true,
            fluid: {
                name: 'kubejs:molten_cobalt_bee',
                amount: 500
            },
            result: 'resourcefulbees:cobalt_bee_spawn_egg',
            cooling_time: 600
        }*/
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:casting_table',
                cast: recipe.cast,
                cast_consumed: recipe.cast_consumed,
                fluid: recipe.fluid,
                result: recipe.result,
                cooling_time: recipe.cooling_time
            })
            .id(recipe.id);
    });
});
