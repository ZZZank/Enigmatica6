onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/interactio/item_lightning/';
    const recipes = [
        {
            inputs: ['4x minecraft:snowball', 'quark:bottled_cloud', '#forge:gems/fluorite'],
            output: {
                entries: [{ result: { item: 'powah:charged_snowball', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}charged_snowball`
        },
        {
            inputs: ['3x #forge:storage_blocks/clay', '#forge:gems/mana', '#forge:gems/apatite'],
            output: {
                entries: [{ result: { item: 'ars_nouveau:arcane_stone', count: 4 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}arcane_stone`
        },
        {
            inputs: [
                'minecraft:heart_of_the_sea',
                '4x minecraft:nautilus_shell',
                '2x #forge:gems/lapis',
                '2x #forge:gems/fluorite',
                '#forge:gems/mana'
            ],
            output: {
                entries: [{ result: { item: 'minecraft:conduit', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'minecraft:conduit'
        },
        {
            inputs: [
                'resourcefulbees:tainted_honeycomb',
                'botania:livingwood_wall',
                'naturesaura:gold_leaf',
                '#forge:gems/apatite'
            ],
            output: {
                entries: [{ result: { item: 'naturesaura:wood_stand', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'naturesaura:wood_stand'
        },
        {
            inputs: [
                [
                    'undergarden:music_disc_relict',
                    'undergarden:music_disc_mammoth',
                    'undergarden:music_disc_limax_maximus',
                    'undergarden:music_disc_gloomper_anthem'
                ],
                'aquaculture:fish_bones',
                '2x #forge:gems/lapis',
                '2x minecraft:fermented_spider_eye',
                '4x undergarden:raw_dweller_meat'
            ],
            output: {
                entries: [{ result: { item: 'meetyourfight:fossil_bait', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:fossil_bait'
        },
        {
            inputs: ['supplementaries:jar', '3x #forge:gems/fluorite'],
            output: {
                entries: [{ result: { item: 'ars_nouveau:jar_of_light', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}jar_of_light`
        },
        {
            inputs: ['supplementaries:jar', '3x #forge:dusts/obsidian'],
            output: {
                entries: [{ result: { item: 'ars_nouveau:void_jar', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}void_jar`
        },
        {
            inputs: [
                Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:overworld' }),
                'naturesaura:infused_iron',
                '#botania:runes/water',
                '#botania:runes/earth',
                Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' }),
                'naturesaura:tainted_gold',
                '#botania:runes/fire',
                '#botania:runes/air'
            ],
            output: {
                entries: [{ result: { item: 'naturesaura:calling_spirit', count: 4 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}calling_spirit`
        },
        {
            inputs: ['6x #botania:petals', '2x botania:quartz_blaze', '#forge:nuggets/nebu'],
            output: {
                entries: [{ result: { item: 'botania:spark', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}spark`
        },
        {
            inputs: [
                '2x resourcefulbees:tainted_honeycomb',
                '#forge:inlays/pewter',
                '#forge:gems/mana',
                '4x architects_palette:sunmetal_blend'
            ],
            output: {
                entries: [{ result: { item: 'atum:scarab', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'atum:scarab'
        },
        {
            inputs: ['minecraft:bell', '3x atum:ectoplasm', '#forge:gems/fluorite', '#atum:relic_non_dirty'],
            output: {
                entries: [{ result: { item: 'meetyourfight:haunted_bell', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:haunted_bell'
        },
        {
            inputs: ['2x thermal:phytogro', '2x #forge:dusts/iron', '#forge:dusts/nickel'],
            output: {
                entries: [{ result: { item: 'emendatusenigmatica:invar_dust', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}invar_dust`
        },
        {
            inputs: ['#forge:gems/fluorite', '6x minecraft:prismarine', '6x undergarden:shiverstone'],
            output: {
                entries: [{ result: { item: 'kubejs:firmament', count: 3 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}firmament`
        },
        {
            inputs: [
                'appliedenergistics2:charged_certus_quartz_crystal',
                'minecraft:polished_andesite',
                '#forge:inlays/pewter'
            ],
            output: {
                entries: [{ result: { item: 'betterendforge:andesite_pedestal', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'betterendforge:andesite_pedestal'
        },
        {
            inputs: [
                'botania:corporea_spark',
                '3x #forge:nuggets/silicon_bronze',
                '2x bloodmagic:ritualstone'
            ],
            output: {
                entries: [{ result: { item: 'bloodmagic:teleposer', count: 2 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}teleposer`
        },
        {
            inputs: ['64x minecraft:oak_leaves', '#forge:dusts/starmetal', 'quark:green_crystal'],
            output: {
                entries: [{ result: { item: 'kubejs:crystalline_oak_leaves', count: 64 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}crystalline_oak_leaves`
        },
        {
            inputs: ['64x byg:flowering_palo_verde_leaves', '#forge:dusts/starmetal', 'quark:yellow_crystal'],
            output: {
                entries: [
                    {
                        result: { item: 'kubejs:crystalline_flowering_palo_verde_leaves', count: 64 },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}crystalline_flowering_palo_verde_leaves`
        },
        {
            inputs: ['64x minecraft:dark_oak_wood', '#forge:dusts/starmetal', 'quark:orange_crystal'],
            output: {
                entries: [{ result: { item: 'kubejs:crystalline_dark_oak_wood', count: 64 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}crystalline_dark_oak_wood`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_lightning';

        recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        event.custom(recipe).id(recipe.id);
    });
});
