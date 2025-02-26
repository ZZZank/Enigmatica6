onEventExpert('jei.remove.recipes', (event) => {
    //console.log('JEI RECIPE CATEGORIES: ' + event.getCategoryIds());
    //console.log('Valid Keys: ' + Object.keys(event));
    recipesToHide.forEach((recipe) => {
        console.log(`Category: ${recipe.category}`);
        recipe.recipes_by_id.forEach((id) => {
            if (recipe.category == 'minecraft:crafting') {
                try {
                    event.remove('create:automatic_shaped', [id]);
                } catch (err) {
                    // do nothing
                }

                try {
                    event.remove('create:automatic_shapeless', [id]);
                } catch (err) {
                    // do nothing
                }
            }
            console.log(`    Hiding: ${id}`);
            event.remove(recipe.category, [id]);
        });
    });
});
