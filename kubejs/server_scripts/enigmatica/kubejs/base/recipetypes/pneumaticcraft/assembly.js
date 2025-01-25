
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/assembly_/';

    const recipes = [
        {
            input: '4x #forge:ingots/compressed_iron',
            output: '8x pneumaticcraft:elevator_frame',
            program: 'drill',
            id: `${id_prefix}elevator_frame`
        },
        {
            input: '6x pneumaticcraft:reinforced_brick_wall',
            output: '2x pneumaticcraft:cannon_barrel',
            program: 'drill',
            id: `${id_prefix}cannon_barrel`
        }
    ];

    const masteries = [
        'automation',
        'botanical',
        'astronomy',
        'alchemy',
        'ritual',
        'aura',
        'engineering',
        'energistics',
        'dimensional',
        'battle',
        'excavation',
        'culinary'
    ];

    masteries.forEach((mastery) => {
        recipes.push({
            input: `50x kubejs:${mastery}_mastery_shard`,
            output: `kubejs:${mastery}_mastery_token`,
            program: 'laser',
            id: `${id_prefix}${mastery}_mastery_token`
        });
    });

    recipes.forEach((recipe) => {
        const input = toJsonWithCount(recipe.input);
        const output = toJsonWithCount(recipe.output);
        input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: input,
                result: output,
                program: recipe.program
            })
            .id(recipe.id);
    });
});
