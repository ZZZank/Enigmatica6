

onEvent('jei.information', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const eprefix = 'descriptions.en6e.expert.';
    const id_prefix = `descriptions.enigmatica.expert.`;

    const recipes = [
        {
            items: ['bloodmagic:soulpickaxe'],
            text: ['tooltips.enigmatica.expert.soulpickaxe']
        },
        {
            items: ['atum:nebu_hammer', 'mythicbotany:alfsteel_pick'],
            text: [`${id_prefix}nebu_hammer`]
        },
        {
            items: ['resourcefulbees:t2_apiary', 'resourcefulbees:t3_apiary', 'resourcefulbees:t4_apiary'],
            text: [`${id_prefix}apiary`]
        },
        {
            items: ['industrialforegoing:mob_slaughter_factory'],
            text: [
                'tooltips.enigmatica.expert.disabled',
                'tooltips.enigmatica.expert.liquid_meat',
                'tooltips.enigmatica.expert.pink_slime'
            ]
        },
        {
            items: ['appliedenergistics2:1k_cell_component', 'appliedenergistics2:1k_fluid_cell_component'],
            text: [`${eprefix}small_storage_part`]
        },
        {
            items: [
                'kubejs:medium_machinery_schematics',
                'kubejs:heavy_machinery_schematics',
                'occultism:chalk_red',
                'bloodmagic:masterbloodorb',
                'bloodmagic:soulgemlesser'
            ],
            text: [`${id_prefix}stage_unlock`]
        },
        {
            // Disabled Items
            items: disabledItemsExpert,
            text: [`descriptions.en6e.base.disabled_please_report`]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(
            recipe.items,
            recipe.text.map((str) => Text.translate(str))
        );
    });
});
