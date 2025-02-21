onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/smithing/';

    const recipes = [];

    const black_hole_types = ['tank', 'unit'];
    const black_hole_tiers = ['common', 'pity', 'simple', 'advanced', 'supreme'];
    black_hole_types.forEach((type) => {
        black_hole_tiers.forEach((tier) => {
            getLowerTiers(black_hole_tiers, tier).forEach((prev) => {
                recipes.push({
                    input1: `industrialforegoing:${prev}_black_hole_${type}`,
                    input2: `industrialforegoing:machine_frame_${tier}`,
                    output: `industrialforegoing:${tier}_black_hole_${type}`,
                    id: `${id_prefix}upgrade_${prev}_black_hole_${type}_to_${tier}`
                });
            });
        });
    });

    const chippedBenches = {
        'chipped:botanist_workbench': 'minecraft:flower_pot',
        'chipped:glassblower': 'minecraft:blast_furnace',
        'chipped:carpenters_table': Item.of('minecraft:wooden_axe', { Damage: 0 }),
        'chipped:loom_table': '#forge:wool',
        'chipped:mason_table': 'minecraft:brick',
        'chipped:alchemy_bench': 'minecraft:brewing_stand',
        'chipped:mechanist_workbench': 'minecraft:piston'
    };
    for (let bench in chippedBenches) {
        let input2 = chippedBenches[bench];
        let [mod, id] = bench.split(':', 2);
        recipes.push({
            input1: 'minecraft:stonecutter',
            input2: input2,
            output: bench,
            id: mod + ':benches/' + id
        });
    }

    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
