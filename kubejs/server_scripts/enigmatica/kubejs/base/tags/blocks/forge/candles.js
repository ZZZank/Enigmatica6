onEvent('block.tags', (event) => {
    event.get('forge:candles').add(candles);
});
