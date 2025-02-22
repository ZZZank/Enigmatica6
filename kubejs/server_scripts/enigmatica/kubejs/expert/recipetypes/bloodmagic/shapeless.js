onEventExpert('recipes', (event) => {

    const recipes = [
        {
            output: Item.of('bloodmagic:woodbrickpath', 4),
            inputs: [
                'bloodmagic:woodtilepath',
                'bloodmagic:woodtilepath',
                'bloodmagic:woodtilepath',
                'bloodmagic:woodtilepath',
                { type: 'bloodmagic:bloodorb', orb_tier: 2 }
            ],
            id: 'bloodmagic:path/path_wood'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
