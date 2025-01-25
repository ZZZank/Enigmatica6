
onEvent('fluid.tags', (event) => {
    materialsToUnify.forEach((material) => {
        const fluid = `kubejs:molten_${material}`;
        if (Fluid.exists(fluid)) {
            event.add(`forge:molten_${material}`, [fluid]);
            event.add(`forge:molten/${material}`, [fluid]);
        }
    });
});
