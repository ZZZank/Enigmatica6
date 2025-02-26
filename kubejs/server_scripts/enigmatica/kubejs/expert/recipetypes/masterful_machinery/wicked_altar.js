onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/masterful_machinery/wicked_altar/';
    /**
     * if type is not specified, it will be 'masterfulmachinery:items'
     */
    const recipes = [
        {
            outputs: ['bloodmagic:sacrificialdagger'],
            inputs: [
                'undergarden:utheric_sword',
                '2x appliedenergistics2:charged_certus_quartz_crystal',
                '2x minecraft:fermented_spider_eye',
                'minecraft:ghast_tear',
                'redstone_arsenal:flux_gem',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: 'bloodmagic:sacrificial_dagger'
        },
        {
            outputs: ['4x redstone_arsenal:flux_gem'],
            inputs: [
                '4x occultism:spirit_attuned_gem',
                '8x redstone_arsenal:flux_dust',
                'atum:nepthys_godshard',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 4000 }
                }
            ],
            ticks: 400,
            id: `${id_prefix}flux_gem`
        },
        {
            outputs: ['botania:blood_pendant'],
            inputs: [
                'ars_nouveau:dull_trinket',
                '4x alexsmobs:emu_feather',
                '2x #forge:inlays/pewter',
                '2x appliedenergistics2:charged_certus_quartz_crystal',
                'ars_nouveau:potion_flask_amplify',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}void_amulet`
        },
        {
            outputs: ['bloodmagic:componentframeparts'],
            inputs: [
                '#forge:gears/osmium',
                'tconstruct:ender_slime_crystal',
                '4x #forge:nuggets/utherium',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}componentframeparts`
        },
        {
            outputs: ['bloodmagic:itemrouterfilterexact'],
            inputs: [
                'bloodmagic:componentframeparts',
                'atum:red_stained_crystal_glass_pane',
                '#forge:nuggets/signalum',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilterexact`
        },
        {
            outputs: ['bloodmagic:itemrouterfilteroredict'],
            inputs: [
                'bloodmagic:componentframeparts',
                'atum:lime_stained_crystal_glass_pane',
                '#forge:chunks',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilteroredict`
        },
        {
            outputs: ['bloodmagic:itemrouterfilterenchant'],
            inputs: [
                'bloodmagic:componentframeparts',
                'atum:green_stained_crystal_glass_pane',
                'minecraft:enchanted_book',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilterenchant`
        },
        {
            outputs: ['bloodmagic:itemrouterfiltermoditems'],
            inputs: [
                'bloodmagic:componentframeparts',
                'atum:yellow_stained_crystal_glass_pane',
                'naturesaura:crimson_meal',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfiltermoditems`
        },
        {
            outputs: ['bloodmagic:itemrouterfiltercomposite'],
            inputs: [
                'bloodmagic:componentframeparts',
                'atum:white_stained_crystal_glass_pane',
                '#forge:nuggets/silicon_bronze',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfiltercomposite`
        },
        {
            outputs: ['bloodmagic:noderouter'],
            inputs: [
                'upgrade_aquatic:elder_eye',
                '2x occultism:spirit_attuned_gem',
                '2x #forge:rods/prismarine',
                'resourcefulbees:tainted_honeycomb',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 50000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}noderouter`
        },
        {
            outputs: ['2x bloodmagic:itemroutingnode'],
            inputs: [
                '2x botania:corporea_spark',
                '2x occultism:spirit_attuned_gem',
                'architects_palette:moonstone',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}itemroutingnode`
        },
        {
            outputs: ['bloodmagic:inputroutingnode'],
            inputs: [
                'bloodmagic:itemroutingnode',
                '#forge:nuggets/lumium',
                '#forge:dusts/fluorite',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}inputroutingnode`
        },
        {
            outputs: ['bloodmagic:outputroutingnode'],
            inputs: [
                'bloodmagic:itemroutingnode',
                '#forge:nuggets/signalum',
                '#forge:dusts/fluorite',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}outputroutingnode`
        },
        {
            outputs: ['bloodmagic:mastercore'],
            inputs: [
                '3x botania:corporea_spark',
                '#forge:storage_blocks/electrum',
                '6x glassential:glass_ghostly',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 2000 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}mastercore`
        },
        {
            outputs: ['2x bloodmagic:syntheticpoint'],
            inputs: [
                '4x undergarden:masticator_scales',
                '#atum:godshards/montu',
                '4x #forge:ingots/utherium',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}syntheticpoint`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.inputs = recipe.inputs.map((val) => toMMJson(val));
        recipe.outputs = recipe.outputs.map((val) => toMMJson(val));
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'wicked_altar_structure';
        recipe.controllerId = 'wicked_altar';
        event.custom(recipe).id(recipe.id);
    });
});
