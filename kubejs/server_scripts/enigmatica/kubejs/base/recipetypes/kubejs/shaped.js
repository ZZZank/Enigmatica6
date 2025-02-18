
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/kubejs/';
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
            output: 'kubejs:basic_lenses_package',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'atum:purple_stained_crystal_glass',
                B: 'occultism:spirit_attuned_gem',
                C: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}basic_lenses_package`
        },
        {
            output: Item.of('kubejs:red_nether_brick', 2),
            pattern: ['AB', 'BA'],
            key: {
                A: 'minecraft:nether_brick',
                B: 'minecraft:nether_wart'
            },
            id: `${id_prefix}red_nether_brick`
        },

        {
            output: 'kubejs:imaharas_indelible_electrodes',
            pattern: ['AAA', ' B '],
            key: {
                A: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0,Unbreakable:1}'),
                B: 'mekanism:cardboard_box'
            },
            id: `${id_prefix}imaharas_indelible_electrodes`
        },
        {
            output: 'kubejs:bright_constellation_box',
            pattern: ['BAC', 'D E', ' F '],
            key: {
                A: 'mekanism:cardboard_box',
                B: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:aevitas"}}'
                ).weakNBT(),
                C: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:armara"}}'
                ).weakNBT(),
                D: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:discidia"}}'
                ).weakNBT(),
                E: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:evorsio"}}'
                ).weakNBT(),
                F: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:vicio"}}'
                ).weakNBT()
            },
            id: `${id_prefix}bright_constellation_box`
        },
        {
            output: 'kubejs:dim_constellation_box',
            pattern: ['CAD', 'E F', 'GHI'],
            key: {
                A: 'mekanism:cardboard_box',
                C: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:octans"}}'
                ).weakNBT(),
                D: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:horologium"}}'
                ).weakNBT(),
                E: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:lucerna"}}'
                ).weakNBT(),
                F: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:mineralis"}}'
                ).weakNBT(),
                G: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:bootes"}}'
                ).weakNBT(),
                H: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:fornax"}}'
                ).weakNBT(),
                I: Item.of(
                    'astralsorcery:attuned_celestial_crystal',
                    '{astralsorcery:{constellationName:"astralsorcery:pelotrio"}}'
                ).weakNBT()
            },
            id: `${id_prefix}dim_constellation_box`
        },

        {
            output: 'kubejs:amadron_survey_tools',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: Item.of('pneumaticcraft:air_canister', '{"pneumaticcraft:air":30000}').weakNBT(),
                B: 'pneumaticcraft:reinforced_chest',
                C: Item.of('mekanismtools:steel_paxel', '{Damage:0}').weakNBT(),
                D: 'mekanism:cardboard_box',
                E: 'minecraft:compass',
                F: 'immersiveengineering:survey_tools'
            },
            id: `${id_prefix}amadron_survey_tools`
        },
        {
            output: 'kubejs:pewter_ingot',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:nuggets/pewter'
            },
            id: `${id_prefix}pewter_nugget_to_ingot`
        },
        {
            output: 'kubejs:matter_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'appliedenergistics2:matter_ball'
            },
            id: `${id_prefix}matter_ball_to_block`
        },
        {
            output: '2x kubejs:pewter_inlay',
            pattern: [' A ', 'A A', ' A '],
            key: {
                A: '#forge:ingots/pewter'
            },
            id: `${id_prefix}pewter_inlay`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
