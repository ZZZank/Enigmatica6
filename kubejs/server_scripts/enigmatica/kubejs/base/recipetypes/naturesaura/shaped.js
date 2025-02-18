
onEvent('recipes', event => {
    const recipes = [
        {
            output: 'naturesaura:auto_crafter',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: '#forge:planks/ancient',
                B: '#forge:ingots/infused_iron',
                C: 'create:electron_tube',
                D: 'create:chute'
            },
            id: 'naturesaura:auto_crafter'
        },
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
})