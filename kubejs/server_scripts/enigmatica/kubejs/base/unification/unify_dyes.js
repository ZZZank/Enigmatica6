// priority: 900


onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/unification/unify_dyes/';

    dyeSources.forEach((recipe) => {
        botania_dye_pestle_mortar(recipe);
        create_dye_milling(recipe);
        ars_nouveau_dye_crushing(recipe);
        immersiveengineering_dye_crusher(recipe);
        //integrateddynamics_dye_squeezing(recipe);
        mekanism_dye_enriching(recipe);
        mekanism_pigment_extracting(recipe);
        thermal_dye_centrifuge(recipe);
        atum_quern_milling(recipe);
        shapeless_dye_crafting(recipe);
        occultism_dye_crushing(recipe);
    });

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function botania_dye_pestle_mortar(recipe) {
        if (recipe.type == 'petal') {
            return;
        }

        if (recipe.input == 'minecraft:bone') {
            return;
        }

        let baseCount = 2,
            multiplier = 1;
        if (recipe.type == 'large') {
            multiplier = 2;
        }
        if (recipe.primary == 'minecraft:bone_meal') {
            multiplier = 2;
        }

        const count = baseCount * multiplier;
        const output = Item.of(recipe.primary, count);
        const inputs = [recipe.input, 'botania:pestle_and_mortar'];
        fallback_id(event.shapeless(output, inputs), `${id_prefix}botania_dye_pestle_mortar/`);
    }

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function create_dye_milling(recipe) {
        let baseCount = 2,
            multiplier = 1;
        if (recipe.type == 'large') {
            multiplier = 2;
        }

        const count = baseCount * multiplier,
            outputs = [
                Item.of(recipe.primary, count),
                Item.of(recipe.secondary).withCount(count).withChance(0.25),
                Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
            ],
            input = recipe.input;

        fallback_id(event.recipes.create.milling(outputs, input), `${id_prefix}create_dye_milling/`);
    }

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function ars_nouveau_dye_crushing(recipe) {
        let baseCount = 2,
            multiplier = 1;
        if (recipe.type == 'large') {
            multiplier = 2;
        }

        const count = baseCount * multiplier;
        fallback_id(
            event.custom({
                type: 'ars_nouveau:crush',
                input: Ingredient.of(recipe.input).toJson(),
                output: [
                    Item.of(recipe.primary).withCount(count).withChance(1.0),
                    Item.of(recipe.secondary).withCount(count).withChance(0.25)
                ]
            }),
            `${id_prefix}ars_nouveau_dye_crushing/`
        );
    }

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function immersiveengineering_dye_crusher(recipe) {
        let baseCount = 2,
            multiplier = 1;
        if (recipe.type == 'large') {
            multiplier = 2;
        }
        const count = baseCount * multiplier,
            output = Item.of(recipe.primary, count),
            extras = [
                Item.of(recipe.secondary).withCount(count).withChance(0.25),
                Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
            ],
            input = recipe.input;
        fallback_id(
            event.recipes.immersiveengineering.crusher(output, input, extras),
            `${id_prefix}immersiveengineering_dye_crusher/`
        );
    }

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function mekanism_dye_enriching(recipe) {
        let baseCount = 3,
            multiplier = 1;
        if (recipe.type == 'large') {
            multiplier = 2;
        }

        const count = baseCount * multiplier,
            output = Item.of(recipe.primary, count),
            input = recipe.input;
        fallback_id(event.recipes.mekanism.enriching(output, input), `${id_prefix}mekanism_dye_enriching/`);
    }

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function mekanism_pigment_extracting(recipe) {
        if (!recipe.primary.includes('_dye')) {
            return;
        }
        let baseCount = 3,
            multiplier = 1;
        if (recipe.type == 'large') {
            multiplier = 2;
        }

        let dye_color = recipe.primary.split(':')[1].replace('_dye', '');

        const count = baseCount * multiplier;
        fallback_id(
            event.custom({
                type: 'mekanism:pigment_extracting',
                input: { ingredient: { item: recipe.input } },
                output: { pigment: `mekanism:${dye_color}`, amount: 256 * count }
            }),
            `${id_prefix}mekanism_pigment_extracting/`
        );
    }

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function pedestals_dye_crushing(recipe) {
        if (recipe.input == 'minecraft:bone') {
            return;
        }

        let baseCount = 2,
            multiplier = 1;
        if (recipe.type == 'large') {
            multiplier = 2;
        }

        const count = baseCount * multiplier,
            output = recipe.primary,
            input = recipe.input;
        fallback_id(
            event.custom({
                type: 'pedestals:pedestal_crushing',
                ingredient: { item: input },
                result: { item: output, count: count }
            }),
            `${id_prefix}pedestals_dye_crushing/`
        );
    }

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function thermal_dye_centrifuge(recipe) {
        if (recipe.input == 'minecraft:bone') {
            return;
        }

        let baseCount = 2,
            multiplier = 1;
        if (recipe.type == 'large') {
            multiplier = 2;
        }

        const count = baseCount * multiplier,
            outputs = [
                Item.of(recipe.primary, count),
                Item.of(recipe.secondary).withCount(count).withChance(0.25),
                Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
            ],
            input = recipe.input;
        fallback_id(event.recipes.thermal.centrifuge(outputs, input), `${id_prefix}thermal_dye_centrifuge/`);
    }

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function atum_quern_milling(recipe) {
        let baseCount = 4,
            multiplier = 1;
        if (recipe.type == 'large') {
            multiplier = 2;
        }

        const count = baseCount * multiplier,
            output = recipe.primary,
            input = recipe.input,
            rotations = 1 * multiplier;
        fallback_id(
            event.custom({
                type: 'atum:quern',
                ingredient: { item: input },
                result: { item: output, count: count },
                rotations: rotations
            }),
            `${id_prefix}atum_quern_milling/`
        );
    }

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function shapeless_dye_crafting(recipe) {
        if (recipe.input.split(':')[0] !== 'atum') {
            return;
        }
        const output = Item.of(recipe.primary),
            inputs = [recipe.input];
        fallback_id(event.shapeless(output, inputs), `${id_prefix}shapeless_dye_crafting/`);
    }

    /**
     * @param {{input:string,type:string,primary:string,secondary:string,tertiary:string}} recipe
     */
    function occultism_dye_crushing(recipe) {
        if (recipe.input == 'minecraft:bone') {
            return;
        }

        let baseCount = 2,
            multiplier = 1;
        if (recipe.type == 'large') {
            multiplier = 2;
        }

        const count = baseCount * multiplier,
            output = recipe.primary,
            input = recipe.input;
        fallback_id(
            event.custom({
                type: 'occultism:crushing',
                ingredient: { item: input },
                result: { item: output, count: count },
                crushing_time: 50
            }),
            `${id_prefix}occultism_dye_crushing/`
        );
    }
});
