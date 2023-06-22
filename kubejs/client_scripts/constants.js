//priority: 1000

const refinedStorageItems = [
    'grid',
    'crafting_grid',
    'pattern_grid',
    'fluid_grid',
    'controller',
    'creative_controller',
    'network_receiver',
    'network_transmitter',
    'relay',
    'detector',
    'security_manager',
    'wireless_transmitter',
    'crafter',
    'crafting_monitor',
    'disk_manipulator',
    'crafter_manager'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer cobblegens.
const generatableCobblestone = [
    'byg:dacite_cobblestone',
    'byg:ether_stone',
    'byg:purpur_stone',
    'byg:red_rock',
    'byg:scoria_cobblestone',
    'byg:soapstone',
    'create:andesite_cobblestone',
    'create:diorite_cobblestone',
    'create:granite_cobblestone',
    'quark:cobbedstone',
    'create:dark_scoria_cobblestone',
    'create:scoria_cobblestone',
    'create:gabbro_cobblestone',
    'create:dolomite_cobblestone',
    'create:weathered_limestone_cobblestone',
    'create:limestone_cobblestone'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer stonegens.
const generatableStone = [
    'minecraft:andesite',
    'minecraft:diorite',
    'minecraft:granite',
    'betterendforge:flavolite',
    'betterendforge:sulphuric_rock',
    'betterendforge:violecite',
    'byg:black_sandstone',
    'byg:blue_sandstone',
    'byg:dacite',
    'byg:purple_sandstone',
    'byg:pink_sandstone',
    'byg:scoria_stone',
    'byg:white_sandstone',
    'minecraft:red_sandstone',
    'minecraft:sandstone',
    'quark:basalt',
    'quark:brimstone',
    'quark:jasper',
    'quark:limestone',
    'quark:marble',
    'quark:permafrost',
    'quark:slate',
    'quark:deepslate',
    'astralsorcery:marble_raw',
    'create:dark_scoria',
    'create:scoria',
    'create:gabbro',
    'create:dolomite',
    'create:weathered_limestone',
    'create:limestone',
    'atum:alabaster',
    'atum:porphyry',
    'quark:myalite',
    'quark:dusky_myalite',
    'undergarden:shiverstone',
    'undergarden:depthrock',
    'undergarden:tremblecrust'
];
const generatableBasalt = [];

const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

const itemsToHide = [
    // Deprecated Ars Arsenal items
    'arsarsenal:aqua_hood',
    'arsarsenal:fire_hood',
    'arsarsenal:earth_hood',
    'arsarsenal:air_hood',

    'ars_nouveau:arcane_brick',
    'ars_nouveau:arcane_ore',
    'ars_nouveau:mana_gem_block',

    'bloodmagic:coalsand',
    'bloodmagic:saltpeter',
    'bloodmagic:sulfur',
    'bloodmagic:ironsand',
    'bloodmagic:goldsand',

    'byg:budding_ametrine_ore',
    'byg:anthracite_ore',
    'byg:lignite_ore',
    'byg:cryptic_redstone_ore',
    'byg:blue_nether_gold_ore',
    'byg:blue_nether_quartz_ore',
    'byg:brimstone_nether_gold_ore',
    'byg:brimstone_nether_quartz_ore',

    'compactcrafting:match_proxy',
    'compactcrafting:rescan_proxy',
    'compactcrafting:base',
    'compactcrafting:projector_dish',
    'compactcrafting:field_projector',

    'create:powdered_obsidian',
    'create:honey_bucket',
    'create:copper_ore',
    'create:zinc_ore',

    'eidolon:tallow',

    'emendatusenigmatica:sulfur_ore',
    'emendatusenigmatica:cinnabar_ore',
    'emendatusenigmatica:dimensional_crushed',
    'emendatusenigmatica:arcane_crushed',
    'emendatusenigmatica:potassium_nitrate_crushed',
    'emendatusenigmatica:sulfur_crushed',
    'emendatusenigmatica:apatite_crushed',
    'emendatusenigmatica:cinnabar_crushed',
    'emendatusenigmatica:bitumen_crushed',
    'emendatusenigmatica:fluorite_crushed',
    'emendatusenigmatica:certus_quartz_crushed',
    'emendatusenigmatica:ancient_debris_crushed',
    'emendatusenigmatica:quartz_crushed',
    'emendatusenigmatica:redstone_crushed',
    'emendatusenigmatica:lapis_crushed',
    'emendatusenigmatica:emerald_crushed',
    'emendatusenigmatica:diamond_crushed',
    'emendatusenigmatica:coal_crushed',
    'emendatusenigmatica:molten_zinc_bucket',
    'emendatusenigmatica:molten_uranium_bucket',
    'emendatusenigmatica:molten_tin_bucket',
    'emendatusenigmatica:molten_steel_bucket',
    'emendatusenigmatica:molten_silver_bucket',
    'emendatusenigmatica:molten_osmium_bucket',
    'emendatusenigmatica:molten_nickel_bucket',
    'emendatusenigmatica:molten_lead_bucket',
    'emendatusenigmatica:molten_iron_bucket',
    'emendatusenigmatica:molten_invar_bucket',
    'emendatusenigmatica:molten_gold_bucket',
    'emendatusenigmatica:molten_fluix_bucket',
    'emendatusenigmatica:molten_emerald_bucket',
    'emendatusenigmatica:molten_electrum_bucket',
    'emendatusenigmatica:molten_diamond_bucket',
    'emendatusenigmatica:molten_copper_bucket',
    'emendatusenigmatica:molten_constantan_bucket',
    'emendatusenigmatica:molten_cobalt_bucket',
    'emendatusenigmatica:molten_charged_certus_quartz_bucket',
    'emendatusenigmatica:molten_certus_quartz_bucket',
    'emendatusenigmatica:molten_bronze_bucket',
    'emendatusenigmatica:molten_brass_bucket',
    'emendatusenigmatica:molten_aluminum_bucket',
    'emendatusenigmatica:molten_ancient_debris_bucket',
    'emendatusenigmatica:molten_cloggrum_bucket',
    'emendatusenigmatica:molten_froststeel_bucket',
    'emendatusenigmatica:molten_utherium_bucket',
    'emendatusenigmatica:molten_regalium_bucket',
    'emendatusenigmatica:molten_iesnium_bucket',
    'emendatusenigmatica:molten_lumium_bucket',
    'emendatusenigmatica:molten_enderium_bucket',
    'emendatusenigmatica:molten_signalum_bucket',
    /iridium/,
    /cast_iron/,
    /peridot/,
    /emendatusenigmatica.*sapphire/,
    /emendatusenigmatica.*ruby/,

    'environmental:cherry_pie',
    'environmental:apple_pie',

    'farmersdelight:fried_egg',

    'immersiveengineering:dust_coke',
    'immersiveengineering:dust_saltpeter',
    'immersiveengineering:dust_wood',
    'immersiveengineering:coal_coke',

    'masterfulmachinery:auto_iridescent_altar_starlight_port_astral_starlight_output',
    'masterfulmachinery:auto_iridescent_altar_fluid_port_fluids_output',
    'masterfulmachinery:auto_iridescent_altar_energy_port_energy_output',
    'masterfulmachinery:advanced_assembly_table_high_pressure_port_pncr_pressure_output',
    'masterfulmachinery:stellar_neutron_activator_energy_port_energy_output',
    'masterfulmachinery:stellar_neutron_activator_mana_port_botania_mana_output',
    'masterfulmachinery:gaia_reactor_high_pressure_port_pncr_pressure_output',
    'masterfulmachinery:gaia_reactor_mana_port_botania_mana_input',
    'masterfulmachinery:gaia_reactor_fluid_port_fluids_output',
    'masterfulmachinery:gaia_reactor_energy_port_energy_output',
    'masterfulmachinery:gaia_reactor_item_port_items_input',
    'masterfulmachinery:enigmatic_tree_of_life_fluid_port_fluids_output',
    'masterfulmachinery:enigmatic_tree_of_life_mana_port_botania_mana_output',
    'masterfulmachinery:industrial_deuterium_plant_energy_port_energy_output',
    'masterfulmachinery:industrial_deuterium_plant_spinny_port_create_rotation_output',
    'masterfulmachinery:industrial_deuterium_plant_pressure_port_pncr_pressure_output',
    'masterfulmachinery:wicked_altar_fluid_port_fluids_output',

    'mctb:cherry_crafting_table',
    'mctb:dead_crafting_table',
    'mctb:fir_crafting_table',
    'mctb:hellbark_crafting_table',
    'mctb:jacaranda_crafting_table',
    'mctb:mahogany_crafting_table',
    'mctb:palm_crafting_table',
    'mctb:redwood_crafting_table',
    'mctb:umbran_crafting_table',
    'mctb:willow_crafting_table',
    'mctb:magic_crafting_table',

    'mekanism:fluorite_gem',

    // Deprecated Pedestals Items
    'pedestals:coin/fmagnetmodb',
    'pedestals:coin/fmagnetmod',
    'pedestals:coin/fmagnetitemstackb',
    'pedestals:coin/fluidpumpfilterblacklist',
    'pedestals:coin/fluidrelayblocked',
    'pedestals:coin/rfquarry',
    'pedestals:coin/rfquarryb',
    'pedestals:coin/rfrelayblocked',
    'pedestals:coin/xprelayblocked',
    'pedestals:coin/fmagnetitem',
    'pedestals:coin/fmagnetitemb',
    'pedestals:coin/fmagnetitemstack',
    'pedestals:coin/fluidpumpfilter',
    'pedestals:coin/fluidfilterblacklist',
    'pedestals:coin/fluidfilter',
    'pedestals:coin/enderfilteredexactimport',
    'pedestals:coin/enderfilteredfuzzyimport',
    'pedestals:coin/enderfilteredmodimport',
    'pedestals:coin/enderfilteredenchantedimport',
    'pedestals:coin/enderfilteredfoodimport',
    'pedestals:coin/fexportenchanted',
    'pedestals:coin/filterenchantedfuzzy',
    'pedestals:coin/filterenchantedfuzzyb',
    'pedestals:coin/filterenchantedexact',
    'pedestals:coin/filterenchantedexactb',
    'pedestals:coin/filterenchantedcount',
    'pedestals:coin/fexportitem',
    'pedestals:coin/fexportitemstack',
    'pedestals:coin/fexportmod',
    'pedestals:coin/fexportfood',
    'pedestals:coin/filterenchantedb',
    'pedestals:coin/filterenchanted',
    'pedestals:coin/filterdurabilityless',
    'pedestals:coin/filterdurability',
    'pedestals:coin/filterfoodb',
    'pedestals:coin/filterfood',
    'pedestals:coin/filtermodb',
    'pedestals:coin/filtermod',
    'pedestals:coin/filtertagb',
    'pedestals:coin/filtertag',
    'pedestals:coin/filteritemstackb',
    'pedestals:coin/filteritemstack',
    'pedestals:coin/filteritemb',
    'pedestals:coin/filteritem',
    'pedestals:coin/quarryb',
    'pedestals:coin/restriction',

    'powah:uraninite_ore',
    'powah:uraninite_ore_dense',
    'powah:uraninite_ore_poor',
    'powah:uraninite_raw',
    'powah:uraninite_raw_dense',
    'powah:uraninite_raw_poor',

    'quark:biotite',
    'quark:biotite_ore',
    'quark:tallow',

    'refinedstorage:silicon',

    'shrink:shrink_ray',

    'simplefarming:apple_pie',
    'simplefarming:blueberry_pie',

    'supplementaries:pedestal',
    'supplementaries:crank',
    'supplementaries:turn_table',
    'supplementaries:stone_lamp',
    'supplementaries:sack',
    'supplementaries:blackboard',

    'tconstruct:copper_ore',
    'tconstruct:cobalt_ore',
    'tconstruct:copper_ingot',
    'tconstruct:cobalt_ingot',

    'thermal:coal_coke',
    'thermal:coal_coke_block',
    'thermal:ender_pearl_dust',
    'thermal:sawdust',
    'thermal:press_gear_die',
    'thermal:press_packing_3x3_die',
    'thermal:press_packing_2x2_die',
    'thermal:press_unpacking_die',
    'thermal:rubber',
    'thermal:niter',
    'thermal:cinnabar',
    'thermal:apatite',
    'thermal:sulfur',

    'quark:bonded_ravager_hide',
    'quark:ravager_hide',
    'quark:backpack',
    'quark:crate',
    'quark:magnet',
    'quark:soul_compass',

    /emendatusenigmatica:\w+_andesite_ore/,
    /emendatusenigmatica:\w+_gabbro_ore/,
    /emendatusenigmatica:\w+_c_limestone_ore/,
    /emendatusenigmatica:\w+_scoria_ore/,
    /emendatusenigmatica:\w+_weathered_limestone_ore/,
    /emendatusenigmatica:\w+_jasper_ore/,
    /emendatusenigmatica:\w+_marble_ore/,
    /emendatusenigmatica:\w+_slate_ore/,
    /emendatusenigmatica:\w+_netherrack_ore/,
    /emendatusenigmatica:\w+_blackstone_ore/,
    /emendatusenigmatica:\w+_deepslate_ore/,
    /emendatusenigmatica:\w+_end_stone_ore/,
    /emendatusenigmatica:\w+_mossy_stone_ore/,
    /emendatusenigmatica:\w+_granite_ore/,
    /emendatusenigmatica:\w+_diorite_ore/,
    /emendatusenigmatica:\w+_sand_ore/,
    /emendatusenigmatica:\w+_gravel_ore/,
    /emendatusenigmatica:\w+_violecite_ore/,
    /emendatusenigmatica:\w+_sulphuric_rock_ore/,
    /emendatusenigmatica:\w+_flavolite_ore/,
    /emendatusenigmatica:\w+_cryptic_stone_ore/,
    /emendatusenigmatica:\w+_ether_stone_ore/,
    /emendatusenigmatica:\w+_nylium_soul_soil_ore/,
    /emendatusenigmatica:\w+_subzero_ash_ore/,
    /emendatusenigmatica:\w+_brimstone_ore/,
    /emendatusenigmatica:\w+_soul_soil_ore/,
    /emendatusenigmatica:\w+_basalt_ore/,
    /emendatusenigmatica:certus/,
    /emendatusenigmatica:fluix/,
    /tconstruct:copper_(ore|block|nugget)/,
    /tconstruct:cobalt_(ore|block|nugget)/,
    /titanium:\w+_gear/,
    /thermal:\w+_dust/,
    /thermal:\w+_gear$/,
    /thermal:\w+_ingot/,
    /thermal:\w+_nugget/,
    /thermal:\w+_ore/,
    /thermal:\w+_plate/,
    /pedestals:dust/,
    /mekanism:\w+_ore/,
    /minecraft:\w+_ore/,
    /immersiveengineering:plate_/,
    /immersiveengineering:storage_/,
    /immersiveengineering:ore_/,
    /create:\w+_sheet/,
    /create:\w+_nugget/,
    /create:\w+_ingot/,
    /immersiveposts:stick_/,
    /eidolon:\w+_ore/,
    /byg:pendorite/,
    /byg:ametrine/,
    /emendatusenigmatica:\w+certus/,
    /emendatusenigmatica:\w+fluix/,
    /powah:\w+_starter/,
    /rftoolsbase:dimensionalshard_/,
    /theoneprobe:/,
    /upgrade_aquatic:\w+_jelly_torch/
];

let ee_types = ['clump', 'crystal', 'dirty_dust', 'shard', 'fragment', 'gravel'];
ee_types.forEach((type) => {
    itemsToHide.push(
        `emendatusenigmatica:dimensional_${type}`,
        `emendatusenigmatica:arcane_${type}`,
        `emendatusenigmatica:potassium_nitrate_${type}`,
        `emendatusenigmatica:sulfur_${type}`,
        `emendatusenigmatica:apatite_${type}`,
        `emendatusenigmatica:cinnabar_${type}`,
        `emendatusenigmatica:bitumen_${type}`,
        `emendatusenigmatica:fluorite_${type}`,
        `emendatusenigmatica:certus_quartz_${type}`,
        `emendatusenigmatica:quartz_${type}`,
        `emendatusenigmatica:redstone_${type}`,
        `emendatusenigmatica:lapis_${type}`,
        `emendatusenigmatica:emerald_${type}`,
        `emendatusenigmatica:diamond_${type}`,
        `emendatusenigmatica:coal_${type}`,
        `emendatusenigmatica:sapphire_${type}`,
        `emendatusenigmatica:ruby_${type}`,
        `emendatusenigmatica:iridium_${type}`,
        `emendatusenigmatica:peridot_${type}`
    );
});

/*  This allows hiding individual recipes. It's used primarily for recipes displayed in Patchouli manuals 
    that have been changed to use a different crafting type or that have been disabled. It allows creating a
    recipe pointer that will display in Patchouli but not in JEI.  

    Use the logger in the jei_hide_recipes script to discover the correct CategoryID. They do not match the recipe type.
*/
const recipesToHide = [
    {
        category: 'minecraft:crafting',
        recipes_by_id: [
            'apotheosis:hellshelf',
            'apotheosis:seashelf',
            'apotheosis:endshelf',
            'apotheosis:enchantment_library',
            'apotheosis:armor_head_book',
            'apotheosis:armor_chest_book',
            'apotheosis:armor_legs_book',
            'apotheosis:armor_feet_book',
            'apotheosis:bow_book',
            'apotheosis:fishing_rod_book',
            'apotheosis:digger_book',
            'apotheosis:weapon_book',
            'apotheosis:scrap_tome',
            'apotheosis:null_book',

            'ars_nouveau:arcane_stone',
            'ars_nouveau:crystallizer',
            'ars_nouveau:potion_melder',
            'ars_nouveau:volcanic_accumulator',
            'ars_nouveau:mana_condenser',
            'ars_nouveau:mycelial_sourcelink',
            'ars_nouveau:vitalic_sourcelink',
            'ars_nouveau:alchemical_sourcelink',
            'ars_nouveau:novice_hood',
            'ars_nouveau:novice_robes',
            'ars_nouveau:novice_leggings',
            'ars_nouveau:novice_boots',
            'ars_nouveau:apprentice_hood',
            'ars_nouveau:apprentice_robes',
            'ars_nouveau:apprentice_leggings',
            'ars_nouveau:apprentice_boots',
            'ars_nouveau:archmage_hood',
            'ars_nouveau:archmage_robes',
            'ars_nouveau:archmage_leggings',
            'ars_nouveau:archmage_boots',

            'bloodmagic:soul_forge',
            'bloodmagic:ritual_diviner_0',
            'bloodmagic:blood_rune_blank',
            'bloodmagic:blood_rune_speed',
            'bloodmagic:blood_rune_sacrifice',
            'bloodmagic:blood_rune_self_sacrifice',
            'bloodmagic:blood_rune_displacement',
            'bloodmagic:blood_rune_capacity',
            'bloodmagic:blood_rune_aug_capacity',
            'bloodmagic:blood_rune_orb',
            'bloodmagic:blood_rune_acceleration',
            'bloodmagic:blood_rune_charging',
            'bloodmagic:teleposer',
            'bloodmagic:synthetic_point',

            'botania:terrasteel_helmet',
            'botania:terrasteel_chestplate',
            'botania:terrasteel_leggings',
            'botania:terrasteel_boots',
            'botania:spark',
            'botania:mana_pylon',
            'botania:natura_pylon',
            'botania:apothecary_default',
            'botania:terra_plate',
            'botania:alfheim_portal',
            'botania:mana_ring',
            'botania:gaia_ingot',
            'botania:gaia_pylon',
            'botania:mining_ring',
            'botania:dodge_ring',
            'botania:swap_ring',
            'botania:water_ring',
            'botania:magnet_ring',
            'botania:aura_ring',
            'botania:pixie_ring',
            'botania:reach_ring',
            'botania:flighttiara_0',
            'botania:runic_altar',
            'botania:mana_spreader',
            'botania:elven_spreader',
            'botania:gaia_spreader',
            'botania:fel_pumpkin',
            'botania:blood_pendant',
            'botania:ender_dagger',
            'botania:brewery',
            'botania:thorn_chakram',
            'botania:flare_chakram',
            'botania:laputa_shard',

            'mythicbotany:wither_aconite_floating',
            'mythicbotany:raindeletia_floating',
            'mythicbotany:modified_gaia_pylon_with_alfsteel',
            'mythicbotany:alfsteel_pylon',
            'mythicbotany:mana_infuser',
            'mythicbotany:fire_ring',
            'mythicbotany:ice_ring',
            'mythicbotany:mana_collector',
            'mythicbotany:kvasir_mead',

            'naturesaura:calling_spirit',
            'naturesaura:animal_spawner',
            'naturesaura:gold_fiber',
            'naturesaura:gold_brick',
            'naturesaura:generator_limit_remover',
            'naturesaura:shockwave_creator',
            'naturesaura:death_ring',
            'naturesaura:ender_crate',
            'naturesaura:ender_access',
            'naturesaura:gold_nether_brick',

            'pneumaticcraft:air_compressor',
            'pneumaticcraft:advanced_air_compressor',
            'pneumaticcraft:pressure_chamber_valve_x1',
            'pneumaticcraft:pressure_chamber_valve_x4',
            'pneumaticcraft:flux_compressor',
            'pneumaticcraft:printed_circuit_board',
            'pneumaticcraft:assembly_drill',
            'pneumaticcraft:assembly_laser',
            'pneumaticcraft:assembly_io_unit_import',
            'pneumaticcraft:assembly_io_unit_export',
            'pneumaticcraft:assembly_controller',
            'pneumaticcraft:assembly_platform',
            'pneumaticcraft:aerial_interface',
            'pneumaticcraft:spawner_extractor'
        ]
    },
    {
        category: 'ars_nouveau:apparatus',
        recipes_by_id: [
            'ars_nouveau:jar_of_light',
            'ars_nouveau:void_jar',
            'ars_elemental:air_focus',
            'ars_elemental:water_focus',
            'ars_elemental:earth_focus',
            'ars_elemental:fire_focus',
            'ars_elemental:necrotic_focus'
        ]
    },
    {
        category: 'astralsorcery:altar_attunement',
        recipes_by_id: ['astralsorcery:altar/attunement_altar']
    },
    {
        category: 'botania:petals',
        recipes_by_id: ['mythicbotany:petal_apothecary/wither_aconite', 'mythicbotany:petal_apothecary/raindeletia']
    },
    {
        category: 'botania:mana_pool',
        recipes_by_id: ['botania:mana_infusion/mana_powder_dust', 'botania:mana_infusion/mana_powder_dye']
    },
    {
        category: 'bloodmagic:alchemytable',
        recipes_by_id: [
            'bloodmagic:alchemytable/basic_cutting_fluid_sigil',
            'bloodmagic:alchemytable/component_frame_parts',
            'bloodmagic:alchemytable/router_filter',
            'bloodmagic:alchemytable/tag_router_filter',
            'bloodmagic:alchemytable/enchant_router_filter',
            'bloodmagic:alchemytable/composite_router_filter',
            'bloodmagic:alchemytable/mod_router_filter'
        ]
    },
    {
        category: 'bloodmagic:soulforge',
        recipes_by_id: [
            'bloodmagic:soulforge/sentientsword',
            'bloodmagic:soulforge/sentientaxe',
            'bloodmagic:soulforge/sentientpickaxe',
            'bloodmagic:soulforge/sentientshovel',
            'bloodmagic:soulforge/sentientscythe',
            'bloodmagic:soulforge/node_router',
            'bloodmagic:soulforge/routing_node',
            'bloodmagic:soulforge/output_routing_node',
            'bloodmagic:soulforge/input_routing_node',
            'bloodmagic:soulforge/master_routing_node',
            'bloodmagic:soulforge/demon_pylon',
            'bloodmagic:soulforge/master_node_upgrade'
        ]
    },
    {
        category: 'bloodmagic:altar',
        recipes_by_id: ['bloodmagic:altar/teleposer_focus']
    }
];

const disabledItems = [
    'abnormals_delight:adzuki_cake_slice',
    'abnormals_delight:banana_cake_slice',
    'abnormals_delight:cherry_pantry',
    'abnormals_delight:chocolate_cake_slice',
    'abnormals_delight:cooked_duck_fillet',
    'abnormals_delight:cooked_venison_shanks',
    'abnormals_delight:duck_fillet',
    'abnormals_delight:mint_cake_slice',
    'abnormals_delight:necromium_knife',
    'abnormals_delight:passionfruit_glazed_duck',
    'abnormals_delight:seared_venison',
    'abnormals_delight:silver_knife',
    'abnormals_delight:strawberry_cake_slice',
    'abnormals_delight:vanilla_cake_slice',
    'abnormals_delight:venison_shanks',
    'abnormals_delight:willow_pantry',
    'abnormals_delight:wisteria_pantry',

    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    'aquaculture:frog_legs_raw',
    'aquaculture:frog_legs_cooked',

    'betterendforge:ender_dust',

    'blockcarpentry:frame_chest',
    'blockcarpentry:illusion_chest',

    'bloodmagic:sand_netherite',
    'bloodmagic:gravel_netherite_scrap',
    'bloodmagic:fragment_netherite_scrap',

    'byg:ametrine_block',
    'byg:ametrine_boots',
    'byg:ametrine_chestplate',
    'byg:ametrine_gems',
    'byg:ametrine_helmet',
    'byg:ametrine_horse_armor',
    'byg:ametrine_leggings',
    'byg:ametrine_ore',
    'byg:pendorite_axe',
    'byg:pendorite_battleaxe',
    'byg:pendorite_block',
    'byg:pendorite_hoe',
    'byg:pendorite_horse_armor',
    'byg:pendorite_ore',
    'byg:pendorite_pickaxe',
    'byg:pendorite_scraps',
    'byg:pendorite_shovel',
    'byg:pendorite_sword',
    'byg:emeraldite_ore',
    'byg:emeraldite_shards',

    'create:dough',

    'decorative_blocks_abnormals:ender_brazier',

    'integrateddynamics:part_entity_writer',

    'ironjetpacks:strap',
    'ironjetpacks:basic_coil',
    'ironjetpacks:advanced_coil',
    'ironjetpacks:elite_coil',
    'ironjetpacks:ultimate_coil',
    'ironjetpacks:hardened_cell',
    'ironjetpacks:hardened_capacitor',
    'ironjetpacks:invar_cell',
    'ironjetpacks:invar_capacitor',
    'ironjetpacks:blazing_cell',
    'ironjetpacks:blazing_capacitor',
    'ironjetpacks:signalum_cell',
    'ironjetpacks:signalum_capacitor',
    'ironjetpacks:niotic_cell',
    'ironjetpacks:niotic_capacitor',
    'ironjetpacks:lumium_cell',
    'ironjetpacks:lumium_capacitor',
    'ironjetpacks:spirited_cell',
    'ironjetpacks:spirited_capacitor',
    'ironjetpacks:enderium_cell',
    'ironjetpacks:enderium_capacitor',
    'ironjetpacks:nitro_cell',
    'ironjetpacks:nitro_capacitor',

    'losttrinkets:magical_herbs',
    'losttrinkets:octopick',
    'losttrinkets:tea_leaf',
    'losttrinkets:book_o_enchanting',
    'losttrinkets:blaze_heart',
    'losttrinkets:turtle_shell',
    'losttrinkets:tha_cloud',
    'losttrinkets:rock_candy',
    'losttrinkets:mad_aura',

    /materialis:psimetal/,

    'mekanism:sawdust',
    'mekanism:dust_lapis_lazuli',
    'mekanism:dust_lithium',

    'mythicbotany:raindeletia',
    'mythicbotany:raindeletia_floating',
    'mythicbotany:wither_aconite',
    'mythicbotany:wither_aconite_floating',

    'pedestals:dustflour',

    'pneumaticcraft:wheat_flour',

    'projectvibrantjourneys:clam',
    'projectvibrantjourneys:clam_chowder',
    'projectvibrantjourneys:cooked_clam',

    'quark:pipe',
    'quark:potato_crate',
    'quark:beetroot_crate',
    'quark:carrot_crate',

    'thermal:beetroot_block',
    'thermal:carrot_block',
    'thermal:potato_block',
    'thermal:sugar_cane_block',
    'thermal:apple_block',

    'simplefarming:raw_bacon',
    'simplefarming:cooked_bacon',
    'simplefarming:cooked_egg',
    'simplefarming:noodles',
    'simplefarming:chocolate',

    'storagedrawers:conversion_upgrade'
];

const materialsToUnify = [
    'iron',
    'gold',
    'copper',
    'silver',
    'zinc',
    'brass',
    'lead',
    'tin',
    'compressed_iron',
    'nickel',
    'aluminum',
    'uranium',
    'bronze',
    'electrum',
    'constantan',
    'steel',
    'osmium',
    'diamond',
    'lapis',
    'emerald',
    'quartz',
    'coal',
    'charcoal',
    'obsidian',
    'ender',
    'fluix',
    'saltpeter',
    'fluorite',
    'invar',
    'signalum',
    'lumium',
    'enderium',
    'sulfur',
    'cinnabar',
    'niter',
    'potassium_nitrate',
    'saltpeter',
    'apatite',
    'bitumen',
    'redstone',
    'glowstone',
    'arcane',
    'mana',
    'certus_quartz',
    'charged_certus_quartz',
    'iesnium',
    'dimensional',
    'cloggrum',
    'froststeel',
    'regalium',
    'utherium',
    'coal_coke',
    'starmetal',
    'amber',
    'cobalt',
    'queens_slime',
    'rose_gold',
    'tinkers_bronze',
    'knightslime',
    'slimesteel',
    'manyullyn',
    'hepatizon',
    'thallasium',
    'nebu',
    'aeternium',
    'alfsteel',
    'elementium',
    'gaia_spirit',
    'infused_iron',
    'manasteel',
    'sky',
    'terminite',
    'terrasteel',
    'energized_steel',
    'blazing',
    'niotic',
    'spirited',
    'nitro'
];

const craftedBees = [
    'bloody',
    'elven',
    'mana',
    'starry',
    'terrestrial',
    'enderslime',
    'ichor',
    'skyslime',
    'cobalt',
    'industrious',
    'pcbee',
    'otherworldly',
    'carbee',
    'dusty_mummbee',
    'brass',
    'bronze',
    'constantan',
    'invar',
    'steel',
    'lumium',
    'signalum',
    'electrum',
    'enderium'
];

const industrialforegoing = {
    laser_lens: {
        white: 'industrialforegoing:laser_lens0',
        orange: 'industrialforegoing:laser_lens1',
        magenta: 'industrialforegoing:laser_lens2',
        light_blue: 'industrialforegoing:laser_lens3',
        yellow: 'industrialforegoing:laser_lens4',
        lime: 'industrialforegoing:laser_lens5',
        pink: 'industrialforegoing:laser_lens6',
        gray: 'industrialforegoing:laser_lens7',
        light_gray: 'industrialforegoing:laser_lens8',
        cyan: 'industrialforegoing:laser_lens9',
        purple: 'industrialforegoing:laser_lens10',
        blue: 'industrialforegoing:laser_lens11',
        brown: 'industrialforegoing:laser_lens12',
        green: 'industrialforegoing:laser_lens13',
        red: 'industrialforegoing:laser_lens14',
        black: 'industrialforegoing:laser_lens15'
    }
};
