onEvent('jei.hide.fluids', (event) => {
    /**
     * @type {Special.Fluid[]}
     */
    const disabled = [
        'cofh_core:honey',
        'create:honey',
        'thermal:crude_oil',
        'immersivepetroleum:oil',
        'emendatusenigmatica:molten_zinc',
        'emendatusenigmatica:molten_quartz',
        'emendatusenigmatica:molten_uranium',
        'emendatusenigmatica:molten_tin',
        'emendatusenigmatica:molten_steel',
        'emendatusenigmatica:molten_silver',
        'emendatusenigmatica:molten_osmium',
        'emendatusenigmatica:molten_nickel',
        'emendatusenigmatica:molten_lead',
        'emendatusenigmatica:molten_iron',
        'emendatusenigmatica:molten_invar',
        'emendatusenigmatica:molten_gold',
        'emendatusenigmatica:molten_fluix',
        'emendatusenigmatica:molten_emerald',
        'emendatusenigmatica:molten_electrum',
        'emendatusenigmatica:molten_diamond',
        'emendatusenigmatica:molten_copper',
        'emendatusenigmatica:molten_constantan',
        'emendatusenigmatica:molten_cobalt',
        'emendatusenigmatica:molten_charged_certus_quartz',
        'emendatusenigmatica:molten_certus_quartz',
        'emendatusenigmatica:molten_bronze',
        'emendatusenigmatica:molten_brass',
        'emendatusenigmatica:molten_aluminum',
        'emendatusenigmatica:molten_ancient_debris',
        'emendatusenigmatica:molten_cloggrum',
        'emendatusenigmatica:molten_froststeel',
        'emendatusenigmatica:molten_utherium',
        'emendatusenigmatica:molten_regalium',
        'emendatusenigmatica:molten_iesnium',
        'emendatusenigmatica:molten_cast_iron',
        'emendatusenigmatica:molten_iridium',
        'emendatusenigmatica:molten_peridot',
        'emendatusenigmatica:molten_enderium',
        'emendatusenigmatica:molten_lumium',
        'emendatusenigmatica:molten_signalum',
        'emendatusenigmatica:molten_sapphire',
        'emendatusenigmatica:molten_ruby'
    ];

    disabled.forEach((disabledFluid) => {
        if (!Fluid.of(disabledFluid).isEmpty()) {
            event.hide(disabledFluid);
        }
    });
});
