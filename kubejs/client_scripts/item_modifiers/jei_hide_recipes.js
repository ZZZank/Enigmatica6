

onEvent('kube_jei.deny.recipes', event => {
    if (global.isNormalMode) {
        return;
    }

    /**
     * @type {{category: string, recipes_by_id: string[]}[]}
     */
    const toHide = [
        {
            category: 'ars_nouveau:apparatus',
            recipes_by_id: ['arsarsenal:source_steel_ingot']
        }
    ];

    recipesToHide.forEach((recipe) => {
        console.log(`Category: ${recipe.category}`);
        recipe.recipes_by_id.forEach((id) => {
            if (recipe.category == 'minecraft:crafting') {
                try {
                    event.denyById('create:automatic_shaped', id);
                } catch (err) {
                    // do nothing
                }

                try {
                    event.denyById('create:automatic_shapeless', id);
                } catch (err) {
                    // do nothing
                }
            }
            console.log(`    Hiding: ${id}`);
            event.denyById(recipe.category, id);
        });
    });
})

onEvent('jei.remove.recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    //console.log('JEI RECIPE CATEGORIES: ' + event.getCategoryIds());
    //console.log('Valid Keys: ' + Object.keys(event));
});
