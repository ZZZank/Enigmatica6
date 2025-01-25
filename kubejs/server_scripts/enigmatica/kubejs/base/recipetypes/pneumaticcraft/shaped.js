

onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/shaped/';
    const recipes = [
        {
            output: 'pneumaticcraft:stop_worm',
            pattern: [' AB', 'CBB', 'DC '],
            key: {
                A: 'redstone_arsenal:flux_dust',
                B: '#forge:ingots/lead',
                C: '#forge:nuggets/iron',
                D: '#forge:nuggets/gold'
            },
            id: id_prefix + 'stop_worm'
        },
        {
            output: 'pneumaticcraft:nuke_virus',
            pattern: [' AB', 'CBB', 'DC '],
            key: {
                A: '#forge:gems/diamond',
                B: '#forge:ingots/lead',
                C: '#forge:nuggets/iron',
                D: '#forge:nuggets/gold'
            },
            id: id_prefix + 'nuke_virus'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
