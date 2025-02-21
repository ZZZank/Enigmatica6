onEvent('item.tags', (event) => {
    /**
     * @type {{tag:string,firstRemove?:any,thenAdd?:any}[]}
     * @param tag the tag string WITHOUT `#` prefix, like `forge:ingots` or `why:using/this/tag`
     * @param firstRemove valid values: RegEx, tag string, item string, item string array, or you can ignore this entry
     * @param thenAdd valid values: RegEx, tag string, item string, item string array, or you can ignore this entry
     */
    let recipes = [
        {
            tag: 'forge:ingots',
            thenAdd: [
                'bloodmagic:ingot_hellforged',
                'immersiveengineering:ingot_aluminum',
                'immersiveengineering:ingot_constantan',
                'immersiveengineering:ingot_electrum',
                'immersiveengineering:ingot_hop_graphite',
                'immersiveengineering:ingot_lead',
                'immersiveengineering:ingot_nickel',
                'immersiveengineering:ingot_silver',
                'immersiveengineering:ingot_uranium',
                'minecraft:netherite_scrap',
                'naturesaura:sky_ingot',
                'occultism:iesnium_ingot'
            ]
        },
        {
            tag: 'forge:ingots/psimetal',
            thenAdd: ['byg:pendorite_ingot']
        },
        {
            tag: 'forge:ingots/uraninite',
            thenAdd: ['powah:uraninite']
        },
        {
            tag: 'forge:ingots/energized_steel',
            thenAdd: ['powah:steel_energized']
        },
        {
            tag: 'forge:ingots/radioactive',
            thenAdd: ['#forge:ingots/uraninite', '#forge:ingots/uranium']
        },
        {
            tag: 'forge:ingots/superheated_steel',
            thenAdd: ['kubejs:superheated_steel_ingot']
        },
        {
            tag: 'forge:ingots/hot_compressed_iron',
            thenAdd: ['kubejs:hot_compressed_iron_ingot']
        },
        {
            tag: 'forge:ingots/starmetal',
            thenAdd: ['astralsorcery:starmetal_ingot']
        },
        {
            tag: 'forge:ingots/andesite_alloy',
            thenAdd: ['create:andesite_alloy']
        },
        {
            tag: 'forge:ingots/pewter',
            thenAdd: ['kubejs:pewter_ingot']
        },
        {
            tag: 'forge:ingots/aeternium',
            thenAdd: ['betterendforge:aeternium_ingot']
        },
        {
            tag: 'forge:ingots/terminite',
            thenAdd: ['betterendforge:terminite_ingot']
        },
        {
            tag: 'forge:ingots/thallasium',
            thenAdd: ['betterendforge:thallasium_ingot']
        },
        {
            tag: 'forge:ingots/sky',
            thenAdd: ['naturesaura:sky_ingot']
        },
        {
            tag: 'forge:ingots/tainted_gold',
            thenAdd: ['naturesaura:tainted_gold']
        },
        {
            tag: 'forge:ingots/infused_iron',
            thenAdd: ['naturesaura:infused_iron']
        },
        {
            tag: 'forge:ingots/sunmetal',
            thenAdd: ['architects_palette:sunmetal_brick']
        },
        {
            tag: 'forge:ingots/nether_brick',
            thenAdd: ['byg:blue_nether_brick', 'byg:yellow_nether_brick']
        },
        {
            tag: 'forge:ingots/copper',
            thenAdd: ['immersiveengineering:ingot_copper']
        },
        {
            tag: 'forge:ingots/alfsteel',
            thenAdd: ['mythicbotany:alfsteel_ingot']
        },
        {
            tag: 'forge:ingots/pink_slime',
            thenAdd: ['industrialforegoing:pink_slime_ingot']
        },
        {
            tag: 'forge:ingots/gaia',
            thenAdd: ['botania:gaia_ingot']
        },
        {
            tag: 'forge:ingots/gaia_spirit',
            thenAdd: ['botania:gaia_ingot']
        },
        {
            tag: 'forge:ingots/tinkers_bronze',
            thenAdd: ['tconstruct:tinkers_bronze_ingot']
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
