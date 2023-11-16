'use strict';
onEvent('recipes', (event) => {
    //https://github.com/CompactMods/CompactCrafting/wiki/Recipe-Specification

    //Also note, can't use Item.of because Count is caps sensitive (Name too)

    const recipes = [
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
            ]
        }
    ];

    let compactMachines = [
        ['tiny', 'resourcefulbees:forest_honeycomb_block'],
        ['small', 'resourcefulbees:aluminum_honeycomb_block'],
        ['normal', 'resourcefulbees:zinc_honeycomb_block'],
        ['large', 'resourcefulbees:uranium_honeycomb_block'],
        ['giant', 'resourcefulbees:cobalt_honeycomb_block'],
        ['maximum', 'resourcefulbees:industrious_honeycomb_block']
    ];

    compactMachines.forEach(([tier, craftBlock]) => {
        recipes.push({
            recipeSize: 5,
            layers: [
                ['WWWWW', 'WWWWW', 'WWEWW', 'WWWWW', 'WWWWW'],
                ['WWWWW', 'W   W', 'W H W', 'W   W', 'WWWWW'],
                ['WWAWW', 'W H W', 'AHTHA', 'W H W', 'WWAWW'],
                ['WWWWW', 'W   W', 'W H W', 'W   W', 'WWWWW'],
                ['WWWWW', 'WWWWW', 'WWAWW', 'WWWWW', 'WWWWW']
            ],
            components: {
                E: 'rftoolsutility:matter_transmitter',
                W: 'compactmachines:wall',
                H: craftBlock,
                T: 'mekanism:teleporter',
                A: 'mekanism:teleporter_frame'
            },
            catalyst: {
                id: 'thermal:upgrade_augment_1',
                Count: 1
            },
            outputs: [
                {
                    id: `compactmachines:machine_${tier}`,
                    Count: 1
                }
            ]
        });
    });

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
        event.custom(recipe);
    });
});
