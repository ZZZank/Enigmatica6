onEventExpert('item.tags', (event) => {
    const items = [
        'bloodmagic:soulsword',
        'bloodmagic:soulaxe',
        'bloodmagic:soulpickaxe',
        'bloodmagic:soulshovel',
        'bloodmagic:soulscythe',
        'kubejs:spirit_entropic_gateway',
        'losttrinkets:magical_feathers',
        'magicfeather:magicfeather'
    ];
    event.get('occultism:occultism_spirit_tooltip').add(items);
});
