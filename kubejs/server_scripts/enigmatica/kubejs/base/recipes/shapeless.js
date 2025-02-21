onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/shapeless/';
    const recipes = [
        {
            output: 'cookingforblockheads:milk_jar',
            inputs: [
                Item.of('supplementaries:jar', {
                    BlockEntityTag: { FluidHolder: { Count: 4, Fluid: 'minecraft:milk' }, CachedColor: -1 }
                }).weakNBT()
            ],
            id: 'cookingforblockheads:milk_jar'
        },
        { output: 'botania:enchanted_soil', inputs: ['minecraft:grass_block', 'botania:overgrowth_seed'] },
        { output: 'minecraft:sticky_piston', inputs: ['minecraft:piston', '#forge:slimeballs'] },
        { output: 'minecraft:flint', inputs: ['#forge:gravel', '#forge:gravel', '#forge:gravel'] },
        { output: 'minecraft:chest', inputs: ['#forge:chests/wooden'] },
        { output: '9x powah:uraninite', inputs: ['#forge:storage_blocks/uraninite'] },
        { output: '9x betterendforge:thallasium_nugget', inputs: ['#forge:ingots/thallasium'] },
        { output: '9x betterendforge:terminite_nugget', inputs: ['#forge:ingots/terminite'] },
        { output: '9x atum:nebu_drop', inputs: ['#forge:ingots/nebu'] },
        {
            output: '4x farmersdelight:milk_bottle',
            inputs: [
                'minecraft:milk_bucket',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle'
            ]
        },
        {
            output: 'minecraft:milk_bucket',
            inputs: [
                'minecraft:bucket',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle',
                'farmersdelight:milk_bottle'
            ]
        },
        { output: 'minecraft:wheat_seeds', inputs: ['minecraft:wheat'] },

        {
            output: Item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }),
            inputs: ['minecraft:book', '#forge:dyes/yellow']
        },
        { output: 'minecraft:crafting_table', inputs: ['#forge:workbenches'] },
        {
            output: Item.of('patchouli:guide_book', {
                'patchouli:book': 'resourcefulbees:fifty_shades_of_bees'
            }),
            inputs: ['minecraft:sugar', 'minecraft:book']
        },
        { output: 'ars_nouveau:mana_gem', inputs: ['emendatusenigmatica:arcane_gem'] },
        { output: 'emendatusenigmatica:arcane_gem', inputs: ['ars_nouveau:mana_gem'] },
        {
            output: 'botania:fertilizer',
            inputs: ['#forge:fertilizer', '#forge:dyes', '#forge:dyes', '#forge:dyes', '#forge:dyes']
        },
        { output: 'emendatusenigmatica:dimensional_gem', inputs: ['rftoolsbase:dimensionalshard'] },
        { output: 'rftoolsbase:dimensionalshard', inputs: ['emendatusenigmatica:dimensional_gem'] },

        {
            output: Item.of('#forge:shards/ender'),
            inputs: ['#forge:ores/ender', '#forge:tools/crafting_hammer']
        },
        {
            output: Item.of('#forge:shards/amber'),
            inputs: ['#forge:ores/amber', '#forge:tools/crafting_hammer']
        },

        { output: Item.of('#forge:shards/ender'), inputs: ['#forge:ores/ender', 'thermal:earth_charge'] },
        { output: Item.of('#forge:shards/amber'), inputs: ['#forge:ores/amber', 'thermal:earth_charge'] },

        {
            output: 'emendatusenigmatica:fluorite_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/fluorite']
        },
        {
            output: 'emendatusenigmatica:dimensional_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/dimensional']
        },
        {
            output: 'emendatusenigmatica:potassium_nitrate_dust',
            inputs: ['thermal:earth_charge', '#forge:ores/potassium_nitrate']
        },
        {
            output: 'betterendforge:endstone_dust',
            inputs: [
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone',
                '#forge:dusts/end_stone'
            ]
        },
        {
            output: Item.of('akashictome:tome', {
                'akashictome:data': {
                    industrialforegoing: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'industrialforegoing:industrial_foregoing'
                        }
                    },
                    tetra: {
                        id: 'tetra:holo',
                        Count: 1,
                        tag: {
                            'holo/frame': 'holo/frame',
                            'holo/core_material': 'frame/dim',
                            'holo/core': 'holo/core',
                            'holo/frame_material': 'core/ancient'
                        }
                    },
                    resourcefulbees: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'resourcefulbees:fifty_shades_of_bees'
                        }
                    },
                    astralsorcery: {
                        id: 'astralsorcery:tome',
                        Count: 1,
                        tag: {}
                    },
                    theoneprobe: {
                        id: 'theoneprobe:probenote',
                        Count: 1,
                        tag: {}
                    },
                    ftbquests: {
                        id: 'ftbquests:book',
                        Count: 1,
                        tag: {}
                    },
                    alexsmobs: {
                        id: 'alexsmobs:animal_dictionary',
                        Count: 1,
                        tag: {}
                    },
                    immersiveengineering: {
                        id: 'immersiveengineering:manual',
                        Count: 1,
                        tag: {}
                    },
                    botania: {
                        id: 'botania:lexicon',
                        Count: 1,
                        tag: {}
                    },
                    sushigocrafting: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'sushigocrafting:sushigocrafting'
                        }
                    },
                    thermal: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'thermal:guidebook'
                        }
                    },
                    patchouli: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'patchouli:modded_for_dummies'
                        }
                    },
                    rftoolsbase: {
                        id: 'rftoolsbase:manual',
                        Count: 1,
                        tag: {}
                    },
                    integrateddynamics: {
                        id: 'integrateddynamics:on_the_dynamics_of_integration',
                        Count: 1,
                        tag: {}
                    },
                    cookingforblockheads: {
                        id: 'cookingforblockheads:crafting_book',
                        Count: 1,
                        tag: {}
                    },
                    powah: {
                        id: 'powah:book',
                        Count: 1,
                        tag: {}
                    },
                    pneumaticcraft: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'pneumaticcraft:book'
                        }
                    },
                    naturesaura: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'naturesaura:book'
                        }
                    },
                    engineersdecor: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'engineersdecor:engineersdecor_manual'
                        }
                    },
                    occultism: {
                        id: 'occultism:dictionary_of_spirits',
                        Count: 1,
                        tag: {}
                    },
                    solcarrot: {
                        id: 'solcarrot:food_book',
                        Count: 1,
                        tag: {}
                    },
                    modularrouters: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'modularrouters:book'
                        }
                    },
                    ars_nouveau: {
                        id: 'ars_nouveau:worn_notebook',
                        Count: 1,
                        tag: {}
                    },
                    bloodmagic: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'bloodmagic:guide'
                        }
                    },
                    betterendforge: {
                        id: 'betterendforge:guidebook',
                        Count: 1,
                        tag: {}
                    },
                    littlelogistics: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'littlelogistics:guide'
                        }
                    },
                    tconstruct: {
                        id: 'tconstruct:encyclopedia',
                        Count: 1,
                        tag: {}
                    },
                    apotheosis: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: {
                            'patchouli:book': 'apotheosis:apoth_chronicle'
                        }
                    },
                    supplementaries: {
                        id: 'patchouli:guide_book',
                        Count: 1,
                        tag: { 'patchouli:book': 'supplementaries:supplementaries_guide' }
                    }
                }
            }),
            inputs: ['minecraft:book', '#forge:bookshelves']
        },
        { output: '9x occultism:tallow', inputs: ['quark:tallow_block'] },
        {
            output: 'minecraft:writable_book',
            inputs: ['minecraft:book', '#forge:dyes/black', '#forge:feathers'],
            id: 'minecraft:writable_book'
        },
        { output: '9x minecraft:honeycomb', inputs: ['minecraft:honeycomb_block'] },
        { output: '4x byg:pollen_dust', inputs: ['byg:pollen_block'] },

        { output: '6x betterendforge:lumecorn_seed', inputs: ['betterendforge:lumecorn_rod'] },
        { output: '4x betterendforge:bulb_vine_seed', inputs: ['betterendforge:glowing_bulb'] },
        { output: 'betterendforge:end_lily_seed', inputs: ['betterendforge:end_lily_leaf'] },
        { output: '4x betterendforge:blue_vine_seed', inputs: ['betterendforge:blue_vine_lantern'] },
        {
            output: '4x betterendforge:glowing_pillar_seed',
            inputs: ['betterendforge:glowing_pillar_luminophor']
        },
        {
            output: '3x minecraft:paper',
            inputs: ['minecraft:sugar_cane', 'minecraft:sugar_cane', 'minecraft:sugar_cane']
        },
        {
            output: 'supplementaries:flax_seeds',
            inputs: ['supplementaries:flax']
        },
        { output: Item.of('byg:quartz_crystal'), inputs: ['minecraft:quartz'] },
        { output: Item.of('minecraft:quartz'), inputs: ['byg:quartz_crystal'] },
        {
            output: 'kubejs:quintuple_alfsteel_ingot',
            inputs: [
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#forge:dusts/mana'
            ]
        },
        {
            output: 'minecraft:quartz',
            inputs: ['byg:quartzite_sand', 'byg:quartzite_sand', 'byg:quartzite_sand']
        },
        {
            output: 'botanypots:botany_pot',
            inputs: ['#botanypots:botany_pots/simple', 'minecraft:water_bucket']
        },
        {
            output: 'botanypots:hopper_botany_pot',
            inputs: ['#botanypots:botany_pots/hopper', 'minecraft:water_bucket']
        },
        {
            output: 'minecraft:terracotta',
            inputs: ['#enigmatica:washables/terracotta', 'minecraft:water_bucket']
        },
        {
            output: 'atum:ceramic_white',
            inputs: ['#enigmatica:washables/ceramic', 'minecraft:water_bucket']
        },
        {
            output: 'atum:ceramic_slab_white',
            inputs: ['#enigmatica:washables/ceramic_slab', 'minecraft:water_bucket']
        },
        {
            output: 'atum:ceramic_tile_white',
            inputs: ['#enigmatica:washables/ceramic_tile', 'minecraft:water_bucket']
        },
        {
            output: 'atum:ceramic_stairs_white',
            inputs: ['#enigmatica:washables/ceramic_stairs', 'minecraft:water_bucket']
        },
        {
            output: 'atum:ceramic_wall_white',
            inputs: ['#enigmatica:washables/ceramic_wall', 'minecraft:water_bucket']
        },
        {
            output: 'mythicbotany:raindeletia_floating',
            inputs: ['kubejs:disabled_recipe_indicator'],
            id: 'mythicbotany:raindeletia_floating'
        },
        {
            output: 'mythicbotany:wither_aconite_floating',
            inputs: ['kubejs:disabled_recipe_indicator'],
            id: 'mythicbotany:wither_aconite_floating'
        },
        {
            output: '3x minecraft:string',
            inputs: ['#forge:crops/flax', '#forge:crops/flax', '#forge:crops/flax']
        },
        {
            output: '2x minecraft:green_dye',
            inputs: ['#forge:dyes/blue', '#forge:dyes/yellow']
        },
        {
            output: '2x minecraft:brown_dye',
            inputs: ['#forge:dyes/red', '#forge:dyes/green']
        },
        {
            output: 'sushigocrafting:soy_seeds',
            inputs: ['sushigocrafting:soy_bean']
        },
        {
            output: '3x ars_nouveau:source_berry_roll',
            inputs: [
                'farmersdelight:wheat_dough',
                'farmersdelight:wheat_dough',
                'farmersdelight:wheat_dough',
                '#forge:fruits/mana_berry'
            ],
            id: 'ars_nouveau:source_berry_roll'
        },
        {
            output: '2x byg:brimstone',
            inputs: ['minecraft:netherrack', 'byg:sythian_wart_block']
        }
    ];

    powahTiers.forEach((tier) => {
        if (tier == 'starter') {
            return;
        }
        recipes.push({
            output: `powah:reactor_${tier}`,
            inputs: [`powah:reactor_${tier}`],
            id: `${id_prefix}reactor_${tier}_reset`
        });
    });

    colors.forEach(function (color) {
        const otherColors = colors.filter((filterColor) => filterColor !== color);
        const otherSimplePots = otherColors.map((otherColor) => `botanypots:${otherColor}_botany_pot`);
        const otherHopperPots = otherColors.map((otherColor) => `botanypots:hopper_${otherColor}_botany_pot`);

        otherSimplePots.push('botanypots:botany_pot');
        otherHopperPots.push('botanypots:hopper_botany_pot');

        recipes.push(
            {
                output: `botanypots:${color}_botany_pot`,
                inputs: [otherSimplePots, `#forge:dyes/${color}`],
                id: `${id_prefix}dye_botany_pot_${color}`
            },
            {
                output: `botanypots:hopper_${color}_botany_pot`,
                inputs: [otherHopperPots, `#forge:dyes/${color}`],
                id: `${id_prefix}dye_hopper_botany_pot_${color}`
            }
        );

        if (color != 'white') {
            recipes.push(
                {
                    output: `2x atum:ceramic_slab_${color}`,
                    inputs: ['atum:ceramic_slab_white', 'atum:ceramic_slab_white', `#forge:dyes/${color}`]
                },
                {
                    output: `6x atum:ceramic_tile_${color}`,
                    inputs: [
                        'atum:ceramic_tile_white',
                        'atum:ceramic_tile_white',
                        'atum:ceramic_tile_white',
                        'atum:ceramic_tile_white',
                        'atum:ceramic_tile_white',
                        'atum:ceramic_tile_white',
                        `#forge:dyes/${color}`
                    ]
                },
                {
                    output: `3x atum:ceramic_stairs_${color}`,
                    inputs: [
                        'atum:ceramic_stairs_white',
                        'atum:ceramic_stairs_white',
                        'atum:ceramic_stairs_white',
                        `#forge:dyes/${color}`
                    ]
                },
                {
                    output: `atum:ceramic_wall_${color}`,
                    inputs: ['atum:ceramic_wall_white', `#forge:dyes/${color}`]
                }
            );
        }
    });

    materialsToUnify.forEach((material) => {
        if (Item.exists(`emendatusenigmatica:${material}_ore`)) {
            recipes.push({
                output: `emendatusenigmatica:${material}_ore`,
                inputs: [`#forge:ores/${material}`],
                id: `${id_prefix}${material}_ore_variant_reset`
            });
        }
    });

    recipes.forEach((recipe) => {
        const recipeEvent = event.shapeless(recipe.output, recipe.inputs);
        if (recipe.id) {
            recipeEvent.id(recipe.id);
        } else {
            fallback_id(recipeEvent, id_prefix);
        }
    });
});
