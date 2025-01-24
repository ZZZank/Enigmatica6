// priority: 1000

const blockConvID = new ResourceLocation('enlightened6', 'block_conversion');

const AIR_RL = new ResourceLocation('minecraft:air');

const {
    blockConvCompiledRecipes,
    blockConvRawRecipes
} = (() => {
    /**
     * @type {{target:Special.Block,output:$ItemStackJS_,holding:$ItemStackJS_,id:string,
     * additional?:(e:$BlockRightClickEventJS_)=>void}[]}
     */
    const raw = [
        {
            target: 'redstone_arsenal:flux_gem_block',
            output: '4x bloodmagic:largebloodstonebrick',
            holding: 'bloodmagic:weakbloodshard',
            id: 'largebloodstonebrick'
        },
        {
            target: 'mekanism:teleporter_frame',
            output: 'kubejs:conductive_frame',
            holding: 'immersiveengineering:dust_hop_graphite',
            id: 'conductive_frame'
        },
        {
            target: 'astralsorcery:marble_raw',
            output: 'astralsorcery:marble_runed',
            holding: 'naturesaura:gold_leaf',
            id: `marble_runed`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:crafting_accelerator',
            holding: 'appliedenergistics2:engineering_processor',
            id: `crafting_accelerator`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:1k_crafting_storage',
            holding: 'appliedenergistics2:1k_cell_component',
            id: `1k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:4k_crafting_storage',
            holding: 'appliedenergistics2:4k_cell_component',
            id: `4k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:16k_crafting_storage',
            holding: 'appliedenergistics2:16k_cell_component',
            id: `16k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:64k_crafting_storage',
            holding: 'appliedenergistics2:64k_cell_component',
            id: `64k_crafting_storage`
        },
        {
            target: 'minecraft:conduit',
            output: Item.of('minecraft:trident', {
                nullptrType: 1,
                Damage: 225,
                display: {
                    Name: '[{ "translate": "item.en6e.null_pointer" }]',
                    Lore: ['[{ "translate": "lore.en6e.null_pointer" }]']
                },
                'quark:RuneAttached': true,
                'quark:RuneColor': { id: 'quark:gray_rune', Count: 1 }
            }).enchant('minecraft:vanishing_curse', 1),
            holding: 'pneumaticcraft:nuke_virus',
            id: 'null_pointer'
        },
        {
            target: 'minecraft:conduit',
            output: Item.of('minecraft:trident', {
                nullptrType: 1,
                Damage: 225,
                display: {
                    Name: '[{ "translate": "item.en6e.null_pointer" }]',
                    Lore: ['[{ "translate": "lore.en6e.null_pointer" }]']
                },
                'quark:RuneAttached': true,
                'quark:RuneColor': { id: 'quark:gray_rune', Count: 1 }
            }).enchant('minecraft:vanishing_curse', 1),
            holding: 'pneumaticcraft:stop_worm',
            id: 'null_pointer_alt'
        }
    ]

    /**
     * @type {{
     * [x: Special.Block]: {
     *  holding: import("packages/dev/latvian/kubejs/item/ingredient/$IngredientJS").$IngredientJS,
     *  output: import("packages/dev/latvian/kubejs/item/$ItemStackJS").$ItemStackJS
     *  additional?:(e:$BlockRightClickEventJS_)=>void
     * }[]}}
     */
    const compiled = {}
    global['block_conversion'] = {
        raw_recipes: raw,
        compiled: compiled
    }

    raw.forEach(recipe => {
        const { target, holding, output, additional } = recipe
        if (!compiled[target]) {
            compiled[target] = []
        }
        const targeted = compiled[target]
        targeted.push({
            holding: Ingredient.of(holding),
            output: Item.of(output),
            additional: additional
        })
    })
    return {
        blockConvRawRecipes: raw,
        blockConvCompiledRecipes: compiled
    }
})()