const ieMultiblockGameStage = {
    'immersivepetroleum:multiblocks/pumpjack': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/excavator': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/bucket_wheel': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/excavator_full': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/mixer': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/sawmill': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/metal_press': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/diesel_generator': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/refinery': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/fermenter': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/squeezer': 'medium_machinery_schematics',
    'immersiveengineering:multiblocks/auto_workbench': 'medium_machinery_schematics',

    'immersiveengineering:multiblocks/arcfurnace': 'heavy_machinery_schematics',
    'immersiveengineering:multiblocks/assembler': 'heavy_machinery_schematics',
    'immersiveengineering:multiblocks/crusher': 'heavy_machinery_schematics',
    'immersivepetroleum:multiblocks/cokerunit': 'heavy_machinery_schematics',
    'immersivepetroleum:multiblocks/distillationtower': 'heavy_machinery_schematics',
    'immersivepetroleum:multiblocks/hydrotreater': 'heavy_machinery_schematics',
    'immersiveengineering:multiblocks/lightning_rod': 'heavy_machinery_schematics'
};

onEvent('ie.multiblock.form', (event) => {
    if (global.isNormalMode) {
        return;
    }

    // @ts-ignore
    const /** @type {Internal.PlayerJS} */ player = event.entity;
    const stage = ieMultiblockGameStage[event.getMultiblock()];
    if (stage && !player.stages.has(stage)) {
        event.cancel();
        if (!player.getServer()) {
            player.tell(Text.translate('desc.enigmatica.ie_multiblock_error'));
        }
    }
});
