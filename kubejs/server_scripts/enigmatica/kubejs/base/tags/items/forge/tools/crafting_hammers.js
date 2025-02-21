onEvent('item.tags', (event) => {
    let exceptions = [];

    let tags = ['forge:tools', 'forge:tools/crafting_hammer'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(/emendatusenigmatica:\w+_hammer/)
            .add('immersiveengineering:hammer')
            .remove(exceptions);
    });
});
