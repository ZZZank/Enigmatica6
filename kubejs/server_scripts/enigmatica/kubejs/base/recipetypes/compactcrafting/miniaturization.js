onEvent('recipes', (event) => {
    //https://github.com/CompactMods/CompactCrafting/wiki/Recipe-Specification

    //Also note, can't use Item.of because Count is caps sensitive (Name too)
    const id_prefix = 'enigmatica:base/compactcrafting/';

    const recipes = [
        /*
        {
            recipeSize: 5,
            layers: [
                [')***)', '*+++*', '*+,+*', '*+++*', ')***)'],
                ['*+++*', '+   +', '+ - +', '+   +', '*+++*'],
                ['*+,+*', '+ - +', ',-.-,', '+ - +', '*+,+*'],
                ['*+++*', '+   +', '+ - +', '+   +', '*+++*'],
                [')***)', '*+++*', '*+,+*', '*+++*', ')***)']
            ],
            components: {
                ')': 'mekanism:teleporter_frame',
                '*': 'dustrial_decor:bolted_industrial_iron_block',
                '+': 'botania:mana_glass',
                ',': 'kubejs:conductive_frame',
                '-': 'quark:iron_rod',
                '.': 'mekanism:lithium'
            },
            catalyst: {
                id: 'industrialforegoing:machine_frame_simple',
                Count: 1
            },
            outputs: [
                {
                    id: 'mekanism:basic_energy_cube',
                    Count: 1
                }
            ],
            id: `${id_prefix}energy_cube_basic`
        }
        */
    ];

    recipes.forEach((recipe) => {
        for (let i = 0; i < recipe.layers.length; i++) {
            let layer = recipe.layers[i];
            for (let j = layer.length - 1; j >= 0; j--) {
                layer[j] = layer[j].split('');
            }
            recipe.layers[i] = {
                type: 'compactcrafting:mixed',
                pattern: layer
            };
        }
        for (let key in recipe.components) {
            recipe.components[key] = {
                type: 'compactcrafting:block',
                block: recipe.components[key]
            };
        }
        // console.info(recipe);
        recipe.type = 'compactcrafting:miniaturization';
        event.custom(recipe).id(recipe.id);
    });
});
