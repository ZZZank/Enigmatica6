onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/metal_press/';
    const recipes = [
        {
            output: 'powah:thermoelectric_plate',
            input: 'immersiveengineering:thermoelectric_generator',
            mold: '#thermal:crafting/dies/plate',
            id: `${id_prefix}thermoelectric_plate`
        },
        {
            output: 'appliedenergistics2:calculation_processor',
            input: 'appliedenergistics2:printed_calculation_processor',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}calculation_processor`
        },
        {
            output: 'appliedenergistics2:logic_processor',
            input: 'appliedenergistics2:printed_logic_processor',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}logic_processor`
        },
        {
            output: 'appliedenergistics2:engineering_processor',
            input: 'appliedenergistics2:printed_engineering_processor',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}engineering_processor`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .metal_press(recipe.output, recipe.input, recipe.mold)
            .id(recipe.id);
    });
});
