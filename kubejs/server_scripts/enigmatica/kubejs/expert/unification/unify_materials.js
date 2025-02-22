onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/unification/unify_materials/';

    materialsToUnify.forEach((material) => {
        const ingot = getPreferredItemInTag(Ingredient.of(`#forge:ingots/${material}`)).id;
        const nugget = getPreferredItemInTag(Ingredient.of(`#forge:nuggets/${material}`)).id;
        const gem = getPreferredItemInTag(Ingredient.of(`#forge:gems/${material}`)).id;

        const plate = getPreferredItemInTag(Ingredient.of(`#forge:plates/${material}`)).id;
        const gear = getPreferredItemInTag(Ingredient.of(`#forge:gears/${material}`)).id;
        const rod = getPreferredItemInTag(Ingredient.of(`#forge:rods/${material}`)).id;
        const wire = getPreferredItemInTag(Ingredient.of(`#forge:wires/${material}`)).id;

        const crushed_ore = getPreferredItemInTag(Ingredient.of(`#create:crushed_ores/${material}`)).id;
        const ore = getPreferredItemInTag(Ingredient.of(`#forge:ores/${material}`)).id;

        ore_ingot_smelting(event, material, ore, ingot);
        gear_unification(event, material, ingot, gem, gear);
        // rod_unification(event, material, ingot, gem, rod, plate);
        rod_unification(event, material, ingot, gem, rod);
        plate_unification(event, material, ingot, gem, plate);
        wire_unification(event, material, ingot, gem, wire, plate);

        immersiveengineering_ore_processing_with_secondary_outputs(event, material, ore, crushed_ore, ingot);
    });

    function ore_ingot_smelting(event, material, ore, ingot) {
        if (ore == air || ingot == air) {
            return;
        }

        let blacklistedMaterials = ['ender'];

        if (blacklistedMaterials.indexOf(material) != -1) {
            return;
        }

        let output = ingot,
            input = `#forge:ores/${material}`;
        event.blasting(output, input).xp(0.7).id(`${id_prefix}blasting/${material}/ingot/from_ore`);

        event.recipes.mekanism.smelting(output, input).id(`${id_prefix}smelting/${material}/ingot/from_ore`);

        event.recipes.thermal.furnace(output, input).id(`${id_prefix}furnace/${material}/ingot/from_ore`);
    }

    function gear_unification(event, material, ingot, gem, gear) {
        if (gear == air) {
            return;
        }

        event.remove({ output: gear });

        let output = gear,
            input,
            mold = 'immersiveengineering:mold_gear';

        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        event.recipes.thermal
            .press(output, [Ingredient.of(input, 4), mold])
            .id(`thermal:machine/press/press_${material}_ingot_to_gear`);

        event.recipes.immersiveengineering
            .metal_press(`4x ${output}`, Ingredient.of(`16x ${input}`), mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_gear`);

        event
            .shaped(output, ['CAC', 'ABA', 'CAC'], {
                A: input,
                B: '#forge:plates/iron_tin',
                C: '#forge:nuggets/aluminum'
            })
            .id(`kubejs:crafting_shaped_${material}_gear`);
    }

    function rod_unification(event, material, ingot, gem, rod) {
        if (rod == air) {
            return;
        }

        event.remove({ output: rod });

        let output = rod,
            input,
            mold = '#thermal:crafting/dies/rod';
        const hammer = '#forge:tools/crafting_hammer';
        const plateTag = `#forge:plates/${material}`;
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        event.recipes.thermal
            .press(rod, [input, mold])
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_rod`);

        event.recipes.immersiveengineering
            .metal_press(`4x ${rod}`, `4x ${input}`, mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_rod`);

        event.shapeless(output, [plateTag, hammer, plateTag]).id(`kubejs:shapeless_crafting_${material}_rod`);
    }

    function plate_unification(event, material, ingot, gem, plate) {
        if (plate == air) {
            return;
        }

        event.remove({ output: plate });
        event.remove({ id: /immersiveengineering:crafting\/plate_/ });
        event.remove({ id: /create:pressing\/\w*_ingot/ });

        const output = plate,
            mold = '#thermal:crafting/dies/plate',
            hammer = '#forge:tools/crafting_hammer';

        let input;
        if (ingot != air) {
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }
        event.shapeless(output, [input, hammer, input]).id(`kubejs:shapeless_crafting_${material}_plate`);

        event.recipes.immersiveengineering
            .metal_press(`4x ${output}`, `4x ${input}`, mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_plate`);

        event.recipes.create.pressing(output, input).id(`kubejs:create_pressing_${material}_plate`);

        event.recipes.thermal
            .press(Item.of(output), input)
            .energy(2400)
            .id(`thermal:machine/press/press_${material}_ingot_to_plate`);
    }

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
            input = `#forge:ingots/${material}`;
        } else if (gem != air) {
            input = `#forge:gems/${material}`;
        } else {
            return;
        }

        event.recipes.thermal
            .press(Item.of(output, 4), [plate, mold])
            .energy(2400)
            .id(`kubejs:immersiveengineering_metal_press_${material}_wire`);

        event.recipes.immersiveengineering
            .metal_press(`16x ${output}`, `4x ${plate}`, mold)
            .id(`kubejs:immersiveengineering_metal_press_${material}_wire`);

        event
            .shapeless(Item.of(output, 2), [plate, plate, wireCutters])
            .id(`kubejs:shaped_crafting_${material}_wire`);
    }

    function immersiveengineering_ore_processing_with_secondary_outputs(
        event,
        material,
        ore,
        crushed_ore,
        ingot
    ) {
        if (ore == air || crushed_ore == air || ingot == air) {
            return;
        }

        let primaryOutput = crushed_ore,
            secondaryOutput,
            input = `#forge:ores/${material}`,
            materialProperties;

        try {
            materialProperties = oreProcessingSecondaries[material];
        } catch (err) {
            return;
        }

        try {
            secondaryOutput = getPreferredItemInTag(
                Ingredient.of(`#create:crushed_ores/${materialProperties.secondary}`)
            ).id;
        } catch (err) {
            secondaryOutput = crushed_ore;
        }

        event.recipes.immersiveengineering
            .crusher(primaryOutput, input, [
                Item.of(primaryOutput, 2).chance(0.6),
                Item.of(primaryOutput).chance(0.5),
                Item.of(secondaryOutput, 2).chance(0.35),
                Item.of('minecraft:gravel').chance(0.18)
            ])
            .id(`immersiveengineering:crusher/ore_${material}`);
    }
});
