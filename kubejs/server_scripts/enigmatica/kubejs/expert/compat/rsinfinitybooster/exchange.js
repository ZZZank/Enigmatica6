onEvent('recipes', (event) => {
    if (global.isNormalMode || !Platform.isLoaded('rsinfinitybooster')) {
        return;
    }
    const id_prefix = 'enlightened6:expert/rsinfinitybooster/exchange/';

    const recipes = [];

    let exchanges = {
        'rsinfinitybooster:infinity_card': 'aeinfinitybooster:infinity_card',
        'rsinfinitybooster:dimension_card': 'aeinfinitybooster:dimension_card'
    };

    for (let itemRS in exchanges) {
        let itemAE = exchanges[itemRS];
        let [mod, id] = itemRS.split(':');
        event.remove({ output: itemRS });
        recipes.push(
            {
                inputs: [itemAE],
                output: itemRS,
                id: `${id_prefix}ae_rs/${id}`
            },
            {
                inputs: [itemRS],
                output: itemAE,
                id: `${id_prefix}rs_ae/${id}`
            }
        );
    }

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
