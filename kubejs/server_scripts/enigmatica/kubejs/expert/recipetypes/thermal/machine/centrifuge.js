'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/centrifuge/';
    const recipes = [
        {
            input: 'kubejs:ground_meat',
            outputs: [
                Item.of('minecraft:bone_meal').withChance(0.15),
                Fluid.of('industrialforegoing:meat', 100)
            ],
            energy: 2000,
            id: `${id_prefix}meat`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.centrifuge(recipe.outputs, recipe.input).energy(recipe.energy).id(recipe.id);
    });
});
