
onEvent("kube_jei.register_recipes", event => {
    const ID = new ResourceLocation("enlightened", "recipe_hint")
    
    /**
     * @type {{
     *   inItems: $IngredientJS_[],
     *   inFluids?: [f1?: $FluidStackJS_, f2?: $FluidStackJS_],
     *   catalyst: $IngredientJS_,
     *   outItems: $IngredientJS_[],
     *   outFluids?: [f1?: $FluidStackJS_, f2?: $FluidStackJS_]
     * }[]}
     */
    const recipes = [
        {
            inItems: ['#appliedenergistics2:metal_ingots'],
            catalyst: '#appliedenergistics2:knife',
            outItems: ['appliedenergistics2:name_press']
        },
        {
            inItems: [],
            catalyst: 'industrialforegoing:latex_processing_unit',
            outItems: ['industrialforegoing:tinydryrubber'],
            inFluids: [
                Fluid.of('industrialforegoing:latex', 100),
                Fluid.of('minecraft:water', 500)
            ]
        },
        {
            inItems: [],
            catalyst: 'industrialforegoing:sludge_refiner',
            outItems: [Ingredient.of('#industrialforegoing:sludge')],
            inFluids: [Fluid.of('industrialforegoing:sludge', 500)]
        },
        {
            inItems: [],
            catalyst: 'industrialforegoing:sewage_composter',
            outItems: ['industrialforegoing:fertilizer'],
            inFluids: [Fluid.of('industrialforegoing:sewage', 1000)]
        },
        {
            inItems: [
                Item.of('ars_nouveau:mana_jar', {
                    BlockEntityTag: { mana: 10000, max_mana: 10000, id: 'ars_nouveau:mana_jar' }
                })
            ],
            catalyst: 'minecraft:bucket',
            outItems: [
                'ars_nouveau:bucket_of_mana',
                Item.of('ars_nouveau:mana_jar', {
                    BlockEntityTag: { mana: 9000, max_mana: 10000, id: 'ars_nouveau:mana_jar' }
                })
            ]
        },
        {
            inItems: ['minecraft:ender_pearl', 'appliedenergistics2:singularity'],
            catalyst: '#enlightened6:explosives/base',
            outItems: ['2x appliedenergistics2:quantum_entangled_singularity']
        }
    ];

    
    const astralsorcery_mineralis = () => {
        let weightSum = 0;
        const perk_stone_enrichment_ore = [
            'forge:ores/aluminum;1200',
            'forge:ores/apatite;700',
            'forge:ores/mana;200',
            'forge:ores/bitumen;1000',
            'forge:ores/cinnabar;500',
            'forge:ores/coal;5200',
            'forge:ores/copper;2000',
            'forge:ores/diamond;120',
            'forge:ores/dimensional;20',
            'forge:ores/emerald;100',
            'forge:ores/fluorite;50',
            'forge:ores/gold;550',
            'forge:ores/iron;2500',
            'forge:ores/lapis;360',
            'forge:ores/lead;1500',
            'forge:ores/nickel;100',
            'forge:ores/osmium;1500',
            'forge:ores/potassium_nitrate;250',
            'forge:ores/redstone;700',
            'forge:ores/silver;1000',
            'forge:ores/sulfur;300',
            'forge:ores/tin;1800',
            'forge:ores/uranium;400',
            'forge:ores/zinc;1000'
        ]
            .map((entry) => {
                const [tag, weightStr] = entry.split(';', 2);
                const weight = parseInt(weightStr);
                const item = getPreferredItemInTag(Ingredient.of('#' + tag));
                weightSum += weight;
                return { item: item, weight: weight };
            })
            .map((entry) => entry.item.chance(entry.weight / weightSum));

        return toPagedArray(perk_stone_enrichment_ore, 20).forEach((page, i) => {
            recipes.push({
                inItems: [
                    Item.of('astralsorcery:attuned_rock_crystal', {
                        astralsorcery: { constellationName: 'astralsorcery:mineralis' }
                    })
                ],
                catalyst: 'astralsorcery:ritual_pedestal',
                outItems: page
            });
        });
    }

    const builder = event.custom(ID)
    recipes.forEach(recipe => builder.add(recipe))
})

onEvent("kube_jei.register_categories", event => {
    const { drawables } = event
    const arrow = drawables.arrow()

    const SIZE = 18
    const ID = new ResourceLocation("enlightened", "recipe_hint")

    event.custom(ID)
        .setIcon(drawables.ingredientItem("minecraft:item_frame"))
        .setBackground(drawables.blank(SIZE * 8, SIZE * 3))
        .setFillIngredientsHandler((recipes, ingredients) => {
            /**
             * @type {{
             *   inItems: $IngredientJS_[],
             *   inFluids?: $FluidStackJS_[],
             *   catalyst: $IngredientJS_,
             *   outItems: $IngredientJS_[],
             *   outFluids?: $FluidStackJS_[]
             * }}
             */
            const { inItems, inFluids, catalyst, outItems, outFluids } = recipes.data
            ingredients.setItemInputs([catalyst].concat(inItems))
            ingredients.setItemOutputs(outItems)
            if (inFluids) {
                // @ts-ignore
                ingredients.setFluidInputs(inFluids)
            }
            if (outFluids) {
                // @ts-ignore
                ingredients.setFluidInputs(outFluids)
            }
        })
        .handleLookup((layout, recipe, ingredients) => {
            const itemBuilder = layout.itemGroupBuilder;
            const fluidBuilder = layout.fluidGroupBuilder;

            /*
             f f         F F
            i i i   c   I I I
            i i i ----> I I I
            f: fluid in, F: fluid out, c: catalyst, i: item in, I: item out
            */

            //catalyst
            itemBuilder.addSlot(SIZE * 3.5, 0)
            //inItems
            itemBuilder.addSlotGrid(0, 18, 2, 3)
            //inFluids
            fluidBuilder.addSlotGrid(SIZE / 2, 0, 1, 2)
            //outItems
            itemBuilder.addSlotGrid(SIZE * 5, 18, 2, 3).forEach(slot => slot.setInput(false))
            //outFluids
            fluidBuilder.addSlotGrid(SIZE * 5.5, 0, 1, 2).forEach(slot => slot.setInput(false))

            itemBuilder.applyIngredients(ingredients)
            fluidBuilder.applyIngredients(ingredients)
        })
        .setDrawHandler((recipe, matrixStack, mouseX, mouseY) => {
            arrow.draw(matrixStack, computeArrowPos(SIZE * 3, SIZE * 2), SIZE * 2 + 1)
        })
})