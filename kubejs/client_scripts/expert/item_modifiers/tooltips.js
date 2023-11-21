'use strict';

onEvent('item.tooltip', (event) => {
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    if (global.isNormalMode) {
        return;
    }
    const eprefix = 'tooltips.en6e.expert.';
    const id_prefix = 'tooltips.enigmatica.expert.';
    const disabledInExpert = Text.translate(`${id_prefix}disabled`).red();
    const recipes = [
        {
            items: ['occultism:sacrificial_bowl'],
            text: [Text.translate('gamestage.enigmatica.restrictions.red_chalk')]
        },
        {
            items: [
                'bloodmagic:altar',
                'bloodmagic:alchemytable',
                'bloodmagic:demoncrucible',
                'bloodmagic:demoncrystallizer',
                'bloodmagic:soulforge',
                'bloodmagic:alchemicalreactionchamber',
                'bloodmagic:incensealtar'
            ],
            text: [Text.translate('gamestage.enigmatica.restrictions.master_blood_orb')]
        },
        {
            items: ['appliedenergistics2:me_p2p_tunnel', 'appliedenergistics2:memory_card'],
            text: [Text.translate(`${eprefix}channel_disabled`).green()]
        },
        {
            items: ['bloodmagic:soulpickaxe'],
            text: [Text.translate(`${id_prefix}soulpickaxe`).color('#7e24b3')]
        },
        {
            items: ['tconstruct:seared_melter'],
            text: [disabledInExpert, Text.translate(`${id_prefix}seared_melter`).aqua()]
        },
        {
            items: [
                'integrateddynamics:mechanical_squeezer',
                'integrateddynamics:mechanical_drying_basin',
                'integrateddynamics:squeezer',
                'integrateddynamics:drying_basin',
                'pneumaticcraft:air_compressor',
                'pneumaticcraft:advanced_air_compressor',
                'darkutils:rune_damage_player',
                'engineersdecor:factory_placer',
                'mekanism:osmium_compressor',
                'mekanism:ultimate_compressing_factory',
                'mekanism:elite_compressing_factory',
                'mekanism:advanced_compressing_factory',
                'mekanism:basic_compressing_factory',
                'compactmachines:tunnel'
            ],
            text: [disabledInExpert]
        },
        {
            items: ['resourcefulbees:t2_apiary', 'resourcefulbees:t3_apiary', 'resourcefulbees:t4_apiary'],
            text: [Text.translate(`${id_prefix}apiary`).red()]
        },
        {
            items: ['industrialforegoing:mob_slaughter_factory'],
            text: [
                disabledInExpert,
                Text.translate(`${id_prefix}liquid_meat`).color('#6e2a2a'),
                Text.translate(`${id_prefix}pink_slime`).color('#da07e6')
            ]
        },
        {
            items: ['kubejs:medium_machinery_schematics'],
            text: [
                Text.translate(`${id_prefix}machinery_schematics`).blue(),
                Text.translate(`${id_prefix}medium_machinery_schematics`).aqua()
            ]
        },
        {
            items: ['kubejs:heavy_machinery_schematics'],
            text: [
                Text.translate(`${id_prefix}machinery_schematics`).blue(),
                Text.translate(`${id_prefix}heavy_machinery_schematics`).aqua()
            ]
        },
        {
            items: [/kubejs:diy/],
            text: [
                Text.translate(`${id_prefix}some_assembly_required`).green(),
                Text.translate(`${id_prefix}batteries_not_included`).darkRed()
            ]
        },
        {
            items: ['mekanism:basic_energy_cube'],
            text: [
                Text.translate(`descriptions.en6e.expert.basic_energy_cube`).yellow()
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
