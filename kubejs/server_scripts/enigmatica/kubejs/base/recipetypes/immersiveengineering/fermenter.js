onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/fermenter/';

    const lowAmountInputs = ['farmersdelight:pumpkin_slice'];

    const normalAmountInputs = [
        'alexsmobs:banana',
        'ars_nouveau:mana_berry',
        'betterendforge:blossom_berry',
        'betterendforge:shadow_berry_raw',
        'byg:baobab_fruit',
        'byg:blueberries',
        'byg:crimson_berries',
        'byg:green_apple',
        'byg:holly_berries',
        'byg:joshua_fruit',
        'byg:nightshade_berries',
        'farmersdelight:cabbage',
        'farmersdelight:cabbage_leaf',
        'farmersdelight:onion',
        'farmersdelight:tomato',
        'integrateddynamics:menril_berries',
        'minecraft:beetroot',
        'minecraft:carrot',
        'minecraft:chorus_fruit',
        'minecraft:sweet_berries',
        'minecraft:wheat',
        'sushigocrafting:cucumber',
        'sushigocrafting:soy_bean',
        'sushigocrafting:wasabi_root',
        'sushigocrafting:avocado',
        'undergarden:blisterberry',
        'upgrade_aquatic:mulberry'
    ];
    /*
		const recipes = [{	input: 'simplefarming:apricot',	fluid: 'immersiveengineering:ethanol',	amount: 80,	energy: 6400}
		];
	*/

    lowAmountInputs.forEach((input) => {
        fallback_id(
            event.custom({
                type: 'immersiveengineering:fermenter',
                fluid: {
                    fluid: 'immersiveengineering:ethanol',
                    amount: 20
                },
                input: {
                    item: input
                },
                energy: 1600
            }),
            `${id_prefix}low/`
        );
    });
    normalAmountInputs.forEach((input) => {
        fallback_id(
            event.custom({
                type: 'immersiveengineering:fermenter',
                fluid: {
                    fluid: 'immersiveengineering:ethanol',
                    amount: 80
                },
                input: {
                    item: input
                },
                energy: 6400
            }),
            `${id_prefix}high/`
        );
    });
});
