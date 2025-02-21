onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/squeezer/';

    const recipes = [
        {
            inputs: [
                'supplementaries:flax_seeds',
                'atum:flax_seeds',
                'undergarden:gloomgourd_seeds',
                'sushigocrafting:rice_seeds',
                'sushigocrafting:cucumber_seeds',
                'sushigocrafting:soy_seeds',
                'sushigocrafting:wasabi_seeds',
                'sushigocrafting:sesame_seeds',
                'environmental:cattail_seeds'
            ],
            value: 20
        },

        {
            inputs: [
                'betterendforge:glowing_pillar_seed',
                'betterendforge:lumecorn_seed',
                'betterendforge:lanceleaf_seed',
                'betterendforge:end_lotus_seed',
                'betterendforge:end_lily_seed',
                'betterendforge:blue_vine_seed',
                'betterendforge:amber_root_seed',
                'betterendforge:bulb_vine_seed',
                'betterendforge:blossom_berry_seed',
                'betterendforge:shadow_berry'
            ],
            value: 40
        },

        {
            inputs: ['occultism:datura_seeds'],
            value: 60
        },

        {
            inputs: ['atum:emmer_seeds'],
            value: 80
        }

        // { inputs: ['simplefarming:grape_seeds'], value: 120 }
    ];

    recipes.forEach((input) => {
        input.inputs.forEach((seed) => {
            fallback_id(
                event.custom({
                    type: 'immersiveengineering:squeezer',
                    fluid: {
                        fluid: 'immersiveengineering:plantoil',
                        amount: input.value
                    },
                    input: {
                        item: seed
                    },
                    energy: 6400
                }),
                id_prefix
            );
        });
    });
});
