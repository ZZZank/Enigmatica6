// priority: 1000

// used to generate stonecutting recipes
const stonecuttables = [
    {
        // stone type name (used for tag generation)
        name: 'stone',
        // items added here can be cut from other blocks of this stone type
        // and can also be cut into other blocks of this type
        stones: [
            'minecraft:stone_bricks',
            'minecraft:chiseled_stone_bricks',
            'masonry:stonecarvedcreeper',
            'masonry:stonecarvedderp',
            'masonry:stonecarvedvillager',
            'masonry:stonecarvedwither',
            'masonry:stonecarvedwriting',
            'masonry:stonecolumn',
            'masonry:stonecut',
            'masonry:stoneengraved',
            'masonry:stonepanels',
            'masonry:stonepavers',
            'masonry:stonepillar',
            'masonry:stonepolished',
            'masonry:stoneroughcut',
            'masonry:stonetiled',
            'masonry:stonediamondpavers',
            'chipped:stone_18',
            'chipped:stone_17',
            'chipped:stone_16',
            'chipped:stone_15',
            'chipped:stone_14',
            'chipped:stone_13',
            'chipped:stone_12',
            'chipped:stone_3',
            'chipped:stone_4',
            'chipped:stone_5',
            'chipped:stone_6',
            'chipped:stone_7',
            'chipped:stone_8',
            'chipped:stone_9',
            'chipped:stone_10',
            'chipped:stone_11',
            'chipped:stone_2',
            'chipped:stone_1'
        ],
        // items added here can be cut from other blocks of this stone type,
        // but cannot be cut into other blocks from this type
        onlyAsOutput: ['minecraft:cobblestone'],
        // items added here can be cut into other blocks of this stone type,
        // but cannot be cut from blocks other blocks of this type
        onlyAsInput: ['minecraft:stone']
    },
    {
        name: 'andesite',
        stones: [
            'minecraft:polished_andesite',
            'create:andesite_bricks',
            'create:andesite_pillar',
            'create:fancy_andesite_bricks',
            'create:paved_andesite',
            'create:layered_andesite',
            'create:mossy_andesite',
            'create:overgrown_andesite',
            'masonry:andesitetiled',
            'masonry:andesitecarvedcreeper',
            'masonry:andesitecarvedderp',
            'masonry:andesitecarvedvillager',
            'masonry:andesitecarvedwither',
            'masonry:andesitecarvedwriting',
            'masonry:andesitecolumn',
            'masonry:andesitecut',
            'masonry:andesiteengraved',
            'masonry:andesitepanels',
            'masonry:andesitepavers',
            'masonry:andesitepillar',
            'masonry:andesiteroughcut',
            'masonry:andesitechiseled',
            'masonry:andesitecobbled',
            'masonry:andesitecobbledmossy',
            'masonry:andesitediamondpavers',
            'masonry:andesitelargebricks',
            'masonry:andesitelargebrickscracked',
            'masonry:andesitelargebricksmossy',
            'masonry:andesitesmallbrick',
            'quark:andesite_bricks',
            'quark:chiseled_andesite_bricks',
            'quark:andesite_pavement',
            'quark:andesite_pillar',
            'chipped:andesite_18',
            'chipped:andesite_17',
            'chipped:andesite_16',
            'chipped:andesite_15',
            'chipped:andesite_14',
            'chipped:andesite_13',
            'chipped:andesite_12',
            'chipped:andesite_11',
            'chipped:andesite_10',
            'chipped:andesite_9',
            'chipped:andesite_8',
            'chipped:andesite_7',
            'chipped:andesite_6',
            'chipped:andesite_5',
            'chipped:andesite_4',
            'chipped:andesite_3',
            'chipped:andesite_2',
            'chipped:andesite_1'
        ],
        onlyAsOutput: ['create:andesite_cobblestone'],
        onlyAsInput: ['minecraft:andesite']
    },
    {
        name: 'arcane_stone',
        stones: [
            'ars_nouveau:arcane_stone',
            'ars_nouveau:arcane_bricks',
            'ars_nouveau:ab_smooth',
            'ars_nouveau:ab_smooth_slab',
            'ars_nouveau:ab_clover',
            'ars_nouveau:ab_mosaic',
            'ars_nouveau:ab_herring',
            'ars_nouveau:ab_basket',
            'ars_nouveau:ab_alternating',
            'ars_nouveau:sas_basket',
            'ars_nouveau:sas_clover',
            'ars_nouveau:sas_herring',
            'ars_nouveau:sas_mosaic',
            'ars_nouveau:sas_alternating',
            'ars_nouveau:sas_ashlar'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'basalt',
        stones: [
            'minecraft:polished_basalt',
            'chipped:basalt_20',
            'chipped:basalt_19',
            'chipped:basalt_18',
            'chipped:basalt_17',
            'chipped:basalt_16',
            'chipped:basalt_15',
            'chipped:basalt_14',
            'chipped:basalt_13',
            'chipped:basalt_12',
            'chipped:basalt_11',
            'chipped:basalt_10',
            'chipped:basalt_9',
            'chipped:basalt_8',
            'chipped:basalt_7',
            'chipped:basalt_6',
            'chipped:basalt_5',
            'chipped:basalt_4',
            'chipped:basalt_3',
            'chipped:basalt_2',
            'chipped:basalt_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: ['minecraft:basalt']
    },
    {
        name: 'blackstone',
        stones: [
            'minecraft:polished_blackstone',
            'minecraft:chiseled_polished_blackstone',
            'minecraft:polished_blackstone_bricks',
            'chipped:blackstone_21',
            'chipped:blackstone_20',
            'chipped:blackstone_19',
            'chipped:blackstone_18',
            'chipped:blackstone_17',
            'chipped:blackstone_16',
            'chipped:blackstone_15',
            'chipped:blackstone_14',
            'chipped:blackstone_13',
            'chipped:blackstone_12',
            'chipped:blackstone_11',
            'chipped:blackstone_10',
            'chipped:blackstone_9',
            'chipped:blackstone_8',
            'chipped:blackstone_7',
            'chipped:blackstone_6',
            'chipped:blackstone_5',
            'chipped:blackstone_4',
            'chipped:blackstone_3',
            'chipped:blackstone_2',
            'chipped:blackstone_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: ['minecraft:blackstone']
    },
    {
        name: 'blaze_quartz',
        stones: ['botania:blaze_quartz', 'botania:blaze_quartz_pillar', 'botania:chiseled_blaze_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'bloodstone',
        stones: ['bloodmagic:largebloodstonebrick', 'bloodmagic:bloodstonebrick'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'carved_pumpkin',
        stones: [
            'minecraft:carved_pumpkin',
            'chipped:carved_pumpkin_19',
            'chipped:carved_pumpkin_18',
            'chipped:carved_pumpkin_17',
            'chipped:carved_pumpkin_16',
            'chipped:carved_pumpkin_15',
            'chipped:carved_pumpkin_14',
            'chipped:carved_pumpkin_13',
            'chipped:carved_pumpkin_12',
            'chipped:carved_pumpkin_11',
            'chipped:carved_pumpkin_10',
            'chipped:carved_pumpkin_9',
            'chipped:carved_pumpkin_8',
            'chipped:carved_pumpkin_7',
            'chipped:carved_pumpkin_6',
            'chipped:carved_pumpkin_5',
            'chipped:carved_pumpkin_4',
            'chipped:carved_pumpkin_3',
            'chipped:carved_pumpkin_2',
            'chipped:carved_pumpkin_1',
            'chipped:carved_pumpkin_nether',
            'chipped:carved_pumpkin_end2',
            'chipped:carved_pumpkin_end'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'clay',
        stones: [
            'minecraft:clay',
            'chipped:clay_19',
            'chipped:clay_18',
            'chipped:clay_17',
            'chipped:clay_16',
            'chipped:clay_15',
            'chipped:clay_14',
            'chipped:clay_13',
            'chipped:clay_12',
            'chipped:clay_11',
            'chipped:clay_10',
            'chipped:clay_9',
            'chipped:clay_8',
            'chipped:clay_7',
            'chipped:clay_6',
            'chipped:clay_5',
            'chipped:clay_4',
            'chipped:clay_3',
            'chipped:clay_2',
            'chipped:clay_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'cobblestone',
        stones: [
            'minecraft:cobblestone',
            'byg:rocky_stone',
            'quark:cobblestone_bricks',
            'chipped:cobblestone_18',
            'chipped:cobblestone_17',
            'chipped:cobblestone_16',
            'chipped:cobblestone_15',
            'chipped:cobblestone_14',
            'chipped:cobblestone_13',
            'chipped:cobblestone_12',
            'chipped:cobblestone_11',
            'chipped:cobblestone_10',
            'chipped:cobblestone_9',
            'chipped:cobblestone_8',
            'chipped:cobblestone_7',
            'chipped:cobblestone_6',
            'chipped:cobblestone_5',
            'chipped:cobblestone_4',
            'chipped:cobblestone_3',
            'chipped:cobblestone_2',
            'chipped:cobblestone_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'crying_obsidian',
        stones: [
            'minecraft:crying_obsidian',
            'chipped:crying_obsidian_20',
            'chipped:crying_obsidian_19',
            'chipped:crying_obsidian_18',
            'chipped:crying_obsidian_17',
            'chipped:crying_obsidian_16',
            'chipped:crying_obsidian_15',
            'chipped:crying_obsidian_14',
            'chipped:crying_obsidian_13',
            'chipped:crying_obsidian_12',
            'chipped:crying_obsidian_11',
            'chipped:crying_obsidian_10',
            'chipped:crying_obsidian_9',
            'chipped:crying_obsidian_8',
            'chipped:crying_obsidian_7',
            'chipped:crying_obsidian_6',
            'chipped:crying_obsidian_5',
            'chipped:crying_obsidian_4',
            'chipped:crying_obsidian_3',
            'chipped:crying_obsidian_2',
            'chipped:crying_obsidian_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'dacite',
        stones: ['byg:dacite', 'byg:dacite_bricks', 'byg:dacite_pillar', 'byg:dacite_tile'],
        onlyAsOutput: ['byg:dacite_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'dark_prismarine',
        stones: [
            'minecraft:dark_prismarine',
            'masonry:darkprismarinetiled',
            'masonry:darkprismarinecarvedcreeper',
            'masonry:darkprismarinecarvedderp',
            'masonry:darkprismarinecarvedvillager',
            'masonry:darkprismarinecarvedwither',
            'masonry:darkprismarinecarvedwriting',
            'masonry:darkprismarinecolumn',
            'masonry:darkprismarinecut',
            'masonry:darkprismarineengraved',
            'masonry:darkprismarinepavers',
            'masonry:darkprismarinepillar',
            'masonry:darkprismarinepolished',
            'masonry:darkprismarineroughcut',
            'masonry:darkprismarinechiseled',
            'masonry:darkprismarinecobbled',
            'masonry:darkprismarinecobbledmossy',
            'masonry:darkprismarinediamondpavers',
            'masonry:darkprismarinelargebricks',
            'masonry:darkprismarinelargebrickscracked',
            'masonry:darkprismarinelargebricksmossy',
            'masonry:darkprismarinesmallbrick',
            'chipped:dark_prismarine_18',
            'chipped:dark_prismarine_17',
            'chipped:dark_prismarine_16',
            'chipped:dark_prismarine_15',
            'chipped:dark_prismarine_14',
            'chipped:dark_prismarine_13',
            'chipped:dark_prismarine_12',
            'chipped:dark_prismarine_11',
            'chipped:dark_prismarine_10',
            'chipped:dark_prismarine_9',
            'chipped:dark_prismarine_8',
            'chipped:dark_prismarine_7',
            'chipped:dark_prismarine_6',
            'chipped:dark_prismarine_5',
            'chipped:dark_prismarine_4',
            'chipped:dark_prismarine_3',
            'chipped:dark_prismarine_2',
            'chipped:dark_prismarine_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'dark_scoria',
        stones: [
            'create:dark_scoria',
            'create:dark_scoria_bricks',
            'create:dark_scoria_pillar',
            'create:fancy_dark_scoria_bricks',
            'create:paved_dark_scoria',
            'create:chiseled_dark_scoria',
            'create:layered_dark_scoria',
            'create:polished_dark_scoria',
            'create:mossy_dark_scoria',
            'create:overgrown_dark_scoria'
        ],
        onlyAsOutput: ['create:dark_scoria_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'diorite',
        stones: [
            'minecraft:polished_diorite',
            'create:diorite_bricks',
            'create:diorite_pillar',
            'create:fancy_diorite_bricks',
            'create:paved_diorite',
            'create:layered_diorite',
            'create:mossy_diorite',
            'create:overgrown_diorite',
            'masonry:dioritetiled',
            'masonry:dioritecarvedcreeper',
            'masonry:dioritecarvedderp',
            'masonry:dioritecarvedvillager',
            'masonry:dioritecarvedwither',
            'masonry:dioritecarvedwriting',
            'masonry:dioritecolumn',
            'masonry:dioritecut',
            'masonry:dioriteengraved',
            'masonry:dioritepanels',
            'masonry:dioritepavers',
            'masonry:dioritepillar',
            'masonry:dioriteroughcut',
            'masonry:dioritechiseled',
            'masonry:dioritecobbled',
            'masonry:dioritecobbledmossy',
            'masonry:dioritediamondpavers',
            'masonry:dioritelargebricks',
            'masonry:dioritelargebrickscracked',
            'masonry:dioritelargebricksmossy',
            'masonry:dioritesmallbrick',
            'quark:diorite_bricks',
            'quark:chiseled_diorite_bricks',
            'quark:diorite_pavement',
            'quark:diorite_pillar',
            'chipped:diorite_18',
            'chipped:diorite_17',
            'chipped:diorite_16',
            'chipped:diorite_15',
            'chipped:diorite_14',
            'chipped:diorite_13',
            'chipped:diorite_12',
            'chipped:diorite_11',
            'chipped:diorite_10',
            'chipped:diorite_9',
            'chipped:diorite_8',
            'chipped:diorite_7',
            'chipped:diorite_6',
            'chipped:diorite_5',
            'chipped:diorite_4',
            'chipped:diorite_3',
            'chipped:diorite_2',
            'chipped:diorite_1'
        ],
        onlyAsOutput: ['create:diorite_cobblestone'],
        onlyAsInput: ['minecraft:diorite']
    },
    {
        name: 'dolomite',
        stones: [
            'create:dolomite',
            'create:dolomite_bricks',
            'create:dolomite_pillar',
            'create:fancy_dolomite_bricks',
            'create:paved_dolomite',
            'create:chiseled_dolomite',
            'create:layered_dolomite',
            'create:polished_dolomite',
            'create:mossy_dolomite',
            'create:overgrown_dolomite'
        ],
        onlyAsOutput: ['create:dolomite_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'end_stone',
        stones: [
            'minecraft:end_stone',
            'chipped:end_stone_18',
            'chipped:end_stone_17',
            'chipped:end_stone_16',
            'chipped:end_stone_15',
            'chipped:end_stone_14',
            'chipped:end_stone_13',
            'chipped:end_stone_12',
            'chipped:end_stone_11',
            'chipped:end_stone_10',
            'chipped:end_stone_9',
            'chipped:end_stone_8',
            'chipped:end_stone_7',
            'chipped:end_stone_6',
            'chipped:end_stone_5',
            'chipped:end_stone_4',
            'chipped:end_stone_3',
            'chipped:end_stone_2',
            'chipped:end_stone_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'elder_prismarine',
        stones: ['quark:elder_prismarine', 'quark:elder_prismarine_bricks'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'elf_quartz',
        stones: ['botania:elf_quartz', 'botania:elf_quartz_pillar', 'botania:chiseled_elf_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'gabbro',
        stones: [
            'create:gabbro',
            'create:gabbro_bricks',
            'create:gabbro_pillar',
            'create:fancy_gabbro_bricks',
            'create:paved_gabbro',
            'create:chiseled_gabbro',
            'create:layered_gabbro',
            'create:polished_gabbro',
            'create:mossy_gabbro',
            'create:overgrown_gabbro'
        ],
        onlyAsOutput: ['create:gabbro_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'gilded_blackstone',
        stones: [
            'minecraft:gilded_blackstone',
            'chipped:gilded_blackstone_26',
            'chipped:gilded_blackstone_25',
            'chipped:gilded_blackstone_24',
            'chipped:gilded_blackstone_23',
            'chipped:gilded_blackstone_22',
            'chipped:gilded_blackstone_21',
            'chipped:gilded_blackstone_20',
            'chipped:gilded_blackstone_19',
            'chipped:gilded_blackstone_18',
            'chipped:gilded_blackstone_17',
            'chipped:gilded_blackstone_16',
            'chipped:gilded_blackstone_15',
            'chipped:gilded_blackstone_14',
            'chipped:gilded_blackstone_13',
            'chipped:gilded_blackstone_12',
            'chipped:gilded_blackstone_11',
            'chipped:gilded_blackstone_10',
            'chipped:gilded_blackstone_9',
            'chipped:gilded_blackstone_8',
            'chipped:gilded_blackstone_7',
            'chipped:gilded_blackstone_6',
            'chipped:gilded_blackstone_5',
            'chipped:gilded_blackstone_4',
            'chipped:gilded_blackstone_3',
            'chipped:gilded_blackstone_2',
            'chipped:gilded_blackstone_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'granite',
        stones: [
            'minecraft:polished_granite',
            'create:granite_bricks',
            'create:granite_pillar',
            'create:fancy_granite_bricks',
            'create:paved_granite',
            'create:layered_granite',
            'create:mossy_granite',
            'create:overgrown_granite',
            'masonry:granitetiled',
            'masonry:granitecarvedcreeper',
            'masonry:granitecarvedderp',
            'masonry:granitecarvedvillager',
            'masonry:granitecarvedwither',
            'masonry:granitecarvedwriting',
            'masonry:granitecolumn',
            'masonry:granitecut',
            'masonry:graniteengraved',
            'masonry:granitepanels',
            'masonry:granitepavers',
            'masonry:granitepillar',
            'masonry:graniteroughcut',
            'masonry:granitechiseled',
            'masonry:granitecobbled',
            'masonry:granitecobbledmossy',
            'masonry:granitediamondpavers',
            'masonry:granitelargebricks',
            'masonry:granitelargebrickscracked',
            'masonry:granitelargebricksmossy',
            'masonry:granitesmallbrick',
            'quark:granite_bricks',
            'quark:chiseled_granite_bricks',
            'quark:granite_pavement',
            'quark:granite_pillar',
            'chipped:granite_18',
            'chipped:granite_17',
            'chipped:granite_16',
            'chipped:granite_15',
            'chipped:granite_14',
            'chipped:granite_13',
            'chipped:granite_12',
            'chipped:granite_11',
            'chipped:granite_10',
            'chipped:granite_9',
            'chipped:granite_8',
            'chipped:granite_7',
            'chipped:granite_6',
            'chipped:granite_5',
            'chipped:granite_4',
            'chipped:granite_3',
            'chipped:granite_2',
            'chipped:granite_1'
        ],
        onlyAsOutput: ['create:granite_cobblestone'],
        onlyAsInput: ['minecraft:granite']
    },
    {
        name: 'hay_block',
        stones: [
            'minecraft:hay_block',
            'chipped:hay_block_8',
            'chipped:hay_block_7',
            'chipped:hay_block_6',
            'chipped:hay_block_5',
            'chipped:hay_block_4',
            'chipped:hay_block_3',
            'chipped:hay_block_2',
            'chipped:hay_block_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'jack_o_lantern',
        stones: [
            'minecraft:jack_o_lantern',
            'chipped:jack_o_lantern_19',
            'chipped:jack_o_lantern_18',
            'chipped:jack_o_lantern_17',
            'chipped:jack_o_lantern_16',
            'chipped:jack_o_lantern_15',
            'chipped:jack_o_lantern_14',
            'chipped:jack_o_lantern_13',
            'chipped:jack_o_lantern_12',
            'chipped:jack_o_lantern_11',
            'chipped:jack_o_lantern_10',
            'chipped:jack_o_lantern_9',
            'chipped:jack_o_lantern_8',
            'chipped:jack_o_lantern_7',
            'chipped:jack_o_lantern_6',
            'chipped:jack_o_lantern_5',
            'chipped:jack_o_lantern_4',
            'chipped:jack_o_lantern_3',
            'chipped:jack_o_lantern_2',
            'chipped:jack_o_lantern_1',
            'chipped:jack_o_lantern_nether',
            'chipped:jack_o_lantern_end2',
            'chipped:jack_o_lantern_end'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'jasper',
        stones: [
            'quark:jasper',
            'quark:jasper_bricks',
            'quark:chiseled_jasper_bricks',
            'quark:jasper_pavement',
            'quark:jasper_pillar',
            'quark:polished_jasper'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'lavender_quartz',
        stones: [
            'botania:lavender_quartz',
            'botania:lavender_quartz_pillar',
            'botania:chiseled_lavender_quartz'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'limestone',
        stones: [
            'create:limestone',
            'create:limestone_bricks',
            'create:limestone_pillar',
            'create:fancy_limestone_bricks',
            'create:paved_limestone',
            'create:chiseled_limestone',
            'create:layered_limestone',
            'create:polished_limestone',
            'create:mossy_limestone',
            'create:overgrown_limestone',
            'quark:limestone',
            'quark:limestone_bricks',
            'quark:chiseled_limestone_bricks',
            'quark:limestone_pavement',
            'quark:limestone_pillar',
            'quark:polished_limestone'
        ],
        onlyAsOutput: ['create:limestone_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'magma',
        stones: ['minecraft:magma_block', 'quark:magma_bricks'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'mana_quartz',
        stones: ['botania:mana_quartz', 'botania:mana_quartz_pillar', 'botania:chiseled_mana_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'marble',
        stones: [
            'astralsorcery:marble_bricks',
            'astralsorcery:marble_chiseled',
            'astralsorcery:marble_engraved',
            'astralsorcery:marble_raw',
            'astralsorcery:marble_arch',
            'astralsorcery:marble_pillar',
            'quark:marble',
            'quark:marble_bricks',
            'quark:chiseled_marble_bricks',
            'quark:marble_pavement',
            'quark:marble_pillar',
            'quark:polished_marble'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'marblesooty',
        stones: [
            'astralsorcery:black_marble_raw',
            'astralsorcery:black_marble_pillar',
            'astralsorcery:black_marble_arch',
            'astralsorcery:black_marble_bricks',
            'astralsorcery:black_marble_chiseled',
            'astralsorcery:black_marble_engraved'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_desert_stone',
        stones: [
            'botania:metamorphic_desert_stone',
            'botania:metamorphic_desert_bricks',
            'botania:chiseled_metamorphic_desert_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_forest_stone',
        stones: [
            'botania:metamorphic_forest_stone',
            'botania:metamorphic_forest_bricks',
            'botania:chiseled_metamorphic_forest_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_fungal_stone',
        stones: [
            'botania:metamorphic_fungal_stone',
            'botania:metamorphic_fungal_bricks',
            'botania:chiseled_metamorphic_fungal_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_mesa_stone',
        stones: [
            'botania:metamorphic_mesa_stone',
            'botania:metamorphic_mesa_bricks',
            'botania:chiseled_metamorphic_mesa_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_mountain_stone',
        stones: [
            'botania:metamorphic_mountain_stone',
            'botania:metamorphic_mountain_bricks',
            'botania:chiseled_metamorphic_mountain_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_plains_stone',
        stones: [
            'botania:metamorphic_plains_stone',
            'botania:metamorphic_plains_bricks',
            'botania:chiseled_metamorphic_plains_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_swamp_stone',
        stones: [
            'botania:metamorphic_swamp_stone',
            'botania:metamorphic_swamp_bricks',
            'botania:chiseled_metamorphic_swamp_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'metamorphic_taiga_stone',
        stones: [
            'botania:metamorphic_taiga_stone',
            'botania:metamorphic_taiga_bricks',
            'botania:chiseled_metamorphic_taiga_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'midori',
        stones: ['quark:midori_block', 'quark:midori_pillar'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'myalite',
        stones: [
            'quark:myalite',
            'quark:myalite_bricks',
            'quark:chiseled_myalite_bricks',
            'quark:myalite_pavement',
            'quark:myalite_pillar',
            'quark:polished_myalite'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'nether_bricks',
        stones: [
            'minecraft:nether_bricks',
            'chipped:nether_bricks_18',
            'chipped:nether_bricks_17',
            'chipped:nether_bricks_16',
            'chipped:nether_bricks_15',
            'chipped:nether_bricks_14',
            'chipped:nether_bricks_13',
            'chipped:nether_bricks_12',
            'chipped:nether_bricks_11',
            'chipped:nether_bricks_10',
            'chipped:nether_bricks_9',
            'chipped:nether_bricks_8',
            'chipped:nether_bricks_7',
            'chipped:nether_bricks_6',
            'chipped:nether_bricks_5',
            'chipped:nether_bricks_4',
            'chipped:nether_bricks_3',
            'chipped:nether_bricks_2',
            'chipped:nether_bricks_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'netherrack',
        stones: [
            'minecraft:netherrack',
            'chipped:netherrack_18',
            'chipped:netherrack_17',
            'chipped:netherrack_16',
            'chipped:netherrack_15',
            'chipped:netherrack_14',
            'chipped:netherrack_13',
            'chipped:netherrack_12',
            'chipped:netherrack_11',
            'chipped:netherrack_10',
            'chipped:netherrack_9',
            'chipped:netherrack_8',
            'chipped:netherrack_7',
            'chipped:netherrack_6',
            'chipped:netherrack_5',
            'chipped:netherrack_4',
            'chipped:netherrack_3',
            'chipped:netherrack_2',
            'chipped:netherrack_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'obsidian',
        stones: [
            'minecraft:obsidian',
            'chipped:obsidian_20',
            'chipped:obsidian_19',
            'chipped:obsidian_18',
            'chipped:obsidian_17',
            'chipped:obsidian_16',
            'chipped:obsidian_15',
            'chipped:obsidian_14',
            'chipped:obsidian_13',
            'chipped:obsidian_12',
            'chipped:obsidian_11',
            'chipped:obsidian_10',
            'chipped:obsidian_9',
            'chipped:obsidian_8',
            'chipped:obsidian_7',
            'chipped:obsidian_6',
            'chipped:obsidian_5',
            'chipped:obsidian_4',
            'chipped:obsidian_3',
            'chipped:obsidian_2',
            'chipped:obsidian_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'permafrost',
        stones: ['quark:permafrost', 'quark:permafrost_bricks'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'prismarine_brick',
        stones: [
            'minecraft:prismarine_bricks',
            'masonry:prismarinetiled',
            'masonry:prismarinecarvedcreeper',
            'masonry:prismarinecarvedderp',
            'masonry:prismarinecarvedvillager',
            'masonry:prismarinecarvedwither',
            'masonry:prismarinecarvedwriting',
            'masonry:prismarinecolumn',
            'masonry:prismarinecut',
            'masonry:prismarineengraved',
            'masonry:prismarinepanels',
            'masonry:prismarinepillar',
            'masonry:prismarinepolished',
            'masonry:prismarineroughcut',
            'masonry:prismarinechiseled',
            'masonry:prismarinediamondpavers',
            'masonry:prismarinelargebricks',
            'masonry:prismarinelargebrickscracked',
            'masonry:prismarinelargebricksmossy',
            'masonry:prismarinesmallbrick'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'prismarine',
        stones: [
            'minecraft:prismarine',
            'masonry:prismarinecobbled',
            'masonry:prismarinecobbledmossy',
            'chipped:prismarine_18',
            'chipped:prismarine_17',
            'chipped:prismarine_16',
            'chipped:prismarine_15',
            'chipped:prismarine_14',
            'chipped:prismarine_13',
            'chipped:prismarine_12',
            'chipped:prismarine_11',
            'chipped:prismarine_10',
            'chipped:prismarine_9',
            'chipped:prismarine_8',
            'chipped:prismarine_7',
            'chipped:prismarine_6',
            'chipped:prismarine_5',
            'chipped:prismarine_4',
            'chipped:prismarine_3',
            'chipped:prismarine_2',
            'chipped:prismarine_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'pumpkin',
        stones: [
            'minecraft:pumpkin',
            'chipped:pumpkin_nether',
            'chipped:pumpkin_end2',
            'chipped:pumpkin_end'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'purpur_block',
        stones: [
            'minecraft:purpur_block',
            'chipped:purpur_block_18',
            'chipped:purpur_block_17',
            'chipped:purpur_block_16',
            'chipped:purpur_block_15',
            'chipped:purpur_block_14',
            'chipped:purpur_block_13',
            'chipped:purpur_block_12',
            'chipped:purpur_block_11',
            'chipped:purpur_block_10',
            'chipped:purpur_block_9',
            'chipped:purpur_block_8',
            'chipped:purpur_block_7',
            'chipped:purpur_block_6',
            'chipped:purpur_block_5',
            'chipped:purpur_block_4',
            'chipped:purpur_block_3',
            'chipped:purpur_block_2',
            'chipped:purpur_block_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'quartz',
        stones: [
            'minecraft:quartz_block',
            'minecraft:quartz_pillar',
            'minecraft:chiseled_quartz_block',
            'minecraft:quartz_bricks',
            'chipped:quartz_block_18',
            'chipped:quartz_block_17',
            'chipped:quartz_block_16',
            'chipped:quartz_block_15',
            'chipped:quartz_block_14',
            'chipped:quartz_block_13',
            'chipped:quartz_block_12',
            'chipped:quartz_block_11',
            'chipped:quartz_block_10',
            'chipped:quartz_block_9',
            'chipped:quartz_block_8',
            'chipped:quartz_block_7',
            'chipped:quartz_block_6',
            'chipped:quartz_block_5',
            'chipped:quartz_block_4',
            'chipped:quartz_block_3',
            'chipped:quartz_block_2',
            'chipped:quartz_block_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'red_nether_bricks',
        stones: [
            'minecraft:red_nether_bricks',
            'chipped:red_nether_bricks_18',
            'chipped:red_nether_bricks_17',
            'chipped:red_nether_bricks_16',
            'chipped:red_nether_bricks_15',
            'chipped:red_nether_bricks_14',
            'chipped:red_nether_bricks_13',
            'chipped:red_nether_bricks_12',
            'chipped:red_nether_bricks_11',
            'chipped:red_nether_bricks_10',
            'chipped:red_nether_bricks_9',
            'chipped:red_nether_bricks_8',
            'chipped:red_nether_bricks_7',
            'chipped:red_nether_bricks_6',
            'chipped:red_nether_bricks_5',
            'chipped:red_nether_bricks_4',
            'chipped:red_nether_bricks_3',
            'chipped:red_nether_bricks_2',
            'chipped:red_nether_bricks_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'red_quartz',
        stones: ['botania:red_quartz', 'botania:red_quartz_pillar', 'botania:chiseled_red_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'red_rock',
        stones: [
            'byg:red_rock',
            'byg:red_rock_bricks',
            'byg:mossy_red_rock_bricks',
            'byg:chiseled_red_rock_bricks',
            'byg:cracked_red_rock_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'red_sandstone',
        stones: [
            'minecraft:red_sandstone',
            'minecraft:cut_red_sandstone',
            'minecraft:chiseled_red_sandstone',
            'quark:red_sandstone_bricks',
            'chipped:red_sandstone_18',
            'chipped:red_sandstone_17',
            'chipped:red_sandstone_16',
            'chipped:red_sandstone_15',
            'chipped:red_sandstone_14',
            'chipped:red_sandstone_13',
            'chipped:red_sandstone_12',
            'chipped:red_sandstone_11',
            'chipped:red_sandstone_10',
            'chipped:red_sandstone_9',
            'chipped:red_sandstone_8',
            'chipped:red_sandstone_7',
            'chipped:red_sandstone_6',
            'chipped:red_sandstone_5',
            'chipped:red_sandstone_4',
            'chipped:red_sandstone_3',
            'chipped:red_sandstone_2',
            'chipped:red_sandstone_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'redstone_lamp',
        stones: [
            'minecraft:redstone_lamp',
            'chipped:redstone_lamp_18',
            'chipped:redstone_lamp_17',
            'chipped:redstone_lamp_16',
            'chipped:redstone_lamp_15',
            'chipped:redstone_lamp_14',
            'chipped:redstone_lamp_13',
            'chipped:redstone_lamp_12',
            'chipped:redstone_lamp_11',
            'chipped:redstone_lamp_10',
            'chipped:redstone_lamp_9',
            'chipped:redstone_lamp_8',
            'chipped:redstone_lamp_7',
            'chipped:redstone_lamp_6',
            'chipped:redstone_lamp_5',
            'chipped:redstone_lamp_4',
            'chipped:redstone_lamp_3',
            'chipped:redstone_lamp_2',
            'chipped:redstone_lamp_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'reinforced_stone',
        stones: [
            'pneumaticcraft:reinforced_stone',
            'pneumaticcraft:reinforced_bricks',
            'pneumaticcraft:reinforced_brick_tile',
            'pneumaticcraft:reinforced_brick_pillar'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'sandstone',
        stones: [
            'minecraft:sandstone',
            'minecraft:cut_sandstone',
            'minecraft:chiseled_sandstone',
            'quark:sandstone_bricks',
            'chipped:sandstone_18',
            'chipped:sandstone_17',
            'chipped:sandstone_16',
            'chipped:sandstone_15',
            'chipped:sandstone_14',
            'chipped:sandstone_13',
            'chipped:sandstone_12',
            'chipped:sandstone_11',
            'chipped:sandstone_10',
            'chipped:sandstone_9',
            'chipped:sandstone_8',
            'chipped:sandstone_7',
            'chipped:sandstone_6',
            'chipped:sandstone_5',
            'chipped:sandstone_4',
            'chipped:sandstone_3',
            'chipped:sandstone_2',
            'chipped:sandstone_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'shroomlight',
        stones: [
            'minecraft:shroomlight',
            'chipped:shroomlight_16',
            'chipped:shroomlight_15',
            'chipped:shroomlight_14',
            'chipped:shroomlight_13',
            'chipped:shroomlight_12',
            'chipped:shroomlight_11',
            'chipped:shroomlight_10',
            'chipped:shroomlight_9',
            'chipped:shroomlight_8',
            'chipped:shroomlight_7',
            'chipped:shroomlight_6',
            'chipped:shroomlight_5',
            'chipped:shroomlight_4',
            'chipped:shroomlight_3',
            'chipped:shroomlight_2',
            'chipped:shroomlight_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'scoria',
        stones: [
            'byg:scoria_pillar',
            'byg:scoria_stonebricks',
            'byg:scoria_stonebrick_wall',
            'byg:scoria_stonebrick_stairs',
            'byg:scoria_cobblestone_wall',
            'byg:scoria_cobblestone_stairs',
            'byg:scoria_stone_wall',
            'byg:scoria_stone_stairs',
            'create:scoria',
            'create:scoria_bricks',
            'create:scoria_pillar',
            'create:fancy_scoria_bricks',
            'create:paved_scoria',
            'create:chiseled_scoria',
            'create:layered_scoria',
            'create:polished_scoria',
            'create:mossy_scoria',
            'create:overgrown_scoria'
        ],
        onlyAsOutput: ['byg:scoria_cobblestone', 'create:scoria_cobblestone'],
        onlyAsInput: ['byg:scoria_stone']
    },
    {
        name: 'sea_lantern',
        stones: [
            'minecraft:sea_lantern',
            'chipped:sea_lantern_16',
            'chipped:sea_lantern_15',
            'chipped:sea_lantern_14',
            'chipped:sea_lantern_13',
            'chipped:sea_lantern_12',
            'chipped:sea_lantern_11',
            'chipped:sea_lantern_10',
            'chipped:sea_lantern_9',
            'chipped:sea_lantern_8',
            'chipped:sea_lantern_7',
            'chipped:sea_lantern_6',
            'chipped:sea_lantern_5',
            'chipped:sea_lantern_4',
            'chipped:sea_lantern_3',
            'chipped:sea_lantern_2',
            'chipped:sea_lantern_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'slate',
        stones: [
            'quark:slate',
            'quark:slate_bricks',
            'quark:chiseled_slate_bricks',
            'quark:slate_pavement',
            'quark:slate_pillar',
            'quark:polished_slate'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'deepslate',
        stones: [
            'quark:cobbled_deepslate',
            'quark:polished_deepslate',
            'quark:deepslate_bricks',
            'quark:deepslate_tiles',
            'quark:chiseled_deepslate',
            'quark:cracked_deepslate_bricks',
            'quark:cracked_deepslate_tiles'
        ],
        onlyAsOutput: [],
        onlyAsInput: ['quark:deepslate']
    },
    {
        name: 'soapstone',
        stones: [
            'byg:polished_soapstone',
            'byg:soapstone_bricks',
            'byg:soapstone_pillar',
            'byg:soapstone_tile'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'soul_sandstone',
        stones: [
            'quark:soul_sandstone',
            'quark:soul_sandstone_bricks',
            'quark:chiseled_soul_sandstone',
            'quark:cut_soul_sandstone'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'sunny_quartz',
        stones: ['botania:sunny_quartz', 'botania:sunny_quartz_pillar', 'botania:chiseled_sunny_quartz'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'torch',
        stones: [
            'minecraft:torch',
            'chipped:torch_9',
            'chipped:torch_8',
            'chipped:torch_7',
            'chipped:torch_6',
            'chipped:torch_5',
            'chipped:torch_4',
            'chipped:torch_3',
            'chipped:torch_2',
            'chipped:torch_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'redstone_torch',
        stones: [
            'minecraft:redstone_torch',
            'chipped:redstone_torch_6',
            'chipped:redstone_torch_5',
            'chipped:redstone_torch_4',
            'chipped:redstone_torch_3',
            'chipped:redstone_torch_2'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'soul_lantern',
        stones: [
            'minecraft:soul_lantern',
            'chipped:special_soul_lantern_4',
            'chipped:special_soul_lantern_3',
            'chipped:special_soul_lantern_2',
            'chipped:special_soul_lantern_1',
            'chipped:soul_lantern_11',
            'chipped:soul_lantern_10',
            'chipped:soul_lantern_9',
            'chipped:soul_lantern_8',
            'chipped:soul_lantern_7',
            'chipped:soul_lantern_6',
            'chipped:soul_lantern_5',
            'chipped:soul_lantern_2',
            'chipped:soul_lantern_3',
            'chipped:soul_lantern_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'lantern',
        stones: [
            'minecraft:lantern',
            'chipped:special_lantern_4',
            'chipped:special_lantern_3',
            'chipped:special_lantern_2',
            'chipped:special_lantern_1',
            'chipped:lantern_14',
            'chipped:lantern_13',
            'chipped:lantern_12',
            'chipped:lantern_11',
            'chipped:lantern_10',
            'chipped:lantern_9',
            'chipped:lantern_6',
            'chipped:lantern_2',
            'chipped:lantern_4',
            'chipped:lantern_3',
            'chipped:lantern_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'vine',
        stones: [
            'minecraft:vine',
            'chipped:vine_8',
            'chipped:vine_7',
            'chipped:vine_6',
            'chipped:vine_5',
            'chipped:vine_4',
            'chipped:vine_3',
            'chipped:vine_2',
            'chipped:vine_1',
            'valhelsia_structures:hanging_vines'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'melon',
        stones: [
            'minecraft:melon',
            'chipped:melon_10',
            'chipped:melon_9',
            'chipped:melon_8',
            'chipped:melon_7',
            'chipped:melon_6',
            'chipped:melon_5',
            'chipped:melon_4',
            'chipped:melon_3',
            'chipped:melon_2',
            'chipped:melon_1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'voidstone',
        stones: [
            'quark:basalt',
            'quark:basalt_bricks',
            'quark:chiseled_basalt_bricks',
            'quark:basalt_pavement',
            'quark:basalt_pillar',
            'quark:polished_basalt'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'weathered_limestone',
        stones: [
            'create:weathered_limestone',
            'create:weathered_limestone_bricks',
            'create:weathered_limestone_pillar',
            'create:fancy_weathered_limestone_bricks',
            'create:paved_weathered_limestone',
            'create:chiseled_weathered_limestone',
            'create:layered_weathered_limestone',
            'create:polished_weathered_limestone',
            'create:mossy_weathered_limestone',
            'create:overgrown_weathered_limestone'
        ],
        onlyAsOutput: ['create:weathered_limestone_cobblestone'],
        onlyAsInput: []
    },
    {
        name: 'flavolite',
        stones: [
            'betterendforge:flavolite_bricks',
            'betterendforge:flavolite_pedestal',
            'betterendforge:flavolite_pillar',
            'betterendforge:flavolite_tiles',
            'betterendforge:flavolite_polished',
            'betterendforge:flavolite'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'violecite',
        stones: [
            'betterendforge:violecite_bricks',
            'betterendforge:violecite_pedestal',
            'betterendforge:violecite_pillar',
            'betterendforge:violecite_tiles',
            'betterendforge:violecite_polished',
            'betterendforge:violecite'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'sulphuric_rock',
        stones: [
            'betterendforge:sulphuric_rock_pedestal',
            'betterendforge:sulphuric_rock_bricks',
            'betterendforge:sulphuric_rock_pillar',
            'betterendforge:sulphuric_rock_tiles',
            'betterendforge:sulphuric_rock_polished',
            'betterendforge:sulphuric_rock'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'demon_brick',
        stones: [
            'bloodmagic:dungeon_smallbrick',
            'bloodmagic:dungeon_tilespecial',
            'bloodmagic:dungeon_tile',
            'bloodmagic:dungeon_brick_assorted',
            'bloodmagic:dungeon_brick3',
            'bloodmagic:dungeon_brick2',
            'bloodmagic:dungeon_brick1'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'demon_pillar',
        stones: [
            'bloodmagic:dungeon_pillar_cap',
            'bloodmagic:dungeon_pillar_special',
            'bloodmagic:dungeon_pillar_center'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'gunpowder',
        stones: ['quark:gunpowder_sack', 'thermal:gunpowder_block'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'mud',
        stones: ['byg:mud_block', 'environmental:mud'],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'mud_bricks',
        stones: [
            'environmental:mud_brick_wall',
            'environmental:chiseled_mud_bricks',
            'environmental:mud_brick_stairs',
            'environmental:mud_bricks',
            'tconstruct:mud_bricks',
            'byg:mud_bricks'
        ],
        onlyAsOutput: [],
        onlyAsInput: []
    },
    {
        name: 'bamboo',
        stones: ['quark:bamboo_block', 'thermal:bamboo_block'],
        onlyAsOutput: [],
        onlyAsInput: []
    }
];
// Colorless Glass
let glassTypes = ['glass', 'glass_pane'];

glassTypes.forEach((glassType) => {
    let colorlessGlass = [
        `create:vertical_framed_${glassType}`,
        `create:horizontal_framed_${glassType}`,
        `create:framed_${glassType}`,
        `create:tiled_${glassType}`,
        `minecraft:${glassType}`
    ];

    // Chipped glasses
    let chippedGlassTypes = [
        'oak_wood',
        'birch_wood',
        'spruce_wood',
        'jungle_wood',
        'acacia_wood',
        'dark_oak_wood',
        'warped_wood',
        'crimson_wood'
    ];
    chippedGlassTypes.forEach((chippedGlassType) => {
        for (let i = 1; i <= 6; i++) {
            colorlessGlass.push(`chipped:${chippedGlassType}_${glassType}_${i}`);
        }
    });
    if (glassTypes == 'glass') {
        for (let i = 1; i <= 14; i++) {
            colorlessGlass.push(`chipped:glass_${i}`);
        }
    }

    stonecuttables.push({
        name: `colorless_${glassType}`,
        stones: colorlessGlass,
        onlyAsOutput: [],
        onlyAsInput: [
            `tconstruct:clear_${glassType}`,
            `atum:deadwood_framed_crystal_${glassType}`,
            `atum:palm_framed_crystal_${glassType}`,
            `atum:crystal_${glassType}`,
            `valhelsia_structures:metal_framed_${glassType}`,
            `undergarden:sediment_${glassType}`
        ]
    });
});

colors.forEach((color) => {
    // Colored Glass
    let glass = [
        `chipped:${color}_stained_glass_8`,
        `chipped:${color}_stained_glass_7`,
        `chipped:${color}_stained_glass_6`,
        `chipped:${color}_stained_glass_5`,
        `chipped:${color}_stained_glass_4`,
        `chipped:${color}_stained_glass_3`,
        `chipped:${color}_stained_glass_2`,
        `chipped:${color}_stained_glass_1`,
        `quark:${color}_framed_glass`,
        `minecraft:${color}_stained_glass`
    ];

    let glassOnlyInput = [
        `tconstruct:${color}_clear_stained_glass`,
        `atum:${color}_stained_deadwood_framed_crystal_glass`,
        `atum:${color}_stained_palm_framed_crystal_glass`,
        `atum:${color}_stained_crystal_glass`
    ];

    stonecuttables.push({
        name: `${color}_glass`,
        stones: glass,
        onlyAsOutput: [],
        onlyAsInput: glassOnlyInput
    });

    // Colored Glass Panes
    let glassPanes = [
        `chipped:${color}_stained_glass_pane_8`,
        `chipped:${color}_stained_glass_pane_7`,
        `chipped:${color}_stained_glass_pane_6`,
        `chipped:${color}_stained_glass_pane_5`,
        `chipped:${color}_stained_glass_pane_4`,
        `chipped:${color}_stained_glass_pane_3`,
        `chipped:${color}_stained_glass_pane_2`,
        `chipped:${color}_stained_glass_pane_1`,
        `quark:${color}_framed_glass_pane`,
        `minecraft:${color}_stained_glass_pane`
    ];

    let glassPanesOnlyInput = [
        `tconstruct:${color}_clear_stained_glass_pane`,
        `atum:${color}_stained_deadwood_framed_crystal_glass_pane`,
        `atum:${color}_stained_palm_framed_crystal_glass_pane`,
        `atum:${color}_stained_crystal_glass_pane`
    ];

    stonecuttables.push({
        name: `${color}_glass_panes`,
        stones: glassPanes,
        onlyAsOutput: [],
        onlyAsInput: glassPanesOnlyInput
    });

    // Chipped Extras
    let chippedTypes = ['wool', 'carpet', 'terracotta', 'concrete'];
    chippedTypes.forEach((chippedType) => {
        let stones = [`minecraft:${color}_${chippedType}`],
            indexLength = 18;

        for (let i = 1; i <= indexLength; i++) {
            stones.push(`chipped:${color}_${chippedType}_${i}`);
        }
        //@Chisel
        // if (['wool', 'carpet'].includes(chippedType)) {
        //     stones.push(`chisel:${chippedType}/${color}/llama`);
        //     stones.push(`chisel:${chippedType}/${color}/legacy`);
        // }
        stonecuttables.push({
            name: `${color}_${chippedType}`,
            stones: stones,
            onlyAsOutput: [],
            onlyAsInput: []
        });
    });

    /*
    let chiselStoneTypes = [
        'cracked',
        'solid_bricks',
        'small_bricks',
        'soft_bricks',
        'cracked_bricks',
        'triple_bricks',
        'encased_bricks',
        'chaotic_bricks',
        'array',
        'tiles_medium',
        'tiles_large',
        'tiles_small',
        'chaotic_medium',
        'chaotic_small',
        'braid',
        'dent',
        'french_1',
        'french_2',
        'jellybean',
        'layers',
        'mosaic',
        'ornate',
        'panel',
        'road',
        'slanted',
        'zag',
        'circular',
        'circularct',
        'weaver',
        'pillar',
        'twisted',
        'prism',
        'cuts'
    ];

    // @Chisel concrete
    let stonecuttablesIndex = stonecuttables.findIndex((obj) => {
        return obj.name == `${color}_concrete`;
    });
    if (stonecuttablesIndex > -1) {
        let stones = stonecuttables[stonecuttablesIndex].stones;
        chiselStoneTypes.forEach((chiselStoneType) => {
            stones.push(`chisel:concrete/${color}/${chiselStoneType}`);
        });
    }
    */
});

// @Chisel Planks
let chiselPlankTypes = ['oak', 'spruce', 'birch', 'acacia', 'jungle', 'dark_oak'];
let chippedOnlyPlankTypes = ['warped', 'crimson'];
let plankTypes = chiselPlankTypes.concat(chippedOnlyPlankTypes);
let chiselPlankVariants = [
    'large_planks',
    'crude_horizontal_planks',
    'vertical_planks',
    'crude_vertical_planks',
    'encased_planks',
    'encased_large_planks',
    'braced_planks',
    'shipping_crate',
    'paneling',
    'crude_paneling',
    'stacked',
    'smooth',
    'encased_smooth',
    'braid',
    'log_cabin'
];

const numberChippedVariants = 18;
plankTypes.forEach((plankType) => {
    let stones = [`minecraft:${plankType}_planks`];
    // if (!chippedOnlyPlankTypes.includes(plankType)) {
    //     chiselPlankVariants.forEach((chiselPlankVariant) => {
    //         stones.push(`chisel:planks/${plankType}/${chiselPlankVariant}`);
    //     });
    // }
    for (let i = 1; i <= numberChippedVariants; i++) {
        stones.push(`chipped:${plankType}_planks_${i}`);
    }
    stonecuttables.push({
        name: plankType,
        stones: stones,
        onlyAsOutput: [],
        onlyAsInput: []
    });
});

const masonryStoneTypes = ['stone', 'granite', 'andesite', 'diorite', 'darkprismarine', 'prismarine'];
const masonryTiledStoneTypes = masonryStoneTypes.concat(['endstone', 'netherrack', 'obsidian']);
const masonryPatterns = [
    'carvedcreeper',
    'carvedderp',
    'carvedvillager',
    'carvedwither',
    'carvedwriting',
    'column',
    'cut',
    'engraved',
    'panels',
    'pavers',
    'pillar',
    'polished',
    'roughcut',
    'chiseled',
    'cobbled',
    'cobbledmossy',
    'diamondpavers',
    'largebricks',
    'largebrickscracked',
    'largebricksmossy',
    'smallbrick'
];
const masonryIgnoredInputs = [
    'stonecobbled',
    'stonecobbledmossy',
    'stonelargebricks',
    'stonelargebricksmossy',
    'stonechiseled',
    'stonelargebrickscracked',
    'granitepolished',
    'dioritepolished',
    'andesitepolished',
    'darkprismarinepanels',
    'prismarinepavers',
    'stonesmallbrick'
];
