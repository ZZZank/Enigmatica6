onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/enigmatica/';
    const recipes = [
        // {
        //     secondary_output: Item.of('minecraft:sugar').chance(0.5),
        //     output: Item.of('minecraft:diamond', 8),
        //     input: Item.of('minecraft:lead'),
        //     experience: 0.5,
        //     duration: 100,
        //     ignore_occultism_multiplier: true
        // }

        {
            secondary_output: Item.of('kubejs:basalt_powder').chance(0.5),
            output: Item.of('kubejs:basalt_powder', 4),
            input: Ingredient.of('#forge:stones/basalt'),
            experience: 0.5,
            duration: 100,
            ignore_occultism_multiplier: true,
            id_suffix: 'basalt_powder'
        },
        {
            secondary_output: Item.of('waystones:warp_dust').chance(0.15),
            output: Item.of('waystones:warp_dust', 4),
            input: Ingredient.of('waystones:warp_stone'),
            experience: 0.5,
            duration: 100,
            ignore_occultism_multiplier: true,
            id_suffix: 'warp_dust'
        }
    ];

    let recipetypes_crushing = (event, recipe) => {
        // pedestals
        // event
        //     .custom({
        //         type: 'pedestals:pedestal_crushing',
        //         ingredient: recipe.input,
        //         result: recipe.output
        //     })
        //     .id(`${id_prefix}/pedestal_crushing/${recipe.id_suffix}`);

        // occultism
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: recipe.input,
                result: recipe.output,
                crushing_time: recipe.duration,
                ignore_crushing_multiplier: recipe.ignore_occultism_multiplier
            })
            .id(`${id_prefix}/occultism_crushing/${recipe.id_suffix}`);

        // astralsorcery
        event
            .custom({
                type: 'astralsorcery:infuser',
                fluidInput: 'astralsorcery:liquid_starlight',
                input: recipe.input,
                output: recipe.output,
                consumptionChance: 0.1,
                duration: recipe.duration,
                consumeMultipleFluids: false,
                acceptChaliceInput: true,
                copyNBTToOutputs: false
            })
            .id(`${id_prefix}/astralsorcery_infuser/${recipe.id_suffix}`);

        // industrialforegoing
        event
            .custom({
                type: 'industrialforegoing:crusher',
                input: recipe.input,
                output: recipe.output
            })
            .id(`${id_prefix}/industrialforegoing_crusher/${recipe.id_suffix}`);

        // thermal
        event.recipes.thermal
            .pulverizer([recipe.output, recipe.secondary_output], recipe.input)
            .experience(recipe.experience)
            .id(`${id_prefix}/thermal_pulverizer/${recipe.id_suffix}`);

        // mekanism
        event.recipes.mekanism
            .enriching(recipe.output, recipe.input)
            .id(`${id_prefix}/pedestals/${recipe.id_suffix}`);

        // immersiveengineering
        event.recipes.immersiveengineering
            .crusher(recipe.output, recipe.input, recipe.secondary_output)
            .id(`${id_prefix}/immersiveengineering_crusher/${recipe.id_suffix}`);

        // create
        event.recipes.create
            .milling([recipe.output, recipe.secondary_output], recipe.input)
            .id(`${id_prefix}/create_milling/${recipe.id_suffix}`);

        // ars_nouveau
        event
            .custom({
                type: 'ars_nouveau:crush',
                input: Ingredient.of(recipe.input).toJson(),
                output: [recipe.output.withChance(1.0), recipe.secondary_output]
            })
            .id(`${id_prefix}/ars_nouveau_crushing/${recipe.id_suffix}`);
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
