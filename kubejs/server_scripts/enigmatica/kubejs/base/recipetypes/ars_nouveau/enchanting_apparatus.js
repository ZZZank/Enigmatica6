
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            inputs: [],
            sourceCost: 5000,
            reagent: 'kubejs:disabled_recipe_indicator',
            output: 'arsarsenal:source_steel_ingot',
            id: 'arsarsenal:source_steel_ingot'
        },
        {
            inputs: [
                'bloodmagic:etherealslate',
                '#botania:runes/nidavellir',
                'bloodmagic:etherealslate',
                '#forge:pellets/antimatter',
                '#forge:pellets/antimatter',
                'bloodmagic:etherealslate',
                'naturesaura:break_prevention',
                'bloodmagic:etherealslate'
            ],
            sourceCost: 5000,
            reagent: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}'),
            output: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0,Unbreakable:1}'),
            id: `${id_prefix}unbreakable_graphite_electrode`
        },

        {
            output: Item.of(
                'immersiveengineering:revolver',
                '{perks:{cooldown:0.75d,luck:1.0d,noise:0.75d},upgrades:{}}'
            ),
            inputs: [
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/mana',
                'atum:godforged_block',
                'atum:godforged_block',
                'atum:godforged_block'
            ],
            reagent: 'immersiveengineering:revolver',
            sourceCost: 2000,
            id: `${id_prefix}revolver_tier_1`
        },
        {
            output: Item.of(
                'immersiveengineering:revolver',
                '{perks:{cooldown:0.75d,luck:1.0d,noise:0.75d},upgrades:{}}'
            ),
            inputs: [
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:ingots/infused_iron',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/lapis',
                'atum:anput_godforged_block',
                '#forge:storage_blocks/lapis'
            ],
            reagent: 'immersiveengineering:revolver',
            sourceCost: 2000,
            id: `${id_prefix}revolver_tier_1_alt`
        },
        {
            output: Item.of(
                'immersiveengineering:revolver',
                '{perks:{cooldown:0.5d,luck:2d,noise:0.5d},upgrades:{}}'
            ),
            inputs: [
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                '#forge:storage_blocks/lapis',
                '#forge:storage_blocks/lapis',
                '#forge:storage_blocks/mana',
                'bloodmagic:soulgempetty',
                '#forge:storage_blocks/mana'
            ],
            reagent: 'immersiveengineering:revolver',
            sourceCost: 5000,
            id: `${id_prefix}revolver_tier_2`
        },
        {
            inputs: [],
            reagent: 'minecraft:bucket',
            sourceCost: 1000,
            output: 'ars_nouveau:bucket_of_mana',
            id: `${id_prefix}bucket_of_mana`
        },
        {
            inputs: [
                'minecraft:conduit',
                'kubejs:monster_mash',
                'aquaculture:fish_bones',
                'ars_nouveau:red_archwood_sapling'
            ],
            reagent: 'minecraft:water_bucket',
            sourceCost: 1000,
            output: 'kubejs:dead_koi_bucket',
            id: `${id_prefix}dead_koi_bucket`
        },
        {
            inputs: ['#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana'],
            reagent: '#forge:seeds',
            output: 'ars_nouveau:mana_bloom_crop',
            id: 'ars_nouveau:mana_bloom_crop'
        },

        {
            inputs: [
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block'
            ],
            reagent: Item.of('minecraft:potion', '{Potion:"ars_nouveau:mana_regen_potion_long"}'),
            output: Item.of('resourcefulbees:mana_honey_bottle', 1),
            id: `${id_prefix}mana_honey_bottle`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.sourceCost
            ? event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .merge({ sourceCost: recipe.sourceCost })
                  .id(recipe.id)
            : event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .id(recipe.id);
    });
});
