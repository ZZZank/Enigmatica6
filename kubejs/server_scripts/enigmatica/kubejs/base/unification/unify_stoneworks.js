// priority: 900


onEvent('recipes', (event) => {
    event
        .custom({
            type: 'thermal:rock_gen',
            adjacent: 'minecraft:water',
            below: 'pneumaticcraft:compressed_iron_block',
            result: {
                item: 'minecraft:cobblestone',
                count: 4
            }
        })
        .id(`enigmatica:base/unification/unify_stoneworks/buffed_cobble`);

    generatableCobblestone.forEach((material) => {
        const type = 'cobble';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        industrialforegoing_stoneworks(material, type);
        thermal_stoneworks(material);
    });

    generatableStone.forEach((material) => {
        const type = 'stone';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        industrialforegoing_stoneworks(material, type);
        thermal_stoneworks(material);
    });

    //stoneworks functions
    function industrialforegoing_stoneworks(material, type) {
        let waterConsume = 0;
        let lavaConsume = 0;

        if (type == 'stone') {
            waterConsume = 1000;
            lavaConsume = 0;
        }

        fallback_id(
            event.custom({
                output: {
                    item: material,
                    count: 1
                },
                waterNeed: 1000,
                lavaNeed: 1000,
                waterConsume: waterConsume,
                lavaConsume: lavaConsume,
                type: 'industrialforegoing:stonework_generate'
            }),
            `enigmatica:base/unification/unify_stoneworks/industrialforegoing_stoneworks/`
        );
    }

    function thermal_stoneworks(material) {
        fallback_id(
            event.custom({
                type: 'thermal:rock_gen',
                adjacent: 'minecraft:water',
                below: material,
                result: {
                    item: material
                }
            }),
            `enigmatica:base/unification/unify_stoneworks/thermal_stoneworks/`
        );
    }
});
