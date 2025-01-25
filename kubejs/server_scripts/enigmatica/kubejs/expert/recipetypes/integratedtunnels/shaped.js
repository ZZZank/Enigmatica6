
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/integratedtunnels/';
    const recipes = [
        {
            output: Item.of('integratedtunnels:part_interface_energy', 4),
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'integrateddynamics:menril_wood',
                B: 'powah:capacitor_hardened',
                C: 'integratedterminals:menril_glass',
                D: 'thermal:rf_coil'
            },
            id: 'integratedtunnels:crafting/part_interface_energy'
        },
        {
            output: Item.of('integratedtunnels:part_interface_fluid', 4),
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'integrateddynamics:menril_wood',
                B: ['pneumaticcraft:medium_tank', 'mekanism:advanced_fluid_tank'],
                C: 'integratedterminals:menril_glass',
                D: 'pneumaticcraft:logistics_core'
            },
            id: 'integratedtunnels:crafting/part_interface_fluid'
        },
        {
            output: Item.of('integratedtunnels:part_interface_item', 4),
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'integrateddynamics:menril_wood',
                B: 'ironchest:iron_chest',
                C: 'integratedterminals:menril_glass',
                D: 'botania:corporea_funnel'
            },
            id: `integratedtunnels:crafting/part_interface_item`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
