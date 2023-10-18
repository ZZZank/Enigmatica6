'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/thermal/compression_fuel/';

    let multiplier = 10;
    let data = {
        recipes: [{ input: 'industrialforegoing:biofuel', energy: 100000 }]
    };

    data.recipes.forEach((recipe) => {
        //event.recipes.thermal.compression_fuel(recipe.fluid).energy(recipe.energy * multiplier);
        fallback_id(
            event.recipes.thermal
                .compression_fuel(Fluid.of(recipe.input, 1000))
                .energy(recipe.energy * multiplier),
            id_prefix
        );
    });
});
