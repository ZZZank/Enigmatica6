onEvent('item.tags', (event) => {
    event
        .get('industrialforegoing:enchantment_extractor_blacklist')
        .add([
            'tetra:modular_double',
            'tetra:modular_shield',
            'tetra:modular_single',
            'tetra:modular_sword',
            'tetra:modular_crossbow',
            'tetra:modular_bow'
        ]);
});
