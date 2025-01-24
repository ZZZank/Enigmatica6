

onEvent('kube_jei.register_categories', event => {
    const { drawables, helpers, jeiHelpers, mc, renderHelper } = event
    const arrow = drawables.arrow()
    event.custom(blockConvID)
        .setTitle(Text.of('Block Conversion'))
        .setIcon(drawables.ingredient(Item.of("create:brass_hand")))
        .setBackground(drawables.blank(20 * 4, 18))
        .fillIngredients((recipe, ingredients) => {
            const { holding, target, output } = recipe.data

            ingredients.setItemInputs(holding, target)
            ingredients.setItemOutputs(output)
        })
        .handleLookup((layout, recipe, ingredients) => {
            const itemBuilder = layout.itemGroupBuilder;

            //hold
            itemBuilder.addSlot(0, 0)
            //target
            itemBuilder.addSlot(20, 0)
            //output
            itemBuilder.addSlot(60, 0).setInput(false)

            itemBuilder.applyIngredients(ingredients)
        })
        .setDrawHandler((recipe, matrixStack, mouseX, mouseY) => {
            arrow.draw(matrixStack, 36, 1)
        })
})

onEvent('kube_jei.register_recipes', event => {
    const builder = event.custom(blockConvID)

    blockConvRawRecipes.forEach(recipe => builder.add(recipe))
    blockConvDummyRecipes.forEach(recipe => builder.add(recipe))
})
