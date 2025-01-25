
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/occultism/miners/fish/';
    const recipes = [
        {
            output: 'kubejs:soggy_treasure_box',
            weight: 177,
            id: `${id_prefix}soggy_treasure_box`
        },
        {
            output: 'aquaculture:starshell_turtle',
            weight: 100,
            id: `${id_prefix}starshell_turtle`
        },
        {
            output: 'aquaculture:arrau_turtle',
            weight: 100,
            id: `${id_prefix}arrau_turtle`
        },
        {
            output: 'aquaculture:box_turtle',
            weight: 100,
            id: `${id_prefix}box_turtle`
        },
        {
            output: 'aquaculture:leech',
            weight: 100,
            id: `${id_prefix}leech`
        },
        {
            output: 'aquaculture:frog',
            weight: 100,
            id: `${id_prefix}frog`
        },
        {
            output: 'aquaculture:jellyfish',
            weight: 100,
            id: `${id_prefix}jellyfish`
        },
        {
            output: 'aquaculture:fish_bones',
            weight: 100,
            id: `${id_prefix}fish_bones`
        }
    ];

    fishableFish.forEach((fish) => {
        recipes.push({
            output: fish,
            weight: 100,
            id: `${id_prefix}${fish.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        recipe.ingredient = { tag: 'occultism:miners/fish' };
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });

    RecipeHint: {
        let weightSum = 0;
        recipes.forEach((recipe) => (weightSum += recipe.weight));
        let unProcessed = recipes.map((recipe) => Item.of(recipe.output).chance(recipe.weight / weightSum));
        toPagedArray(unProcessed, 20).forEach((output, index) => {
            let recipe_hint = {
                inputs: ['#occultism:miners/fish'],
                catalyst: 'occultism:dimensional_mineshaft',
                outputs: output,
                id: id_prefix + 'hint' + index
            };
            addGeneralRecipeHint(recipe_hint, event);
        });
    }
});
