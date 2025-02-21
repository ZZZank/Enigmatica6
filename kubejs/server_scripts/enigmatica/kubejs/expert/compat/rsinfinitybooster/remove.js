onEvent('recipes', (event) => {
    if (global.isNormalMode || !Platform.isLoaded('rsinfinitybooster')) {
        return;
    }
    const id_prefix = 'enlightened6:expert/rsinfinitybooster/remove/';

    const idRemovals = ['rsinfinitybooster:dimension_card', 'rsinfinitybooster:infinity_card'];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });
});
