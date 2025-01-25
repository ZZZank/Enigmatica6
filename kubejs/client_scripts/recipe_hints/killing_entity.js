

const {
    killing_entity_recipes,
    killing_entity_id
} = (() => {
    const id_prefix = 'enlightened6:killing_entity/';
    /**
     * @type {{
     *  target: $ItemStackJS_[],
     *  weapon?: $IngredientJS_,
     *  output: $ItemStackJS_[],
     *  id: string
     * }[]}
     */
    const recipes = [
        {
            target: [
                Item.of('ars_nouveau:glyph_filter_monster')
                    .withName("Any monsters with no more than 20 healths(10 hearts)")
            ],
            weapon: Item.of('minecraft:trident', {
                nullptrType: 1,
                Damage: 225,
                display: {
                    Name: '[{ "translate": "item.en6e.null_pointer" }]',
                    Lore: ['[{ "translate": "lore.en6e.null_pointer" }]']
                },
                'quark:RuneAttached': true,
                'quark:RuneColor': { id: 'quark:gray_rune', Count: 1 }
            }).enchant('minecraft:vanishing_curse', 1),
            output: ['appliedenergistics2:charged_certus_quartz_crystal'],
            id: id_prefix + 'null_pointer'
        },
        {
            target: ['minecraft:ravager_spawn_egg'],
            output: ['quark:ravager_hide'],
            id: id_prefix + 'ravager'
        },
        {
            target: ['minecraft:wither_skeleton_spawn_egg'],
            output: [
                'minecraft:wither_skeleton_skull',
                'architects_palette:withered_bone',
                'wstweaks:fragment'
            ],
            id: id_prefix + 'wither_skeleton'
        },
        {
            target: ['minecraft:elder_guardian_spawn_egg'],
            output: ['upgrade_aquatic:elder_guardian_spine', 'upgrade_aquatic:elder_eye'],
            id: id_prefix + 'elder_guardian'
        },
        {
            target: ['minecraft:guardian_spawn_egg'],
            output: ['upgrade_aquatic:guardian_spine'],
            id: id_prefix + 'guardian'
        },
        {
            target: ['minecraft:pig_spawn_egg'],
            weapon: '#farmersdelight:tools/knives',
            output: ['farmersdelight:ham'],
            id: id_prefix + 'pig'
        },
        {
            target: ['minecraft:hoglin_spawn_egg'],
            weapon: '#farmersdelight:tools/knives',
            output: ['farmersdelight:ham', 'nethers_delight:hoglin_hide'],
            id: id_prefix + 'hoglin'
        },
        {
            target: ['upgrade_aquatic:nautilus_spawn_egg'],
            output: ['minecraft:nautilus_shell'],
            id: id_prefix + 'nautilus'
        },
        {
            target: [
                'ars_nouveau:ritual_wilden_summon',
                'ars_nouveau:wilden_horn',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_spike'
            ],
            output: ['ars_nouveau:wilden_tribute'],
            id: id_prefix + 'wilden_summon'
        },
        {
            target: ['betterendforge:silk_moth_nest'],
            output: ['betterendforge:silk_fiber'],
            id: id_prefix + 'silk_moth'
        },
        {
            target: ['meetyourfight:haunted_bell'],
            output: ['meetyourfight:phantoplasm'],
            id: id_prefix + 'phantoplasm'
        },
        {
            target: ['meetyourfight:fossil_bait'],
            output: ['meetyourfight:mossy_tooth'],
            id: id_prefix + 'mossy_tooth'
        },
        {
            target: ['meetyourfight:devils_ante'],
            output: ['meetyourfight:fortunes_favor'],
            id: id_prefix + 'fortunes_favor'
        },
        {
            target: ['environmental:koi_bucket'],
            output: ['bloodmagic:slate_ampoule', 'aquaculture:fish_bones'],
            id: id_prefix + 'koi'
        }
    ];

    recipes.forEach(recipe => {
        if (!recipe.weapon) {
            recipe.weapon = '#forge:weapons'
        }
    })

    return {
        killing_entity_id: new ResourceLocation("enlightened6", "killing_entity"),
        killing_entity_recipes: recipes
    }
})()

onEvent('kube_jei.register_recipes', event => {
    const builder = event.custom(killing_entity_id)
    killing_entity_recipes.forEach(recipe => builder.add(recipe))
})

onEvent("kube_jei.register_categories", event => {
    const { drawables, jeiHelpers } = event
    const arrow = drawables.arrow()

    event.custom(killing_entity_id)
        .setTitle(Text.of("Killing Entity"))
        .setBackground(drawables.blank(180, 40))
        .setIcon(drawables.dual(
            drawables.ingredientItem("minecraft:iron_sword"),
            drawables.ingredientItem("minecraft:bow")
        ))
        .fillIngredients((recipe, ingredients) => {
            /**
             * @type {{
             *  target: $ItemStackJS_[],
             *  weapon: $IngredientJS_,
             *  output: $ItemStackJS_[]
             * }}
             */
            const { target, weapon, output } = recipe.data
            ingredients.setItemInputs([weapon].concat(target))
            ingredients.setItemOutputs(output)
        })
        .handleLookup((layout, recipe, ingredients) => {
            const itemBuilder = layout.itemGroupBuilder;

            //weapon
            itemBuilder.addSlot(18 * 4, 0)
            //target
            itemBuilder.addSlotGrid(0, 0, 3, 2)
            //output
            itemBuilder.addSlotGrid(18 * 6, 0, 3, 2)
                .forEach(slot => slot.setInput(false))

            itemBuilder.applyIngredients(ingredients)
        })
        .setDrawHandler((recipe, matrixStack, mouseX, mouseY) => {
            arrow.draw(matrixStack, computeArrowPos(18 * 4, 18), 18 + 1)
        })
})
