onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/astralsorcery/block_transmutation';
    /**
     * @type {{input: SelfOrArray<{block:string, display?:{}}>,
     * output: {block:string, properties?:{}}, starlight:number, display?:{},
     * constellation?:string, id:string}[]}
     */
    const recipes = [
        {
            input: { block: 'atum:godforged_block' },
            output: { block: 'astralsorcery:altar_discovery' },
            starlight: 60,
            id: 'astralsorcery:block_transmutation/craftingtable_altar'
        },
        {
            input: { block: 'kubejs:firmament' },
            output: { block: 'astralsorcery:starmetal_ore' },
            starlight: 100,
            id: 'astralsorcery:block_transmutation/iron_starmetal'
        },
        {
            input: [
                {
                    block: 'farmersdelight:stuffed_pumpkin_block',
                    display: { item: 'farmersdelight:stuffed_pumpkin_block', count: 1 }
                }
            ],
            output: { block: 'minecraft:cake', properties: [{ name: 'bites', value: '0' }] },
            display: { item: 'minecraft:cake', count: 1 },
            starlight: 300,
            id: 'astralsorcery:block_transmutation/pumpkin_cake'
        }
    ];

    recipes.forEach((recipe) => {
        // @ts-ignore
        recipe.type = 'astralsorcery:block_transmutation';
        event.custom(recipe).id(recipe.id);
    });
});
