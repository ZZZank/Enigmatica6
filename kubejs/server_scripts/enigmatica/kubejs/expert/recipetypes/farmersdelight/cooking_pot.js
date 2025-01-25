
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/farmersdelight/cooking/';
    const recipes = [
        {
            inputs: ['naturesaura:crimson_meal', '#forge:dusts/coal'],
            output: 'emendatusenigmatica:sulfur_dust',
            cookingTime: 200,
            id: `${id_prefix}sulfur_dust`
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
            output: '5x minecraft:leather',
            cookingTime: 200,
            id: `${id_prefix}leather`
        },
        {
            inputs: ['#forge:dusts/gold', '#forge:dusts/ender'],
            output: '2x redstone_arsenal:flux_dust',
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
            output: '4x minecraft:glistering_melon_slice',
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
            output: '4x minecraft:golden_carrot',
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
            output: '4x minecraft:golden_apple',
            cookingTime: 200,
            id: `${id_prefix}golden_apple`
        },
        {
            inputs: ['naturesaura:crimson_meal', '#forge:dusts/charcoal', '#forge:dusts/sulfur'],
            output: '4x minecraft:gunpowder',
            cookingTime: 50,
            id: `${id_prefix}gunpowder`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            inputs: [`#forge:dyes/${color}`, '#enigmatica:candle_materials'],
            output: `quark:${color}_candle`,
            container: 'minecraft:string',
            cookingTime: 50,
            id: `quark:building/crafting/candles/${color}_candle`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'farmersdelight:cooking';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = toJsonWithCount(recipe.output);
        if (recipe.container) {
            recipe.container = { item: recipe.container };
        }

        event.custom(recipe).id(recipe.id);
    });
});
