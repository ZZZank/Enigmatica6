onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/industrialforegoing/dissolution_chamber/';
    const recipes = [
        {
            inputs: [
                'appliedenergistics2:wireless_booster',
                'appliedenergistics2:wireless_booster',
                'appliedenergistics2:wireless_booster',
                'xnet:antenna_dish',
                'xnet:antenna_dish',
                '#forge:ingots/aeternium',
                '#forge:ingots/aeternium',
                '#forge:ingots/aeternium'
            ],
            inputFluid: 'tconstruct:molten_slimesteel',
            inputFluidAmount: 1296,
            processingTime: 400,
            outputItem: { item: 'aeinfinitybooster:infinity_card', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'aeinfinitybooster:infinity_card'
        },
        {
            inputs: [
                'aeinfinitybooster:infinity_card',
                'powah:ender_gate_nitro',
                'aeinfinitybooster:infinity_card',
                'powah:ender_gate_nitro',
                'powah:ender_gate_nitro',
                'aeinfinitybooster:infinity_card',
                'powah:ender_gate_nitro',
                'aeinfinitybooster:infinity_card'
            ],
            inputFluid: 'kubejs:pink_ender_slime',
            inputFluidAmount: 1250,
            processingTime: 400,
            outputItem: { item: 'aeinfinitybooster:dimension_card', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'aeinfinitybooster:dimension_card'
        }
    ];
    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event
            .custom({
                type: 'industrialforegoing:dissolution_chamber',
                input: ingredients,
                inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
                processingTime: recipe.processingTime,
                output: recipe.outputItem,
                outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
            })
            .id(recipe.id);
    });
});
