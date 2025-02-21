onEvent('recipes', (event) => {
    /*
    Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level

    Iridescent Altar
    altar_type: 3
    max_starlight: 8000

    */

    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/astralsorcery/altar/';
    const recipes = [
        /// Iridescent Altar Recipes
        {
            output: Item.of('resourcefulbees:t4_apiary', 1),
            pattern: ['__B__', '_C_D_', 'E_A_E', '_D_C_', '__B__'],
            key: {
                A: { item: 'resourcefulbees:t3_apiary' },
                B: Item.of('naturesaura:effect_powder', { effect: 'naturesaura:animal' }).toJson(),
                C: { tag: 'resourcefulbees:resourceful_honeycomb_block' },
                D: { tag: 'resourcefulbees:resourceful_honey_block' },
                E: { item: 'astralsorcery:illumination_powder' }
            },
            relay_inputs: [
                { item: 'naturesaura:token_euphoria' },
                { item: 'botania:rune_lust' },
                { item: 'ars_nouveau:ritual_fertility' }
            ],
            duration: 600,
            starlight: 7500,
            focus_constellation: 'astralsorcery:aevitas',
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'resourcefulbees:t4_apiary'
        },

        {
            output: Item.of('botania:gaia_spreader'),
            duration: 720,
            starlight: 6400,
            pattern: ['_____', '_AAA_', '_BCD_', '_AAA_', '_____'],
            key: {
                A: { item: 'botania:bifrost_perm' },
                B: { tag: 'forge:gems/dragonstone' },
                C: { item: 'botania:elven_spreader' },
                D: { item: 'astralsorcery:colored_lens_spectral' }
            },
            focus_constellation: 'astralsorcery:vicio',
            relay_inputs: [
                { item: 'mythicbotany:dream_cherry' },
                { item: 'botania:life_essence' },
                { item: 'mythicbotany:midgard_rune' },
                { item: 'botania:life_essence' },
                { item: 'naturesaura:ancient_sapling' },
                { item: 'botania:life_essence' },
                { item: 'mythicbotany:midgard_rune' },
                { item: 'botania:life_essence' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}gaia_spreader`
        },
        {
            output: Item.of('2x mekanism:solar_neutron_activator'),
            duration: 720,
            starlight: 7500,
            pattern: ['A___A', 'BAAAB', 'CBBBC', '_CCC_', 'DEFED'],
            key: {
                A: { item: 'kubejs:observatory_lens' },
                B: { item: 'powah:solar_panel_niotic' },
                C: { item: 'mekanism:hdpe_sheet' },
                D: { tag: 'forge:plates/enderium' },
                E: { tag: 'forge:circuits/elite' },
                F: { tag: 'industrialforegoing:machine_frame/advanced' }
            },
            focus_constellation: 'astralsorcery:horologium',
            relay_inputs: [
                { item: 'astralsorcery:stardust' },
                { item: 'occultism:crushed_end_stone' },
                { item: 'occultism:iesnium_dust' },
                { item: 'astralsorcery:stardust' },
                { item: 'occultism:crushed_end_stone' },
                { item: 'occultism:iesnium_dust' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'mekanism:solar_neutron_activator'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'astralsorcery:altar',
            altar_type: 3,
            duration: recipe.duration,
            starlight: recipe.starlight,
            pattern: recipe.pattern,
            key: recipe.key,
            output: [recipe.output.toResultJson()],
            effects: recipe.effects
        };

        if (recipe.relay_inputs) {
            constructed_recipe.relay_inputs = recipe.relay_inputs;
        }
        if (recipe.focus_constellation) {
            constructed_recipe.focus_constellation = recipe.focus_constellation;
        }
        if (recipe.recipe_class) {
            constructed_recipe.recipe_class = recipe.recipe_class;
        }

        event.custom(constructed_recipe).id(recipe.id);
    });
});
