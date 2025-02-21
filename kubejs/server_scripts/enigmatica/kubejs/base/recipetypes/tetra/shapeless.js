onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tetra/shapeless/';

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
            output: Item.of('tetra:modular_bow', {
                'bow/stave': 'bow/straight_stave',
                'bow/basic_string_material': 'basic_string/string',
                'bow/string': 'bow/basic_string',
                'bow/stave:stave/wrap/string': 0,
                'bow/straight_stave_material': 'straight_stave/stick'
            }),
            ingerdients: [Item.of('minecraft:bow', '{Damage:0}').weakNBT()],
            id: `${id_prefix}bow`
        },
        {
            output: Item.of('tetra:modular_double', {
                'double/handle': 'double/basic_handle',
                'double/head_left': 'double/basic_pickaxe_left',
                'double/head_right': 'double/basic_pickaxe_right',
                'double/basic_pickaxe_right_material': 'basic_pickaxe/oak',
                'double/basic_pickaxe_left_material': 'basic_pickaxe/oak',
                'double/basic_handle_material': 'basic_handle/stick'
            }),
            ingerdients: [Item.of('minecraft:wooden_pickaxe', '{Damage:0}').weakNBT()],
            id: `${id_prefix}wooden_pickaxe`
        },
        {
            output: Item.of('tetra:modular_double', {
                'double/butt_right_material': 'butt/oak',
                'double/basic_axe_left_material': 'basic_axe/oak',
                'double/handle': 'double/basic_handle',
                'double/head_left': 'double/basic_axe_left',
                'double/head_right': 'double/butt_right',
                'double/basic_handle_material': 'basic_handle/stick'
            }),
            ingerdients: [Item.of('minecraft:wooden_axe', '{Damage:0}').weakNBT()],
            id: `${id_prefix}wooden_axe`
        },
        {
            output: Item.of('tetra:modular_single', {
                'single/basic_shovel_material': 'basic_shovel/oak',
                'single/head': 'single/basic_shovel',
                'single/handle': 'single/basic_handle',
                'single/basic_handle_material': 'basic_handle/stick'
            }),
            ingerdients: [Item.of('minecraft:wooden_shovel', '{Damage:0}').weakNBT()],
            id: `${id_prefix}wooden_shovel`
        },
        {
            output: Item.of('tetra:modular_double', {
                'double/butt_right_material': 'butt/oak',
                'double/handle': 'double/basic_handle',
                'double/head_left': 'double/hoe_left',
                'double/head_right': 'double/butt_right',
                'double/hoe_left_material': 'hoe/oak',
                'double/basic_handle_material': 'basic_handle/stick'
            }),
            ingerdients: [Item.of('minecraft:wooden_hoe', '{Damage:0}').weakNBT()],
            id: `${id_prefix}wooden_hoe`
        },
        {
            output: Item.of('tetra:modular_sword', {
                'sword/guard': 'sword/makeshift_guard',
                'sword/blade': 'sword/basic_blade',
                'sword/basic_blade_material': 'basic_blade/oak',
                'sword/pommel': 'sword/decorative_pommel',
                'sword/basic_hilt_material': 'basic_hilt/stick',
                'sword/hilt': 'sword/basic_hilt',
                'sword/makeshift_guard_material': 'makeshift_guard/oak',
                'sword/decorative_pommel_material': 'decorative_pommel/oak'
            }),
            ingerdients: [Item.of('minecraft:wooden_sword', '{Damage:0}').weakNBT()],
            id: `${id_prefix}wooden_sword`
        },
        {
            output: Item.of('tetra:modular_shield', {
                'shield/plate': 'shield/tower',
                'shield/basic_grip_material': 'basic_grip/iron',
                'shield/plate:shield/studs/iron': 0,
                'shield/plate:shield/trim/iron': 0,
                'shield/tower_material': 'tower/oak',
                'shield/grip': 'shield/basic_grip'
            }),
            ingerdients: [Item.of('minecraft:shield', '{Damage:0}').weakNBT()],
            id: `${id_prefix}wooden_shield`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.ingerdients).id(recipe.id);
    });
});
