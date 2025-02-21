onEvent('item.tags', (event) => {
    //Crafters
    for (let i = 1; i <= 3; i++) {
        event.get('rftools:crafter').add('rftoolsutility:crafter' + i);
    }

    //Quarry Shape Cards
    let quarrycards = ['_fortune', '_silk', ''];
    quarrycards.forEach(function (card) {
        event.get('rftools:quarrycard').add('rftoolsbuilder:shape_card_quarry' + card);
        event.get('rftools:quarrycard').add('rftoolsbuilder:shape_card_quarry_clear' + card);
    });

    //Fluid Shape Cards
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_liquid');
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_pump');
    event.get('rftools:fluidcard').add('rftoolsbuilder:shape_card_pump_clear');
});
