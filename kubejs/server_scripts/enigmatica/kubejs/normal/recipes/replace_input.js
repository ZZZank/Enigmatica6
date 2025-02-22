onEventNormal('recipes', (event) => {

    const recipes = [
        {
            filter: { id: 'botania:laputa_shard' },
            toReplace: 'botania:life_essence',
            replaceWith: 'botania:gaia_ingot'
        },
        {
            filter: { id: 'compactmachines:personal_shrinking_device' },
            toReplace: 'minecraft:book',
            replaceWith: 'shrink:shrinking_device'
        },
        {
            filter: { id: 'powah:crafting/player_tranmitter_basic' },
            toReplace: 'powah:player_transmitter_starter',
            replaceWith: 'powah:player_aerial_pearl'
        },
        {
            filter: { mod: 'powah' },
            toReplace: '#powah:furnator',
            replaceWith: 'minecraft:blast_furnace'
        },
        {
            filter: { mod: 'powah' },
            toReplace: '#powah:energy_hopper',
            replaceWith: 'minecraft:hopper'
        }
    ];

    powahTiers.forEach(function (tier) {
        recipes.push({
            filter: { id: `powah:crafting/energizing_rod_${tier}` },
            toReplace: '#powah:energizing_rod',
            replaceWith: `powah:energy_cable_${tier}`
        });
    });

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });

    const alt_material_tag_replacements = [
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['botania:spark']
        },
        {
            type: 'ingots',
            replace: 'gold',
            replaceWith: 'brass',
            items: ['ars_nouveau:basic_spell_turret']
        }
    ];

    alt_material_tag_replacements.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.replaceInput(
                { output: item },
                '#forge:' + recipe.type + '/' + recipe.replace,
                '#forge:' + recipe.type + '/' + recipe.replace + '_' + recipe.replaceWith
            );
        });
    });
});
