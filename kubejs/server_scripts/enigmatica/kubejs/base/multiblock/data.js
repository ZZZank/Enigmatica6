// priority: 1000

const VisualizMultiblocks = {
    'atum:scarab': new PatchouliMultiblock(
        'kubejs:atum_portal',
        [
            ['S   S', '     ', '     ', '     ', 'S   S'],
            ['S   S', '     ', '  0  ', '     ', 'S   S'],
            ['SSSSS', 'SPPPS', 'SPPPS', 'SPPPS', 'SSSSS'],
            ['SSSSS', 'SSSSS', 'SSSSS', 'SSSSS', 'SSSSS']
        ],
        {
            S: Block.getBlock('minecraft:sandstone'),
            P: Block.getBlock('atum:portal')
            // 0: Block.getBlock("mekanism:block_steel"),
        }
    )
};
