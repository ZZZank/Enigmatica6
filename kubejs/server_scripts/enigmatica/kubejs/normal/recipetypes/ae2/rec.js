onEvent('recipes', (event) => {
    if (global.isExpertMode) {
        return;
    }
    event
        .custom({
            type: 'appliedenergistics2:inscriber',
            mode: 'inscribe',
            ingredients: {
                top: toJsonWithCount('appliedenergistics2:silicon_press'),
                middle: toJsonWithCount('emendatusenigmatica:silicon_gem')
            },
            result: toJsonWithCount('appliedenergistics2:printed_silicon')
        })
        .id('appliedenergistics2:inscriber/silicon_print');
});
