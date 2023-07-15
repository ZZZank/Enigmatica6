onEvent('jei.information', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            items: ['bloodmagic:soulpickaxe'],
            text: ['Capable of mining Iesnium.']
        },
        {
            items: ['atum:nebu_hammer', 'mythicbotany:alfsteel_pick'],
            text: ['Capable of breaking down Godblocks into Atum Artifacts.']
        },
        {
            items: ['resourcefulbees:t2_apiary', 'resourcefulbees:t3_apiary', 'resourcefulbees:t4_apiary'],
            text: [
                'Crafting this will not return any bees contained in the ingredients - make sure to remove them before crafting!'
            ]
        },
        {
            items: ['industrialforegoing:mob_slaughter_factory'],
            text: [
                // This works but doesn't provide color in JEI text.
                // I just made it like this to be easily copied from tooltips script
                Text.of('Disabled in Expert Mode.').red(),
                Text.of('Liquid Meat can be obtained by "processing" cows.').color('#6e2a2a'),
                Text.of('Pink Slime can be harvested from a Pink Wither using a Fluid Laser.').color(
                    '#da07e6'
                )
            ]
        },
        {
            items: ['appliedenergistics2:1k_cell_component','appliedenergistics2:1k_fluid_cell_component'],
            text: ['Crafting is disabled in Expert, begin with the 4k one.']
        },
        {
            items: [
                'kubejs:medium_machinery_schematics',
                'kubejs:heavy_machinery_schematics',
                'occultism:chalk_red',
                'bloodmagic:masterbloodorb',
                'bloodmagic:soulgemlesser'
            ],
            text: [
                'Obtaining this item for the first time automatically unlocks a Game Stage.',
                'If the stage does not unlock or gets revoked, simply Right-Click this item in the air to re-gain it.'
            ]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.text);
        });
    });

    const disabledItems = [
        'pneumaticcraft:air_compressor',
        'pneumaticcraft:advanced_air_compressor',
        'integrateddynamics:energy_battery',
        'integrateddynamics:mechanical_squeezer',
        'integrateddynamics:mechanical_drying_basin',
        'integrateddynamics:squeezer',
        'integrateddynamics:drying_basin',
        'integrateddynamics:coal_generator',
        'mekanism:upgrade_filter',
        'darkutils:rune_damage_player',
        'integrateddynamics:coal_generator',
        /darkutils:export_plate/,
        /integrateddynamics:energy_battery/,
        /powah:energy_cable_/,
        'eidolon:crucible',
        'eidolon:wooden_brewing_stand',
        'engineersdecor:factory_placer',
    ];
    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled in Expert mode, if you managed to obtain it please report it on Enigmatica 6's issue tracker: https://github.com/NillerMedDild/Enigmatica6/issues"
        );
    });
});
