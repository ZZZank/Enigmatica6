
onEvent('item.tags', (event) => {
    /**
     *
     * @type {{tag:string,firstRemove?:any|any[],thenAdd?:any|any[]}[]}
     * @param tag the tag string WITHOUT `#` prefix, like `forge:ingots` or `why:using/this/tag`
     * @param firstRemove You can use RegEx, tag string, item string, or combine them into an array, or ignore this entry
     * @param thenAdd You can use RegEx, tag string, item string, or combine them into an array, or ignore this entry
     */
    let recipes = [
        {
            tag: 'enigmatica:meats/small',
            thenAdd: [
                'atum:quail',
                'farmersdelight:mutton_chops',
                'farmersdelight:chicken_cuts',
                'farmersdelight:bacon',
                'quark:frog_leg',
                'undergarden:raw_gloomper_leg'
            ]
        },
        {
            tag: 'enigmatica:meats/medium',
            thenAdd: ['environmental:duck', 'minecraft:chicken', 'minecraft:rabbit']
        },
        {
            tag: 'enigmatica:meats/large',
            thenAdd: [
                'undergarden:raw_dweller_meat',
                'atum:camel',
                'environmental:venison',
                'alexsmobs:kangaroo_meat',
                'minecraft:beef',
                'minecraft:mutton',
                'minecraft:porkchop',
                'alexsmobs:moose_ribs'
            ]
        }
    ];

    for (let recipe of recipes) {
        let firstRemove = recipe.firstRemove ? recipe.firstRemove : [];
        let thenAdd = recipe.thenAdd ? recipe.thenAdd : [];
        let tagSplitted = recipe.tag.split('/');
        for (let i = 0; i < tagSplitted.length; i++) {
            let tag = tagSplitted.slice(0, i + 1).join('/');
            event.get(tag).remove(firstRemove).add(thenAdd);
        }
    }
});
