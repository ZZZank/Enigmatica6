onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const id_prefix = 'enigmatica:expert/astralsorcery/shaped/';
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
            output: Item.of('astralsorcery:celestial_gateway', 2, '{astralsorcery:{}}'),
            pattern: ['ABA', 'ACA', 'DED'],
            key: {
                A: 'atum:black_stained_crystal_glass_pane',
                B: 'botania:light_relay',
                C: '#waystones:waystone',
                D: 'emendatusenigmatica:brass_plate',
                E: 'astralsorcery:marble_runed'
            },
            id: id_prefix + 'celestial_gateway'
        },
        {
            output: 'astralsorcery:linking_tool',
            pattern: [' CD', ' AC', 'AB '],
            key: {
                A: 'betterendforge:leather_wrapped_stick',
                B: '#forge:gems/aquamarine',
                C: '#forge:rods/brass',
                D: [
                    'astralsorcery:rock_crystal',
                    'astralsorcery:celestial_crystal',
                    'astralsorcery:attuned_rock_crystal',
                    'astralsorcery:attuned_celestial_crystal'
                ]
            },
            id: 'astralsorcery:altar/linking_tool'
        },
        {
            output: 'astralsorcery:wand',
            pattern: [' CD', ' AC', 'AB '],
            key: {
                A: '#forge:rods/silver',
                B: 'betterendforge:leather_stripe',
                C: '#forge:gems/aquamarine',
                D: '#forge:dusts/flux_infused'
            },
            id: 'astralsorcery:altar/wand'
        },
        {
            output: 'astralsorcery:grapple_wand',
            pattern: [' CD', 'CA ', 'AB '],
            key: {
                A: '#forge:rods/silver',
                B: 'betterendforge:leather_stripe',
                C: '#forge:gems/aquamarine',
                D: 'alexsmobs:guster_eye'
            },
            id: 'astralsorcery:altar/grapple_wand'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
