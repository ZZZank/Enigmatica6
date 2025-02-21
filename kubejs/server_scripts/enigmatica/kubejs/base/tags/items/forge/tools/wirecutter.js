onEvent('item.tags', (event) => {
    let exceptions = [];

    let tags = ['forge:tools', 'forge:tools/wirecutter'];

    tags.forEach((tag) => {
        event.get(tag).add('immersiveengineering:wirecutter').remove(exceptions);
    });
});
