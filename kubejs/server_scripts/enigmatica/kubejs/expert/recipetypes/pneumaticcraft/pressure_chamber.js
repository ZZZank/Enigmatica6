
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            inputs: ['2x #forge:ingots/steel', '2x #forge:tar', '#forge:obsidian'],
            pressure: 2.0,
            results: ['4x pneumaticcraft:ingot_iron_compressed'],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            inputs: ['2x #forge:storage_blocks/steel', '18x #forge:tar', '9x #forge:obsidian'],
            pressure: 2.0,
            results: ['4x pneumaticcraft:compressed_iron_block'],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'
        },
        {
            inputs: ['4x minecraft:snow_block'],
            pressure: 1.5,
            results: ['betterendforge:dense_snow'],
            id: `${id_prefix}dense_snow`
        },
        {
            inputs: ['4x betterendforge:dense_snow'],
            pressure: 1.5,
            results: ['minecraft:ice'],
            id: 'pneumaticcraft:pressure_chamber/ice'
        },
        {
            inputs: ['powah:blank_card', '#mekanism:enriched/redstone', 'powah:ender_core'],
            pressure: 4.0,
            results: ['powah:binding_card'],
            id: 'powah:crafting/binding_card'
        },
        {
            inputs: ['#forge:alloys/ultimate', 'powah:dielectric_paste', 'rftoolsbase:infused_enderpearl'],
            pressure: 4.0,
            results: ['powah:aerial_pearl'],
            id: 'powah:crafting/aerial_pearl'
        },
        {
            inputs: [
                '#forge:wires/electrum',
                '2x appliedenergistics2:printed_calculation_processor',
                'powah:dielectric_paste',
                '#pneumaticcraft:plastic_sheets'
            ],
            pressure: 1.0,
            results: ['2x pneumaticcraft:transistor'],
            id: 'pneumaticcraft:pressure_chamber/transistor'
        },
        {
            inputs: [
                '#forge:wires/electrum',
                '#forge:plates/signalum',
                '#forge:plates/aluminum',
                'powah:dielectric_paste',
                '#pneumaticcraft:plastic_sheets'
            ],
            pressure: 1.0,
            results: ['2x pneumaticcraft:capacitor'],
            id: 'pneumaticcraft:pressure_chamber/capacitor'
        },
        {
            inputs: [
                'pneumaticcraft:unassembled_pcb',
                '2x pneumaticcraft:capacitor',
                '2x pneumaticcraft:transistor',
                'appliedenergistics2:calculation_processor',
                '#forge:wires/lead'
            ],
            pressure: 4.0,
            results: ['pneumaticcraft:printed_circuit_board'],
            id: `${id_prefix}printed_circuit_board`
        },
        {
            inputs: [
                '#forge:plates/copper',
                '6x fluxnetworks:flux_dust',
                '2x #pneumaticcraft:plastic_sheets'
            ],
            pressure: 1.5,
            results: ['6x pneumaticcraft:empty_pcb'],
            id: 'pneumaticcraft:pressure_chamber/empty_pcb'
        },
        {
            inputs: ['#forge:plates/invar', 'fluxnetworks:flux_dust', 'thermal:redstone_servo'],
            pressure: 1.0,
            results: ['pneumaticcraft:turbine_blade'],
            id: 'pneumaticcraft:pressure_chamber/turbine_blade'
        },
        {
            inputs: [
                '3x integrateddynamics:variable',
                'appliedenergistics2:formation_core',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['3x integrateddynamics:variable_transformer_output'],
            id: `${id_prefix}variable_transformer_output`
        },
        {
            inputs: [
                '3x integrateddynamics:variable',
                'appliedenergistics2:annihilation_core',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['3x integrateddynamics:variable_transformer_input'],
            id: `${id_prefix}variable_transformer_input`
        },
        {
            inputs: ['2x kubejs:memory_basic_empty', 'fluxnetworks:flux_dust'],
            pressure: 4.0,
            results: ['kubejs:memory_advanced_empty'],
            id: `${id_prefix}memory_advanced_empty`
        },
        {
            inputs: ['2x kubejs:memory_advanced_empty', 'fluxnetworks:flux_dust'],
            pressure: 4.0,
            results: ['kubejs:memory_elite_empty'],
            id: `${id_prefix}memory_elite_empty`
        },
        {
            inputs: ['2x kubejs:memory_elite_empty', 'fluxnetworks:flux_dust'],
            pressure: 4.0,
            results: ['kubejs:memory_ultimate_empty'],
            id: `${id_prefix}memory_ultimate_empty`
        },
        {
            inputs: ['3x #mekanism:alloys/reinforced', 'pneumaticcraft:turbine_rotor'],
            pressure: 4.0,
            results: ['mekanismgenerators:turbine_blade'],
            id: 'mekanismgenerators:turbine/blade'
        },
        {
            inputs: ['astralsorcery:celestial_crystal', '#forge:dusts/starmetal'],
            pressure: 4.5,
            results: ['3x kubejs:astrogro'],
            id: `${id_prefix}astrogro`
        },
        {
            inputs: ['4x pneumaticcraft:transistor', '#forge:alloys/elite'],
            pressure: 4.5,
            results: ['16x kubejs:advanced_ram_chip'],
            id: `${id_prefix}advanced_ram_chip`
        },
        {
            inputs: [
                'tconstruct:ichor_slime_crystal',
                'appliedenergistics2:calculation_processor',
                'botania:corporea_spark'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:annihilation_core'],
            id: 'appliedenergistics2:materials/annihilationcore'
        },
        {
            inputs: [
                'tconstruct:sky_slime_crystal',
                'appliedenergistics2:calculation_processor',
                'botania:corporea_spark'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:formation_core'],
            id: 'appliedenergistics2:materials/formationcore'
        },
        {
            inputs: [
                '#forge:coins/tin',
                '#forge:gems/silicon',
                'appliedenergistics2:sky_dust',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:printed_calculation_processor'],
            id: 'appliedenergistics2:inscriber/calculation_processor_print'
        },
        {
            inputs: [
                '#forge:coins/lumium',
                '#forge:gems/silicon',
                'appliedenergistics2:sky_dust',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:printed_logic_processor'],
            id: 'appliedenergistics2:inscriber/logic_processor_print'
        },
        {
            inputs: [
                '#forge:coins/enderium',
                '#forge:gems/silicon',
                'appliedenergistics2:sky_dust',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:printed_engineering_processor'],
            id: 'appliedenergistics2:inscriber/engineering_processor_print'
        }
    ];

    powahTiers.forEach(function (tier) {
        if (tier == 'starter') {
            return;
        }
        let capacitor = `powah:capacitor_${tier}`;

        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`;
        }
        // else if (tier == 'hardened') {
        //     let crystal = 'powah:steel_energized';
        // }

        // let lower_tiers = lowerTiers(powahTiers, tier);

        // Primary Craft
        recipes.push({
            inputs: ['powah:blank_card', 'powah:dielectric_paste', capacitor, 'powah:ender_core'],
            pressure: 4.0,
            results: [`powah:ender_gate_${tier}`],
            id: `powah:crafting/ender_gate_${tier}`
        });

        // Disassemble Craft
        if (tier != 'basic') {
            recipes.push({
                inputs: [`powah:reactor_${tier}`],
                pressure: -0.9,
                results: [
                    `powah:thermo_generator_${tier}`,
                    `powah:energy_cell_${tier}`,
                    `powah:furnator_${tier}`
                ],
                id: `${id_prefix}disassemble_reactor_${tier}`
            });
        }
    });

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            let parsed = toJsonWithCount(input);
            parsed.type = 'pneumaticcraft:stacked_item';
            ingredients.push(parsed);
        });
        recipe.results = recipe.results.map((str) => Item.of(str).toResultJson());

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
