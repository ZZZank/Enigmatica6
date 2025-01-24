// priority: 1000

/**
 * arrow: width=24, height=17
 * @param {number} start 
 * @param {number} width 
 * @return {number}
 */
function computeArrowPos(start, width) {
    return start + width / 2 - 12
}

/**
 * @param {string} id
 */
function KJEICategory(id) {
    this.id = new ResourceLocation(id)
    this.catalysts = []
}

KJEICategory.prototype.addCatalyst = function (catalyst) {
    this.catalysts.push(Item.of(catalyst))
}

/**
 * @param {(event: $RegisterCategoriesEventJS_) => $IDrawable_} icon 
 */
KJEICategory.prototype.setIcon = function (icon) {
    this.iconMapper = icon
}

/**
 * @param {$Text_} title 
 */
KJEICategory.prototype.setTitle = function (title) {
    this.title = title
}

KJEICategory.prototype.register = function () {
    onEvent('kube_jei.register_recipe_catalysts', event => {
        event.addItemCatalyst(this.catalysts, this.id)
    })
    onEvent('kube_jei.register_categories', event => {
        event.custom(this.id)
            .setIcon(this.iconMapper(event))
            .setTitle(this.title)
            .setBackground
    })
}