onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/mechanical_crafting/';

    const recipes = [
        {
            output: 'astralsorcery:observatory',
            pattern: [
                '      ABC',
                '     DBCB',
                '    EBCBA',
                '   FBJBG ',
                '  ABKBH  ',
                ' LB BI   ',
                'M CBAO   ',
                'MN LPO   ',
                'MMMOOO   '
            ],
            key: {
                A: 'resourcefulbees:tainted_honeycomb',
                B: 'astralsorcery:marble_runed',
                C: 'kubejs:observatory_lens',
                D: 'quark:lime_rune',
                E: 'quark:orange_rune',
                F: 'quark:red_rune',
                G: 'quark:magenta_rune',
                H: 'quark:blue_rune',
                I: 'quark:light_blue_rune',
                J: 'quark:black_rune',
                K: '#botania:runes/asgard',
                L: '#forge:nuggets/brass',
                M: '#forge:plates/brass',
                N: '#create:seats',
                O: 'create:brass_casing',
                P: 'immersiveengineering:furnace_heater'
            },
            id: 'astralsorcery:observatory'
        },
        {
            output: 'masterfulmachinery:auto_iridescent_altar_controller',
            pattern: ['ABCBA', 'BDEDB', 'CJFKC', 'BGHGB', 'ABIBA'],
            key: {
                A: 'thermal:enderium_glass',
                B: '#forge:plates/steel',
                C: 'xnet:advanced_connector_green',
                D: 'xnet:netcable_green',
                E: Item.of('rftoolsbase:tablet').ignoreNBT(),
                F: '#industrialforegoing:machine_frame/supreme',
                G: 'xnet:netcable_red',
                H: '#forge:circuits/ultimate',
                I: 'xnet:advanced_connector_red',
                J: 'kubejs:bright_constellation_box',
                K: 'kubejs:dim_constellation_box'
            },
            id: `${id_prefix}auto_iridescent_altar_controller`
        },
        {
            output: 'masterfulmachinery:stellar_neutron_activator_controller',
            pattern: ['ABCBA', 'BDDDB', 'EDFDE', 'BDDDB', 'ABCBA'],
            key: {
                A: 'immersiveengineering:hempcrete',
                B: 'mekanism:thermal_evaporation_block',
                C: Item.of('mekanism:resistive_heater').ignoreNBT(),
                D: 'mekanism:ultimate_thermodynamic_conductor',
                E: 'mekanism:thermal_evaporation_valve',
                F: 'mekanism:thermal_evaporation_controller'
            },
            id: `${id_prefix}stellar_neutron_activator_controller`
        },
        {
            output: 'masterfulmachinery:industrial_deuterium_plant_controller',
            pattern: ['ABCBA', 'CDFDC', 'BFGFB', 'CDEDC', 'ABCBA'],
            key: {
                A: 'immersiveengineering:concrete_leaded',
                B: '#forge:plates/steel',
                C: '#forge:plates/osmium',
                D: '#forge:rods/osmium',
                E: '#forge:circuits/ultimate',
                F: 'mekanism:electrolytic_core',
                G: '#industrialforegoing:machine_frame/supreme'
            },
            id: `${id_prefix}industrial_deuterium_plant_controller`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
