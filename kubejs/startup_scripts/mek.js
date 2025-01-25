

const $GasDeferredRegister = java('mekanism.common.registration.impl.GasDeferredRegister');
const $SlurryDeferredRegister = java('mekanism.common.registration.impl.SlurryDeferredRegister');
const $InfuseTypeDeferredRegister = java('mekanism.common.registration.impl.InfuseTypeDeferredRegister');
const $MinecraftForge = java('net.minecraftforge.common.MinecraftForge');

const GASES = new $GasDeferredRegister('kubejs');
const SLURRY = new $SlurryDeferredRegister('kubejs');
const INFUSETYPE = new $InfuseTypeDeferredRegister('kubejs');

GASES.register('example_gas', 0xa020f0);
SLURRY.register('example_slurry', (builder) => builder.color(0xa020f0));
INFUSETYPE.register('example_infuse_type', 0xa020f0);

GASES.register($MinecraftForge.EVENT_BUS);
SLURRY['register(net.minecraftforge.eventbus.api.IEventBus)']($MinecraftForge.EVENT_BUS);
INFUSETYPE.register($MinecraftForge.EVENT_BUS);
