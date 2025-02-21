onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/energizing/';
    const recipes = [
        {
            ingredients: [{ tag: 'forge:gems/aquamarine' }],
            energy: 30000,
            result: {
                item: 'appliedenergistics2:charged_certus_quartz_crystal',
                count: 1
            },
            id: `${id_prefix}charged_certus_quartz_crystal_powah`
        },
        {
            ingredients: [
                { tag: 'forge:plates/enderium' },
                { tag: 'forge:ingots/netherite' },
                { tag: 'forge:storage_blocks/iron_osmium' },
                { tag: 'forge:storage_blocks/iron_osmium' }
            ],
            energy: 1000000,
            result: {
                item: 'xnet:antenna_dish',
                count: 1
            },
            id: 'xnet:antenna_dish'
        },
        {
            ingredients: [{ item: 'thermal:energy_cell_frame' }, { tag: 'forge:storage_blocks/redstone' }],
            energy: 250000,
            result: {
                item: 'xnet:redstone_proxy',
                count: 1
            },
            id: 'xnet:redstone_proxy'
        },
        {
            ingredients: [{ item: 'xnet:redstone_proxy_upd' }],
            energy: 100000,
            result: {
                item: 'xnet:redstone_proxy',
                count: 1
            },
            id: `${id_prefix}redstone_proxy_upd`
        },
        {
            ingredients: [{ item: 'xnet:redstone_proxy' }],
            energy: 100000,
            result: {
                item: 'xnet:redstone_proxy_upd',
                count: 1
            },
            id: 'xnet:redstoneproxy_update'
        },
        {
            ingredients: [
                { item: 'ars_nouveau:wixie_charm' },
                { item: 'appliedenergistics2:engineering_processor' },
                { item: 'appliedenergistics2:engineering_processor' },
                { item: 'minecraft:ender_eye' }
            ],
            energy: 3000000,
            result: {
                item: 'packagedauto:package_component',
                count: 4
            },
            id: 'packagedauto:package_component'
        },
        {
            ingredients: [
                { tag: 'forge:storage_blocks/dimensional' },
                { tag: 'forge:gems/diamond' },
                { item: 'integrateddynamics:crystalized_menril_block' }
            ],
            energy: 9000000,
            result: {
                item: 'rftoolsbase:infused_diamond',
                count: 1
            },
            id: 'rftoolsbase:infused_diamond'
        },
        {
            ingredients: [
                { tag: 'forge:storage_blocks/dimensional' },
                { tag: 'forge:gems/ender' },
                { item: 'integrateddynamics:crystalized_chorus_block' }
            ],
            energy: 18000000,
            result: {
                item: 'rftoolsbase:infused_enderpearl',
                count: 1
            },
            id: 'rftoolsbase:infused_enderpearl'
        },
        {
            ingredients: [{ tag: 'forge:ingots/froststeel' }, { tag: 'forge:ingots/electrum' }],
            energy: 10000,
            result: {
                item: 'powah:steel_energized',
                count: 2
            },
            id: 'powah:energizing/energized_steel'
        },
        {
            ingredients: [
                { tag: 'forge:storage_blocks/froststeel' },
                { tag: 'forge:storage_blocks/electrum' }
            ],
            energy: 100000,
            result: {
                item: 'powah:energized_steel_block',
                count: 2
            },
            id: `${id_prefix}energized_steel_block`
        },
        {
            ingredients: [
                { item: 'ars_nouveau:blaze_fiber' },
                { item: 'resourcefulbees:blaze_honeycomb' },
                { item: 'resourcefulbees:blaze_honeycomb' }
            ],
            energy: 240000,
            result: {
                item: 'powah:crystal_blazing',
                count: 2
            },
            id: 'powah:energizing/blazing_crystal'
        },
        {
            ingredients: [
                { item: 'astralsorcery:resonating_gem' },
                { tag: 'forge:dusts/starmetal' },
                { tag: 'forge:dusts/starmetal' }
            ],
            energy: 600000,
            result: {
                item: 'powah:crystal_niotic',
                count: 2
            },
            id: 'powah:energizing/niotic_crystal'
        },
        {
            ingredients: [
                { item: 'atum:osiris_godshard' },
                { tag: 'forge:dusts/uranium' },
                { tag: 'forge:dusts/uranium' }
            ],
            energy: 6000000,
            result: {
                item: 'powah:crystal_spirited',
                count: 2
            },
            id: 'powah:energizing/spirited_crystal'
        },
        {
            ingredients: [
                { item: 'minecraft:nether_star' },
                { item: 'bloodmagic:weakbloodshard' },
                { item: 'bloodmagic:weakbloodshard' },
                { tag: 'forge:gems/blazing' },
                { tag: 'forge:gems/blazing' },
                { tag: 'forge:gems/blazing' }
            ],
            energy: 100000000,
            result: {
                item: 'powah:crystal_nitro',
                count: 16
            },
            id: 'powah:energizing/nitro_crystal'
        },
        {
            ingredients: [
                { item: 'botania:ender_eye_block' },
                { item: 'powah:dielectric_casing' },
                {
                    type: 'forge:nbt',
                    item: 'pneumaticcraft:spawner_core',
                    nbt: '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:enderman":100}}'
                }
            ],
            energy: 20000000,
            result: {
                item: 'powah:ender_core',
                count: 1
            },
            id: 'powah:energizing/ender_core'
        },
        {
            ingredients: [
                { tag: 'forge:ingots/uranium' },
                { tag: 'forge:ingots/uranium' },
                { tag: 'forge:dusts/sulfur' },
                { tag: 'forge:dusts/fluorite' }
            ],
            energy: 10000,
            result: {
                item: 'powah:uraninite',
                count: 2
            },
            id: `${id_prefix}uraninite`
        },
        {
            ingredients: [
                { item: 'kubejs:power_core_low' },
                { item: 'powah:capacitor_blazing' },
                { item: 'powah:capacitor_blazing' },
                { item: 'powah:capacitor_blazing' },
                { item: 'powah:capacitor_blazing' }
            ],
            energy: 500000,
            result: {
                item: 'kubejs:power_core_medium',
                count: 1
            },
            id: 'kubejs:power_core_medium'
        },
        {
            ingredients: [
                { item: 'kubejs:power_core_low' },
                { item: 'powah:capacitor_nitro' },
                { item: 'powah:capacitor_nitro' },
                { item: 'powah:capacitor_nitro' },
                { item: 'powah:capacitor_nitro' }
            ],
            energy: 10000000,
            result: {
                item: 'kubejs:power_core_high',
                count: 1
            },
            id: 'kubejs:power_core_high'
        },
        {
            ingredients: [
                { tag: 'mekanism:alloys/atomic' },
                { item: 'rftoolsbase:infused_diamond' },
                { item: 'fluxnetworks:flux_core' },
                { item: 'rftoolsbase:infused_diamond' },
                { tag: 'mekanism:alloys/atomic' }
            ],
            energy: 1000000000,
            result: {
                item: 'mekanism:teleportation_core',
                count: 2
            },
            id: 'mekanism:teleportation_core'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
