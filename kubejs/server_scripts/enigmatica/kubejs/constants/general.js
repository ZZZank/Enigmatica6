// priority: 1001

const unificationBlacklist = [
    { material: 'quartz', type: 'gem' },
    { material: 'quartz', type: 'storage_block' }
];

const lootrChests = ['lootr:lootr_chest', 'lootr:lootr_barrel', 'lootr:lootr_trapped_chest'];

// Used for recipes/tags that use colors
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

// Quark Crystal Cluster Colors

const quark_crystal_colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'white',
    'black'
];

// Used for tag generation
const createStoneTypes = [
    'scoria',
    'limestone',
    'weathered_limestone',
    'dolomite',
    'gabbro',
    'dark_scoria',
    'natural_scoria'
];

const sign_wood_type_blacklist = [
    'bloodshroom',
    'cherry',
    'deadwood',
    'dragon_tree',
    'driftwood',
    'end_lotus',
    'greenheart',
    'grimwood',
    'grongle',
    'helix_tree',
    'jellyshroom',
    'kousa',
    'lacugrove',
    'lucernia',
    'morado',
    'mossy_glowshroom',
    'palm',
    'pythadendron',
    'river',
    'rosewood',
    'sakura',
    'skyroot',
    'smogstem',
    'tenanea',
    'umbrella_tree',
    'wigglewood',
    'willow',
    'wisteria',
    'yucca'
];

const chest_wood_type_blacklist = [
    'cherry',
    'dragon_tree',
    'driftwood',
    'grimwood',
    'helix_tree',
    'jellyshroom',
    'kousa',
    'lacugrove',
    'lucernia',
    'morado',
    'mossy_glowshroom',
    'pythadendron',
    'river',
    'rosewood',
    'tenanea',
    'umbrella_tree',
    'willow',
    'wisteria',
    'yucca'
];

const normalMode = global.packmode == 'normal';
const expertMode = global.packmode == 'expert';
