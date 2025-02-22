onEventExpert('recipes', (event) => {

    const id_prefix = 'enigmatica:expert/appliedenergistics2/basic_res/';

    const recipes = [
        { toReplace: 'minecraft:iron_ingot', replaceWith: 'pneumaticcraft:ingot_iron_compressed' },
        { toReplace: '#appliedenergistics2:crystals/fluix', replaceWith: 'occultism:spirit_attuned_gem' },
        { toReplace: '#appliedenergistics2:crystals/certus', replaceWith: 'astralsorcery:aquamarine' },
        { toReplace: 'appliedenergistics2:fluix_dust', replaceWith: 'botania:corporea_spark' },
        { toReplace: 'appliedenergistics2:certus_quartz_dust', replaceWith: 'botania:quartz_mana' }
    ];

    const dusts = [
        {
            toReplace: 'appliedenergistics2:nether_quartz_dust',
            replaceWith: 'emendatusenigmatica:quartz_dust'
        },
        { toReplace: 'appliedenergistics2:iron_dust', replaceWith: 'emendatusenigmatica:iron_dust' },
        { toReplace: 'appliedenergistics2:gold_dust', replaceWith: 'emendatusenigmatica:gold_dust' }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput({ mod: 'appliedenergistics2' }, recipe.toReplace, recipe.replaceWith);
        event.replaceInput({ mod: 'aeadditions' }, recipe.toReplace, recipe.replaceWith);
    });

    dusts.forEach((entry) => {
        event.replaceInput(entry.toReplace, entry.replaceWith);
    });
});
