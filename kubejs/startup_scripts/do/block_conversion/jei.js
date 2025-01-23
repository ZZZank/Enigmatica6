

onEvent('kube_jei.register_categories', event => {
    const { drawables, helpers, jeiHelpers, mc, renderHelper } = event
    const arrow = drawables.arrow()
    event.custom(block_conversion_id)
        .setTitle(Text.of('Block Conversion'))
        .setIcon(drawables.ingredient(Item.of("create:brass_hand")))
        .setBackground(drawables.blank(20 * 4, 18))
        .fillIngredients((recipe, ingredients) => {
            const { hold, target, output } = recipe.data
            ingredients.setItemInputs(Item.of(hold), Item.of(target))
            ingredients.setItemOutputs(Item.of(output))
        })
        .handleLookup((layout, recipe, ingredients) => {
            /** @type {{hold:$IngredientJS_,target:Special.Block,output:$ItemStackJS_}} */
            const { hold, target, output } = recipe.data
            const itemBuilder = layout.itemGroupBuilder;
            const slotHold = itemBuilder.addSlot(0, 0)
            Ingredient.of(hold).stacks.forEach((stack) => {
                slotHold.addIngredient(stack.itemStack)
            })
            itemBuilder.addSlot(20, 0).addIngredient(Item.of(target).itemStack)
            itemBuilder.addSlot(60, 0).setInput(false).addIngredient(Item.of(output).itemStack)
        })
        .setDrawHandler((recipe, matrixStack, mouseX, mouseY) => {
            arrow.draw(matrixStack, 36, 1)
        })
})

onEvent('kube_jei.register_recipes', event => {
    /**
     * @type {{target:Special.Block,output:$ItemStackJS_,holding:$IngredientJS_,id:string,
     * additional?:(e:$BlockRightClickEventJS_)=>void}[]}
     */
    const recipes = global['block_conversion']['raw_recipes']
    const builder = event.custom(block_conversion_id)
    recipes.forEach(recipe => {
        builder.add({
            hold: recipe.holding,
            target: recipe.target,
            output: recipe.output
        })
    })
})
