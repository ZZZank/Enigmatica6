

onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/masterful_machinery/auto_iridescent_altar/';
    const recipes = [
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'astralsorcery:shifting_star'
                }
            ],
            inputs: [
                '4x #forge:gems/niotic',
                '2x bloodmagic:reagentbinding',
                '2x #forge:dusts/starmetal',
                '4x astralsorcery:illumination_powder',
                'industrialforegoing:ether_gas_bucket',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'astralsorcery:mantle'
                }
            ],
            inputs: [
                'botania:balance_cloak',
                'astralsorcery:celestial_crystal',
                'magicfeather:magicfeather',

                '4x #forge:dusts/starmetal',
                '4x astralsorcery:illumination_powder',
                '4x astralsorcery:resonating_gem',
                '#botania:runes/mana',
                '#botania:runes/pride',
                '#botania:runes/envy',
                '#forge:storage_blocks/starmetal',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}mantle`
        },

        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'kubejs:observatory_lens'
                },
                {
                    chance: 0.05,
                    data: 'kubejs:observatory_lens'
                }
            ],

            inputs: [
                '8x #forge:ingots/shadow_steel',
                '4x #botania:runes/air',
                '4x astralsorcery:colored_lens_spectral',
                '4x astralsorcery:resonating_gem',
                '4x astralsorcery:illumination_powder',
                '2x astralsorcery:nocturnal_powder',
                '2x #forge:dusts/starmetal',
                'astralsorcery:attuned_celestial_crystal',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 200,
            id: `${id_prefix}observatory_lens`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'astralsorcery:shifting_star_vicio'
                }
            ],
            inputs: [
                'astralsorcery:shifting_star',
                '2x #forge:ingots/starmetal',
                '6x #forge:dusts/starmetal',
                '2x astralsorcery:illumination_powder',
                '2x bloodmagic:defaultcrystal',
                '2x bloodmagic:reagentair',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_vicio`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'astralsorcery:shifting_star_evorsio'
                }
            ],
            inputs: [
                'astralsorcery:shifting_star',
                '2x #forge:ingots/starmetal',
                '6x #forge:dusts/starmetal',
                '2x astralsorcery:illumination_powder',
                '2x bloodmagic:destructivecrystal',
                '2x bloodmagic:reagentfastminer',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_evorsio`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'astralsorcery:shifting_star_discidia'
                }
            ],
            inputs: [
                'astralsorcery:shifting_star',
                '2x #forge:ingots/starmetal',
                '6x #forge:dusts/starmetal',
                '2x astralsorcery:illumination_powder',
                '2x bloodmagic:vengefulcrystal',
                '2x bloodmagic:reagentlava',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_discidia`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'astralsorcery:shifting_star_armara'
                }
            ],
            inputs: [
                'astralsorcery:shifting_star',
                '2x #forge:ingots/starmetal',
                '6x #forge:dusts/starmetal',
                '2x astralsorcery:illumination_powder',
                '2x bloodmagic:steadfastcrystal',
                '2x bloodmagic:reagentbinding',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_armara`
        },
        {
            outputs: [
                {
                    chance: 1.0,
                    data: 'astralsorcery:shifting_star_aevitas'
                }
            ],
            inputs: [
                'astralsorcery:shifting_star',
                '2x #forge:ingots/starmetal',
                '6x #forge:dusts/starmetal',
                '2x astralsorcery:illumination_powder',
                '2x bloodmagic:corrosivecrystal',
                '2x bloodmagic:reagentgrowth',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_aevitas`
        }
    ];

    recipes.forEach((recipe) => {
        // @ts-ignore
        recipe.inputs = recipe.inputs.map((val) => toMMJson(val));
        // @ts-ignore
        recipe.outputs = recipe.outputs.map((val) => toMMJson(val));
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_iridescent_altar_structure';
        recipe.controllerId = 'auto_iridescent_altar';
        // @ts-ignore
        event.custom(recipe).id(recipe.id);
    });
});
