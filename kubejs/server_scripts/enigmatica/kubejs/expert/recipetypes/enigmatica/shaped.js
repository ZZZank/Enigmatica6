onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/enigmatica/';
    const recipes = [];

    let woodTypeDupes = [
        'palo_verde',
        'withering_oak',
        'blue_archwood',
        'green_archwood',
        'purple_archwood',
        'menril_filled',
        'watchful_aspen',
        'crustose',
        'sappy_maple',
        'avocado'
    ];
    let acceptedPlank = [];
    let acceptedSlab = [];
    buildWoodVariants.forEach((variant) => {
        if (variant.modId == 'minecraft' || woodTypeDupes.includes(variant.logType)) {
            return;
        }
        acceptedPlank.push(variant.plankBlock);
        acceptedSlab.push(variant.slabBlock);
    });
    recipes.push(
        {
            output: Item.of('storagedrawers:oak_full_drawers_1'),
            pattern: ['AAA', ' C ', 'AAA'],
            key: {
                A: acceptedPlank,
                C: 'farmersdelight:basket'
            },
            id: `${id_prefix}oak_full_drawers_1_from_unvanilla_planks`
        },
        {
            output: Item.of('storagedrawers:oak_full_drawers_2', 2),
            pattern: ['ACA', 'AAA', 'ACA'],
            key: {
                A: acceptedPlank,
                C: 'farmersdelight:basket'
            },
            id: `${id_prefix}oak_full_drawers_2_from_unvanilla_planks`
        },
        {
            output: Item.of('storagedrawers:oak_full_drawers_4', 4),
            pattern: ['CAC', 'AAA', 'CAC'],
            key: {
                A: acceptedPlank,
                C: 'farmersdelight:basket'
            },
            id: `${id_prefix}oak_full_drawers_4_from_unvanilla_planks`
        },

        {
            output: Item.of('storagedrawers:oak_half_drawers_1'),
            pattern: ['AAA', ' C ', 'AAA'],
            key: {
                A: acceptedSlab,
                C: 'farmersdelight:basket'
            },
            id: `${id_prefix}oak_half_drawers_1_from_unvanilla_slab`
        },
        {
            output: Item.of('storagedrawers:oak_half_drawers_2', 2),
            pattern: ['ACA', 'AAA', 'ACA'],
            key: {
                A: acceptedSlab,
                C: 'farmersdelight:basket'
            },
            id: `${id_prefix}oak_half_drawers_2_from_unvanilla_slab`
        },
        {
            output: Item.of('storagedrawers:oak_half_drawers_4', 4),
            pattern: ['CAC', 'AAA', 'CAC'],
            key: {
                A: acceptedSlab,
                C: 'farmersdelight:basket'
            },
            id: `${id_prefix}oak_half_drawers_4_from_unvanilla_slab`
        }
    );

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
