onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/thermal/press/';
    const recipes = [
        {
            inputs: [
                Item.of('4x kubejs:superheated_steel_ingot'),
                Ingredient.of('#thermal:crafting/dies/packing_2x2')
            ],
            output: Item.of('2x kubejs:hot_compressed_iron_ingot'),
            energy: 1000,
            id: `${id_prefix}hot_compressed_iron_ingot`
        },
        {
            inputs: [
                Item.of('4x kubejs:superheated_steel_block'),
                Ingredient.of('#thermal:crafting/dies/packing_2x2')
            ],
            output: Item.of('2x kubejs:hot_compressed_iron_block'),
            energy: 9000,
            id: `${id_prefix}hot_compressed_iron_block`
        },
        {
            inputs: [
                'appliedenergistics2:printed_calculation_processor',
                Ingredient.of('#thermal:crafting/dies/coin')
            ],
            output: 'appliedenergistics2:calculation_processor',
            energy: 3000,
            id: 'appliedenergistics2:calculation_processor'
        },
        {
            inputs: [
                'appliedenergistics2:printed_logic_processor',
                Ingredient.of('#thermal:crafting/dies/coin')
            ],
            output: 'appliedenergistics2:logic_processor',
            energy: 3000 * 2,
            id: 'appliedenergistics2:logic_processor'
        },
        {
            inputs: [
                'appliedenergistics2:printed_engineering_processor',
                Ingredient.of('#thermal:crafting/dies/coin')
            ],
            output: 'appliedenergistics2:engineering_processor',
            energy: 3000 * 3,
            id: 'appliedenergistics2:engineering_processor'
        },
        {
            inputs: ['immersiveengineering:thermoelectric_generator'],
            output: 'powah:thermoelectric_plate',
            energy: 1000,
            id: `${id_prefix}thermoelectric_plate`
        },
        {
            inputs: [
                Item.of('tconstruct:large_plate', '{Material:"tconstruct:invar"}'),
                'immersiveengineering:mold_gear'
            ],
            output: 'thermal:saw_blade',
            energy: 9000,
            id: 'thermal:saw_blade'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
