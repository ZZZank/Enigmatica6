
onEvent('item.tags', (event) => {
    let items = [
        /_bow$/,
        'botania:flare_chakram',
        'botania:thorn_chakram',
        'immersiveengineering:chemthrower',
        'immersiveengineering:railgun',
        'immersiveengineering:revolver',
        'industrialforegoing:infinity_trident',
        'mekanism:flamethrower',
        'minecraft:bow',
        'minecraft:crossbow',
        'minecraft:trident',
        'pneumaticcraft:micromissiles',
        'pneumaticcraft:minigun',
        'undergarden:slingshot',
        'alexsmobs:blood_sprayer',
        'atum:tefnuts_call',
        'atum:tefnuts_rain',
        'atum:shus_breath',
        'atum:seths_venom',
        'atum:ras_fury',
        'atum:montus_blast',
        'atum:isis_division',
        'atum:horus_soaring',
        'atum:anputs_grounding'
    ];

    let tags = ['forge:weapons', 'forge:weapons/ranged'];

    tags.forEach((tag) => {
        event.get(tag).add(items);
    });
});
