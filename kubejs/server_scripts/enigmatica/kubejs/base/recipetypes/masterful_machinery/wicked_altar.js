

onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/masterful_machinery/wicked_altar/';
    /**
     * if type is not specified, it will be 'masterfulmachinery:items'
     */
    const recipes = [
        {
            outputs: ['2x kubejs:wicked_weave'],
            inputs: [
                '2x atum:linen_cloth',
                'ars_nouveau:mana_berry',
                'ars_nouveau:mana_bloom',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}wicked_weave`
        },
        {
            outputs: ['alexsmobs:dimensional_carver'],
            inputs: [
                'redstone_arsenal:flux_gem',
                '3x tconstruct:hepatizon_ingot',
                '2x #forge:ingots/netherite',
                '2x alexsmobs:void_worm_mandible',
                'alexsmobs:void_worm_eye',
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 5000 }
                }
            ],
            ticks: 500,
            id: 'alexsmobs:dimensional_carver'
        },
        {
            outputs: ['16x redstone_arsenal:flux_dust'],
            inputs: [
                '4x #forge:dusts/ender_pearl',
                '4x #forge:dusts/gold',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 100 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}flux_dust`
        },
        {
            outputs: ['4x minecraft:golden_apple'],
            inputs: [
                '4x minecraft:apple',
                '#forge:dusts/gold',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}golden_apple`
        },
        {
            outputs: ['4x minecraft:golden_carrot'],
            inputs: [
                '4x minecraft:carrot',
                '#forge:dusts/gold',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}golden_carrot`
        },
        {
            outputs: ['4x minecraft:glistering_melon_slice'],
            inputs: [
                '4x minecraft:melon_slice',
                '#forge:dusts/gold',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}glistering_melon_slice`
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
