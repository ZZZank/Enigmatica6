onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const recipes = [
        {
            input1: '#atum:relic_non_dirty/necklace',
            input2: 'naturesaura:tainted_gold',
            output: 'ars_nouveau:dull_trinket',
            id: 'ars_nouveau:dull_trinket'
        },
        {
            input1: '#forge:ingots/aeternium',
            input2: 'betterendforge:leather_wrapped_stick',
            output: 'betterendforge:aeternium_sword_handle',
            id: 'betterendforge:aeternium_sword_handle_smithing'
        }
    ];
    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
