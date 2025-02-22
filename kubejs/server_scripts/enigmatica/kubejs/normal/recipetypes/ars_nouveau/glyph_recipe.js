onEventNormal('recipes', (event) => {
    /**
     * @type {{input:Internal.IngredientJS_,output:Internal.ItemStackJS_,
     * tier:'ONE'|'TWO'|'THREE',id:string}[]}
     * @param tier ONE: Magic Clay, TWO: Marvelous Clay, THREE: Mythical Clay
     */
    const recipes = [];

    recipes.forEach((recipe) => {
        event.recipes.ars_nouveau.glyph_recipe(recipe.output, recipe.input, recipe.tier).id(recipe.id);
    });
});
