onEventExpert('recipes', (event) => {

    const recipes = [
        {
            result: { item: 'rftoolsstorage:storage_module0' },
            pattern: [' C ', 'gig', 'qrq'],
            key: {
                g: { tag: 'forge:nuggets/gold_bronze' },
                q: { item: 'minecraft:quartz' },
                r: { item: 'minecraft:redstone' },
                C: { tag: 'forge:chests' },
                i: { tag: 'forge:ingots/iron_tin' }
            },
            id: 'rftoolsstorage:storage_module0'
        },
        {
            result: { item: 'rftoolsstorage:storage_module1' },
            pattern: ['AEA', 'CDC', 'ABA'],
            key: {
                A: { tag: 'thermal:glass/hardened' },
                B: { item: 'ironchest:silver_chest' },
                C: { item: 'buildinggadgets:construction_paste' },
                D: { item: 'rftoolsstorage:storage_module0' },
                E: { tag: 'forge:gears/osmium' }
            },
            id: 'rftoolsstorage:storage_module1'
        },
        {
            result: { item: 'rftoolsstorage:storage_module2' },
            pattern: ['AEA', 'CDC', 'ABA'],
            key: {
                A: { tag: 'thermal:glass/hardened' },
                B: { item: 'ironchest:diamond_chest' },
                C: { item: 'buildinggadgets:construction_paste' },
                D: { item: 'rftoolsstorage:storage_module1' },
                E: { tag: 'forge:gears/osmium' }
            },
            id: 'rftoolsstorage:storage_module2'
        },
        {
            result: { item: 'rftoolsstorage:storage_module3' },
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: { tag: 'thermal:glass/hardened' },
                B: { item: 'ironchest:obsidian_chest' },
                C: { item: 'buildinggadgets:construction_paste' },
                D: { item: 'rftoolsstorage:storage_module2' }
            },
            id: 'rftoolsstorage:storage_module3'
        },
        {
            result: { item: 'rftoolsutility:advanced_charged_porter' },
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_nitro' },
                B: { item: 'kubejs:dimensional_storage_crystal' },
                C: { item: 'rftoolsutility:charged_porter' }
            },
            id: 'rftoolsutility:advanced_charged_porter'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mcjtylib:copy_nbt';
        event.custom(recipe).id(recipe.id);
    });
});
