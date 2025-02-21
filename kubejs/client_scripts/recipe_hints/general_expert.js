onEvent('kube_jei.register_recipes', (event) => {
    if (!global['isExpertMode']) {
        return;
    }
    const ID = new ResourceLocation('enlightened', 'recipe_hint');

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
            inItems: ['kubejs:heavy_machinery_schematics'],
            catalyst: 'kubejs:heavy_machinery_schematics',
            outItems: [
                'immersiveengineering:assembler',
                'immersiveengineering:arc_furnace',
                'immersivepetroleum:cokerunit',
                'immersiveengineering:crusher',
                'immersivepetroleum:distillationtower',
                'immersiveengineering:lightning_rod',
                'immersivepetroleum:hydrotreater'
            ]
        },
        {
            inItems: ['kubejs:medium_machinery_schematics'],
            catalyst: 'kubejs:medium_machinery_schematics',
            outItems: [
                'immersiveengineering:squeezer',
                'immersiveengineering:refinery',
                'immersivepetroleum:pumpjack',
                'immersiveengineering:mixer',
                'immersiveengineering:metal_press',
                'immersiveengineering:fermenter',

                'immersiveengineering:excavator',
                'immersiveengineering:diesel_generator',
                'immersiveengineering:auto_workbench',
                'immersiveengineering:sawmill'
            ]
        }
    ];

    const spreadKeys = ['outItems'];
    recipes.forEach((recipe) => {
        spreadKeys.forEach((key) => {
            recipe[key] = spreadArraySizeEnsured(recipe[key], 6, Item.getEmpty());
        });
    });

    const builder = event.custom(ID);
    recipes.forEach((recipe) => builder.add(recipe));
});
