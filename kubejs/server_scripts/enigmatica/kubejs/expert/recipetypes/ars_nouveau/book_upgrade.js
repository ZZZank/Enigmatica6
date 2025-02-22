onEventExpert('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                'ars_nouveau:novice_spell_book',
                'redstone_arsenal:flux_gem',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'thermal:blitz_rod',
                'thermal:blizz_rod',
                'thermal:basalz_rod',
                'minecraft:blaze_rod'
            ],
            output: 'ars_nouveau:apprentice_spell_book',
            id: 'ars_nouveau:apprentice_spell_book_upgrade'
        },
        {
            inputs: [
                'ars_nouveau:apprentice_spell_book',
                'ars_nouveau:wilden_tribute',
                'minecraft:totem_of_undying',
                '#forge:gems/amber',
                '#forge:gems/amber',
                'betterendforge:enchanted_petal',
                'betterendforge:enchanted_petal',
                'betterendforge:enchanted_petal',
                'betterendforge:eternal_crystal'
            ],
            output: 'ars_nouveau:archmage_spell_book',
            id: 'ars_nouveau:archmage_spell_book_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });
        const re = event.custom({
            type: 'ars_nouveau:book_upgrade',
            ingredients: ingredients,
            result: Ingredient.of(recipe.output).toJson()
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
