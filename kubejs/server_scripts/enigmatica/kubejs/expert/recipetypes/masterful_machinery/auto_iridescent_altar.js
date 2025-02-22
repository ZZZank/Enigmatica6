onEventExpert('recipes', (event) => {

    const id_prefix = 'enigmatica:expert/masterful_machinery/auto_iridescent_altar/';
    const recipes = [
        {
            outputs: [
                {
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_fire'
                },
                {
                    chance: 0.1,
                    data: 'astralsorcery:colored_lens_fire'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x astralsorcery:resonating_gem',
                '2x quark:orange_rune',
                '2x bloodmagic:smelting_anointment_l',
                'astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_fire`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_break'
                },
                {
                    chance: 0.1,
                    data: 'astralsorcery:colored_lens_break'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x astralsorcery:resonating_gem',
                '2x quark:yellow_rune',
                '2x bloodmagic:hidden_knowledge_anointment_l',
                'astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_break`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_growth'
                },
                {
                    chance: 0.1,
                    data: 'astralsorcery:colored_lens_growth'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x naturesaura:gold_powder',
                '2x quark:lime_rune',
                '2x bloodmagic:fortune_anointment_l',
                'astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_growth`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_damage'
                },
                {
                    chance: 0.1,
                    data: 'astralsorcery:colored_lens_damage'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x astralsorcery:resonating_gem',
                '2x quark:red_rune',
                '2x bloodmagic:melee_anointment_l',
                'astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_damage`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_regeneration'
                },
                {
                    chance: 0.1,
                    data: 'astralsorcery:colored_lens_regeneration'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x astralsorcery:resonating_gem',
                '2x quark:pink_rune',
                '2x bloodmagic:holy_water_anointment_l',
                'astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_regeneration`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_push'
                },
                {
                    chance: 0.1,
                    data: 'astralsorcery:colored_lens_push'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x astralsorcery:resonating_gem',
                '2x quark:light_blue_rune',
                '2x bloodmagic:bow_velocity_anointment_l',
                'astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_push`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_spectral'
                },
                {
                    chance: 0.1,
                    data: 'astralsorcery:colored_lens_spectral'
                }
            ],
            inputs: [
                '4x atum:ectoplasm',
                '4x astralsorcery:resonating_gem',
                '2x quark:purple_rune',
                '2x bloodmagic:silk_touch_anointment_l',
                'astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_spectral`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'astralsorcery:altar_radiance'
                }
            ],
            inputs: [
                '4x create:shadow_steel_casing',
                '4x redstone_arsenal:flux_gem',
                '4x astralsorcery:resonating_gem',
                '2x astralsorcery:colored_lens_spectral',
                '2x bloodmagic:etherealslate',
                '#botania:runes/asgard',
                '#botania:runes/niflheim',
                '#botania:runes/alfheim',
                '#botania:runes/midgard',
                '#astralsorcery:crystals/attuned',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}altar_radiance`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'botania:gaia_spreader'
                }
            ],
            inputs: [
                '6x botania:bifrost_perm',
                '4x botania:life_essence',
                '2x #botania:runes/midgard',
                'astralsorcery:colored_lens_spectral',
                'botania:elven_spreader',
                'naturesaura:ancient_sapling',
                'mythicbotany:dream_cherry',
                '#forge:gems/dragonstone',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}gaia_spreader`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'botania:elven_spreader'
                }
            ],
            inputs: [
                '#forge:ingots/elementium',
                '8x botania:dreamwood',
                '2x botania:glimmering_dreamwood',
                'botania:spark',
                '2x #botania:runes/summer',
                '2x #botania:runes/air',
                'astralsorcery:colored_lens_push',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}elven_spreader`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'astralsorcery:chalice'
                }
            ],
            inputs: [
                '4x #forge:ingots/gold',
                '4x astralsorcery:resonating_gem',
                '2x #forge:ingots/starmetal',
                '3x astralsorcery:black_marble_raw',
                '5x #forge:gems/aquamarine',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}chalice`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: '2x mekanism:solar_neutron_activator'
                }
            ],
            inputs: [
                '5x kubejs:observatory_lens',
                '5x powah:solar_panel_niotic',
                '5x mekanism:hdpe_sheet',
                '#industrialforegoing:machine_frame/advanced',
                '2x #forge:circuits/elite',
                '2x #forge:plates/enderium',
                '2x #forge:dusts/iesnium',
                '2x #forge:dusts/starmetal',
                '2x #forge:dusts/end_stone',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}solar_neutron_activator`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.inputs = recipe.inputs.map((val) => toMMJson(val));
        recipe.outputs = recipe.outputs.map((val) => toMMJson(val));
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_iridescent_altar_structure';
        recipe.controllerId = 'auto_iridescent_altar';
        event.custom(recipe).id(recipe.id);
    });
});
