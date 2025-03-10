onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/immersiveengineering/arc_furnace/';
    let data = {
        recipes: [
            {
                input1: Ingredient.of('3x #forge:ingots/cobalt'),
                secondaries: ['thermal:blizz_powder'],
                outputs: [Item.of('3x undergarden:froststeel_ingot')],
                id: `${id_prefix}froststeel_ingot`
            },
            {
                input1: Ingredient.of('3x #forge:ingots/aluminum'),
                secondaries: [
                    Ingredient.of('4x #forge:dusts/lithium'),
                    Ingredient.of('#forge:ingots/copper')
                ],
                outputs: [Item.of('4x mekanism:alloy_reinforced')],
                id: `${id_prefix}alloy_reinforced`
            },
            {
                input1: Item.of('6x ars_nouveau:warding_stone'),
                secondaries: ['immersiveengineering:coil_mv', Item.of('3x fluxnetworks:flux_dust')],
                outputs: [Item.of('6x compactmachines:wall')],
                id: `${id_prefix}cm_wall`
            },
            {
                input1: Item.of('8x industrialforegoing:dryrubber'),
                secondaries: [['#forge:dusts/coal_petcoke', '#forge:dusts/coal_coke']],
                outputs: [Item.of('8x industrialforegoing:plastic'), Item.of('8x thermal:slag')],
                id: `${id_prefix}plastic`
            },
            {
                input1: Item.of('powah:energizing_rod_basic').ignoreNBT(),
                secondaries: [
                    'mekanismgenerators:laser_focus_matrix',
                    Item.of('4x modularrouters:blank_upgrade')
                ],
                outputs: [Item.of('4x modularrouters:energy_upgrade')],
                time: 100 * 4,
                energy: 51200 * 4,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_basic`
            },
            {
                input1: Item.of('powah:energizing_rod_hardened').ignoreNBT(),
                secondaries: [
                    'mekanismgenerators:laser_focus_matrix',
                    Item.of('10x modularrouters:blank_upgrade')
                ],
                outputs: [Item.of('10x modularrouters:energy_upgrade')],
                time: 100 * 10,
                energy: 51200 * 10,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_hardened`
            },
            {
                input1: Item.of('powah:energizing_rod_blazing').ignoreNBT(),
                secondaries: [
                    'mekanismgenerators:laser_focus_matrix',
                    Item.of('34x modularrouters:blank_upgrade')
                ],
                outputs: [Item.of('34x modularrouters:energy_upgrade')],
                time: 100 * 34,
                energy: 51200 * 34,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_blazing`
            },
            {
                input1: Item.of('powah:energizing_rod_niotic').ignoreNBT(),
                secondaries: [
                    'mekanismgenerators:laser_focus_matrix',
                    Item.of('64x modularrouters:blank_upgrade')
                ],
                outputs: [Item.of('64x modularrouters:energy_upgrade')],
                time: 100 * 64,
                energy: 51200 * 64,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_niotic`
            },
            {
                input1: Item.of('3x modularrouters:blank_module'),
                secondaries: [Item.of('thermal:charge_bench')],
                outputs: [Item.of('3x modularrouters:energy_output_module')],
                id: `${id_prefix}energy_output_module`
            },
            {
                input1: Item.of('thermal:tar'),
                secondaries: [
                    'atum:ectoplasm',
                    Ingredient.of('2x #forge:dusts/quartz'),
                    Ingredient.of('5x #forge:dusts/lapis')
                ],
                outputs: ['kubejs:smoldering_lapis_lazuli_compound'],
                time: 400,
                energy: 204800,
                id: `${id_prefix}smoldering_lapis_lazuli_compound`
            },
            {
                input1: 'create:honeyed_apple',
                secondaries: [Ingredient.of('4x #forge:storage_blocks/tainted_gold')],
                outputs: ['minecraft:enchanted_golden_apple'],
                id: `${id_prefix}enchanted_golden_apple`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_helmet', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:armor_head_book')],
                id: `${id_prefix}armor_head_book`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_chestplate', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:armor_chest_book')],
                id: `${id_prefix}armor_chest_book`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_leggings', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:armor_legs_book')],
                id: `${id_prefix}armor_legs_book`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_boots', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:armor_feet_book')],
                id: `${id_prefix}armor_feet_book`
            },
            {
                input1: Item.of('botania:livingwood_bow', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:bow_book')],
                id: `${id_prefix}bow_book`
            },
            {
                input1: Item.of('aquaculture:gold_fishing_rod', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:fishing_rod_book')],
                id: `${id_prefix}fishing_rod_book`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_pickaxe', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:digger_book')],
                id: `${id_prefix}digger_book`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_sword', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:weapon_book')],
                id: `${id_prefix}weapon_book`
            },
            {
                input1: 'tconstruct:ender_slime_crystal',
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:scrap_tome')],
                id: `${id_prefix}scrap_tome`
            },
            {
                input1: 'tconstruct:sky_slime_crystal',
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:null_book')],
                id: `${id_prefix}null_book`
            },
            {
                input1: 'quark:white_crystal_cluster',
                secondaries: [Item.of('4x glassential:glass_ghostly')],
                outputs: [Item.of('4x atum:crystal_glass')],
                id: `${id_prefix}crystal_glass`
            },
            {
                input1: 'quark:white_crystal',
                secondaries: [Item.of('3x glassential:glass_ghostly')],
                outputs: [Item.of('4x atum:crystal_glass')],
                id: `${id_prefix}crystal_glass_2`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering
            .arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries)
            .id(recipe.id);

        if (recipe.time) {
            re.time(recipe.time);
        }

        if (recipe.energy) {
            re.energy(recipe.energy);
        }
    });
});
