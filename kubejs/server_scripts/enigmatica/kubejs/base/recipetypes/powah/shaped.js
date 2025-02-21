onEvent('recipes', (event) => {
    const id_prefix = 'powah:base/shaped/';
    const recipes = [];

    powahTiers.forEach((tier) => {
        if (tier == 'basic' || tier == 'starter') {
            return;
        }
        let capacitor = 'powah:capacitor_' + tier;
        let crystal = 'powah:crystal_' + tier;
        let cable = 'powah:energy_cable_' + tier;

        if (tier == 'hardened') {
            crystal = 'powah:steel_energized';
        }

        const lower_tiers = getLowerTiers(powahTiers, tier);

        recipes.push(
            {
                output: Item.of(`powah:energy_cell_${tier}`),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: lower_tiers.map((item) => `powah:energy_cell_${item}`)
                },
                id: `${id_prefix}energy_cell_${tier}`
            },
            {
                output: Item.of(`powah:battery_${tier}`),
                pattern: [' A ', 'BCB', ' B '],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: lower_tiers.map((item) => `powah:battery_${item}`)
                },
                id: `${id_prefix}battery_${tier}`
            },
            {
                output: Item.of(`powah:solar_panel_${tier}`),
                pattern: ['BCB', 'AAA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: lower_tiers.map((item) => `powah:solar_panel_${item}`)
                },
                id: `${id_prefix}solar_panel_${tier}`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
