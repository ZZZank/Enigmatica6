onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:base/betterend/infusion/';

    /**
     * NOTE: `input` and `catalysts` only accpets string style tag/item.
     * Adding NBT does not work for now
     */
    const recipes = [
        {
            input: 'minecraft:book',
            catalysts: [
                '#forge:gems/nitro',
                '#forge:ingots/sky',
                '#forge:gems/nitro',
                '#forge:ingots/iesnium',
                '#forge:gems/nitro',
                '#forge:ingots/sky',
                '#forge:gems/nitro',
                '#forge:ingots/iesnium'
            ],
            output: {
                id: 'minecraft:enchanted_book',
                Count: 1,
                tag: {
                    StoredEnchantments: [
                        {
                            id: 'apotheosis:true_infinity',
                            lvl: 1
                        }
                    ]
                }
            },
            time: 300,
            id: id_prefix + 'true_infinity'
        }
    ];

    let enchantments = [
        {
            inputs: ['', 'bloodmagic:sacrificialdagger', ''],
            enchant: 'apotheosis:life_mending',
            level: 2,
            id: id_prefix + 'life_mending'
        },
        {
            inputs: [
                'emendatusenigmatica:steel_plate',
                'minecraft:turtle_helmet',
                'emendatusenigmatica:steel_plate'
            ],
            enchant: 'minecraft:protection',
            level: 2
        },
        {
            inputs: ['atum:atem_godshard', 'tconstruct:rose_gold_block', 'tconstruct:silky_cloth'],
            enchant: 'minecraft:silk_touch',
            level: 1
        },
        {
            inputs: ['minecraft:feather', 'alexsmobs:roadrunner_feather', 'minecraft:feather'],
            enchant: 'minecraft:feather_falling',
            level: 2
        },
        {
            inputs: [
                'ars_nouveau:amplify_arrow',
                'betterendforge:eternal_crystal',
                'ars_nouveau:amplify_arrow'
            ],
            enchant: 'minecraft:infinity',
            level: 1
        },
        {
            inputs: ['ars_nouveau:pierce_arrow', 'ars_nouveau:pierce_arrow', 'ars_nouveau:pierce_arrow'],
            enchant: 'minecraft:piercing',
            level: 2
        },
        {
            inputs: ['minecraft:scute', 'minecraft:shield', 'minecraft:scute'],
            enchant: 'minecraft:projectile_protection',
            level: 2
        },
        {
            inputs: ['tconstruct:soul_glass', 'quark:soul_bead', 'tconstruct:soul_glass'],
            enchant: 'minecraft:soul_speed',
            level: 2
        },
        {
            inputs: ['minecraft:blaze_powder', 'create:rose_quartz', 'minecraft:blaze_powder'],
            enchant: 'minecraft:fire_aspect',
            level: 1
        },
        {
            inputs: [
                'ars_nouveau:greater_experience_gem',
                'botania:rune_mana',
                'ars_nouveau:greater_experience_gem'
            ],
            enchant: 'minecraft:mending',
            level: 1
        },
        {
            inputs: ['thermal:diving_fabric', 'minecraft:heart_of_the_sea', 'thermal:diving_fabric'],
            enchant: 'minecraft:aqua_affinity',
            level: 1
        },
        {
            inputs: ['aquaculture:worm', 'aquaculture:redstone_hook', 'aquaculture:worm'],
            enchant: 'minecraft:lure',
            level: 2
        },
        {
            inputs: ['ars_nouveau:split_arrow', 'thermal:basalz_powder', 'ars_nouveau:split_arrow'],
            enchant: 'minecraft:multishot',
            level: 1
        },
        {
            inputs: ['alexsmobs:bear_fur', 'betterendforge:amber_gem', 'ars_nouveau:wilden_horn'],
            enchant: 'minecraft:power',
            level: 2
        },
        {
            inputs: [
                'tconstruct:quartz_shuriken',
                'tconstruct:manyullyn_ingot',
                'tconstruct:quartz_shuriken'
            ],
            enchant: 'minecraft:sharpness',
            level: 2
        },
        {
            inputs: [
                'minecraft:fermented_spider_eye',
                'tconstruct:quartz_shuriken',
                'minecraft:fermented_spider_eye'
            ],
            enchant: 'minecraft:bane_of_arthropods',
            level: 2
        },
        {
            inputs: [
                'minecraft:netherite_scrap',
                'meetyourfight:velvet_fortune',
                'minecraft:netherite_scrap'
            ],
            enchant: 'minecraft:fortune',
            level: 2
        },
        {
            inputs: ['littlelogistics:spring', 'aquaculture:diamond_hook', 'littlelogistics:spring'],
            enchant: 'minecraft:sweeping',
            level: 2
        },
        {
            inputs: ['powah:charged_snowball', 'powah:capacitor_basic_large', 'powah:charged_snowball'],
            enchant: 'minecraft:channeling',
            level: 1
        },
        {
            inputs: [
                'tconstruct:sky_congealed_slime',
                'ars_nouveau:glyph_gust',
                'tconstruct:sky_congealed_slime'
            ],
            enchant: 'minecraft:punch',
            level: 2
        },
        {
            inputs: [
                'emendatusenigmatica:emerald_plate',
                'modularrouters:blast_upgrade',
                'emendatusenigmatica:emerald_plate'
            ],
            enchant: 'minecraft:blast_protection',
            level: 2
        },
        {
            inputs: [
                'pneumaticcraft:heat_pipe',
                'betterendforge:ancient_emerald_ice',
                'pneumaticcraft:heat_pipe'
            ],
            enchant: 'minecraft:frost_walker',
            level: 1
        },
        {
            inputs: ['minecraft:lily_pad', 'betterendforge:end_lily_seed', 'minecraft:lily_pad'],
            enchant: 'minecraft:depth_strider',
            level: 2
        },
        {
            inputs: ['minecraft:lead', 'ars_nouveau:glyph_launch', 'minecraft:heart_of_the_sea'],
            enchant: 'minecraft:riptide',
            level: 2
        },
        {
            inputs: ['minecraft:cactus', 'botania:bellethorn', 'minecraft:cactus'],
            enchant: 'minecraft:thorns',
            level: 2
        },
        {
            inputs: [
                'pneumaticcraft:ingot_iron_compressed',
                'minecraft:diamond',
                'pneumaticcraft:ingot_iron_compressed'
            ],
            enchant: 'minecraft:unbreaking',
            level: 2
        },
        {
            inputs: [
                'tconstruct:earth_congealed_slime',
                'ars_nouveau:glyph_gust',
                'tconstruct:earth_congealed_slime'
            ],
            enchant: 'minecraft:knockback',
            level: 2
        },
        {
            inputs: [
                'minecraft:glistering_melon_slice',
                'emendatusenigmatica:silver_plate',
                'minecraft:glistering_melon_slice'
            ],
            enchant: 'minecraft:smite',
            level: 2
        },
        {
            inputs: [
                'archers_paradox:blaze_arrow',
                'minecraft:flint_and_steel',
                'archers_paradox:blaze_arrow'
            ],
            enchant: 'minecraft:flame',
            level: 1
        },
        {
            inputs: [
                'abnormals_delight:pickerelweed_juice',
                'minecraft:nautilus_shell',
                'abnormals_delight:pickerelweed_juice'
            ],
            enchant: 'minecraft:respiration',
            level: 2
        },
        {
            inputs: ['minecraft:magma_cream', 'emendatusenigmatica:sulfur_dust', 'minecraft:blaze_rod'],
            enchant: 'minecraft:fire_protection',
            level: 2
        },
        {
            inputs: ['betterendforge:amber_gem', 'minecraft:redstone_block', 'betterendforge:amber_gem'],
            enchant: 'minecraft:efficiency',
            level: 2
        },
        {
            inputs: ['minecraft:ender_eye', 'minecraft:heart_of_the_sea', 'minecraft:ender_eye'],
            enchant: 'minecraft:loyalty',
            level: 2
        },
        {
            inputs: ['minecraft:rabbit_foot', 'minecraft:golden_carrot', 'minecraft:lapis_block'],
            enchant: 'minecraft:looting',
            level: 2
        },
        {
            inputs: [
                'create:polished_rose_quartz',
                'minecraft:redstone_block',
                'create:polished_rose_quartz'
            ],
            enchant: 'minecraft:quick_charge',
            level: 2
        },
        {
            inputs: ['minecraft:prismarine_shard', 'minecraft:diamond_sword', 'minecraft:prismarine_shard'],
            enchant: 'minecraft:impaling',
            level: 2
        },
        {
            inputs: ['minecraft:emerald', 'aquaculture:gold_hook', 'minecraft:emerald'],
            enchant: 'minecraft:luck_of_the_sea',
            level: 2,
            id: 'betterendforge:luck_of_sea_book'
        }
    ];

    enchantments.forEach((enchantment) => {
        let [modid, name] = enchantment.enchant.split(':', 2);
        recipes.push({
            input: 'minecraft:book',
            catalysts: [
                'betterendforge:enchanted_petal',
                'minecraft:lapis_lazuli',
                'thermal:gold_coin',
                enchantment.inputs[0],
                enchantment.inputs[1],
                enchantment.inputs[2],
                'botania:cosmetic_red_ribbons',
                'minecraft:lapis_lazuli'
            ],
            output: {
                id: 'minecraft:enchanted_book',
                Count: 1,
                tag: {
                    StoredEnchantments: [
                        {
                            id: enchantment.enchant,
                            lvl: enchantment.level
                        }
                    ]
                }
            },
            time: 100,
            id: enchantment.id || `betterendforge:${name}_book`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'betterendforge:infusion';
        const catalysts = [];
        recipe.catalysts.forEach((catalyst, i) => {
            if (catalyst == '') {
                return;
            }
            const entry = Ingredient.of(catalyst).toJson().asJsonObject;
            entry.addProperty('index', i);
            catalysts.push(entry);
        });
        recipe.catalysts = catalysts;
        recipe.input = Ingredient.of(recipe.input).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
