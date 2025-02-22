onEventNormal('recipes', (event) => {
    const id_prefix = 'enigmatica:normal/unification/unify_materials/';

    materialsToUnify.forEach((material) => {
        const ingot = getPreferredItemInTag(Ingredient.of('#forge:ingots/' + material)).id;
        const gem = getPreferredItemInTag(Ingredient.of('#forge:gems/' + material)).id;

        const plate = getPreferredItemInTag(Ingredient.of('#forge:plates/' + material)).id;
        const gear = getPreferredItemInTag(Ingredient.of('#forge:gears/' + material)).id;
        const rod = getPreferredItemInTag(Ingredient.of('#forge:rods/' + material)).id;
        const wire = getPreferredItemInTag(Ingredient.of('#forge:wires/' + material)).id;

        const ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;
        const dust = getPreferredItemInTag(Ingredient.of(`#forge:dusts/${material}`)).id;

        minecraft_ore_ingot_smelting(event, material, ore, ingot);
        gear_unification(event, material, ingot, gem, gear);
        rod_unification(event, material, ingot, gem, rod);
        plate_unification(event, material, ingot, gem, plate);
        wire_unification(event, material, ingot, gem, wire, plate);

        immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust, ingot);
    });

    /**
     * @param {Internal.RecipeEventJS} event
     * @param {string} material
     * @param {string} ore
     * @param {string} ingot
     */
    function minecraft_ore_ingot_smelting(event, material, ore, ingot) {
        if (ore == air || ingot == air) {
            return;
        }

        let blacklistedMaterials = ['ender'];

        if (blacklistedMaterials.indexOf(material) != -1) {
            return;
        }

        let output = ingot,
            input = `#forge:ores/${material}`;
        event.smelting(output, input).xp(0.7).id(`${id_prefix}smelting/${material}/ingot/from_ore`);
        event.blasting(output, input).xp(0.7).id(`${id_prefix}blasting/${material}/ingot/from_ore`);
    }

    /**
     * @param {Internal.RecipeEventJS} event
     * @param {string} material
     * @param {string} ingot
     * @param {string} gem
     * @param {string} gear
     */
    function gear_unification(event, material, ingot, gem, gear) {
        if (gear == air) {
            return;
        }

        event.remove({ output: gear });

        let output = gear,
            input,
            mold = 'immersiveengineering:mold_gear';

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }

        event.recipes.thermal
            .press(output, [Ingredient.of(input, 4), mold])
            .id(`thermal:machine/press/press_${material}_ingot_to_gear`);

        event.recipes.immersiveengineering
            .metal_press(output, Ingredient.of(input, 4), mold)
            .id(`${id_prefix}immersiveengineering_metal_press_${material}_gear`);

        event
            .shaped(output, [' B ', 'BAB', ' B '], {
                A: '#forge:nuggets/iron',
                B: input
            })
            .id(`${id_prefix}crafting_shaped_${material}_gear`);
    }

    /**
     * @param {Internal.RecipeEventJS} event
     * @param {string} material
     * @param {string} ingot
     * @param {string} gem
     * @param {Internal.ItemStackJS_} rod
     */
    function rod_unification(event, material, ingot, gem, rod) {
        if (rod == air) {
            return;
        }

        event.remove({ output: rod });

        let output = rod,
            input,
            mold = '#thermal:crafting/dies/rod';

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }

        event.recipes.thermal
            .press(Item.of(rod, 1), [input, mold])
            .energy(2400)
            .id(`${id_prefix}immersiveengineering_metal_press_${material}_rod`);

        event.recipes.immersiveengineering
            .metal_press(Item.of(rod, 1), input, mold)
            .id(`${id_prefix}immersiveengineering_metal_press_${material}_rod`);

        event
            .shaped(output, ['A', 'A'], {
                A: input
            })
            .id(`${id_prefix}shaped_crafting_${material}_rod`);
    }

    /**
     * @param {Internal.RecipeEventJS} event
     * @param {string} material
     * @param {string} ingot
     * @param {string} gem
     * @param {string} plate
     */
    function plate_unification(event, material, ingot, gem, plate) {
        if (plate == air) {
            return;
        }

        event.remove({ output: plate });
        event.remove({ id: /immersiveengineering:crafting\/plate_/ });
        event.remove({ id: /create:pressing\/\w*_ingot/ });

        let input,
            output = plate,
            mold = '#thermal:crafting/dies/plate',
            hammer = '#forge:tools/crafting_hammer';

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }
        event.shapeless(output, [input, hammer]).id(`${id_prefix}shapeless_crafting_${material}_plate`);

        event.recipes.immersiveengineering
            .metal_press(output, input, mold)
            .id(`${id_prefix}immersiveengineering_metal_press_${material}_plate`);

        event.recipes.create.pressing(output, input).id(`${id_prefix}create_pressing_${material}_plate`);

        event.recipes.thermal
            .press(Item.of(output), input)
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_plate`);
    }

    /**
     * @param {Internal.RecipeEventJS} event
     * @param {string} material
     * @param {string} ingot
     * @param {string} gem
     * @param {string} wire
     * @param {string} plate
     */
    function wire_unification(event, material, ingot, gem, wire, plate) {
        if (wire == air) {
            return;
        }

        event.remove({ output: wire });

        const wireCutters = '#forge:tools/wirecutter';
        let input,
            output = wire,
            mold = '#thermal:crafting/dies/wire';

        if (ingot != air) {
            input = '#forge:ingots/' + material;
        } else if (gem != air) {
            input = '#forge:gems/' + material;
        } else {
            return;
        }

        event.recipes.thermal
            .press(Item.of(output, 2), [input, mold])
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_wire`);

        event.recipes.immersiveengineering
            .metal_press(Item.of(output, 2), input, mold)
            .id(`${id_prefix}immersiveengineering_metal_press_${material}_wire`);

        event.shapeless(output, [plate, wireCutters]).id(`${id_prefix}shaped_crafting_${material}_wire`);
    }

    /**
     * @param {Internal.RecipeEventJS} event
     * @param {string} material
     * @param {string} ore
     * @param {Internal.ItemStackJS_} dust
     * @param {string} ingot
     */
    function immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, dust, ingot) {
        if (ore == air || dust == air || ingot == air) {
            return;
        }

        let primaryOutput = Item.of(dust, 2),
            secondaryOutput,
            secondaryChance = 0.1,
            input = `#forge:ores/${material}`,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(
                Ingredient.of(`#forge:dusts/${materialProperties.secondary}`)
            ).id;
        } catch (err) {
            secondaryOutput = dust;
        }

        event.recipes.immersiveengineering
            .crusher(primaryOutput, input, [Item.of(secondaryOutput).chance(secondaryChance)])
            .id(`immersiveengineering:crusher/ore_${material}`);
    }
});
