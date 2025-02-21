onEvent('block.registry', (event) => {
    /**
     * @type {{name:string, material:Internal.MaterialJS_, hardness:number, leaves?:boolean}[]}
     */
    const basicBlocks = [
        { name: 'matter_block', material: 'iron', hardness: 2 },
        { name: 'conductive_frame', material: 'iron', hardness: 5 },
        { name: 'firmament', material: 'rock', hardness: 2 },
        { name: 'superheated_steel_block', material: 'iron', hardness: 5 },
        { name: 'hot_compressed_iron_block', material: 'iron', hardness: 5 },
        { name: 'rough_machine_frame_top', material: 'iron', hardness: 5 },
        { name: 'coated_machine_frame_top', material: 'iron', hardness: 5 },
        { name: 'rough_machine_frame', material: 'iron', hardness: 5 },
        { name: 'crystalline_dark_oak_wood', material: 'rock', hardness: 5 },
        { name: 'crystalline_oak_leaves', material: 'glass', hardness: 2.0, leaves: true },
        {
            name: 'crystalline_flowering_palo_verde_leaves',
            material: 'glass',
            hardness: 2.0,
            leaves: true
        }
    ];

    basicBlocks.forEach((basicBlock) => {
        const block_event = event
            .create(basicBlock.name)
            .material(basicBlock.material)
            .hardness(basicBlock.hardness);

        if (basicBlock.leaves == true) {
            block_event
                .renderType('cutout')
                .notSolid()
                .noValidSpawns(true)
                .suffocating(false)
                .viewBlocking(false)
                .redstoneConductor(false)
                .transparent(false);
        }
    });
});
