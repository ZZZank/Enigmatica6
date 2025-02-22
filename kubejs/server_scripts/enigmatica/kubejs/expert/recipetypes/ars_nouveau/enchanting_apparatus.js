onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            inputs: [
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                '#forge:dusts/silver'
            ],
            reagent: '#forge:dusts/sulfur',
            sourceCost: 100,
            output: Item.of('4x architects_palette:sunmetal_blend'),
            id: 'architects_palette:sunmetal_blend'
        },
        {
            inputs: [
                'aquaculture:worm',
                '#forge:nuggets/nebu',
                'minecraft:string',
                'thermal:phytogro',
                'thermal:phytogro',
                'minecraft:string',
                '#forge:nuggets/nebu',
                'aquaculture:worm'
            ],
            reagent: '#forge:beehives/tier_0',
            sourceCost: 5000,
            output: 'betterendforge:silk_moth_nest',
            id: `${id_prefix}silk_moth_nest`
        },
        {
            inputs: [
                'aquaculture:worm',
                'naturesaura:gold_fiber',
                'aquaculture:worm',
                'thermal:phytogro',
                'thermal:phytogro',
                'aquaculture:worm',
                'naturesaura:gold_fiber',
                'aquaculture:worm'
            ],
            reagent: '#forge:beehives/tier_0',
            sourceCost: 5000,
            output: Item.of('2x betterendforge:silk_moth_nest'),
            id: `${id_prefix}silk_moth_nest_alt`
        },
        {
            inputs: [
                'architects_palette:sunmetal_blend',
                'architects_palette:sunmetal_blend',
                'architects_palette:sunmetal_blend',
                'architects_palette:sunmetal_blend'
            ],
            reagent: 'betterendforge:silk_fiber',
            sourceCost: 100,
            output: Item.of('4x naturesaura:gold_fiber'),
            id: `${id_prefix}gold_fiber`
        },
        {
            inputs: [
                'atum:papyrus_plant',
                '#forge:dusts/lapis',
                'atum:papyrus_plant',
                '#forge:inlays/pewter',
                '#forge:inlays/pewter',
                'thermal:phytogro',
                'betterendforge:andesite_pedestal',
                'thermal:phytogro'
            ],
            reagent: 'farmersdelight:cooking_pot',
            sourceCost: 1000,
            output: 'botania:apothecary_default',
            id: `${id_prefix}apothecary_default`
        },
        {
            inputs: [
                'resourcefulbees:tainted_honeycomb',
                '#forge:dusts/mana',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb'
            ],
            reagent: 'occultism:sacrificial_bowl',
            sourceCost: 5000,
            output: 'occultism:golden_sacrificial_bowl',
            id: 'occultism:crafting/golden_sacrificial_bowl'
        },
        {
            inputs: [
                '#forge:inlays/pewter',
                'occultism:stable_wormhole',
                '#forge:inlays/pewter',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                '#forge:inlays/pewter',
                'occultism:otherstone_pedestal',
                '#forge:inlays/pewter'
            ],
            reagent: 'farmersdelight:cooking_pot',
            sourceCost: 5000,
            output: 'bloodmagic:soulforge',
            id: `${id_prefix}soulforge`
        },
        {
            inputs: [
                'resourcefulbees:tainted_honeycomb',
                '#forge:ingots/silver',
                'resourcefulbees:tainted_honeycomb',
                '#forge:ingots/silver',
                '#forge:ingots/silver',
                'resourcefulbees:tainted_honeycomb',
                '#forge:ingots/silver',
                'resourcefulbees:tainted_honeycomb'
            ],
            reagent: 'astralsorcery:aquamarine',
            sourceCost: 5000,
            output: 'undergarden:catalyst',
            id: 'undergarden:catalyst'
        },
        {
            inputs: [
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle',
                'quark:white_candle'
            ],
            reagent: 'bloodmagic:holy_water_anointment',
            output: Item.of('8x occultism:candle_white'),
            id: 'occultism:crafting/candle'
        },
        {
            inputs: [
                '#forge:nuggets/gold_brass',
                'bloodmagic:lavacrystal',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb'
            ],
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:volcanic_accumulator',
            id: `${id_prefix}volcanic_accumulator`
        },
        {
            inputs: [
                '#forge:nuggets/gold_brass',
                'thermal:phytogro',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb'
            ],
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:mana_condenser',
            id: `${id_prefix}mana_condenser`
        },
        {
            inputs: [
                '#forge:nuggets/gold_brass',
                'byg:bulbis_sprouts',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb'
            ],
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:mycelial_sourcelink',
            id: `${id_prefix}mycelial_sourcelink`
        },
        {
            inputs: [
                '#forge:nuggets/gold_brass',
                'atum:glistering_date',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb'
            ],
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:vitalic_sourcelink',
            id: `${id_prefix}vitalic_sourcelink`
        },
        {
            inputs: [
                '#forge:nuggets/gold_brass',
                'minecraft:brewing_stand',
                '#forge:nuggets/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb'
            ],
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:alchemical_sourcelink',
            id: `${id_prefix}alchemical_sourcelink`
        },
        {
            inputs: [
                'resourcefulbees:tainted_honeycomb',
                'ars_nouveau:warding_stone',
                'resourcefulbees:tainted_honeycomb',
                '#forge:nuggets/signalum',
                '#forge:nuggets/signalum',
                'resourcefulbees:tainted_honeycomb',
                'ars_nouveau:warding_stone',
                'resourcefulbees:tainted_honeycomb'
            ],
            reagent: '#forge:gems/mana',
            output: 'ars_nouveau:crystallizer',
            id: `${id_prefix}crystallizer`
        },
        {
            inputs: [
                '#forge:ingots/gold_brass',
                'ars_nouveau:warding_stone',
                '#forge:ingots/gold_brass',
                'ars_nouveau:glyph_extract',
                'ars_nouveau:glyph_extract',
                'astralsorcery:illumination_powder',
                'astralsorcery:illumination_powder',
                'astralsorcery:illumination_powder'
            ],
            reagent: 'ars_nouveau:potion_jar',
            sourceCost: 10,
            output: 'ars_nouveau:potion_melder',
            id: 'ars_nouveau:potion_melder'
        },
        {
            inputs: [
                '#forge:ingots/gold_brass',
                'ars_nouveau:glyph_projectile',
                'minecraft:conduit',
                '#forge:gems/mana',
                'ars_nouveau:glyph_accelerate',
                'ars_nouveau:spell_parchment',
                '#forge:gems/mana',
                '#forge:ingots/gold_brass'
            ],
            reagent: 'botania:livingwood',
            sourceCost: 6000,
            output: 'ars_nouveau:wand',
            id: 'ars_nouveau:wand'
        },
        {
            inputs: [
                'ars_nouveau:glyph_amplify',
                '#forge:storage_blocks/regalium',
                '#forge:storage_blocks/regalium',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/mana'
            ],
            reagent: Item.of('undergarden:utheric_sword', '{Damage:0}').weakNBT(),
            sourceCost: 6000,
            output: 'ars_nouveau:enchanters_sword',
            id: 'ars_nouveau:enchanters_sword'
        },
        {
            inputs: [
                '#forge:ingots/terminite',
                'ars_nouveau:greater_experience_gem',
                '#forge:ingots/terminite',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:ingots/terminite',
                'ars_nouveau:greater_experience_gem',
                '#forge:ingots/terminite'
            ],
            reagent: '#atum:relic_non_dirty/ring',
            sourceCost: 300,
            output: 'ars_nouveau:ring_of_lesser_discount',
            id: 'ars_nouveau:ring_of_lesser_discount'
        },
        {
            inputs: [
                '#forge:ingots/thallasium',
                '#forge:ingots/regalium',
                '#forge:ingots/thallasium',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:ingots/thallasium',
                '#forge:ingots/regalium',
                '#forge:ingots/thallasium'
            ],
            reagent: 'ars_nouveau:ring_of_lesser_discount',
            sourceCost: 100,
            output: 'ars_nouveau:ring_of_greater_discount',
            id: 'ars_nouveau:ring_of_greater_discount'
        },
        {
            inputs: [
                '#forge:gems/aquamarine',
                'naturesaura:birth_spirit',
                '#forge:gems/aquamarine',
                '#forge:ingots/regalium',
                '#forge:ingots/regalium',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana'
            ],
            reagent: '#atum:relic_non_dirty/necklace',
            sourceCost: 500,
            output: 'ars_nouveau:amulet_of_mana_regen',
            id: 'ars_nouveau:amulet_of_mana_regen'
        },
        {
            inputs: [
                '#forge:gems/aquamarine',
                'minecraft:conduit',
                '#forge:gems/aquamarine',
                '#forge:ingots/regalium',
                '#forge:ingots/regalium',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana'
            ],
            reagent: '#atum:relic_non_dirty/necklace',
            sourceCost: 500,
            output: 'ars_nouveau:amulet_of_mana_boost',
            id: 'ars_nouveau:amulet_of_mana_boost'
        },
        {
            inputs: [
                'ars_nouveau:glyph_launch',
                '#atum:relic_non_dirty/brooch',
                'atum:horus_godshard',
                '#atum:relic_non_dirty/brooch',
                '#atum:relic_non_dirty/brooch',
                'quark:bottled_cloud',
                'quark:bottled_cloud',
                'quark:bottled_cloud'
            ],
            reagent: 'ars_nouveau:mundane_belt',
            sourceCost: 500,
            output: 'ars_nouveau:belt_of_levitation',
            id: 'ars_nouveau:belt_of_levitation'
        },
        {
            inputs: [
                'minecraft:sugar',
                '#forge:crops/nether_wart',
                '#forge:rods/blaze',
                '#forge:dusts/glowstone',
                'minecraft:fermented_spider_eye',
                '#forge:dusts/redstone',
                'atum:atem_godshard',
                '#forge:feathers'
            ],
            reagent: 'ars_nouveau:mundane_belt',
            sourceCost: 500,
            output: 'ars_nouveau:belt_of_unstable_gifts',
            id: 'ars_nouveau:belt_of_unstable_gifts'
        },
        {
            inputs: [
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock',
                'botania:livingrock'
            ],
            reagent: '#botania:runes/mana',
            sourceCost: 300,
            output: 'botania:mana_tablet',
            id: 'botania:mana_tablet'
        },
        {
            inputs: [
                '#resourcefulbees:resourceful_honeycomb_block',
                'minecraft:sunflower',
                '#resourcefulbees:resourceful_honey_block',
                '#botania:runes/earth',
                '#botania:runes/air',
                '#resourcefulbees:resourceful_honey_block',
                'naturesaura:aura_bloom',
                '#resourcefulbees:resourceful_honeycomb_block'
            ],
            reagent: Item.of('resourcefulbees:t1_apiary').ignoreNBT(),
            sourceCost: 5000,
            output: 'resourcefulbees:t2_apiary',
            id: 'resourcefulbees:t2_apiary'
        },
        {
            inputs: [
                '#forge:gems/mana_diamond',
                Item.of('bloodmagic:firescribetool', '{Damage:0}').weakNBT(),
                '#forge:gems/mana_diamond',
                Item.of('bloodmagic:airscribetool', '{Damage:0}').weakNBT(),
                Item.of('bloodmagic:earthscribetool', '{Damage:0}').weakNBT(),
                '#forge:gems/mana_diamond',
                Item.of('bloodmagic:waterscribetool', '{Damage:0}').weakNBT(),
                '#forge:gems/mana_diamond'
            ],
            reagent: 'botania:livingwood_twig',
            sourceCost: 5000,
            output: 'bloodmagic:ritualdiviner',
            id: `${id_prefix}ritualdiviner`
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/gold_brass',
                'ars_nouveau:glyph_projectile',
                '#botania:runes/air',
                '#botania:runes/air'
            ],
            reagent: Item.of('botania:livingwood_bow', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'ars_nouveau:spell_bow',
            id: 'ars_nouveau:spell_bow'
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber'
            ],
            reagent: Item.of('atum:wanderer_helmet', '{Damage:0}').weakNBT(),
            sourceCost: 50,
            output: 'ars_nouveau:novice_hood',
            id: `${id_prefix}novice_hood`
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber'
            ],
            reagent: Item.of('atum:wanderer_chest', '{Damage:0}').weakNBT(),
            sourceCost: 50,
            output: 'ars_nouveau:novice_robes',
            id: `${id_prefix}novice_robes`
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber'
            ],
            reagent: Item.of('atum:wanderer_legs', '{Damage:0}').weakNBT(),
            sourceCost: 50,
            output: 'ars_nouveau:novice_leggings',
            id: `${id_prefix}novice_leggings`
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber',
                'tconstruct:silky_cloth',
                'ars_nouveau:mana_fiber'
            ],
            reagent: Item.of('atum:wanderer_boots', '{Damage:0}').weakNBT(),
            sourceCost: 50,
            output: 'ars_nouveau:novice_boots',
            id: `${id_prefix}novice_boots`
        },

        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber'
            ],
            reagent: Item.of('atum:wanderer_helmet', '{Damage:0}').weakNBT(),
            sourceCost: 1500,
            output: 'ars_nouveau:apprentice_hood',
            id: `${id_prefix}apprentice_hood`
        },
        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber'
            ],
            reagent: Item.of('atum:wanderer_chest', '{Damage:0}').weakNBT(),
            sourceCost: 1500,
            output: 'ars_nouveau:apprentice_robes',
            id: `${id_prefix}apprentice_robes`
        },
        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber'
            ],
            reagent: Item.of('atum:wanderer_legs', '{Damage:0}').weakNBT(),
            sourceCost: 1500,
            output: 'ars_nouveau:apprentice_leggings',
            id: `${id_prefix}apprentice_leggings`
        },
        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:blaze_fiber'
            ],
            reagent: Item.of('atum:wanderer_boots', '{Damage:0}').weakNBT(),
            sourceCost: 1500,
            output: 'ars_nouveau:apprentice_boots',
            id: `${id_prefix}apprentice_boots`
        },

        {
            inputs: [
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manaweave_helmet', '{Damage:0}').weakNBT(),
            sourceCost: 5000,
            output: 'ars_nouveau:archmage_hood',
            id: `${id_prefix}archmage_hood`
        },
        {
            inputs: [
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manaweave_chestplate', '{Damage:0}').weakNBT(),
            sourceCost: 5000,
            output: 'ars_nouveau:archmage_robes',
            id: `${id_prefix}archmage_robes`
        },
        {
            inputs: [
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manaweave_leggings', '{Damage:0}').weakNBT(),
            sourceCost: 5000,
            output: 'ars_nouveau:archmage_leggings',
            id: `${id_prefix}archmage_leggings`
        },
        {
            inputs: [
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber',
                'kubejs:wicked_weave',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manaweave_boots', '{Damage:0}').weakNBT(),
            sourceCost: 5000,
            output: 'ars_nouveau:archmage_boots',
            id: `${id_prefix}archmage_boots`
        },
        {
            inputs: [
                'botania:livingwood_twig',
                '#botania:runes/spring',
                'botania:livingwood_twig',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manasteel_helmet', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'botania:terrasteel_helmet',
            id: `${id_prefix}terrasteel_helmet`
        },
        {
            inputs: [
                'botania:livingwood_twig',
                '#botania:runes/summer',
                'botania:livingwood_twig',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manasteel_chestplate', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'botania:terrasteel_chestplate',
            id: `${id_prefix}terrasteel_chestplate`
        },
        {
            inputs: [
                'botania:livingwood_twig',
                '#botania:runes/autumn',
                'botania:livingwood_twig',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manasteel_leggings', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'botania:terrasteel_leggings',
            id: `${id_prefix}terrasteel_leggings`
        },
        {
            inputs: [
                'botania:livingwood_twig',
                '#botania:runes/winter',
                'botania:livingwood_twig',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber',
                '#forge:ingots/terrasteel',
                'ars_nouveau:end_fiber'
            ],
            reagent: Item.of('botania:manasteel_boots', '{Damage:0}').weakNBT(),
            sourceCost: 10000,
            output: 'botania:terrasteel_boots',
            id: `${id_prefix}terrasteel_boots`
        },
        {
            inputs: [
                'alexsmobs:moose_antler',
                Item.of('environmental:thief_hood', '{Damage:0}').weakNBT(),
                'alexsmobs:moose_antler',
                'atum:wolf_pelt',
                'atum:wolf_pelt',
                '#forge:storage_blocks/mana',
                'naturesaura:netherite_finder',
                '#forge:storage_blocks/mana'
            ],
            reagent: 'ars_nouveau:drygmy_shard',
            sourceCost: 100,
            output: 'ars_nouveau:drygmy_charm',
            id: `ars_nouveau:drygmy_charm`
        },
        {
            inputs: [
                'ars_nouveau:mana_bloom_crop',
                'ars_nouveau:mana_bloom',
                'ars_nouveau:mana_bloom_crop',
                'naturesaura:ancient_sapling',
                'naturesaura:ancient_sapling',
                '#forge:gems/mana',
                'botania:goddess_charm',
                '#forge:gems/mana'
            ],
            reagent: 'ars_nouveau:sylph_shards',
            sourceCost: 100,
            output: 'ars_nouveau:sylph_charm',
            id: `ars_nouveau:sylph_charm`
        },
        {
            inputs: [
                'atum:anput_godshard',
                'naturesaura:tainted_gold',
                'naturesaura:tainted_gold',
                'naturesaura:token_fear'
            ],
            reagent: '#atum:relic_non_dirty/ring',
            sourceCost: 100,
            output: 'naturesaura:death_ring',
            id: `${id_prefix}death_ring`
        },
        {
            inputs: [
                '#forge:nuggets/nebu',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                '#forge:nuggets/nebu',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                '#forge:nuggets/nebu',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                '#forge:nuggets/nebu'
            ],
            reagent: 'occultism:otherstone_frame',
            sourceCost: 10,
            output: 'occultism:wormhole_frame',
            id: 'occultism:crafting/wormhole_frame'
        },
        {
            inputs: [
                'fluxnetworks:flux_dust',
                'occultism:otherstone_slab',
                'fluxnetworks:flux_dust',
                'occultism:otherstone_slab',
                'occultism:otherstone_slab',
                'fluxnetworks:flux_dust',
                'occultism:otherstone_slab',
                'fluxnetworks:flux_dust'
            ],
            reagent: '#forge:gems/mana',
            sourceCost: 100,
            output: Item.of('4x occultism:otherstone_tablet'),
            id: 'occultism:crafting/otherstone_tablet'
        },
        {
            inputs: [
                '#forge:plates/electrum',
                '#forge:gems/mana_diamond',
                '#forge:plates/electrum',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                '#forge:plates/electrum',
                '#forge:gems/mana_diamond',
                '#forge:plates/electrum'
            ],
            reagent: 'betterendforge:eternal_crystal',
            sourceCost: 500,
            output: 'botania:mana_pylon',
            id: `${id_prefix}mana_pylon`
        },
        {
            inputs: [
                'botania:glimmering_livingwood',
                'powah:crystal_spirited',
                'botania:glimmering_livingwood',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel',
                'botania:glimmering_livingwood',
                'powah:crystal_spirited',
                'botania:glimmering_livingwood'
            ],
            reagent: 'botania:mana_pylon',
            sourceCost: 1000,
            output: 'botania:natura_pylon',
            id: `${id_prefix}natura_pylon`
        },
        {
            inputs: [
                '#forge:ingots/elementium',
                'powah:crystal_nitro',
                '#forge:ingots/elementium',
                'botania:pixie_dust',
                'botania:pixie_dust',
                '#forge:ingots/elementium',
                'powah:crystal_nitro',
                '#forge:ingots/elementium'
            ],
            reagent: 'botania:natura_pylon',
            sourceCost: 2000,
            output: 'botania:gaia_pylon',
            id: `${id_prefix}gaia_pylon`
        },
        {
            inputs: [
                '#chipped:crying_obsidian',
                'atum:ra_godshard',
                '#chipped:crying_obsidian',
                '#forge:ingots/alfsteel',
                '#forge:ingots/alfsteel',
                '#chipped:crying_obsidian',
                'atum:ra_godshard',
                '#chipped:crying_obsidian'
            ],
            reagent: 'botania:gaia_pylon',
            sourceCost: 4000,
            output: 'mythicbotany:alfsteel_pylon',
            id: `${id_prefix}alfsteel_pylon`
        },
        {
            inputs: [
                'botania:mana_tablet',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                '#forge:gems/mana_diamond'
            ],
            reagent: 'ars_nouveau:ring_of_greater_discount',
            sourceCost: 500,
            output: 'botania:mana_ring',
            id: `${id_prefix}mana_ring`
        },
        {
            reagent: '#forge:ingots/terrasteel',
            output: Item.of('2x botania:gaia_ingot'),
            inputs: [
                'botania:life_essence',
                'atum:seth_godshard',
                'botania:life_essence',
                'atum:seth_godshard',
                'atum:seth_godshard',
                'botania:life_essence',
                'atum:seth_godshard',
                'botania:life_essence'
            ],
            sourceCost: 100,
            id: `${id_prefix}gaia_ingot`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:mining_ring',
            inputs: [
                '#botania:runes/earth',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                'bloodmagic:reagentfastminer'
            ],
            sourceCost: 500,
            id: `${id_prefix}mining_ring`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:dodge_ring',
            inputs: [
                '#botania:runes/air',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                'alexsmobs:roadrunner_feather'
            ],
            sourceCost: 500,
            id: `${id_prefix}dodge_ring`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:swap_ring',
            inputs: ['ars_nouveau:magic_clay', '#forge:ingots/manasteel', '#forge:ingots/manasteel'],
            sourceCost: 500,
            id: `${id_prefix}swap_ring`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:water_ring',
            inputs: [
                '#botania:runes/water',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                'minecraft:heart_of_the_sea'
            ],
            sourceCost: 500,
            id: `${id_prefix}water_ring`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:magnet_ring',
            inputs: ['botania:lens_magnet', '#forge:ingots/manasteel', '#forge:ingots/manasteel'],
            sourceCost: 500,
            id: `${id_prefix}magnet_ring`
        },
        {
            reagent: '#atum:relic_non_dirty/ring',
            output: 'botania:aura_ring',
            inputs: [
                '#botania:runes/mana',
                '#forge:ingots/manasteel',
                '#forge:ingots/manasteel',
                'naturesaura:aura_cache'
            ],
            sourceCost: 500,
            id: `${id_prefix}aura_ring`
        },
        {
            reagent: 'botania:aura_ring',
            output: 'botania:pixie_ring',
            inputs: [
                'botania:pixie_dust',
                '#forge:ingots/elementium',
                '#forge:ingots/elementium',
                'naturesaura:calling_spirit'
            ],
            sourceCost: 500,
            id: `${id_prefix}pixie_ring`
        },
        {
            reagent: 'botania:aura_ring',
            output: 'botania:reach_ring',
            inputs: [
                '#botania:runes/pride',
                '#forge:ingots/elementium',
                '#forge:ingots/elementium',
                '#forge:ingots/sky'
            ],
            sourceCost: 500,
            id: `${id_prefix}reach_ring`
        },
        {
            reagent: 'botania:aura_ring',
            output: 'mythicbotany:fire_ring',
            inputs: [
                '#botania:runes/muspelheim',
                '#forge:ingots/elementium',
                '#forge:ingots/elementium',
                'ars_nouveau:glyph_shield'
            ],
            sourceCost: 500,
            id: `${id_prefix}fire_ring`
        },
        {
            reagent: 'botania:aura_ring',
            output: 'mythicbotany:ice_ring',
            inputs: [
                '#botania:runes/niflheim',
                '#forge:ingots/elementium',
                '#forge:ingots/elementium',
                'ars_nouveau:glyph_shield'
            ],
            sourceCost: 500,
            id: `${id_prefix}ice_ring`
        },
        {
            reagent: 'atum:atem_godshard',
            output: 'betterendforge:eternal_crystal',
            inputs: [
                '#forge:shards/ender',
                '#forge:shards/aurora',
                '#forge:shards/ender',
                '#forge:shards/aurora',
                '#forge:shards/aurora',
                '#forge:shards/ender',
                '#forge:shards/aurora',
                '#forge:shards/ender'
            ],
            sourceCost: 500,
            id: 'betterendforge:eternal_crystal'
        },
        {
            reagent: 'betterendforge:hydralux_petal',
            output: 'betterendforge:enchanted_petal',
            inputs: [
                '#forge:dusts/starmetal',
                '#forge:shards/aurora',
                '#forge:dusts/starmetal',
                '#forge:shards/aurora',
                '#forge:shards/aurora',
                '#forge:dusts/starmetal',
                '#forge:shards/aurora',
                '#forge:dusts/starmetal'
            ],
            sourceCost: 100,
            id: 'betterendforge:enchanted_petal'
        },

        {
            inputs: [
                '#forge:shards/aurora',
                '#forge:gems/amber',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora'
            ],
            reagent: Item.of('betterendforge:terminite_helmet', '{Damage:0}').weakNBT(),
            sourceCost: 9001,
            output: 'betterendforge:crystalite_helmet',
            id: 'betterendforge:crystalite_helmet'
        },
        {
            inputs: [
                '#forge:shards/aurora',
                '#forge:gems/amber',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora'
            ],
            reagent: Item.of('betterendforge:terminite_chestplate', '{Damage:0}').weakNBT(),
            sourceCost: 9001,
            output: 'betterendforge:crystalite_chestplate',
            id: 'betterendforge:crystalite_chestplate'
        },
        {
            inputs: [
                '#forge:shards/aurora',
                '#forge:gems/amber',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora'
            ],
            reagent: Item.of('betterendforge:terminite_leggings', '{Damage:0}').weakNBT(),
            sourceCost: 9001,
            output: 'betterendforge:crystalite_leggings',
            id: 'betterendforge:crystalite_leggings'
        },
        {
            inputs: [
                '#forge:shards/aurora',
                '#forge:gems/amber',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora',
                '#forge:ingots/iesnium',
                '#forge:shards/aurora'
            ],
            reagent: Item.of('betterendforge:terminite_boots', '{Damage:0}').weakNBT(),
            sourceCost: 9001,
            output: 'betterendforge:crystalite_boots',
            id: 'betterendforge:crystalite_boots'
        },
        {
            inputs: ['#forge:storage_blocks/mana', 'ars_nouveau:glyph_split'],
            sourceCost: 10,
            reagent: 'kubejs:scented_stick',
            output: Item.of('32x ars_nouveau:split_arrow'),
            id: 'ars_nouveau:split_arrow'
        },
        {
            inputs: ['#forge:storage_blocks/mana', 'ars_nouveau:glyph_amplify'],
            sourceCost: 10,
            reagent: 'kubejs:scented_stick',
            output: Item.of('32x ars_nouveau:amplify_arrow'),
            id: 'ars_nouveau:amplify_arrow'
        },
        {
            inputs: ['#forge:storage_blocks/mana', 'ars_nouveau:glyph_pierce'],
            sourceCost: 10,
            reagent: 'kubejs:scented_stick',
            output: Item.of('32x ars_nouveau:pierce_arrow'),
            id: 'ars_nouveau:pierce_arrow'
        },
        {
            inputs: [
                'appliedenergistics2:charged_certus_quartz_crystal',
                'occultism:spirit_attuned_gem',
                'appliedenergistics2:charged_certus_quartz_crystal',
                '#forge:ingots/silicon_bronze',
                '#forge:ingots/silicon_bronze',
                'ars_nouveau:arcane_stone',
                'ars_nouveau:arcane_stone',
                'ars_nouveau:arcane_stone'
            ],
            sourceCost: 500,
            reagent: '#forge:storage_blocks/mana',
            output: 'ars_nouveau:summoning_crystal',
            id: 'ars_nouveau:summoning_crystal'
        },
        {
            inputs: [
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:nuggets/gold',
                '#forge:nuggets/gold',
                '#forge:nuggets/gold',
                '#forge:nuggets/gold',
                '#forge:nuggets/gold'
            ],
            sourceCost: 50,
            reagent: 'ars_nouveau:carbuncle_shards',
            output: 'ars_nouveau:carbuncle_charm',
            id: 'ars_nouveau:carbuncle_charm'
        },
        {
            inputs: [
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze'
            ],
            sourceCost: 1000,
            reagent: 'kubejs:scented_stick',
            output: 'ars_nouveau:dominion_wand',
            id: 'ars_nouveau:dominion_wand'
        },
        {
            inputs: [
                'botania:quartz_lavender',
                '#forge:gems/fluorite',
                'botania:quartz_lavender',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                'botania:quartz_lavender',
                '#forge:gems/fluorite',
                'botania:quartz_lavender'
            ],
            sourceCost: 500,
            reagent: 'ars_nouveau:arcane_relay',
            output: 'ars_nouveau:arcane_relay_splitter',
            id: 'ars_nouveau:arcane_relay_splitter'
        },
        {
            inputs: [
                'botania:quartz_lavender',
                '#forge:gems/apatite',
                'botania:quartz_lavender',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                'botania:quartz_lavender',
                '#forge:gems/apatite',
                'botania:quartz_lavender'
            ],
            sourceCost: 500,
            reagent: 'ars_nouveau:arcane_relay',
            output: 'ars_nouveau:relay_deposit',
            id: 'ars_nouveau:relay_deposit'
        },
        {
            inputs: [
                '#forge:gems/prismarine',
                '#forge:gems/mana',
                '#forge:gems/prismarine',
                '#forge:ingots/gold',
                '#forge:ingots/gold',
                '#forge:gems/prismarine',
                '#forge:gems/mana',
                '#forge:gems/prismarine'
            ],
            sourceCost: 500,
            reagent: 'ars_nouveau:mana_jar',
            output: 'ars_nouveau:arcane_relay',
            id: 'ars_nouveau:arcane_relay'
        },
        {
            inputs: [
                'waystones:warp_dust',
                '#forge:gems/ender',
                'waystones:warp_dust',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                'waystones:warp_dust',
                '#forge:gems/ender',
                'waystones:warp_dust'
            ],
            sourceCost: 500,
            reagent: 'ars_nouveau:arcane_relay',
            output: 'ars_nouveau:relay_warp',
            id: 'ars_nouveau:relay_warp'
        },
        {
            inputs: [
                'appliedenergistics2:charged_certus_quartz_crystal',
                Item.of('minecraft:potion', '{Potion:"apotheosis:knowledge"}'),
                'appliedenergistics2:charged_certus_quartz_crystal',
                '#forge:ingots/osmium',
                '#forge:ingots/osmium',
                '#forge:ingots/osmium',
                'ars_nouveau:novice_spell_book',
                '#forge:ingots/osmium'
            ],
            sourceCost: 50,
            reagent: '#forge:eggs',
            output: 'ars_nouveau:whelp_charm',
            id: 'ars_nouveau:whelp_charm'
        },
        {
            inputs: [
                '#forge:nuggets/signalum',
                'create:polished_rose_quartz',
                '#forge:nuggets/signalum',
                'resourcefulbees:tainted_honeycomb',
                'resourcefulbees:tainted_honeycomb',
                '#forge:nuggets/signalum',
                'create:polished_rose_quartz',
                '#forge:nuggets/signalum'
            ],
            sourceCost: 100,
            reagent: 'ars_nouveau:basic_spell_turret',
            output: 'ars_nouveau:spell_turret',
            id: 'ars_nouveau:spell_turret'
        },
        {
            inputs: [
                '#forge:nuggets/tinkers_bronze',
                'minecraft:clock',
                '#forge:nuggets/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                '#forge:nuggets/tinkers_bronze',
                'create:polished_rose_quartz',
                '#forge:nuggets/tinkers_bronze'
            ],
            sourceCost: 100,
            reagent: 'ars_nouveau:basic_spell_turret',
            output: 'ars_nouveau:timer_spell_turret',
            id: 'ars_nouveau:timer_spell_turret'
        },
        {
            inputs: [
                'resourcefulbees:tainted_honeycomb',
                '#forge:storage_blocks/mana',
                'resourcefulbees:tainted_honeycomb',
                '#forge:storage_blocks/tinkers_bronze',
                '#forge:storage_blocks/tinkers_bronze',
                'resourcefulbees:tainted_honeycomb',
                '#forge:storage_blocks/mana',
                'resourcefulbees:tainted_honeycomb'
            ],
            sourceCost: 500,
            reagent: Item.of('mekanismtools:osmium_shield', '{Damage:0}').weakNBT(),
            output: Item.of('ars_nouveau:enchanters_shield', '{Damage:0}').weakNBT(),
            id: 'ars_nouveau:enchanters_shield'
        },
        {
            inputs: [
                'ars_nouveau:glyph_self',
                'atum:crystal_glass',
                'ars_nouveau:glyph_self',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                '#forge:gems/mana',
                'ars_nouveau:purple_archwood_log',
                '#forge:gems/mana'
            ],
            sourceCost: 1000,
            reagent: '#forge:plates/silver',
            output: 'ars_nouveau:enchanters_mirror',
            id: 'ars_nouveau:enchanters_mirror'
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                'ars_nouveau:glyph_split',
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block'
            ],
            reagent: 'kubejs:scented_stick',
            output: Item.of('48x ars_nouveau:split_arrow'),
            id: `${id_prefix}split_arrow`
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                'ars_nouveau:glyph_amplify',
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block'
            ],
            reagent: 'kubejs:scented_stick',
            output: Item.of('48x ars_nouveau:amplify_arrow'),
            id: `${id_prefix}amplify_arrow`
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                'ars_nouveau:glyph_pierce',
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block'
            ],
            reagent: 'kubejs:scented_stick',
            output: Item.of('48x ars_nouveau:pierce_arrow'),
            id: `${id_prefix}pierce_arrow`
        },
        {
            inputs: [
                '#forge:ingots/tinkers_bronze',
                'ars_nouveau:wilden_tribute',
                '#forge:ingots/tinkers_bronze',
                'ars_nouveau:wilden_spike',
                'ars_nouveau:wilden_wing',
                '#forge:ingots/tinkers_bronze',
                'ars_nouveau:wilden_horn',
                '#forge:ingots/tinkers_bronze'
            ],
            sourceCost: 10000,
            reagent: 'minecraft:conduit',
            output: 'ars_nouveau:summon_focus',
            id: 'ars_nouveau:summon_focus'
        },
        {
            inputs: [
                '#forge:nuggets/signalum',
                'ars_nouveau:glyph_craft',
                '#forge:nuggets/signalum',
                'architects_palette:twisted_sapling',
                'minecraft:brewing_stand',
                '#forge:nuggets/signalum',
                '#forge:coins/electrum',
                '#forge:nuggets/signalum'
            ],
            sourceCost: 50,
            reagent: 'ars_nouveau:wixie_shards',
            output: 'ars_nouveau:wixie_charm',
            id: 'ars_nouveau:wixie_charm'
        },
        {
            inputs: [
                'ars_nouveau:mana_fiber',
                '#forge:gems/mana',
                'ars_nouveau:mana_fiber',
                '#forge:ingots/tinkers_bronze',
                '#forge:ingots/tinkers_bronze',
                'ars_nouveau:mana_fiber',
                '#forge:ingots/tinkers_bronze',
                'ars_nouveau:mana_fiber'
            ],
            sourceCost: 50,
            reagent: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
            output: 'ars_nouveau:potion_flask',
            id: 'ars_nouveau:potion_flask'
        },

        {
            inputs: [
                'ars_nouveau:glyph_extend_time',
                '#forge:gems/mana',
                'ars_nouveau:glyph_extend_time',
                'naturesaura:tainted_gold',
                'naturesaura:tainted_gold',
                'ars_nouveau:glyph_extend_time',
                '#forge:gems/mana',
                'ars_nouveau:glyph_extend_time'
            ],
            sourceCost: 50,
            reagent: 'ars_nouveau:potion_flask',
            output: 'ars_nouveau:potion_flask_extend_time',
            id: 'ars_nouveau:potion_flask_extend_time'
        },
        {
            inputs: [
                'ars_nouveau:glyph_amplify',
                '#forge:gems/mana',
                'ars_nouveau:glyph_amplify',
                'naturesaura:tainted_gold',
                'naturesaura:tainted_gold',
                'ars_nouveau:glyph_amplify',
                '#forge:gems/mana',
                'ars_nouveau:glyph_amplify'
            ],
            sourceCost: 50,
            reagent: 'ars_nouveau:potion_flask',
            output: 'ars_nouveau:potion_flask_amplify',
            id: 'ars_nouveau:potion_flask_amplify'
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                'ars_nouveau:carbuncle_charm',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold',
                'ars_nouveau:wilden_tribute',
                '#forge:storage_blocks/gold'
            ],
            sourceCost: 10000,
            reagent: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:gold_bee' }).weakNBT(),
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:carbee_bee' }),
            id: `${id_prefix}carbee_jar`
        },
        {
            inputs: [
                '#forge:ingots/gold',
                'naturesaura:crimson_meal',
                '#forge:ingots/gold',
                '#forge:dusts/redstone',
                '#forge:dusts/redstone'
            ],
            sourceCost: 50,
            reagent: 'minecraft:rotten_flesh',
            output: Item.of('2x naturesaura:tainted_gold'),
            id: `${id_prefix}tainted_gold`
        },
        {
            inputs: [
                '#forge:ingots/gold',
                'minecraft:rotten_flesh',
                '#forge:ingots/gold',
                '#forge:dusts/redstone',
                '#forge:dusts/redstone'
            ],
            reagent: 'minecraft:conduit',
            output: Item.of('2x naturesaura:tainted_gold'),
            id: `${id_prefix}tainted_gold_starter`
        },
        {
            inputs: [
                'bloodmagic:blankslate',
                '#forge:dusts/flux_infused',
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                'bloodmagic:blankslate',
                '#forge:dusts/flux_infused',
                'bloodmagic:blankslate'
            ],
            sourceCost: 50,
            reagent: 'botania:livingwood',
            output: Item.of('2x bloodmagic:blankrune'),
            id: `${id_prefix}blood_rune_blank`
        },
        {
            inputs: [
                'ars_nouveau:greater_experience_gem',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                'ars_nouveau:greater_experience_gem',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                'ars_nouveau:greater_experience_gem',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                'ars_nouveau:greater_experience_gem'
            ],
            sourceCost: 500,
            reagent: 'atum:isis_godshard',
            output: 'thermal:xp_crystal',
            id: 'thermal:tools/xp_crystal'
        },
        {
            inputs: [
                '#forge:dusts/mana',
                'arsarsenal:source_steel_ingot',
                '#forge:dusts/mana',
                'arsarsenal:source_steel_ingot',
                'arsarsenal:source_steel_ingot'
            ],
            sourceCost: 1000,
            reagent: 'minecraft:conduit',
            output: 'mythicbotany:rune_holder',
            id: 'mythicbotany:rune_holder'
        },
        {
            inputs: [
                '#forge:dusts/mana',
                '#forge:ingots/terrasteel',
                '#forge:dusts/mana',
                '#forge:ingots/terrasteel',
                '#forge:ingots/terrasteel'
            ],
            sourceCost: 10000,
            reagent: 'minecraft:conduit',
            output: 'mythicbotany:master_rune_holder',
            id: 'mythicbotany:master_rune_holder'
        },
        {
            inputs: [
                '#forge:nuggets/signalum',
                'botania:auto_crafting_halo',
                '#forge:nuggets/signalum',
                '#forge:gears/osmium',
                '#forge:gears/osmium',
                '#forge:nuggets/signalum',
                'botania:corporea_spark',
                '#forge:nuggets/signalum'
            ],
            sourceCost: 200,
            reagent: '#sophisticatedbackpacks:upgrades/crafting',
            output: 'sophisticatedbackpacks:compacting_upgrade',
            id: 'sophisticatedbackpacks:compacting_upgrade'
        },
        {
            inputs: [
                'botania:red_string',
                '#forge:dusts/lumium',
                'botania:red_string',
                '#forge:dusts/lumium',
                '#forge:dusts/lumium',
                'botania:red_string',
                '#forge:dusts/lumium',
                'botania:red_string'
            ],
            sourceCost: 10,
            reagent: '#forge:gems/mana',
            output: Item.of('4x botania:light_relay'),
            id: 'botania:light_relay'
        },
        {
            inputs: [
                'ars_elemental:fire_focus',
                'kubejs:wicked_weave',
                '#botania:runes/fire',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                '#botania:runes/fire',
                'kubejs:wicked_weave',
                'ars_elemental:fire_focus'
            ],
            sourceCost: 10000,
            reagent: 'ars_nouveau:wilden_tribute',
            output: Item.of('4x arsarsenal:sigil_of_pyromancy'),
            id: 'arsarsenal:sigil_of_pyromancy'
        },
        {
            inputs: [
                'ars_elemental:water_focus',
                'kubejs:wicked_weave',
                '#botania:runes/water',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                '#botania:runes/water',
                'kubejs:wicked_weave',
                'ars_elemental:water_focus'
            ],
            sourceCost: 10000,
            reagent: 'ars_nouveau:wilden_tribute',
            output: Item.of('4x arsarsenal:sigil_of_aquamancy'),
            id: 'arsarsenal:sigil_of_aquamancy'
        },
        {
            inputs: [
                'ars_elemental:earth_focus',
                'kubejs:wicked_weave',
                '#botania:runes/earth',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                '#botania:runes/earth',
                'kubejs:wicked_weave',
                'ars_elemental:earth_focus'
            ],
            sourceCost: 10000,
            reagent: 'ars_nouveau:wilden_tribute',
            output: Item.of('4x arsarsenal:sigil_of_geomancy'),
            id: 'arsarsenal:sigil_of_geomancy'
        },
        {
            inputs: [
                'ars_elemental:air_focus',
                'kubejs:wicked_weave',
                '#botania:runes/air',
                'kubejs:wicked_weave',
                'kubejs:wicked_weave',
                '#botania:runes/air',
                'kubejs:wicked_weave',
                'ars_elemental:air_focus'
            ],
            sourceCost: 10000,
            reagent: 'ars_nouveau:wilden_tribute',
            output: Item.of('4x arsarsenal:sigil_of_aethermancy'),
            id: 'arsarsenal:sigil_of_aethermancy'
        },
        {
            inputs: [
                'occultism:otherstone_slab',
                'botania:corporea_spark',
                'occultism:otherstone_slab',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                'occultism:otherstone_tablet',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                'occultism:otherstone_tablet'
            ],
            sourceCost: 50,
            reagent: 'ars_nouveau:archwood_chest',
            output: 'naturesaura:ender_crate',
            id: `${id_prefix}ender_crate`
        },
        {
            inputs: [
                'occultism:otherstone_slab',
                'botania:corporea_spark',
                'occultism:otherstone_slab',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                'occultism:otherstone_tablet',
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                'occultism:otherstone_tablet'
            ],
            sourceCost: 50,
            reagent: 'thermal:satchel',
            output: 'naturesaura:ender_access',
            id: `${id_prefix}ender_access`
        },
        {
            inputs: [
                'botania:pixie_dust',
                'integratedterminals:chorus_glass',
                'botania:pixie_dust',
                'naturesaura:token_fear',
                '#botania:runes/mana',
                'botania:pixie_dust',
                'integratedterminals:chorus_glass',
                'botania:pixie_dust'
            ],
            reagent: '#forge:gems/mana_diamond',
            sourceCost: 300,
            output: 'integrateddynamics:logic_director',
            id: `${id_prefix}logic_director`
        },
        {
            inputs: [
                '#forge:ingots/iesnium',
                '#bloodmagic:crystals/demon',
                '#forge:ingots/iesnium',
                '#bloodmagic:dusts/corrupted',
                '#bloodmagic:dusts/corrupted',
                '#forge:ingots/iesnium',
                '#bloodmagic:crystals/demon',
                '#forge:ingots/iesnium'
            ],
            reagent: 'botania:gaia_pylon',
            sourceCost: 2000,
            output: 'bloodmagic:demonpylon',
            id: `${id_prefix}demonpylon`
        }
    ];

    /// Patchouli Removals
    let patchouli_removals = [
        { output: 'ars_nouveau:void_jar', id: 'ars_nouveau:void_jar' },
        { output: 'ars_nouveau:void_jar', id: 'ars_nouveau:void_jar' },
        { output: 'ars_elemental:fire_focus', id: 'ars_elemental:fire_focus' },
        { output: 'ars_elemental:water_focus', id: 'ars_elemental:water_focus' },
        { output: 'ars_elemental:earth_focus', id: 'ars_elemental:earth_focus' },
        { output: 'ars_elemental:air_focus', id: 'ars_elemental:air_focus' },
        { output: 'ars_elemental:necrotic_focus', id: 'ars_elemental:necrotic_focus' }
    ];

    patchouli_removals.forEach((patchouli_removal) => {
        recipes.push({
            inputs: ['kubejs:altered_recipe_indicator'],
            reagent: 'kubejs:altered_recipe_indicator',
            output: patchouli_removal.output,
            id: patchouli_removal.id
        });
    });

    recipes.forEach((recipe) => {
        recipe.sourceCost
            ? event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .merge({ sourceCost: recipe.sourceCost })
                  .id(recipe.id)
            : event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .id(recipe.id);
    });
});
