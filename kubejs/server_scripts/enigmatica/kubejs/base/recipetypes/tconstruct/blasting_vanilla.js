onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/blasting/';
    /**
     * @type {{input:Internal.ItemStackJS_,output:Internal.ItemStackJS_,xp:number,id:ResourceLocation_}[]}
     */
    const recipes = [
        {
            input: 'minecraft:glass',
            output: Item.of('tconstruct:clear_glass'),
            xp: 0.1,
            id: `${id_prefix}glass_to_clear_glass`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            input: `minecraft:${color}_stained_glass`,
            output: `tconstruct:${color}_clear_stained_glass`,
            xp: 0.1,
            id: `${id_prefix}glass_to_clear_glass_${color}`
        });
    });

    recipes.forEach((recipe) => {
        const builder = event.blasting(recipe.output, recipe.input);
        if (recipe.xp) {
            builder.xp(recipe.xp);
        }
        builder.id(recipe.id);
    });
});
