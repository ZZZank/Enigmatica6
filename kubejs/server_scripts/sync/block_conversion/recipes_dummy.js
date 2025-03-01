// priority: 1000

/**
 * @typedef {{
 *  target: Special.Block;
 *  output: $ItemStackJS_;
 *  holding: $ItemStackJS_;
 * }} blockConvDummyRecipe
 * @type {blockConvDummyRecipe[]}
 */
const blockConvDummyRecipes = [
    {
        target: 'minecraft:crafting_table',
        holding: Item.of('tetra:modular_double', {
            'Damage': 0,
            'double/handle': 'double/basic_handle',
            'double/head_left': 'double/basic_hammer_left',
            'double/head_right': 'double/basic_hammer_right',
            'double/basic_handle_material': 'basic_handle/stick',
            'double/basic_hammer_right_material': 'basic_hammer/oak',
            'double/basic_hammer_left_material': 'basic_hammer/oak'
        }),
        output: 'tetra:basic_workbench'
    },
    {
        target: 'minecraft:cauldron',
        holding: 'ars_nouveau:wixie_charm',
        output: 'ars_nouveau:wixie_cauldron'
    },
    {
        target: 'minecraft:mossy_cobblestone',
        holding: 'ars_nouveau:drygmy_charm',
        output: 'ars_nouveau:drygmy_stone'
    },
    {
        target: 'minecraft:lectern',
        holding: 'ars_nouveau:whelp_charm',
        output: 'ars_nouveau:bookwyrm_lectern'
    },
    {
        target: 'ars_nouveau:summoning_crystal',
        holding: 'ars_nouveau:sylph_charm',
        output: 'ars_nouveau:sylph_se'
    },
    {
        target: 'ars_nouveau:summoning_crystal',
        holding: 'ars_nouveau:carbuncle_charm',
        output: 'ars_nouveau:carbuncle_se'
    },
    {
        target: 'minecraft:ghast_spawn_egg',
        // holding: Item.of('botania:ender_air_bottle').withName('toward its eyes'),
        holding: 'botania:ender_air_bottle',
        // see ghast_ender_air_crying loottable
        output: withChanceInName('minecraft:ghast_tear', 1 / 8)
    }
];
