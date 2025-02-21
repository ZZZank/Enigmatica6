onEvent('item.tags', (event) => {
    let items = ['immersiveengineering:shovel_steel', 'bloodmagic:soulshovel', 'atum:gebs_toil'];
    let exceptions = [
        'betterendforge:aeternium_shovel_head',
        'betterendforge:thallasium_shovel_head',
        'betterendforge:terminite_shovel_head'
    ];

    let tags = ['forge:tools', 'forge:tools/shovel'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_shovel$/)
            .add(/_aiot/)
            .add(/_paxel/)
            .add(/_excavator/)
            .remove(exceptions);
    });
});
