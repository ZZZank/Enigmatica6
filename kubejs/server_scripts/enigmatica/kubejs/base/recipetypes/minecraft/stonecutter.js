onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/minecraft/stonecutter/';
    const recipes = [
        {
            output: 'masonry:stonechiseledslab',
            input: 'minecraft:chiseled_stone_bricks'
        },
        {
            output: 'masonry:stonechiseledwall',
            input: 'minecraft:chiseled_stone_bricks'
        },
        {
            output: 'masonry:stonelargebrickscrackedslab',
            input: 'minecraft:cracked_stone_bricks'
        },
        {
            output: 'masonry:stonelargebrickscrackedwall',
            input: 'minecraft:cracked_stone_bricks'
        },
        {
            output: 'masonry:granitepolishedwall',
            input: 'minecraft:polished_granite'
        },
        {
            output: 'masonry:dioritepolishedwall',
            input: 'minecraft:polished_diorite'
        },
        {
            output: 'masonry:andesitepolishedwall',
            input: 'minecraft:polished_andesite'
        },
        {
            output: 'masonry:darkprismarinepanelswall',
            input: 'minecraft:dark_prismarine'
        },
        {
            output: 'masonry:prismarinepaverswall',
            input: 'minecraft:prismarine_bricks'
        },
        {
            output: 'betterendforge:endstone_dust',
            input: 'byg:end_sand'
        },
        {
            output: 'byg:end_sand',
            input: 'betterendforge:endstone_dust'
        },
        {
            output: '2x occultism:otherstone_slab',
            input: 'occultism:otherstone'
        },
        {
            output: '8x darkutils:blank_plate',
            input: 'occultism:otherstone'
        },
        {
            output: 'minecraft:terracotta',
            input: 'quark:shingles'
        }
    ];

    // Color based recipes
    colors.forEach((color) =>
        recipes.push({ output: `minecraft:${color}_terracotta`, input: `quark:${color}_shingles` })
    );

    // Recipes for stonecuttables constant
    stonecuttables.forEach((stoneType) => {
        const tag = `#enigmatica:stonecuttables/${stoneType.name}`;
        stoneType.stones
            .concat(stoneType.onlyAsOutput)
            .forEach((stone) => recipes.push({ output: stone, input: tag }));
    });

    // Recipes for masonry constants
    // it seems that Strict Mode does not like ()=>{}, so we use dual loop
    for (let stoneType of masonryStoneTypes) {
        for (let pattern of masonryPatterns) {
            let input = stoneType + pattern;
            if (!masonryIgnoredInputs.includes(input)) {
                recipes.push(
                    {
                        output: `2x masonry:${input}slab`,
                        input: `masonry:${input}`
                    },
                    {
                        output: `masonry:${input}wall`,
                        input: `masonry:${input}`
                    }
                );
            }
        }
    }

    masonryTiledStoneTypes.forEach((stoneType) => {
        recipes.push(
            {
                output: `2x masonry:${stoneType}tiledslab`,
                input: `masonry:${stoneType}tiled`
            },
            {
                output: `masonry:${stoneType}tiledwall`,
                input: `masonry:${stoneType}tiled`
            }
        );
    });

    // Conversion between different storage_blocks of the same material
    ['storage_block', 'ore'].forEach((type) => {
        materialsToUnify.forEach((material) => {
            if (entryIsBlacklisted(material, type)) {
                return;
            }
            const tag = `#forge:${type}s/${material}`;
            const stacks = Ingredient.of(tag).getStacks();
            if (stacks.size() > 1) {
                stacks.forEach((block) => recipes.push({ output: block.id, input: tag }));
            }
        });
    });

    // Tag conversion
    ['#forge:dirt', '#forge:workbenches', '#forge:grass'].forEach((tag) => {
        Ingredient.of(tag)
            .getStacks()
            .forEach((block) => recipes.push({ output: block.id, input: tag }));
    });

    // console.info('stonecutting recipe size: ' + recipes.length); // 4183, wow
    recipes.forEach((recipe) => {
        const builder = event.stonecutting(recipe.output, recipe.input);
        if (recipe.id) {
            builder.id(recipe.id);
        } else {
            fallback_id(builder, id_prefix);
        }
    });
});
