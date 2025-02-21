onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tetra/shaped/';

    /*
    {
        output:"output",
        ingerdients:[
            "ingerdient1",
            "ingerdient2"
        ],
        id:"recipe_id"
    }
    */
    const recipes = [
        {
            output: 'tetra:combustion_chamber',
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: 'mekanism:superheating_element',
                B: 'pneumaticcraft:heat_sink',
                C: 'mekanism:ultimate_thermodynamic_conductor'
            },
            id: `${id_prefix}tetra/combustion_chamber`
        },
        {
            output: 'tetra:hammer_base',
            pattern: ['LXL', 'LCL', 'LXL'],
            key: {
                L: '#forge:ingots/steel',
                X: '#forge:circuits/basic',
                C: '#forge:tools/crafting_hammer'
            },
            id: `${id_prefix}tetra/hammer_base`
        },
        {
            output: 'tetra:core_extractor',
            pattern: ['LXL', 'LCL', 'LXL'],
            key: {
                L: '#forge:ingots/steel',
                X: '#forge:circuits/basic',
                C: 'industrialforegoing:fluid_extractor'
            },
            id: `${id_prefix}tetra/core_extractor`
        },
        {
            output: Item.of('tetra:modular_double', {
                'double/head_left': 'double/basic_hammer_left',
                'double/basic_hammer_left_material': 'basic_hammer/oak',
                'double/head_right': 'double/basic_hammer_right',
                'double/basic_hammer_right_material': 'basic_hammer/oak',
                'double/handle': 'double/basic_handle',
                'double/basic_handle_material': 'basic_handle/stick'
            }),
            pattern: [' # ', ' /#', '/  '],
            key: { '#': '#minecraft:planks', '/': '#forge:rods/wooden' },
            id: `${id_prefix}hammer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
