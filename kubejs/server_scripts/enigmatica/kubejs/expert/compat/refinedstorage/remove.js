onEvent('recipes', (event) => {
    if (global.isNormalMode || !Platform.isLoaded('refinedstorage')) {
        return;
    }
    const id_prefix = 'enlightened6:expert/refinedstorage/remove/';

    const idRemovals = [
        'refinedstorage:raw_basic_processor',
        'refinedstorage:raw_improved_processor',
        'refinedstorage:raw_advanced_processor',
        'refinedstorage:processor_binding',
        'refinedstorage:silicon',
        'refinedstorage:quartz_enriched_iron'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });
});
