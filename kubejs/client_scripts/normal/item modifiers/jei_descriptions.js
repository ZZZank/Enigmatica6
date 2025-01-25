
onEvent('jei.information', (event) => {
    if (global.isExpertMode) {
        return;
    }
    const id_prefix = 'descriptions.enigmatica.normal.';
    const recipes = [
        {
            items: ['resourcefulbees:t2_apiary', 'resourcefulbees:t3_apiary', 'resourcefulbees:t4_apiary'],
            description: ['tooltips.enigmatica.normal.apiaries_craft']
        },
        {
            items: ['atum:nebu_hammer'],
            description: ['descriptions.enigmatica.expert.nebu_hammer']
        }
    ];

    recipes.forEach((recipe) => {
        event.add(
            recipe.items,
            recipe.description.map((desc) => Text.translate(desc))
        );
    });
});
