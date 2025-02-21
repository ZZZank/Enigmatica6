onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const newRecipes = [
        {
            output: '4x bloodmagic:woodbrickpath',
            pattern: ['AA ', 'AA '],
            key: {
                A: 'bloodmagic:woodtilepath'
            },
            id: 'bloodmagic:path/path_wood'
        },
        {
            output: 'bloodmagic:altar',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: 'resourcefulbees:tainted_honeycomb',
                B: 'farmersdelight:cooking_pot',
                C: 'occultism:otherstone',
                D: 'minecraft:heart_of_the_sea',
                E: 'naturesaura:tainted_gold'
            },
            id: 'bloodmagic:blood_altar'
        },
        {
            output: 'bloodmagic:alchemytable',
            pattern: ['ABC', 'DDD', 'EEE'],
            key: {
                A: 'minecraft:brewing_stand',
                B: 'bloodmagic:blankslate',
                C: 'supplementaries:jar_tinted',
                D: 'thermal:hazmat_fabric',
                E: 'betterendforge:andesite_pedestal'
            },
            id: 'bloodmagic:alchemy_table'
        },
        {
            output: 'bloodmagic:lavacrystal',
            pattern: ['BDB', 'CAC', 'BCB'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 2 },
                B: '#forge:dusts/obsidian',
                C: 'bloodmagic:reagentlava',
                D: 'minecraft:conduit'
            },
            id: 'bloodmagic:lava_crystal'
        },
        {
            output: 'bloodmagic:daggerofsacrifice',
            pattern: ['  A', 'BA ', 'CB '],
            key: {
                A: '#forge:ingots/silicon_bronze',
                B: '#forge:inlays/pewter',
                C: '#forge:rods/wooden'
            },
            id: 'bloodmagic:altar/daggerofsacrifice'
        },
        {
            output: 'bloodmagic:incensealtar',
            pattern: ['CBC', 'CDC', 'EAE'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 1 },
                B: Item.of('botania:incense_stick', { brewKey: 'botania:soul_cross' }),
                C: 'bloodmagic:woodtilepath',
                D: 'farmersdelight:cooking_pot',
                E: 'bloodmagic:woodbrickpath'
            },
            id: 'bloodmagic:incense_altar'
        },
        {
            output: Item.of('2x bloodmagic:ritualstone'),
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 2 },
                B: 'bloodmagic:reinforcedslate',
                C: 'architects_palette:abyssaline'
            },
            id: 'bloodmagic:ritual_stone_blank'
        },
        {
            output: 'bloodmagic:masterritualstone',
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: { type: 'bloodmagic:bloodorb', orb_tier: 3 },
                B: 'bloodmagic:ritualstone',
                C: 'architects_palette:abyssaline'
            },
            id: 'bloodmagic:ritual_stone_master'
        },
        {
            output: Item.of('bloodmagic:dungeon_stone', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: '#bloodmagic:crystals/demon'
            },
            id: 'bloodmagic:dungeon_stone'
        },
        {
            output: 'bloodmagic:alchemicalreactionchamber',
            pattern: ['AAA', 'BCB', 'DED'],
            key: {
                A: 'bloodmagic:dungeon_stone',
                B: 'bloodmagic:infusedslate',
                C: { type: 'bloodmagic:bloodorb', orb_tier: 3 },
                D: '#forge:storage_blocks/blazing',
                E: 'minecraft:blast_furnace'
            },
            id: 'bloodmagic:arc'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
