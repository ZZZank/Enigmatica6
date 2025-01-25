
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/kubejs/shapeless';
    /*
        ,
        {
            output: '',
            inputs: [
                '',
            ],
            id: ``
        }
    */

    const recipes = [
        {
            output: '9x appliedenergistics2:matter_ball',
            inputs: ['kubejs:matter_block'],
            id: `${id_prefix}matter_block_to_ball`
        },
        {
            output: '9x kubejs:pewter_nugget',
            inputs: ['#forge:ingots/pewter'],
            id: `${id_prefix}pewter_ingot_to_nugget`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
