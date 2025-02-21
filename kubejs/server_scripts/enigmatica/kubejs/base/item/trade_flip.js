const $VillagerEntity = java('net.minecraft.entity.merchant.villager.VillagerEntity');
const $MerchantOffers = java('net.minecraft.item.MerchantOffers');
const $MerchantOffer = java('net.minecraft.item.MerchantOffer');

/**
 * "Flip" trades of a villager if renamed to/from "Dinnerbone"
 */
onEvent('item.entity_interact', (event) => {
    //filtering: general
    const { item, hand, target } = event;
    const mcEntity = target.minecraftEntity;
    if (item.id != 'minecraft:name_tag' || hand != MAIN_HAND || !(mcEntity instanceof $VillagerEntity)) {
        return;
    }

    //filtering: name
    const dinnerboneVillager = mcEntity.hasCustomName()
        ? mcEntity.getCustomName().getString() == 'Dinnerbone'
        : false;
    const dinnerboneNameTag = item.getName().string == 'Dinnerbone';
    if (dinnerboneVillager == dinnerboneNameTag) {
        return; //skip if not (target name -> other name) and not (other name -> target name)
    }

    //flipping trades(sound like swearing)
    const flipped = new $MerchantOffers();
    mcEntity.offers.forEach((offer) => {
        // @ts-ignore
        flipped.add(
            //sellingStack <-> buyingStackFirst
            new $MerchantOffer(
                offer.sellingStack,
                offer.buyingStackSecond,
                offer.buyingStackFirst,
                Math.max(0, offer.uses - 3),
                offer.maxUses,
                offer.givenExp,
                offer.priceMultiplier,
                offer.demand
            )
        );
    });
    mcEntity.setOffers(flipped);
});
