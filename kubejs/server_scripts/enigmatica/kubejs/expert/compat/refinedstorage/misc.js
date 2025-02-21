onEvent('recipes', (event) => {
    if (global.isNormalMode || !Platform.isLoaded('refinedstorage')) {
        return;
    }
    const id_prefix = 'enlightened6:expert/refinedstorage/misc/';

    const mekInfusing = [
        {
            output: 'refinedstorage:stack_upgrade',
            input: Item.of('4x refinedstorage:speed_upgrade'),
            infusionInput: 'mekanism:redstone',
            infusionAmount: 80,
            id: 'refinedstorage:stack_upgrade'
        }
    ];

    const alloying = [
        {
            inputs: ['#forge:ingots/compressed_iron', '#forge:gems/quartz'],
            output: Item.of('refinedstorage:quartz_enriched_iron', 2)
        }
    ];

    event
        .custom({
            type: 'pneumaticcraft:pressure_chamber',
            inputs: [
                '4x #forge:ingots/pewter',
                '4x refinedstorage:quartz_enriched_iron',
                '4x tconstruct:seared_brick',
                'thermal:machine_frame'
            ].map((str) => {
                let parsed = toJsonWithCount(str);
                parsed.type = 'pneumaticcraft:stacked_item';
                return parsed;
            }),
            pressure: 2.5,
            results: [{ item: 'refinedstorage:machine_casing', count: 2 }]
        })
        .id('refinedstorage:machine_casing');

    mekInfusing.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });

    alloying.forEach((recipe) => {
        if (!recipe.smelttime) {
            recipe.smelttime = 200;
        }
        if (!recipe.experience) {
            recipe.experience = 0;
        }
        // create
        fallback_id(event.recipes.create.mixing(recipe.output, recipe.inputs).heated(), id_prefix);
        // immersiveengineering
        fallback_id(
            event.recipes.immersiveengineering.alloy(recipe.output, recipe.inputs[0], recipe.inputs[1]),
            id_prefix
        );
        fallback_id(
            event.recipes.immersiveengineering.arc_furnace([recipe.output], recipe.inputs[0], [
                recipe.inputs[1]
            ]),
            id_prefix
        );
        // thermal
        fallback_id(event.recipes.thermal.smelter([recipe.output], recipe.inputs), id_prefix);
    });
});
