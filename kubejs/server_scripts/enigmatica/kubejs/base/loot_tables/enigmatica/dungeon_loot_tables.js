onEvent('server.datapack.low_priority', (event) => {
    let lootTables = [
        {
            name: 'dungeon_ocean_common',
            rolls: [1, 1],
            entries: [
                { item: 'upgrade_aquatic:purple_pickerelweed', weight: 100 },
                { item: 'upgrade_aquatic:blue_pickerelweed', weight: 100 },
                { item: 'thermal:silver_coin', weight: 100, amount: [10.0, 20.0] },
                { item: 'thermal:gold_coin', weight: 100, amount: [10.0, 20.0] },
                { item: 'thermal:ice_grenade', weight: 100, amount: [1.0, 5.0] },
                { item: 'botania:mana_bottle', weight: 100, amount: [1.0, 2.0] },
                { item: 'botania:mana_cookie', weight: 100, amount: [1.0, 3.0] },
                { item: 'aquaculture:double_hook', weight: 50 },
                { item: 'quark:black_rune', weight: 7 },
                { item: 'quark:red_rune', weight: 7 },
                { item: 'quark:green_rune', weight: 7 },
                { item: 'quark:brown_rune', weight: 7 },
                { item: 'quark:blue_rune', weight: 7 },
                { item: 'quark:purple_rune', weight: 7 },
                { item: 'quark:cyan_rune', weight: 7 },
                { item: 'quark:light_gray_rune', weight: 7 },
                { item: 'quark:gray_rune', weight: 7 },
                { item: 'quark:pink_rune', weight: 7 },
                { item: 'quark:lime_rune', weight: 7 },
                { item: 'quark:yellow_rune', weight: 7 },
                { item: 'quark:light_blue_rune', weight: 7 },
                { item: 'quark:magenta_rune', weight: 7 },
                { item: 'quark:orange_rune', weight: 7 },
                { item: 'quark:white_rune', weight: 7 },
                { item: 'minecraft:clay', weight: 100, amount: [6.0, 20.0] },
                { item: 'minecraft:prismarine_crystals', weight: 100, amount: [10.0, 20.0] },
                { item: 'minecraft:prismarine_shard', weight: 100, amount: [5.0, 10.0] },
                { item: 'upgrade_aquatic:glowing_ink_sac', weight: 100, amount: [1.0, 3.0] },
                { item: 'minecraft:ink_sac', weight: 100, amount: [8.0, 16.0] },
                { item: 'archers_paradox:prismarine_arrow', weight: 25, amount: [32.0, 64.0] },
                { item: 'farmersdelight:squid_ink_pasta', weight: 100, amount: [1.0, 3.0] },
                { item: 'sushigocrafting:salmon_maki', weight: 100, amount: [1.0, 3.0] },
                { item: 'minecraft:slime_ball', weight: 100, amount: [1.0, 3.0] },
                { item: 'upgrade_aquatic:thrasher_tooth', weight: 100, amount: [1.0, 3.0] },
                { item: 'alexsmobs:fish_oil', weight: 100, amount: [1.0, 3.0] }
            ]
        },
        {
            name: 'dungeon_ocean_rare',
            rolls: [1, 1],
            entries: [
                { item: 'thermal:diving_boots', weight: 50, enchantRange: [30.0, 40.0] },
                { item: 'thermal:diving_leggings', weight: 50, enchantRange: [30.0, 40.0] },
                { item: 'thermal:diving_chestplate', weight: 50, enchantRange: [30.0, 40.0] },
                { item: 'thermal:diving_helmet', weight: 50, enchantRange: [30.0, 40.0] },
                { item: 'darkutils:book_restore', weight: 100 },
                { item: 'darkutils:book_runelic', weight: 100 },
                { item: 'minecraft:gold_nugget', weight: 100, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:silver_nugget', weight: 100, amount: [8.0, 16.0] },
                { item: 'kubejs:zombie_heart', weight: 100 },
                { item: 'aquaculture:neptunium_fillet_knife', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'aquaculture:neptunium_ingot', weight: 100, amount: [1.0, 3.0] },
                { item: 'aquaculture:diamond_hook', weight: 20 },
                { item: 'minecraft:turtle_helmet', weight: 20, enchantRange: [30.0, 40.0] },
                { item: 'occultism:soul_gem', weight: 20 },
                { item: 'botania:bubbell', weight: 20 },
                { item: 'minecraft:trident', weight: 20, enchantRange: [30.0, 40.0] },
                { item: 'minecraft:heart_of_the_sea', weight: 20 },
                { item: 'apotheosis:prismatic_web', weight: 20 },
                { item: 'minecraft:nautilus_shell', weight: 100 }
            ]
        },
        {
            name: 'dungeon_ocean_epic',
            rolls: [1, 1],
            entries: [
                { item: 'upgrade_aquatic:elder_eye', weight: 10 },
                { item: 'minecraft:slime_spawn_egg', weight: 10 },
                { item: 'minecraft:guardian_spawn_egg', weight: 10 },
                { item: 'minecraft:drowned_spawn_egg', weight: 10 },
                { item: 'upgrade_aquatic:glow_squid_spawn_egg', weight: 20 },
                { item: 'minecraft:squid_spawn_egg', weight: 20 },
                { item: 'naturesaura:outpost_finder', weight: 100 },
                { item: 'artifacts:lucky_scarf', weight: 25 },
                { item: 'artifacts:snorkel', weight: 25 },
                { item: 'artifacts:flippers', weight: 25 },
                { item: 'artifacts:golden_hook', weight: 25 },
                { item: 'aquaculture:neptunium_fishing_rod', weight: 50, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:neptunium_boots', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:neptunium_leggings', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:neptunium_chestplate', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:neptunium_helmet', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:neptunium_bow', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:neptunium_sword', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:neptunium_hoe', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:neptunium_axe', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:neptunium_shovel', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:neptunium_pickaxe', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'aquaculture:nether_star_hook', weight: 50 },
                { item: 'alexsmobs:spiked_turtle_shell', weight: 100 },
                { item: 'occultism:iesnium_ingot', weight: 100, amount: [1.0, 3.0] },
                { item: 'archers_paradox:lightning_arrow', weight: 100, amount: [32.0, 64.0] },
                { item: 'minecraft:conduit', weight: 100 },
                { item: 'botania:water_ring', weight: 10 }
            ]
        },
        {
            name: 'dungeon_ocean_legendary',
            rolls: [1, 1],
            entries: [{ item: 'industrialforegoing:infinity_trident', weight: 1, chance: 0.000001 }]
        },
        {
            name: 'dungeon_ocean_decoration',
            rolls: [1, 1],
            entries: [
                { item: 'upgrade_aquatic:elder_prismarine_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:elder_prismarine_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:chrome_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:chrome_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:prismarine_coral_shower', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:elder_prismarine_coral_shower', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:prismarine_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:chrome_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:silk_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:pillow_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:rock_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:branch_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:petal_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:moss_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:star_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:finger_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:acan_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:elder_prismarine_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:prismarine_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:silk_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:pillow_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:rock_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:branch_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:petal_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:moss_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:star_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:finger_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:acan_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:horn_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:fire_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:bubble_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:brain_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:tube_coral_fan', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:horn_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:fire_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:bubble_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:brain_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:tube_coral', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:silk_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:pillow_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:rock_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:branch_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:petal_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:moss_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:star_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:finger_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:acan_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:prismarine_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:horn_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:fire_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:bubble_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:brain_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'minecraft:tube_coral_block', weight: 2, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:ochre_kelp_block', weight: 25, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:polar_kelp_block', weight: 25, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:thorny_kelp_block', weight: 25, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:tongue_kelp_block', weight: 25, amount: [3.0, 7.0] },
                { item: 'minecraft:dried_kelp_block', weight: 25, amount: [3.0, 7.0] },
                { item: 'quark:elder_sea_lantern', weight: 100, amount: [3.0, 7.0] },
                { item: 'minecraft:sea_lantern', weight: 100, amount: [3.0, 7.0] },
                { item: 'quark:elder_prismarine_bricks', weight: 100, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:luminous_elder_prismarine', weight: 100, amount: [3.0, 7.0] },
                { item: 'quark:dark_elder_prismarine', weight: 100, amount: [3.0, 7.0] },
                { item: 'quark:elder_prismarine', weight: 100, amount: [3.0, 7.0] },
                { item: 'minecraft:dark_prismarine', weight: 100, amount: [3.0, 7.0] },
                { item: 'minecraft:prismarine', weight: 100, amount: [3.0, 7.0] },
                { item: 'minecraft:prismarine_bricks', weight: 100, amount: [3.0, 7.0] },
                { item: 'upgrade_aquatic:tooth_lantern', weight: 100, amount: [6.0, 14.0] },
                { item: 'minecraft:lily_pad', weight: 100, amount: [6.0, 14.0] },
                { item: 'minecraft:sea_pickle', weight: 100, amount: [6.0, 14.0] }
            ]
        },
        {
            name: 'dungeon_ocean_fish_buckets',
            rolls: [1, 1],
            entries: [
                { item: 'upgrade_aquatic:lionfish_bucket', weight: 100 },
                { item: 'upgrade_aquatic:pike_bucket', weight: 100 },
                { item: 'upgrade_aquatic:nautilus_bucket', weight: 100 },
                { item: 'upgrade_aquatic:glow_squid_bucket', weight: 100 },
                { item: 'upgrade_aquatic:squid_bucket', weight: 100 },
                { item: 'alexsmobs:blobfish_bucket', weight: 100 },
                { item: 'alexsmobs:lobster_bucket', weight: 100 },
                { item: 'undergarden:gwibling_bucket', weight: 100 },
                { item: 'aquaculture:tuna_bucket', weight: 100 },
                { item: 'aquaculture:red_grouper_bucket', weight: 100 },
                { item: 'aquaculture:jellyfish_bucket', weight: 100 },
                { item: 'aquaculture:red_shrooma_bucket', weight: 100 },
                { item: 'aquaculture:tambaqui_bucket', weight: 100 },
                { item: 'aquaculture:brown_shrooma_bucket', weight: 100 },
                { item: 'aquaculture:piranha_bucket', weight: 100 },
                { item: 'aquaculture:boulti_bucket', weight: 100 },
                { item: 'aquaculture:capitaine_bucket', weight: 100 },
                { item: 'aquaculture:synodontis_bucket', weight: 100 },
                { item: 'aquaculture:smallmouth_bass_bucket', weight: 100 },
                { item: 'aquaculture:bluegill_bucket', weight: 100 },
                { item: 'aquaculture:brown_trout_bucket', weight: 100 },
                { item: 'aquaculture:carp_bucket', weight: 100 },
                { item: 'aquaculture:catfish_bucket', weight: 100 },
                { item: 'aquaculture:gar_bucket', weight: 100 },
                { item: 'aquaculture:minnow_bucket', weight: 100 },
                { item: 'aquaculture:muskellunge_bucket', weight: 100 },
                { item: 'aquaculture:perch_bucket', weight: 100 },
                { item: 'aquaculture:arapaima_bucket', weight: 100 },
                { item: 'aquaculture:bayad_bucket', weight: 100 },
                { item: 'aquaculture:rainbow_trout_bucket', weight: 100 },
                { item: 'aquaculture:pollock_bucket', weight: 100 },
                { item: 'aquaculture:pink_salmon_bucket', weight: 100 },
                { item: 'aquaculture:atlantic_herring_bucket', weight: 100 },
                { item: 'aquaculture:atlantic_halibut_bucket', weight: 100 },
                { item: 'aquaculture:pacific_halibut_bucket', weight: 100 },
                { item: 'aquaculture:blackfish_bucket', weight: 100 },
                { item: 'aquaculture:atlantic_cod_bucket', weight: 100 },
                { item: 'minecraft:tropical_fish_bucket', weight: 100 },
                { item: 'minecraft:cod_bucket', weight: 100 },
                { item: 'minecraft:salmon_bucket', weight: 100 },
                { item: 'minecraft:pufferfish_bucket', weight: 100 }
            ]
        },
        {
            name: 'dungeon_clockwork_common',
            rolls: [1, 1],
            entries: [
                { item: 'create:andesite_alloy', weight: 100, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:aluminum_nugget', weight: 15, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:lead_nugget', weight: 15, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:constantan_nugget', weight: 15, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:electrum_nugget', weight: 15, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:brass_nugget', weight: 15, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:bronze_nugget', weight: 15, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:steel_nugget', weight: 15, amount: [8.0, 16.0] },
                { item: 'artifacts:whoopee_cushion', weight: 20 },
                { item: 'minecraft:leather_boots', weight: 100, enchantRange: [10.0, 20.0] },
                { item: 'minecraft:leather_leggings', weight: 100, enchantRange: [10.0, 20.0] },
                { item: 'minecraft:leather_chestplate', weight: 100, enchantRange: [10.0, 20.0] },
                { item: 'minecraft:leather_helmet', weight: 100, enchantRange: [10.0, 20.0] },
                { item: 'create:copper_valve_handle', weight: 100 },
                { item: 'create:polished_rose_quartz', weight: 100, amount: [3.0, 12.0] },
                { item: 'create:fluid_pipe', weight: 100, amount: [3.0, 12.0] },
                { item: 'create:chute', weight: 100, amount: [3.0, 12.0] },
                { item: 'create:brass_casing', weight: 100, amount: [3.0, 12.0] },
                { item: 'create:tree_fertilizer', weight: 100, amount: [3.0, 12.0] },
                { item: 'immersiveengineering:connector_lv_relay', weight: 100, amount: [2.0, 4.0] },
                { item: 'immersiveengineering:connector_lv', weight: 50 },
                { item: 'immersiveengineering:wirecoil_copper', weight: 100, amount: [8.0, 16.0] },
                { item: 'immersiveengineering:pickaxe_steel', weight: 100, enchantRange: [10.0, 20.0] },
                { item: 'immersiveengineering:sword_steel', weight: 100, enchantRange: [10.0, 20.0] },
                { item: 'immersiveengineering:wirecoil_structure_rope', weight: 100, amount: [8.0, 16.0] },
                { item: 'immersiveengineering:wirecoil_structure_steel', weight: 100, amount: [8.0, 16.0] },
                { item: 'immersiveengineering:wirecoil_steel', weight: 50, amount: [8.0, 16.0] },
                { item: 'immersiveengineering:balloon', weight: 100, amount: [3.0, 12.0] },
                { item: 'immersiveengineering:casull', weight: 100, amount: [16.0, 32.0] },
                { item: 'immersiveengineering:buckshot', weight: 100, amount: [16.0, 32.0] },
                { item: 'minecraft:string', weight: 100, amount: [3.0, 12.0] },
                { item: 'minecraft:leather', weight: 100, amount: [3.0, 12.0] },
                { item: 'minecraft:white_wool', weight: 100, amount: [3.0, 12.0] },
                { item: 'create:cuckoo_clock', weight: 10 },
                { item: 'create:shaft', weight: 80, amount: [3.0, 12.0] },
                { item: 'create:large_cogwheel', weight: 80, amount: [1.0, 2.0] },
                { item: 'create:cogwheel', weight: 80, amount: [1.0, 2.0] },
                { item: 'create:belt_connector', weight: 80, amount: [1.0, 2.0] },
                { item: 'create:propeller', weight: 80, amount: [1.0, 2.0] },
                { item: 'create:builders_tea', weight: 100, amount: [1.0, 2.0] }
            ]
        },
        {
            name: 'dungeon_clockwork_rare',
            rolls: [1, 1],
            entries: [
                { item: 'emendatusenigmatica:lead_ingot', weight: 20, amount: [3.0, 8.0] },
                { item: 'emendatusenigmatica:electrum_ingot', weight: 20, amount: [3.0, 8.0] },
                { item: 'emendatusenigmatica:constantan_ingot', weight: 20, amount: [3.0, 8.0] },
                { item: 'emendatusenigmatica:bronze_ingot', weight: 20, amount: [3.0, 8.0] },
                { item: 'emendatusenigmatica:aluminum_ingot', weight: 20, amount: [3.0, 8.0] },
                { item: 'emendatusenigmatica:steel_ingot', weight: 20, amount: [3.0, 8.0] },
                { item: 'emendatusenigmatica:brass_ingot', weight: 20, amount: [3.0, 8.0] },
                { item: 'immersiveengineering:ingot_hop_graphite', weight: 100, amount: [3.0, 8.0] },
                { item: 'immersiveengineering:armor_steel_head', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'immersiveengineering:armor_steel_chest', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'immersiveengineering:armor_steel_legs', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'immersiveengineering:armor_steel_feet', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'immersiveengineering:component_steel', weight: 100 },
                { item: 'create:hose_pulley', weight: 50 },
                { item: 'create:brass_tunnel', weight: 100, amount: [1.0, 2.0] },
                { item: 'create:brass_funnel', weight: 100, amount: [1.0, 2.0] },
                { item: 'immersiveengineering:connector_hv_relay', weight: 100, amount: [2.0, 4.0] },
                { item: 'immersiveengineering:connector_hv', weight: 100, amount: [8.0, 16.0] },
                { item: 'immersiveengineering:electron_tube', weight: 50, amount: [2.0, 4.0] },
                { item: 'immersiveengineering:circuit_board', weight: 50, amount: [2.0, 4.0] },
                { item: 'create:precision_mechanism', weight: 50, amount: [2.0, 4.0] },
                { item: 'create:electron_tube', weight: 50, amount: [2.0, 4.0] },
                { item: 'create:chromatic_compound', weight: 20 }
            ]
        },
        {
            name: 'dungeon_clockwork_epic',
            rolls: [1, 1],
            entries: [
                { item: 'artifacts:pocket_piston', weight: 20 },
                { item: 'artifacts:lucky_scarf', weight: 20 },
                { item: 'artifacts:universal_attractor', weight: 20 },
                { item: 'artifacts:power_glove', weight: 20 },
                { item: 'immersiveengineering:railgun', weight: 20 },
                {
                    item: 'immersiveengineering:gunpart_hammer',
                    weight: 33,
                    nbt: '{perks:{cooldown:0.70,noise:0.75,luck:1.75},generatePerks:1}'
                },
                {
                    item: 'immersiveengineering:gunpart_drum',
                    weight: 33,
                    nbt: '{perks:{cooldown:0.70,noise:0.75,luck:1.75},generatePerks:1}'
                },
                {
                    item: 'immersiveengineering:gunpart_barrel',
                    weight: 33,
                    nbt: '{perks:{cooldown:0.70,noise:0.75,luck:1.75},generatePerks:1}'
                },
                { item: 'immersiveengineering:dragons_breath', weight: 100, amount: [32.0, 64.0] },
                { item: 'immersiveengineering:wolfpack', weight: 100, amount: [32.0, 64.0] },
                { item: 'create:extendo_grip', weight: 20 },
                { item: 'create:refined_radiance', weight: 20 },
                { item: 'create:shadow_steel', weight: 20 },
                { item: 'immersiveengineering:blueprint', weight: 100, nbt: '{blueprint:"electrode"}' },
                { item: 'immersiveengineering:blueprint', weight: 100, nbt: '{blueprint:"specialBullet"}' }
            ]
        },
        {
            name: 'dungeon_bastion_common',
            rolls: [1, 1],
            entries: [
                { item: 'byg:soul_shroom', weight: 100, amount: [4.0, 12.0] },
                { item: 'quark:black_rune', weight: 8 },
                { item: 'quark:red_rune', weight: 8 },
                { item: 'quark:green_rune', weight: 8 },
                { item: 'quark:brown_rune', weight: 8 },
                { item: 'quark:blue_rune', weight: 8 },
                { item: 'quark:purple_rune', weight: 8 },
                { item: 'quark:cyan_rune', weight: 8 },
                { item: 'quark:light_gray_rune', weight: 8 },
                { item: 'quark:gray_rune', weight: 8 },
                { item: 'quark:pink_rune', weight: 8 },
                { item: 'quark:lime_rune', weight: 8 },
                { item: 'quark:yellow_rune', weight: 8 },
                { item: 'quark:light_blue_rune', weight: 8 },
                { item: 'quark:magenta_rune', weight: 8 },
                { item: 'quark:orange_rune', weight: 8 },
                { item: 'quark:white_rune', weight: 8 },
                { item: 'minecraft:soul_lantern', weight: 100, amount: [4.0, 16.0] },
                { item: 'minecraft:gold_nugget', weight: 100, amount: [8.0, 20.0] },
                { item: 'quark:soul_bead', weight: 20 },
                { item: 'minecraft:soul_sand', weight: 100, amount: [4.0, 12.0] },
                { item: 'minecraft:nether_wart', weight: 100, amount: [4.0, 12.0] },
                { item: 'minecraft:nether_brick', weight: 100, amount: [4.0, 12.0] },
                { item: 'minecraft:golden_carrot', weight: 50, amount: [4.0, 12.0] },
                { item: 'minecraft:leather', weight: 100, amount: [4.0, 12.0] },
                { item: 'minecraft:string', weight: 100, amount: [4.0, 12.0] },
                { item: 'minecraft:warped_nylium', weight: 100, amount: [4.0, 12.0] },
                { item: 'byg:fungal_imparius', weight: 100, amount: [4.0, 12.0] },
                { item: 'byg:crimson_berries', weight: 100, amount: [4.0, 12.0] },
                { item: 'minecraft:crimson_nylium', weight: 100, amount: [4.0, 12.0] },
                { item: 'minecraft:warped_fungus', weight: 100, amount: [4.0, 12.0] },
                { item: 'minecraft:crimson_fungus', weight: 100, amount: [4.0, 12.0] },
                { item: 'botania:cosmetic_eerie_mask', weight: 10 },
                { item: 'botania:cosmetic_ancient_mask', weight: 10 },
                { item: 'bloodmagic:deforester_charge', weight: 100, amount: [4.0, 30.0] },
                { item: 'bloodmagic:shaped_charge', weight: 100, amount: [4.0, 30.0] },
                { item: 'bloodmagic:reinforcedslate', weight: 100, amount: [4.0, 6.0] },
                { item: 'bloodmagic:blankslate', weight: 100, amount: [4.0, 6.0] },
                { item: 'minecraft:fire_charge', weight: 100, amount: [4.0, 12.0] },
                { item: 'minecraft:gilded_blackstone', weight: 100, amount: [4.0, 8.0] },
                { item: 'decorative_blocks:soul_brazier', weight: 100 },
                { item: 'minecraft:glowstone_dust', weight: 100, amount: [8.0, 12.0] },
                { item: 'minecraft:obsidian', weight: 100, amount: [4.0, 8.0] },
                { item: 'minecraft:crying_obsidian', weight: 100, amount: [4.0, 8.0] },
                { item: 'minecraft:quartz', weight: 100, amount: [4.0, 16.0] },
                { item: 'minecraft:blaze_powder', weight: 100, amount: [1.0, 4.0] }
            ]
        },
        {
            name: 'dungeon_bastion_rare',
            rolls: [1, 1],
            entries: [
                { item: 'botania:bellethorn', weight: 20 },
                { item: 'botania:endoflame', weight: 20 },
                { item: 'naturesaura:fortress_finder', weight: 100 },
                { item: 'minecraft:blaze_spawn_egg', weight: 10 },
                { item: 'minecraft:ghast_spawn_egg', weight: 10 },
                { item: 'alexsmobs:mosquito_proboscis', weight: 20 },
                { item: 'alexsmobs:blood_sac', weight: 20 },
                { item: 'darkutils:book_runelic', weight: 100 },
                { item: 'minecraft:ghast_tear', weight: 100, amount: [1.0, 4.0] },
                { item: 'bloodmagic:weakbloodshard', weight: 1 },
                { item: 'bloodmagic:infusedslate', weight: 100 },
                { item: 'minecraft:gold_ingot', weight: 100, amount: [2.0, 16.0] },
                { item: 'minecraft:golden_apple', weight: 100 },
                {
                    item: 'minecraft:enchanted_book',
                    weight: 100,
                    nbt: '{StoredEnchantments:[{lvl:3s,id:"minecraft:soul_speed"}]}'
                },
                { item: 'minecraft:netherite_scrap', weight: 100, amount: [1.0, 4.0] },
                { item: 'mekanismtools:refined_glowstone_boots', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'mekanismtools:refined_glowstone_leggings', weight: 100, enchantRange: [30.0, 40.0] },
                {
                    item: 'mekanismtools:refined_glowstone_chestplate',
                    weight: 100,
                    enchantRange: [30.0, 40.0]
                },
                { item: 'mekanismtools:refined_glowstone_helmet', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'mekanismtools:refined_glowstone_sword', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'mekanismtools:refined_glowstone_shovel', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'mekanismtools:refined_glowstone_axe', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'mekanismtools:refined_glowstone_pickaxe', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'archers_paradox:blaze_arrow', weight: 100, amount: [32.0, 64.0] }
            ]
        },
        {
            name: 'dungeon_bastion_epic',
            rolls: [1, 1],
            entries: [
                { item: 'botania:smelt_rod', weight: 20 },
                { item: 'botania:fire_rod', weight: 20 },
                { item: 'botania:exchange_rod', weight: 20 },
                { item: 'bloodmagic:experiencebook', weight: 20 },
                { item: 'bloodmagic:demonslate', weight: 10, amount: [1.0, 2.0] },
                { item: 'artifacts:cloud_in_a_bottle', weight: 17 },
                { item: 'artifacts:umbrella', weight: 17 },
                { item: 'artifacts:scarf_of_invisibility', weight: 17 },
                { item: 'artifacts:fire_gauntlet', weight: 17 },
                { item: 'artifacts:vampiric_glove', weight: 17 },
                { item: 'artifacts:running_shoes', weight: 17 },
                { item: 'artifacts:antidote_vessel', weight: 17 },
                { item: 'minecraft:netherite_boots', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'minecraft:netherite_leggings', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'minecraft:netherite_chestplate', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'minecraft:netherite_helmet', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'minecraft:netherite_axe', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'minecraft:netherite_pickaxe', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'minecraft:netherite_shovel', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'minecraft:netherite_sword', weight: 100, enchantRange: [60.0, 100.0] }
            ]
        },
        {
            name: 'dungeon_witch_common',
            rolls: [1, 1],
            entries: [
                { item: 'astralsorcery:nocturnal_powder', weight: 100, amount: [8.0, 16.0] },
                { item: 'astralsorcery:illumination_powder', weight: 100, amount: [8.0, 16.0] },
                { item: 'astralsorcery:resonating_gem', weight: 100, amount: [2.0, 8.0] },
                { item: 'astralsorcery:stardust', weight: 100, amount: [1.0, 2.0] },
                { item: 'minecraft:emerald', weight: 100, amount: [8.0, 32.0] },
                { item: 'occultism:chalk_gold', weight: 1 },
                { item: 'occultism:chalk_white', weight: 1 },
                { item: 'botania:cosmetic_botanist_emblem', weight: 5 },
                { item: 'botania:cosmetic_four_leaf_clover', weight: 5 },
                { item: 'botania:cosmetic_unicorn_horn', weight: 5 },
                { item: 'minecraft:string', weight: 100 },
                { item: 'minecraft:fermented_spider_eye', weight: 100 },
                { item: 'minecraft:ender_pearl', weight: 100 },
                { item: 'minecraft:red_mushroom', weight: 100, amount: [8.0, 16.0] },
                { item: 'minecraft:brown_mushroom', weight: 100, amount: [8.0, 16.0] },
                { item: 'thermal:phytogro', weight: 100, amount: [8.0, 16.0] },
                { item: 'create:tree_fertilizer', weight: 100, amount: [8.0, 16.0] },
                { item: 'botania:fertilizer', weight: 100, amount: [8.0, 16.0] },
                { item: 'botania:horn_grass', weight: 50 },
                { item: 'emendatusenigmatica:lead_nugget', weight: 100, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:silver_nugget', weight: 100, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:signalum_nugget', weight: 100, amount: [8.0, 32.0] },
                { item: 'kubejs:pewter_nugget', weight: 100, amount: [8.0, 16.0] },
                { item: 'naturesaura:token_sorrow', weight: 50 },
                { item: 'naturesaura:token_anger', weight: 50 },
                { item: 'naturesaura:token_fear', weight: 50 },
                { item: 'naturesaura:token_joy', weight: 50 },
                { item: 'naturesaura:gold_powder', weight: 100 },
                { item: 'naturesaura:gold_leaf', weight: 100 },
                { item: 'ars_nouveau:void_jar', weight: 10 },
                { item: 'alexsmobs:soul_heart', weight: 20 },
                { item: 'kubejs:zombie_heart', weight: 20 },
                { item: 'darkutils:book_restore', weight: 100 },
                { item: 'occultism:candle_white', weight: 100, amount: [8.0, 12.0] }
            ]
        },
        {
            name: 'dungeon_witch_rare',
            rolls: [1, 1],
            entries: [
                { item: 'minecraft:cat_spawn_egg', weight: 10 },
                { item: 'minecraft:glistering_melon_slice', weight: 100, amount: [1.0, 4.0] },
                { item: 'minecraft:wither_rose', weight: 100 },
                { item: 'occultism:chalk_purple', weight: 1 },
                { item: 'occultism:iesnium_ingot', weight: 20, amount: [1.0, 3.0] },
                { item: 'occultism:miner_foliot_unspecialized', weight: 10, enchantRange: [30.0, 40.0] },
                { item: 'occultism:soul_gem', weight: 100 },
                { item: 'artifacts:cloud_in_a_bottle', weight: 20 },
                { item: 'artifacts:scarf_of_invisibility', weight: 20 },
                { item: 'artifacts:lucky_scarf', weight: 20 },
                { item: 'artifacts:antidote_vessel', weight: 20 },
                { item: 'artifacts:thorn_pendant', weight: 20 },
                { item: 'artifacts:flame_pendant', weight: 20 },
                { item: 'artifacts:shock_pendant', weight: 20 },
                { item: 'artifacts:panic_necklace', weight: 20 },
                { item: 'artifacts:cross_necklace', weight: 20 },
                { item: 'artifacts:vampiric_glove', weight: 20 },
                { item: 'artifacts:superstitious_hat', weight: 20 },
                { item: 'artifacts:crystal_heart', weight: 20 },
                { item: 'minecraft:ender_eye', weight: 100 },
                { item: 'botania:mana_tablet', weight: 100, nbt: '{mana:250000}' },
                { item: 'emendatusenigmatica:lead_ingot', weight: 100, amount: [8.0, 16.0] },
                { item: 'emendatusenigmatica:silver_ingot', weight: 100, amount: [8.0, 16.0] },
                { item: 'darkutils:book_runelic', weight: 100 },
                { item: 'darkutils:book_galactic', weight: 100 },
                { item: 'naturesaura:token_grief', weight: 5 },
                { item: 'naturesaura:token_rage', weight: 5 },
                { item: 'naturesaura:token_terror', weight: 5 },
                { item: 'naturesaura:token_euphoria', weight: 5 },
                { item: 'ars_nouveau:apprentice_hood', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'ars_nouveau:apprentice_robes', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'ars_nouveau:apprentice_leggings', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'ars_nouveau:apprentice_boots', weight: 100, enchantRange: [30.0, 40.0] },
                { item: 'ars_nouveau:mundane_belt', weight: 100 },
                { item: 'ars_nouveau:dull_trinket', weight: 100 },
                {
                    item: 'appliedenergistics2:charged_certus_quartz_crystal',
                    weight: 100,
                    amount: [8.0, 16.0]
                },
                { item: 'kubejs:pewter_ingot', weight: 100, amount: [8.0, 16.0] },
                { item: 'naturesaura:tainted_gold', weight: 50, amount: [8.0, 16.0] },
                { item: 'kubejs:pewter_inlay', weight: 100, amount: [1.0, 2.0] },
                { item: 'resourcefulbees:tainted_honeycomb', weight: 100, amount: [1.0, 2.0] }
            ]
        },
        {
            name: 'dungeon_witch_epic',
            rolls: [1, 1],
            entries: [
                { item: 'minecraft:wither_skeleton_skull', weight: 20 },
                { item: 'occultism:chalk_red', weight: 1 },
                { item: 'occultism:miner_djinni_ores', weight: 50, enchantRange: [60.0, 100.0] },
                { item: 'botania:ender_air_bottle', weight: 100, amount: [8.0, 16.0] },
                { item: 'botania:third_eye', weight: 10 },
                { item: 'botania:vinculotus', weight: 10 },
                { item: 'botania:dirt_rod', weight: 10 },
                { item: 'botania:water_rod', weight: 10 },
                { item: 'naturesaura:loot_finder', weight: 20 },
                { item: 'naturesaura:light_staff', weight: 10 },
                { item: 'naturesaura:shockwave_creator', weight: 10 },
                { item: 'naturesaura:cave_finder', weight: 10 },
                { item: 'ars_nouveau:wixie_charm', weight: 50 },
                { item: 'ars_nouveau:archmage_hood', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'ars_nouveau:archmage_robes', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'ars_nouveau:archmage_leggings', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'ars_nouveau:archmage_boots', weight: 100, enchantRange: [60.0, 100.0] },
                { item: 'ars_nouveau:wand', weight: 10 },
                { item: 'alexsmobs:mimicream', weight: 5 },
                { item: 'bloodmagic:experiencebook', weight: 10 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_ocean_floor_1',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_ocean_common', weight: 70 },
                { item: 'dungeon_ocean_rare', weight: 10 },
                { item: 'dungeon_ocean_decoration', weight: 15 },
                { item: 'dungeon_ocean_fish_buckets', weight: 5 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_ocean_floor_2',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_ocean_common', weight: 30 },
                { item: 'dungeon_ocean_rare', weight: 50 },
                { item: 'dungeon_ocean_decoration', weight: 15 },
                { item: 'dungeon_ocean_fish_buckets', weight: 5 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_ocean_floor_3',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_ocean_common', weight: 10 },
                { item: 'dungeon_ocean_rare', weight: 20 },
                { item: 'dungeon_ocean_epic', weight: 49 },
                { item: 'dungeon_ocean_legendary', weight: 1 },
                { item: 'dungeon_ocean_decoration', weight: 15 },
                { item: 'dungeon_ocean_fish_buckets', weight: 5 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_clockwork_floor_1',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_clockwork_common', weight: 90 },
                { item: 'dungeon_clockwork_rare', weight: 10 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_clockwork_floor_2',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_clockwork_common', weight: 50 },
                { item: 'dungeon_clockwork_rare', weight: 50 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_clockwork_floor_3',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_clockwork_common', weight: 20 },
                { item: 'dungeon_clockwork_rare', weight: 30 },
                { item: 'dungeon_clockwork_epic', weight: 50 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_bastion_floor_1',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_bastion_common', weight: 90 },
                { item: 'dungeon_bastion_rare', weight: 10 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_bastion_floor_2',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_bastion_common', weight: 50 },
                { item: 'dungeon_bastion_rare', weight: 50 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_bastion_floor_3',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_bastion_common', weight: 20 },
                { item: 'dungeon_bastion_rare', weight: 30 },
                { item: 'dungeon_bastion_epic', weight: 50 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_witch_floor_1',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_witch_common', weight: 90 },
                { item: 'dungeon_witch_rare', weight: 10 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_witch_floor_2',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_witch_common', weight: 50 },
                { item: 'dungeon_witch_rare', weight: 50 }
            ]
        },
        {
            type: 'combo_table',
            name: 'dungeon_witch_floor_3',
            rolls: [5, 20],
            entries: [
                { item: 'dungeon_witch_common', weight: 20 },
                { item: 'dungeon_witch_rare', weight: 30 },
                { item: 'dungeon_witch_epic', weight: 50 }
            ]
        }
    ];

    lootTables.forEach((lootTable) => {
        let entries = [];
        lootTable.entries.forEach((entry) => {
            let functions = [],
                conditions = [];
            if (entry.amount) {
                functions.push({
                    function: 'set_count',
                    count: { min: entry.amount[0], max: entry.amount[1] }
                });
            }
            if (entry.enchantRange) {
                functions.push({
                    function: 'enchant_with_levels',
                    levels: { min: entry.enchantRange[0], max: entry.enchantRange[1] },
                    treasure: true
                });
            }
            if (entry.nbt) {
                functions.push({ function: 'set_nbt', tag: entry.nbt });
            }
            if (entry.chance) {
                conditions.push({
                    condition: 'random_chance',
                    chance: entry.chance
                });
            }
            if (lootTable.type == 'combo_table') {
                entries.push({
                    type: 'loot_table',
                    weight: entry.weight,
                    name: `enigmatica:chests/${entry.item}`
                });
            } else {
                entries.push({
                    type: 'item',
                    weight: entry.weight,
                    name: entry.item,
                    functions: functions,
                    conditions: conditions
                });
            }
        });

        event.addJson(`enigmatica:loot_tables/chests/${lootTable.name}.json`, {
            pools: [{ rolls: { min: lootTable.rolls[0], max: lootTable.rolls[1] }, entries: entries }]
        });
    });
});
