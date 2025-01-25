
onEvent('item.tags', (event) => {
    let items = [/fishing_rod$/, 'atum:atems_bounty'];

    let exceptions = [];

    let tags = ['forge:tools', 'forge:tools/fishing_rods'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
