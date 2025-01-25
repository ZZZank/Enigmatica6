// priority: 900


onEvent('recipes', (event) => {
    soilRegistry.forEach((soil) => {
        soils_botany_pots(soil);
    });

    cropRegistry.forEach((cropCategories) => {
        let type = cropCategories.type;
        cropCategories.crops.forEach((crop) => {
            crops_botany_pots(type, crop);
            crops_thermal_insolator(type, crop);
            crops_immersiveengineering_cloche(type, crop);
        });
    });

    treeRegistry.forEach((treeCategories) => {
        let type = treeCategories.type;
        treeCategories.trees.forEach((tree) => {
            trees_botany_pots(type, tree);
            trees_thermal_insolator(tree);
            trees_immersiveengineering_cloche(tree);
        });
    });
    function soils_botany_pots(soil) {
        let input = soil.block,
            display;

        //exceptions
        switch (input) {
            case 'minecraft:lava_bucket':
                display = { block: 'minecraft:lava' };
                break;
            case 'minecraft:water_bucket':
                display = { block: 'minecraft:water' };
                break;
            default:
                display = { block: soil.block };
        }

        if (soil.block.includes('farmland')) {
            display.properties = { moisture: 7 };
        }

        event.custom({
            type: 'botanypots:soil',
            input: { item: input },
            display: display,
            categories: soil.categories,
            growthModifier: soil.growthModifier
        });
    }

    function crops_botany_pots(type, crop) {
        // Ticks Per Day: 24000
        // Ticks Per Minute: 1200
        let baseGrowthTicks = 24000,
            growthModifier = 1.0;

        // chance, minRolls, maxRolls
        let primary = [1.0, 10, 20],
            growthTicks = baseGrowthTicks,
            plantSecondary;

        if (crop.plantSecondary) {
            plantSecondary = crop.plantSecondary;
        }
        /*
        types:  cactus, cane_like, coral, crop_fiber, crop_fruit, 
                crop_gourd, crop_grain, crop_leafy, crop_legume,  
                crop_melon, crop_root, crop_seed, crop_vine, flower, 
                grass_like, kelp_like, lily_like, shroom, shrub, vine
        */
        switch (type) {
            case 'coral':
                growthModifier = 2.0;
                break;
            case 'crop_gourd':
                growthModifier = 1.5;
                break;
            case 'crop_melon':
                growthModifier = 1.5;
                break;
            case 'crop_seed':
                primary = [1.0, 10, 30];
                break;
            case 'flower':
                growthModifier = 0.5;
                break;
            case 'grass_like':
                growthModifier = 0.25;
                break;
            case 'lily_like':
                growthModifier = 0.25;
                break;
            case 'shroom':
                primary = [1.0, 10, 30];
                plantSecondary = crop.plant;
                break;
            case 'vine':
                //disabled
                return;
            default:
            //default
        }

        let input = crop.seed,
            outputs = [
                {
                    chance: primary[0],
                    output: { item: crop.plant },
                    minRolls: primary[1],
                    maxRolls: primary[2]
                }
            ];
        if (type.includes('crop_')) {
            //add seeds to crop type output
            outputs.push({
                chance: 0.2,
                output: { item: crop.seed },
                minRolls: 1,
                maxRolls: 5
            });
        }

        if (plantSecondary) {
            //add any secondary
            outputs.push({
                chance: 0.05,
                output: { item: plantSecondary },
                minRolls: 1,
                maxRolls: 5
            });
        }

        event.custom({
            type: 'botanypots:crop',
            seed: { item: input },
            categories: [crop.substrate],
            growthTicks: growthTicks * growthModifier,
            display: { block: crop.render },
            results: outputs
        });
    }

    function crops_thermal_insolator(type, crop) {
        let baseWater = 500,
            baseEnergy = 20000,
            waterModifier = 1.0,
            energyModifier = 1.0;

        let primaryChance = 2.0,
            secondaryChance = 1.1,
            plantSecondary;

        if (crop.plantSecondary) {
            plantSecondary = crop.plantSecondary;
        }

        if (crop.plantSecondaryRate == 'low') {
            secondaryChance = 0.01;
        }

        /*
        types:  cactus, cane_like, coral, crop_fiber, crop_fruit, 
                crop_gourd, crop_grain, crop_leafy, crop_legume,  
                crop_melon, crop_root, crop_seed, crop_vine, flower, 
                grass_like, kelp_like, lily_like, shroom, shrub, vine
        */
        switch (type) {
            case 'cactus':
                waterModifier = 0.1;
                energyModifier = 4.0;
                break;
            case 'cane_like':
                waterModifier = 3.0;
                energyModifier = 2.0;
                break;
            case 'coral':
                waterModifier = 2.0;
                energyModifier = 4.0;
                break;
            case 'crop_gourd':
                waterModifier = 2.0;
                energyModifier = 1.5;
                break;
            case 'crop_melon':
                waterModifier = 2.0;
                energyModifier = 1.5;
                primaryChance = 1.0;
                break;
            case 'crop_seed':
                primaryChance = 3.0;
                break;
            case 'flower':
                waterModifier = 1.5;
                energyModifier = 0.5;
                break;
            case 'grass_like':
                waterModifier = 1.5;
                energyModifier = 0.5;
                break;
            case 'lily_like':
                waterModifier = 3.0;
                energyModifier = 0.5;
                break;
            case 'shroom':
                waterModifier = 1.5;
                energyModifier = 0.5;
                plantSecondary = crop.plant;
                break;
            default:
            //default
        }

        let input = crop.seed,
            outputs = [Item.of(crop.plant).chance(primaryChance)];

        if (type.includes('crop_')) {
            //add seeds to crop type output
            outputs.push(Item.of(crop.seed).chance(secondaryChance));
        }

        if (plantSecondary) {
            //add any secondary
            outputs.push(Item.of(plantSecondary).chance(secondaryChance));
        }

        fallback_id(
            event.recipes.thermal
                .insolator(outputs, input)
                .water(baseWater * waterModifier)
                .energy(baseEnergy * energyModifier),
            `enigmatica:base/unification/unify_growables/crops_thermal_insolator/`
        );
    }

    function crops_immersiveengineering_cloche(type, crop) {
        // Ticks Per Day: 24000
        // Ticks Per Minute: 1200
        let baseGrowthTicks = 800;

        let primaryCount = 2,
            secondaryCount = 1,
            plantSecondary,
            growthTicks = baseGrowthTicks,
            growthModifier = 1.0,
            renderBlock = crop.render,
            renderType = 'generic';

        if (crop.plantSecondary) {
            plantSecondary = crop.plantSecondary;
        }

        /*
        types:  cactus, cane_like, coral, crop_fiber, crop_fruit, 
                crop_gourd, crop_grain, crop_leafy, crop_legume,  
                crop_melon, crop_root, crop_seed, crop_vine, flower, 
                grass_like, kelp_like, lily_like, shroom, shrub, vine
        */
        switch (type) {
            case 'cactus':
                growthModifier = 1.5;
                renderType = 'stacking';
                break;
            case 'cane_like':
                renderType = 'stacking';
                break;
            case 'coral':
                //disabled
                return;
            case 'crop_fiber':
                primaryCount = 1;
                secondaryCount = 2;
                break;
            case 'crop_grain':
                growthModifier = 0.8;
                break;
            case 'crop_legume':
                growthModifier = 0.7;
                break;
            case 'crop_vine':
                growthModifier = 0.7;
                break;
            case 'crop_leafy':
                growthModifier = 0.6;
                break;
            case 'crop_melon':
                growthModifier = 1.5;
                break;
            case 'crop_gourd':
                growthModifier = 1.5;
                break;
            case 'flower':
                growthModifier = 0.5;
                break;
            case 'grass_like':
                growthModifier = 0.5;
                break;
            case 'shroom':
                growthModifier = 0.7;
                plantSecondary = crop.plant;
                break;
            case 'kelp_like':
                //disabled
                return;
            case 'lily_like':
                //disabled
                return;
            case 'vine':
                //disabled
                return;
            default:
            //default
        }
        let substrate = crop.substrate;
        if (substrate == 'water') {
            return;
        }
        const substrateMap = {
            crimson_nylium: 'minecraft:crimson_nylium',
            deepturf: 'undergarden:deepsoil',
            end_stone: 'minecraft:end_stone',
            glowcelium: 'byg:glowcelium_block',
            grass: 'minecraft:grass_block',
            mushroom: 'minecraft:mycelium',
            nether: 'minecraft:netherrack',
            sand: 'minecraft:sand',
            soul_sand: 'minecraft:soul_sand',
            warped_nylium: 'minecraft:warped_nylium',
            shadow_grass: 'betterendforge:shadow_grass',
            end_mycelium: 'betterendforge:end_mycelium',
            end_moss: 'betterendforge:end_moss',
            jungle_moss: 'betterendforge:jungle_moss',
            crystal_moss: 'betterendforge:crystal_moss',
            chorus_nylium: 'betterendforge:chorus_nylium',
            pink_moss: 'betterendforge:pink_moss',
            amber_moss: 'betterendforge:amber_moss',
            strange_sand: 'atum:sand',
            frozen_deepturf: 'undergarden:frozen_deepturf_block',
            sediment: 'undergarden:sediment'
        };
        if (substrateMap[substrate]) {
            substrate = substrateMap[substrate];
        } else {
            substrate = 'minecraft:dirt';
        }

        let input = crop.seed,
            outputs = [Item.of(crop.plant, primaryCount)];

        if (type.includes('crop_')) {
            //add seeds to crop type output
            outputs.push(Item.of(crop.seed, secondaryCount));
            renderType = 'crop';
        }

        if (crop.plant.includes('kenaf') || crop.plant.includes('hemp')) {
            //override render type
            renderType = 'hemp';
        }

        if (type == 'crop_gourd' || crop.plant == 'minecraft:melon') {
            renderType = 'stem';
        }

        if (plantSecondary && crop.plantSecondaryRate != 'low') {
            //add any secondary
            outputs.push(Item.of(plantSecondary, secondaryCount));
        }
        fallback_id(
            event.recipes.immersiveengineering
                .cloche(outputs, input, substrate, {
                    type: renderType,
                    block: renderBlock
                })
                .time(growthTicks * growthModifier),
            `enigmatica:base/unification/unify_growables/crops_immersiveengineering_cloche/`
        );
    }

    function trees_botany_pots(type, tree) {
        // Ticks Per Day: 24000
        // Ticks Per Minute: 1200
        let baseGrowthTicks = 24000,
            growthModifier = 1.0;

        // chance, minRolls, maxRolls
        let saplingRate = [1.0, 3, 6],
            trunkRate = [1.0, 15, 20],
            leafRate = [1.0, 15, 20],
            stickRate = [1.0, 5, 10],
            extraDecorationRate = [0.2, 5, 10],
            fruitRate = [0.5, 5, 10],
            growthTicks = baseGrowthTicks;

        let input = tree.sapling,
            outputs = [
                {
                    chance: saplingRate[0],
                    output: { item: tree.sapling },
                    minRolls: saplingRate[1],
                    maxRolls: saplingRate[2]
                }
            ];
        /*
        types:  tree, tree_shroom
        */
        if (type == 'tree') {
            outputs.push(
                {
                    chance: trunkRate[0],
                    output: { item: tree.trunk },
                    minRolls: trunkRate[1],
                    maxRolls: trunkRate[2]
                },
                {
                    chance: leafRate[0],
                    output: { item: tree.leaf },
                    minRolls: leafRate[1],
                    maxRolls: leafRate[2]
                }
            );
            if (tree.extraDecoration) {
                outputs.push({
                    chance: extraDecorationRate[0],
                    output: { item: tree.extraDecoration },
                    minRolls: extraDecorationRate[1],
                    maxRolls: extraDecorationRate[2]
                });
            }
            let stickType = 'minecraft:stick';
            if (type.includes('undergarden')) {
                //add sticks
                stickType = 'undergarden:twistytwig';
            }
            outputs.push({
                chance: stickRate[0],
                output: { item: stickType },
                minRolls: stickRate[1],
                maxRolls: stickRate[2]
            });
            if (tree.fruit) {
                //add any fruits
                outputs.push({
                    chance: fruitRate[0],
                    output: { item: tree.fruit },
                    minRolls: fruitRate[1],
                    maxRolls: fruitRate[2]
                });
            }
        }

        if (type == 'tree_shroom') {
            growthModifier = 0.5;
        }

        event.custom({
            type: 'botanypots:crop',
            seed: { item: input },
            categories: [tree.substrate],
            growthTicks: growthTicks * growthModifier,
            display: { block: input },
            results: outputs
        });
    }

    function trees_thermal_insolator(tree) {
        let baseWater = 500,
            baseEnergy = 20000,
            waterModifier = 3.0,
            energyModifier = 4.0;

        let saplingRate = 1.1,
            trunkRate = 3.1,
            leafRate = 4.5,
            extraDecorationRate = 0.5,
            fruitRate = 0.5;

        let input = tree.sapling,
            outputs = [
                Item.of(tree.sapling).chance(saplingRate),
                Item.of(tree.trunk).chance(trunkRate),
                Item.of(tree.leaf).chance(leafRate)
            ];

        if (tree.fruit) {
            //add any fruits
            outputs.push(Item.of(tree.fruit).chance(fruitRate));
        }

        if (tree.extraDecoration) {
            //add any extra decorations
            outputs.push(Item.of(tree.extraDecoration).chance(extraDecorationRate));
        }

        fallback_id(
            event.recipes.thermal
                .insolator(outputs, input)
                .water(baseWater * waterModifier)
                .energy(baseEnergy * energyModifier),
            `enigmatica:base/unification/unify_growables/trees_thermal_insolator/`
        );
    }

    function trees_immersiveengineering_cloche(tree) {
        // Ticks Per Day: 24000
        // Ticks Per Minute: 1200
        let baseGrowthTicks = 800,
            growthModifier = 6;

        let saplingRate = 1,
            trunkRate = 3,
            leafRate = 4,
            extraDecorationRate = 1,
            fruitRate = 1,
            renderBlock = tree.sapling,
            renderType = 'generic';

        let input = tree.sapling,
            outputs = [
                Item.of(tree.sapling, saplingRate),
                Item.of(tree.trunk, trunkRate),
                Item.of(tree.leaf, leafRate)
            ];

        let substrate = tree.substrate;
        const substrateMap = {
            crimson_nylium: 'minecraft:crimson_nylium',
            deepturf: 'undergarden:deepsoil',
            end_stone: 'minecraft:end_stone',
            glowcelium: 'byg:glowcelium_block',
            mushroom: 'minecraft:mycelium',
            nether: 'minecraft:netherrack',
            warped_nylium: 'minecraft:warped_nylium',
            jungle_moss: 'betterendforge:jungle_moss',
            end_moss: 'betterendforge:end_moss',
            amber_moss: 'betterendforge:amber_moss',
            pink_moss: 'betterendforge:pink_moss',
            chorus_nylium: 'betterendforge:chorus_nylium',
            end_moss: 'betterendforge:end_moss',
            shadow_grass: 'betterendforge:shadow_grass'
        };
        if (substrateMap[substrate]) {
            substrate = substrateMap[substrate];
        } else {
            substrate = 'minecraft:dirt';
        }

        if (tree.fruit) {
            //add any fruits
            outputs.push(Item.of(tree.fruit, fruitRate));
        }

        if (tree.extraDecoration) {
            //add any extra decorations
            outputs.push(Item.of(tree.extraDecoration, extraDecorationRate));
        }

        fallback_id(
            event.recipes.immersiveengineering
                .cloche(outputs, input, substrate, {
                    type: renderType,
                    block: renderBlock
                })
                .time(baseGrowthTicks * growthModifier),
            `enigmatica:base/unification/unify_growables/trees_immersiveengineering_cloche/`
        );
    }
});
