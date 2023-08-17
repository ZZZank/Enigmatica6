onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/farmersdelight/cooking/';
    const recipes = [
        {
            inputs: ['naturesaura:crimson_meal', '#forge:dusts/coal'],
            output: 'emendatusenigmatica:sulfur_dust',
            count: 1,
            cookingTime: 200,
            id: `${id_prefix}sulfur_dust`
        },
        {
            inputs: [
                '#resourcefulbees:resourceful_honeycomb',
                'naturesaura:tainted_gold'
            ],
            output: 'resourcefulbees:tainted_honeycomb',
            count: 1,
            cookingTime: 200,
            id: `${id_prefix}tainted_honeycomb`
        },
        {
            inputs: [
                'naturesaura:crimson_meal',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh',
                'minecraft:rotten_flesh'
            ],
            output: 'minecraft:leather',
            count: 5,
            cookingTime: 200,
            id: `${id_prefix}leather`
        },
        {
            inputs: ['#forge:dusts/gold', '#forge:dusts/ender'],
            output: 'redstone_arsenal:flux_dust',
            count: 2,
            cookingTime: 50,
            id: 'redstone_arsenal:materials/flux_dust'
        },
        {
            inputs: [
                'naturesaura:crimson_meal',
                '#forge:dusts/gold',
                'minecraft:melon_slice',
                'minecraft:melon_slice',
                'minecraft:melon_slice',
                'minecraft:melon_slice'
            ],
            output: 'minecraft:glistering_melon_slice',
            count: 4,
            cookingTime: 200,
            id: `${id_prefix}glistering_melon_slice`
        },
        {
            inputs: [
                'naturesaura:crimson_meal',
                '#forge:dusts/gold',
                'minecraft:carrot',
                'minecraft:carrot',
                'minecraft:carrot',
                'minecraft:carrot'
            ],
            output: 'minecraft:golden_carrot',
            count: 4,
            cookingTime: 200,
            id: `${id_prefix}golden_carrot`
        },
        {
            inputs: [
                'naturesaura:crimson_meal',
                '#forge:dusts/gold',
                'minecraft:apple',
                'minecraft:apple',
                'minecraft:apple',
                'minecraft:apple'
            ],
            output: 'minecraft:golden_apple',
            count: 4,
            cookingTime: 200,
            id: `${id_prefix}golden_apple`
        },
        {
            inputs: ['naturesaura:crimson_meal', '#forge:dusts/charcoal', '#forge:dusts/sulfur'],
            output: 'minecraft:gunpowder',
            count: 4,
            cookingTime: 50,
            id: `${id_prefix}gunpowder`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            inputs: [`#forge:dyes/${color}`, '#enigmatica:candle_materials'],
            output: `quark:${color}_candle`,
            container: 'minecraft:string',
            count: 1,
            cookingTime: 50,
            id: `quark:building/crafting/candles/${color}_candle`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cooking';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = { item: recipe.output, count: recipe.count };
        if (recipe.container) {
            recipe.container = { item: recipe.container };
        }

        event.custom(recipe).id(recipe.id);
    });
});
