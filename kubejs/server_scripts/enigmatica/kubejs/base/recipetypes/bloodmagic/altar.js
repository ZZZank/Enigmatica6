onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/bloodmagic/altar/';

    let data = {
        recipes: [
            /*{
                input: 'input item here',
                output: 'output item here',
                syphon: 1000,                       //Recipe LP Cost
                altarLevel: 0,                      //Altar Level is zero idexed
                consumptionRate: 5,                 //How much LP is infused per operation
                drainRate: 5,                       //How much LP is lost per operation when the altar is empty
                id: 'output item here'
            }*/

            {
                input: 'minecraft:prismarine',
                output: 'quark:elder_prismarine',
                syphon: 1000,
                altarLevel: 0,
                consumptionRate: 50,
                drainRate: 1,
                id: `${id_prefix}elder_prismarine`
            },
            {
                input: 'kubejs:dead_koi_bucket',
                output: 'environmental:koi',
                syphon: 3000,
                altarLevel: 0,
                consumptionRate: 25,
                drainRate: 1,
                id: `${id_prefix}koi`
            },
            {
                input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:bronze_bee' }).weakNBT(),
                output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:bloody_bee' }),
                syphon: 50000,
                altarLevel: 3,
                consumptionRate: 50,
                drainRate: 50,
                id: `${id_prefix}bloody_bee_jar`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .altar(recipe.output, recipe.input)
            .upgradeLevel(recipe.altarLevel)
            .altarSyphon(recipe.syphon)
            .consumptionRate(recipe.consumptionRate)
            .drainRate(recipe.drainRate)
            .id(recipe.id);
    });
});
