
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/astralsorcery/block_transmutation/';

    /**
     * @type {{input: SelfOrArray<{block:string, display?:{}}>,
     * output: {block:string, properties?:{}}, starlight:number, display?:{},
     * constellation?:string, id:string}[]}
     */
    const recipes = [
        {
            input: getItemsInTag(Ingredient.of('#forge:ores/diamond')).map((stack) => {
                return { block: stack.id };
            }),
            display: { item: 'emendatusenigmatica:diamond_chunk' },
            output: { block: 'emendatusenigmatica:emerald_ore' },
            starlight: 1000,
            id: 'astralsorcery:block_transmutation/diamond_emerald'
        },
        {
            input: [{ block: 'resourcefulbees:starry_honeycomb_block' }],
            output: { block: 'astralsorcery:rock_crystal_ore' },
            starlight: 1000,
            id: id_prefix + 'starry_honeycomb_rock_crystal'
        }
    ];

    const crystals = [
        { color1: 'red', color2: 'orange' },
        { color1: 'orange', color2: 'yellow' },
        { color1: 'yellow', color2: 'green' },
        { color1: 'green', color2: 'blue' },
        { color1: 'blue', color2: 'indigo' },
        { color1: 'indigo', color2: 'violet' },
        { color1: 'violet', color2: 'white' },
        { color1: 'white', color2: 'black' },
        { color1: 'black', color2: 'red' }
    ];

    crystals.forEach((crystal) => {
        recipes.push({
            input: [{ block: `quark:${crystal.color1}_crystal` }],
            output: { block: `quark:${crystal.color2}_crystal` },
            starlight: 1000,
            id: `${id_prefix}${crystal.color2}_crystal`
        });
    });

    recipes.forEach((recipe) => {
        // @ts-ignore
        recipe.type = 'astralsorcery:block_transmutation';
        event.custom(recipe).id(recipe.id);
    });
});
