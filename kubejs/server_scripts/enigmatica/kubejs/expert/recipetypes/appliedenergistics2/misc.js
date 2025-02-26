onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/appliedenergistics2/misc/';

    event.recipes.create
        .compacting('appliedenergistics2:fluix_pearl', [
            'minecraft:ender_pearl',
            'occultism:spirit_attuned_gem',
            'occultism:spirit_attuned_gem',
            'kubejs:dimensional_storage_crystal'
        ])
        .heated()
        .id('appliedenergistics2:misc/fluixpearl');

    event.recipes.create
        .mechanical_crafting('appliedenergistics2:drive', ['ABCBA', 'BDEDB', 'CFGFC', 'BDEDB', 'ABCBA'], {
            A: '#forge:circuits/basic',
            B: 'appliedenergistics2:engineering_processor',
            C: 'pneumaticcraft:ingot_iron_compressed',
            D: 'occultism:storage_stabilizer_tier1',
            E: '#xnet:advanced_connectors',
            F: 'immersiveengineering:logic_unit',
            G: 'appliedenergistics2:sky_dust'
        })
        .id(`${id_prefix}drive_alt`);

    event
        .custom({
            type: 'occultism:spirit_fire',
            ingredient: Ingredient.of('quark:black_crystal').toJson(),
            result: Ingredient.of('appliedenergistics2:sky_stone_block').toJson()
        })
        .id(`${id_prefix}sky_stone`);
});
