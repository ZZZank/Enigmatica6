
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */
    const recipes = [
        {
            output: 'ae2wtlib:magnet_card',
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'thermal:flux_magnet',
                B: 'appliedenergistics2:advanced_card',
                C: 'appliedenergistics2:annihilation_plane'
            },
            id: 'ae2wtlib:magnet_card'
        },
        {
            output: '2x ae2wtlib:infinity_booster_card',
            pattern: ['A A', 'BCB', ' D '],
            key: {
                A: 'appliedenergistics2:advanced_card',
                B: 'appliedenergistics2:fluix_pearl',
                C: 'aeinfinitybooster:dimension_card',
                D: 'appliedenergistics2:wireless_receiver'
            },
            id: 'ae2wtlib:infinity_booster_card'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
