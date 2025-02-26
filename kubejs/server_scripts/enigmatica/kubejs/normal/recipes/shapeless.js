onEventNormal('recipes', (event) => {
    const id_prefix = 'enigmatica:normal/recipes/shapeless/';

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: ['#forge:tools/crafting_hammer', 'mekanism:hdpe_pellet'],
            id: 'mekanism:hdpe_sheet'
        },
        {
            output: 'quark:root',
            inputs: ['minecraft:vine', '#forge:dyes/brown'],
            id: `${id_prefix}quark_root`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
