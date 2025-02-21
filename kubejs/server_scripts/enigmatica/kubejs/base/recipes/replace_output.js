onEvent('recipes', (event) => {
    const recipes = [
        { toReplace: 'thermal:cinnabar', replaceWith: '#forge:gems/cinnabar' },
        { toReplace: 'thermal:sulfur', replaceWith: '#forge:gems/sulfur' },
        { toReplace: 'thermal:apatite', replaceWith: '#forge:gems/apatite' },
        { toReplace: 'thermal:niter', replaceWith: '#forge:gems/niter' },
        { toReplace: 'thermal:bitumen', replaceWith: '#forge:gems/bitumen' },
        { toReplace: 'thermal:coal_coke', replaceWith: '#forge:gems/coal_coke' },
        { toReplace: 'thermal:sawdust', replaceWith: 'emendatusenigmatica:wood_dust' },
        { toReplace: 'appliedenergistics2:silicon', replaceWith: '#forge:gems/silicon' },
        { toReplace: 'create:dough', replaceWith: 'farmersdelight:wheat_dough' },
        { toReplace: 'thermal:rubber', replaceWith: 'industrialforegoing:dryrubber' },
        { toReplace: 'immersiveengineering:slag', replaceWith: 'thermal:slag' },
        {
            filter: { mod: 'dustrial_decor' },
            toReplace: 'minecraft:iron_ingot',
            replaceWith: 'dustrial_decor:rusty_iron_ingot'
        },
        {
            filter: { mod: 'dustrial_decor' },
            toReplace: 'minecraft:iron_nugget',
            replaceWith: 'dustrial_decor:rusty_iron_nugget'
        },
        { toReplace: 'create:bar_of_chocolate', replaceWith: 'neapolitan:chocolate_bar' }
    ];

    sharedDies.forEach((die) => {
        recipes.push({
            toReplace: `thermal:press_${die.thermalName}_die`,
            replaceWith: `immersiveengineering:mold_${die.immersiveEngineeringName}`
        });
    });

    recipes.forEach((recipe) => {
        let filter = {};
        if (recipe.filter) {
            filter = recipe.filter;
        }
        event.replaceOutput(filter, recipe.toReplace, recipe.replaceWith);
    });
});
