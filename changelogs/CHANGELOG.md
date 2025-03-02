## Enlightened6 & Enlightened6Expert - 2.7.0 -> 2.8.0

🚀 Forge-1.16.5-36.2.41 | [📜 Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.8.0.md) | [📋 Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.8.0.md)

### Added

-   [Better Compatibility Checker](https://www.curseforge.com/minecraft/mc-mods/better-compatibility-checker) (by [Gaz\_](https://www.curseforge.com/members/Gaz_/projects))
-   [Client Crafting](https://www.curseforge.com/minecraft/mc-mods/client-crafting) (by [someaddon](https://www.curseforge.com/members/someaddon/projects))
-   [DataStructium](https://www.curseforge.com/minecraft/mc-mods/datastructium) (by [ZZZank](https://www.curseforge.com/members/ZZZank/projects))
-   [EventJS](https://www.curseforge.com/minecraft/mc-mods/eventjs) (by [ZZZank](https://www.curseforge.com/members/ZZZank/projects))
-   [Francium](https://www.curseforge.com/minecraft/mc-mods/francium) (by [pOtAto\_\_bOy](https://www.curseforge.com/members/pOtAto__bOy/projects))
-   [KubeJEI](https://www.curseforge.com/minecraft/mc-mods/kubejei) (by [ZZZank](https://www.curseforge.com/members/ZZZank/projects))

### Removed

-   [Custom Machinery](https://www.curseforge.com/minecraft/mc-mods/custom-machinery) (by [frinn38](https://www.curseforge.com/members/frinn38/projects))
-   [Redirector [Modern]](https://www.curseforge.com/minecraft/mc-mods/redirector) (by [pOtAto\_\_bOy](https://www.curseforge.com/members/pOtAto__bOy/projects))

### 🌟 Improvements

-   rewritten Recipe Hints
    -   Recipe Hints are now implemented via KubeJEI, allowing for a cleaner and more dynamic recipe hint implementation
-   fix output unifying, turns out `IngredientJS.getCount()` is NOT returning the count of matched item
    -   this can fix issues like Create ore washing recipe outputing wrong type of nuggets
-   remove `alcara` constellation crystal requirement in Constellation Box, make recipe looks a little bit better
-   update building gadget pattern for Stellar Neutron Activator
-   removed old shaped recipe for `bloodmagic:largebloodstonebrick`
-   simpler NatureAura auto crafter recipe
-   [expert] `redstone_arsenal:flux_gem_block` easier to craft
-   trades flipping implemented via KubeJS
    -   try remaning a villager to "Dinnerbone"
-   ae2 singularity frequency will now be displayed on its tooltips
-   reverted some fluid ingredient changes
-   allow converting silicons via Mek Oredictionificator
-   fix ae recipe in normal mode
-   fix `mining_gadget_kit` recipe by using tank instead of buckets
-   remove `'use strict'` in scripts, it's causing troubles in stupid Rhino
-   fix Diamond Ore to Emerald Ore AS Transmutation recipe
-   fix Integrated Dynamics facades cannot be crafted
-   move more MM controller recipes to base En6
-   prevent registering unused event handler early, should helps with performance
-   unhide mctb tables, we provided stonecutter recipes for it
-   zh_cn lang++
-   fix Just ENough Resource JEI category via DataStructium
-   fix late-game multiblock consuming large amount of performance (also via DataStructium)

---

## Enlightened6 & Enlightened6Expert - 2.6.0 -> 2.7.0

🚀 Forge-1.16.5-36.2.41 | [📜 Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.7.0.md) | [📋 Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.7.0.md)

### Added

-   [Rhizo](https://www.curseforge.com/minecraft/mc-mods/rhizo) (by [ZZZank](https://www.curseforge.com/members/ZZZank/projects))
-   [RoadRunner](https://www.curseforge.com/minecraft/mc-mods/roadrunner) (by [MaxNeedsSnacks](https://www.curseforge.com/members/MaxNeedsSnacks/projects))
-   [Searchables](https://www.curseforge.com/minecraft/mc-mods/searchables) (by [Jaredlll08](https://www.curseforge.com/members/Jaredlll08/projects))

### Removed

-   [Dynamic View[Forge]](https://www.curseforge.com/minecraft/mc-mods/dynamic-view) (by [someaddon](https://www.curseforge.com/members/someaddon/projects))
-   [Rhino](https://www.curseforge.com/minecraft/mc-mods/rhino) (by [LatvianModder](https://www.curseforge.com/members/LatvianModder/projects))

### 🌟 Improvements

-   [normal] end-game goal for En6
    -   completely (sort of) ports end-game goal from En6E to En6, including all custom multiblocks, most of custom end-game recipes, end-game items, and more.
    -   because of this, some original recipes in normal mode are replaced with expert one to make sure endgame goal is covering contents of most mods.
-   [normal] some interesting recipes from En6E
    -   e.g. `minecraft:lodestone`, `astralsorcery:observatory`
    -   they look really cool, so make sure to check them out if you're playing Normal Mode
-   Targets of Null Pointer should now be monster, otherwise special effects will not be triggered
-   removed TCon seared/scorched tank filling recipes
    -   reducing JEI recipe count by 133\*12=1596
-   added JEI descriptions will now be batched together
    -   reducing JEI page count by about 200
-   redesign recipe hint
    -   capable of holding more entries in one page, with fluid support
-   [expert] cheaper `naturasaura:auto_crafter`
-   makes recipe ids of some dyeing recipe clearer
-   fix a horribly wrong format in unify_sawables::create_cutting
-   New translations from E6 Crowdin
-   restrict custom loot opening and hand-over-your-items to be main-hand only
-   allow `atum:coin_gold` in Numismatic Dynamo
-   [expert] crafting celestial_gateway in altar now gives 4 times the output
-   make chipped workbench easier to craft
-   [expert] recipe hint for kubejs:xxx_machinery_schematics
-   new in-world recipe for `bloodmagic:largebloodstonebrick`
-   buff custom metal processing, 10x -> 12x output
-   recipe for `artifacts:everlasting_beef`
-   differ two recipes for `create:precision_mechanism`
-   recipe hint for hitting ghast with ender air
-   New fun recipe for `immersiveengineering:dragons_breath` and `arsarsenal:source_steel_ingot`
-   replace pneumaticcraft:fluid with immersiveengineering:fluid for autocrafting with IE crafter

### 🐛 Fixed Bugs

-   fix loottable in dungeon_witch_common
-   mek quest displaying invalid items
-   a TCon modifier requesting empty tag
-   lang for `kubejs:diy_create_quarry`, how would I forgot that or so long

---

## Enlightened6 & Enlightened6Expert - 2.5.0 -> 2.6.0

🚀 Forge-1.16.5-36.2.41 | [📜 Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.6.0.md) | [📋 Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.6.0.md)

### WARNING: This version introduces many internal cleanups, so a clean install is recommended. If you would like to upgrade from previous version, make sure to delete `config` and `kubejs` folders before updating!

### 🎁 Highlights

-   Null Pointer, without exception.
    -   Infect a Conduit using artificial virus to obtain a "Null Pointer", which will allow you to make your enemies devoured by spatial turbulance, only lefting some wierd crystals. This crystal will be useful for your progression.
-   Reworked recipe hint
    -   The brand new recipe hint is more compact, and provides more infomations like catalyst, input consume chances and nbt.
-   dynamic tooltip for KubeJS lootboxes, showing type of this lootbox.

### Mods Added

-   [Custom Machinery](https://www.curseforge.com/minecraft/mc-mods/custom-machinery) (by [frinn38](https://www.curseforge.com/members/frinn38/projects))
-   [Embeddium](https://www.curseforge.com/minecraft/mc-mods/embeddium) (by [embeddedt](https://www.curseforge.com/members/embeddedt/projects))
-   [Forge Config Screens [Forge & Fabric]](https://www.curseforge.com/minecraft/mc-mods/config-menus-forge) (by [Fuzs](https://www.curseforge.com/members/Fuzs/projects))
-   [Inventory Tweaks Renewed](https://www.curseforge.com/minecraft/mc-mods/inventory-tweaks-renewed) (by [godemperordoge](https://www.curseforge.com/members/godemperordoge/projects))
-   [ProbeJS Legacy](https://www.curseforge.com/minecraft/mc-mods/probejs-legacy) (by [ZZZank](https://www.curseforge.com/members/ZZZank/projects))
-   [Rapid Leaf Decay](https://www.curseforge.com/minecraft/mc-mods/rapid-leaf-decay) (by [GeheimagentNr1](https://www.curseforge.com/members/GeheimagentNr1/projects))
-   [Seamless Loading Screen (Forge)](https://www.curseforge.com/minecraft/mc-mods/seamless-loading-screen-forge) (by [TimScript](https://www.curseforge.com/members/TimScript/projects))

### Mods Removed

-   [BisectHosting Server Integration Menu [FORGE]](https://www.curseforge.com/minecraft/mc-mods/bisecthosting-server-integration-menu-forge) (by [BisectHosting](https://www.curseforge.com/members/BisectHosting/projects))
-   [Configured](https://www.curseforge.com/minecraft/mc-mods/configured) (by [MrCrayfish](https://www.curseforge.com/members/MrCrayfish/projects))
-   [Fast Leaf Decay](https://www.curseforge.com/minecraft/mc-mods/fast-leaf-decay) (by [olafskiii](https://www.curseforge.com/members/olafskiii/projects))
-   [Rubidium](https://www.curseforge.com/minecraft/mc-mods/rubidium) (by [Asek3](https://www.curseforge.com/members/Asek3/projects))

### 🌟 Improvements

-   Forge 36.2.41
    -   Do you know that you can run 1.16.5 using Java21? With some JVM args from https://github.com/embeddedt/ModernFix/wiki/1.16---required-arguments-for-Java-17 , you can do that easily. Java21 can provide significant performance benefits when compared with Java8.
-   localization ability for custom fluids
    -   This improvement has been contributed back to original E6/E6E
-   localization ability for special custom items
    -   This improvement has been contributed back to original E6/E6E
-   localization ability for custom Amadron entries
    -   This improvement has been contributed back to original E6/E6E
-   Change `environmental:koi` death drops, instead of banning worldgen
-   Buff Wicked Altar `redstone_arsenal:flux_dust` recipe output
-   Psimetal is now enabled, with `byg:pendorite_ingot` being its ingredient
-   Buff `tconstruct:glow_ball` stack size
-   Replace occultism miner JEI page with recipe_hint
-   Replace Blacksmith's Delight in `Tetra` chapter with actual item
-   Replace lootbox in Powah chapter with actual item
-   Replace lootbox in PNC chapter with actual item
-   Replace lootbox in Refined Storage(Optional) chapter with actual item
-   Replace lootbox in TCon chapter with actual item
-   Remove usage of AE ender dust, fully switched to EE ender dust
-   Add `#enlightened:explosives` tag
-   Add mod aliases for ae2fc & aeadditions in Morph Tool
-   Buff `appliedenergistics2:blank_pattern` output
-   Remove MM structure display in JEI
-   Hide `ftblibrary:fluid_container` since they are unused
-   Redirect portable_stonecutter recipe to interactio

### 🐛 Fixed Bugs

-   Hand Over Your Items some times buggy
-   Unused altered_recipe_indicator for tainted_gold_block
-   Recipe for `"kubejs:power_core_low"` not matching progression
-   Tooltips misplaced/disappeared sometimes
-   Missing JEI desc for some disabled items
-   [Expert]sky_compass still obtainable, despite fully useless

---

## Enlightened6 & Enlightened6Expert - 2.4.1 -> 2.5.0

🚀 Forge-1.16.5-36.2.39 | [📜 Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.5.0.md) | [📋 Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.5.0.md)

### It is highly recommended to upgrade to this version, especially when you are playing Expert Mode, because it includes many important bugfixes

### 🎁 Highlights

-   Refined Storage compatibility!
    -   It supports Refined Storage and some extensions, including Refined Storage Addons, Extra Storage and RSInfinityBooster
-   Recipe hint for Killing Entity!
    -   The newly added recipe hint can helps you clearly know how to obtain some entity drops. For example, it will tells you Silk Fiber can be obtained from Silk Moth Nest
-   Add some fancy sound and particles for Block Conversion
-   Replace navigator of many entities, to be more performant
-   Full lang keys for Assembly Package-s, with en_us and zh_cn localization
-   Replace Night Vision Flashing with Fading-out

### Mods Added

-   [Entity Collision FPS Fix](https://www.curseforge.com/minecraft/mc-mods/entity-collision-fps-fix) (by [Corgi_Taco](https://www.curseforge.com/members/Corgi_Taco/projects))
-   [No Night Vision Flashing](https://www.curseforge.com/minecraft/mc-mods/no-nv-flash) (by [TeamCoFH](https://www.curseforge.com/members/TeamCoFH/projects))

### 🌟 Improvements

-   dynamically show quest for optional mods, like Refined Storage
-   Blacklist target dummy in BloodMagic sacrificing
-   Do not specify name of Books in AkashicTome to allow localization
-   Remove recipes for Itemfilters, they cause severe item dupe
-   Hide useless JEI categories
-   Unify explosion recipe
-   Hide materialis::wrench in JEI
-   zh_cn localization for Storage Paprts Package/Assembly
-   Disable Mana Gem in loot
-   Hide altered recipe properly
-   Universial Crafting Table recipe will check mctb variants to prevent duplicated recipes
-   Add manual unpacking option for sawdust
-   explain Sand Cast usage in quest
-   Blacklist AE ores in AS ore generating
-   Replace Occultism lootbox with actual item
-   Replace Nature's Aura lootbox with actual item
-   Alt recipe for naturesaura:eye
-   Buff quark:elder_prismarine output when crafting variants
-   zh_cn localization for Patchouli Books
-   zh_cn localization for Interactio
-   zh_cn localization for Masterful Machinery blocks

### 🐛 Fixed Bugs

-   Crash on placing Sophisticatd Backpacks
-   16384k Cell Component not overwritting recipe
-   Tainted Gold Block unpacking
-   Hand Over Your Item messages not showing
-   Ars Nouveau quest giving wrong type of lootbox
-   Quark backpack/crate recipe invisible
-   Immersive Engineering Fluid Pump recipe not overwritting
-   Interactio lang json

---

## Enlightened6 & Enlightened6Expert - 2.4.0 -> 2.4.1

_Using Forge-1.16.5-36.2.39_ | _[Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.4.1.md)_ | _[Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.4.2.md)_

### Mods Added

-   [Opotato](https://www.curseforge.com/minecraft/mc-mods/opotato) (by [pOtAto\_\_bOy](https://www.curseforge.com/members/pOtAto__bOy/projects))
-   [Redirector [Modern]](https://www.curseforge.com/minecraft/mc-mods/redirectionor) (by [pOtAto\_\_bOy](https://www.curseforge.com/members/pOtAto__bOy/projects))
-   [Rubidium](https://www.curseforge.com/minecraft/mc-mods/rubidium) (by [Asek3](https://www.curseforge.com/members/Asek3/projects))

### Mods Removed

-   [Better Biome Blend](https://www.curseforge.com/minecraft/mc-mods/better-biome-blend) (by [FionaTheMortal](https://www.curseforge.com/members/FionaTheMortal/projects))
-   [Embeddium](https://www.curseforge.com/minecraft/mc-mods/embeddium) (by [embeddedt](https://www.curseforge.com/members/embeddedt/projects))
-   [Mining Gadgets](https://www.curseforge.com/minecraft/mc-mods/mining-gadgets) (by [Direwolf20](https://www.curseforge.com/members/Direwolf20/projects))
-   [Not Enough Recipe Book [NERB]](https://www.curseforge.com/minecraft/mc-mods/notenoughrecipebook) (by [SSKirillSS](https://www.curseforge.com/members/SSKirillSS/projects))

### Improvement

-   Add/remove/alter performance mods, to be even more performant and reliable
-   [normal] Rework Storage Drawers recipe, to merge so MANY similar recipes into one
-   zh_cn localization for Tooltips and JEI descriptions
-   Buff TCon armors to have diamond-tier defense
-   Unify Tetra hammer recipe

### Bugfixes

-   Mining Gadgets not removed properly

---

## Enlightened6 & Enlightened6Expert - 2.3.1 -> 2.4.0

_Using Forge-1.16.5-36.2.39_ | _[Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.4.0.md)_ | _[Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.4.0.md)_

### Mods Added

-   [Better End Potato Edition](https://www.curseforge.com/minecraft/mc-mods/better-end-potato-edition) (by [pOtAto\_\_bOy](https://www.curseforge.com/members/pOtAto__bOy/projects))
-   [Embeddium](https://www.curseforge.com/minecraft/mc-mods/embeddium) (by [embeddedt](https://www.curseforge.com/members/embeddedt/projects))
-   [MmmMmmMmmMmm (Target Dummy)](https://www.curseforge.com/minecraft/mc-mods/mmmmmmmmmmmm) (by [MehVahdJukaar](https://www.curseforge.com/members/MehVahdJukaar/projects))
-   [Not Enough Recipe Book [NERB]](https://www.curseforge.com/minecraft/mc-mods/notenoughrecipebook) (by [SSKirillSS](https://www.curseforge.com/members/SSKirillSS/projects))

### Mods Removed

-   [BetterEnd Reforked](https://www.curseforge.com/minecraft/mc-mods/betterend-re-forked) (by [someoneelsewastaken](https://www.curseforge.com/members/someoneelsewastaken/projects))
-   [Compact Crafting](https://www.curseforge.com/minecraft/mc-mods/compact-crafting) (by [RobotGryphon](https://www.curseforge.com/members/RobotGryphon/projects))
-   [Game Stages](https://www.curseforge.com/minecraft/mc-mods/game-stages) (by [DarkhaxDev](https://www.curseforge.com/members/DarkhaxDev/projects))
-   [Guns Without Roses](https://www.curseforge.com/minecraft/mc-mods/guns-without-roses) (by [Lykrast](https://www.curseforge.com/members/Lykrast/projects))
-   [Restriction: Re-Restricted](https://www.curseforge.com/minecraft/mc-mods/restriction-re-restricted) (by [Darkere](https://www.curseforge.com/members/Darkere/projects))
-   [Rubidium](https://www.curseforge.com/minecraft/mc-mods/rubidium) (by [Asek3](https://www.curseforge.com/members/Asek3/projects))

### Improvement

-   Hand over your items
    > You can give items on your hand to your firends simply by shift-right-click your friends, no need to toss items around anymore!
-   Right-click block conversion
    > Shift-right-click a block with something in your hand, boom, a new block. If you don't want to do it by hand, don't worry, it also comes with a Create Deploying recipe.
-   Allow manually enhancing Revolver
    > You can makes your Revolver better through custom recipes, instead of completely relying on Villager Trades
-   rework Betterend::infusion recipe for enchantment book
    > Including refactoring existed recipe for more than 30 kinds of enchantment. Also added recipes for two powerful enchantment
-   Runed Marble now require Golden Leaves
-   [Expert] Rework Storage Drawers recipe to merge hundreds of similar recipe into one
    > Storage Drawers recipe rework for normal mode coming soon.
-   Rework Chest/Sign/CraftingTable recipes to merge hundreds of similar recipe into one
-   rework GameStage and Restriction feature, no additional mods required now!
-   Rework Tooltips and JEI Descriptions to make them localizable
    > This improvement has been brought back to original E6E
-   Cutting recipe for turning Root into Root(item)
    > This improvement has been brought back to original E6E
-   A new recipe for 'catching' koi from koi_bucket
-   A new way of producing Flux Dust, using Matter Block
-   Ender Cell now require Conductive Frame
-   Enable Crate and Backpack from Quark
-   Enable Cake slices for Neapolitan cakes
-   and many recipe changes, and internal changes, and many config cleanup, and ...

### Bugfixes

-   Flux Nugget recipe
-   Immersive Cooking scrpits not fully removed
-   packmode accepts invalid modes
-   Serenity effect blocking nearly any spawns
-   Supplementaries Manual not in Akashic Tome
-   Life Mending too hard to obtain after Eidolon removal

---

## Enlightened6 - 2.3.1 -> 2.3.9

## This is a preview version of 2.4.0 update, so there can be problems. If you encounter any issue, please report it on [Github Issue page](https://github.com/ZZZank/Enlightened6/issues).

### Mods Added

-   [Not Enough Recipe Book [NERB]](https://www.curseforge.com/minecraft/mc-mods/notenoughrecipebook) (by [SSKirillSS](https://www.curseforge.com/members/SSKirillSS/projects))

### Mods Removed

-   [Game Stages](https://www.curseforge.com/minecraft/mc-mods/game-stages) (by [DarkhaxDev](https://www.curseforge.com/members/DarkhaxDev/projects))
-   [Restriction: Re-Restricted](https://www.curseforge.com/minecraft/mc-mods/restriction-re-restricted) (by [Darkere](https://www.curseforge.com/members/Darkere/projects))

### Improvement

Full changelog will be avaliable when 2.4.0 is released.

-   New feature: Hand over your items
-   New: enable Compact Crafting
-   rework GameStage and Restriction feature
-   right-click recipe
-   ...

### Bugfixes

-   ...

---

## Enlightened6 & Enlightened6Expert - 2.3.0 -> 2.3.1

_Using Forge-1.16.5-36.2.39_ | _[Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.3.1.md)_ | _[Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.3.1.md)_

### Fixes

-   Quests were not touched with removal of RFTools Power [#7](https://github.com/ZZZank/Enlightened6/issues/7)
-   Fake player can open lootbox, without obtaining anything

---

## Enlightened6 & Enlightened6Expert - 2.2.1 -> 2.3.0

_Using Forge-1.16.5-36.2.39_ | _[Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.3.0.md)_ | _[Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.3.0.md)_

### Mods Added

-   [Lightspeed - Launch optimizations](https://www.curseforge.com/minecraft/mc-mods/lightspeedmod) (by [ccr4ft3r](https://www.curseforge.com/members/ccr4ft3r/projects))

### Mods Removed

-   [RFTools Power](https://www.curseforge.com/minecraft/mc-mods/rftools-power) (by [McJty](https://www.curseforge.com/members/McJty/projects))

### Fixes

-   [Expert] new tainted_gold recipe causing patchouli error
-   redunduant recipes in ArsArsenal
-   [Expert] ingredient Buffer-s not craftable

### Improvements

-   HUGE internal changes, for standardlization and performance
-   add trades for Neapolitan seeds
-   add unboxing of actual lootbox item
-   replace rewards in Quests with actual lootbox item
-   hide TCon tools in JEI

---

## Enlightened6 & Enlightened6Expert - 2.2.0 -> 2.2.1

## Due to Eidolon removal, this version is a BREAKING CHANGE! please be cautious if you want to open old worlds in this version

_Using Forge-1.16.5-36.2.39_ | _[Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.2.1.md)_ | _[Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.2.1.md)_

### Improvements

-   allow using compressed_iron_block to buff cobble output
-   [Expert] make Thermal rock_gen avaliable much much earlier
-   a new recpie for fish_bones

---

## Enlightened6 & Enlightened6Expert - 2.1.0 -> 2.2.0

## Due to Eidolon removal, this version is a BREAKING CHANGE! please be cautious if you want to open old worlds in this version

_Using Forge-1.16.5-36.2.39_ | _[Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.2.0.md)_ | _[Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.2.0.md)_

### Mods Added

-   [AE2 Fluid Crafting Rework](https://www.curseforge.com/minecraft/mc-mods/ae2-fluid-crafting-rework) (by [GlodBlock](https://www.curseforge.com/members/GlodBlock/projects))
-   [Mouse Tweaks](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks) (by [YaLTeR](https://www.curseforge.com/members/YaLTeR/projects))
-   [Not Enough Crashes (Forge)](https://www.curseforge.com/minecraft/mc-mods/not-enough-crashes-forge) (by [NatanFudge](https://www.curseforge.com/members/NatanFudge/projects))

### Mods Removed

-   [Bed Benefits](https://www.curseforge.com/minecraft/mc-mods/bed-benefits) (by [DarkhaxDev](https://www.curseforge.com/members/DarkhaxDev/projects))
-   [Eidolon](https://www.curseforge.com/minecraft/mc-mods/eidolon) (by [elucent\_](https://www.curseforge.com/members/elucent_/projects))
-   [Equipment Compare [Forge]](https://www.curseforge.com/minecraft/mc-mods/equipment-compare) (by [Grend_G](https://www.curseforge.com/members/Grend_G/projects))
-   [Interactive Corporea](https://www.curseforge.com/minecraft/mc-mods/interactive-corporea) (by [shBLOCK\_](https://www.curseforge.com/members/shBLOCK_/projects))
-   [Nature's Starlight](https://www.curseforge.com/minecraft/mc-mods/natures-starlight) (by [Ellpeck](https://www.curseforge.com/members/Ellpeck/projects))
-   [Portality](https://www.curseforge.com/minecraft/mc-mods/portality) (by [Buuz135](https://www.curseforge.com/members/Buuz135/projects))
-   [Pretty Pipes](https://www.curseforge.com/minecraft/mc-mods/pretty-pipes) (by [Ellpeck](https://www.curseforge.com/members/Ellpeck/projects))
-   [Pretty Pipes: Fluids](https://www.curseforge.com/minecraft/mc-mods/pretty-pipes-fluids) (by [Quarris](https://www.curseforge.com/members/Quarris/projects))
-   [The Mighty Architect](https://www.curseforge.com/minecraft/mc-mods/the-mighty-architect) (by [simibubi](https://www.curseforge.com/members/simibubi/projects))
-   [Useful Railroads](https://www.curseforge.com/minecraft/mc-mods/useful-railroads) (by [HyCraftHD](https://www.curseforge.com/members/HyCraftHD/projects))

### Improvements

-   Add a new quest introducing Name Press
-   [Expert] new Wicked Altar structure
-   Encased Fan now provides higher speed when used as Kinetics sources
-   Koi no longer spawns naturally, instead, it can be crafted
-   Add a new recipe for obtaining Elder Prismarine

---

## Enlightened6 & Enlightened6Expert - 2.0.1 -> 2.1.0

_Using Forge-1.16.5-36.2.39_ | _[Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.1.0.md)_ | _[Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.1.0.md)_

### Mods Added

-   [Chunk Sending[Forge/Fabric]](https://www.curseforge.com/minecraft/mc-mods/chunk-sending-forge-fabric) (by [someaddon](https://www.curseforge.com/members/someaddon/projects))
-   [Server Performance - Smooth Chunk Save[Forge/Fabric]](https://www.curseforge.com/minecraft/mc-mods/smooth-chunk-save) (by [someaddon](https://www.curseforge.com/members/someaddon/projects))
-   [Starlight x Create](https://www.curseforge.com/minecraft/mc-mods/starlight-x-create) (by [SirOMGitsYOU](https://www.curseforge.com/members/SirOMGitsYOU/projects))

### Mods Removed

-   [Crash Utilities](https://www.curseforge.com/minecraft/mc-mods/crash-utilities) (by [Darkere](https://www.curseforge.com/members/Darkere/projects))
-   [Mouse Tweaks](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks) (by [YaLTeR](https://www.curseforge.com/members/YaLTeR/projects))
-   [Radon](https://www.curseforge.com/minecraft/mc-mods/radon) (by [Asek3](https://www.curseforge.com/members/Asek3/projects))
-   [RoadRunner](https://www.curseforge.com/minecraft/mc-mods/roadrunner) (by [MaxNeedsSnacks](https://www.curseforge.com/members/MaxNeedsSnacks/projects))

### Improvements

-   Buff neapolitan:adzuki_currya stack size
-   Redirect rewards in some quests

### Bugfixes

-   Farmer's/Scanvenger's Delight gives nothing

---

### Enigmatica6Unofficial & Enigmatica6UnofficialExpert v2.0.1

_Using Forge-1.16.5-36.2.39_ | _[Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.0.1.md)_ | _[Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.0.1.md)_

**Improvements**

-   Tweak Ultimate Potato quest in Challenges Chapter

**Bugfixes**

-   Farmer's/Scanvenger's Delight gives nothing

---

### Enigmatica6Unofficial & Enigmatica6UnofficialExpert v2.0.1

_Using Forge-1.16.5-36.2.39_ | _[Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.0.1.md)_ | _[Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.0.1.md)_

**Improvements**

-   Tweak mixin configs of ModernFix and RoadRunner, to prevent potential conflicts

**Bugfixes**

-   Unable to craft chest using Aspen Planks
-   xxxx's Delight gives nothing

---

### Enigmatica6Enlightened & Enigmatica6EnlightenedExpert v2.0.0

_Using Forge-1.16.5-36.2.39_ | _[Mod Updates](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/changelog_mods_2.0.0.md)_ | _[Modlist](https://github.com/ZZZank/Enigmatica6Enlightened/blob/enlightened_master/changelogs/modlist_2.0.0.md)_

**Mods added (compared with E6 1.8.0)**

-   [[Forge] AE2 Additional Opportunity](https://www.curseforge.com/minecraft/mc-mods/forge-ae2-additional-opportunity) (by [DomamaN202](https://www.curseforge.com/members/DomamaN202/projects))
-   [AE Additions - ExtraCells2 Fork](https://www.curseforge.com/minecraft/mc-mods/ae-additions-extra-cells-2-fork) (by [MasterYodAT9G](https://www.curseforge.com/members/MasterYodAT9G/projects))
-   [AEInfinityBooster](https://www.curseforge.com/minecraft/mc-mods/aeinfinitybooster) (by [hexeptiondev](https://www.curseforge.com/members/hexeptiondev/projects))
-   [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2) (by [thetechnici4n](https://www.curseforge.com/members/thetechnici4n/projects))
-   [Applied Energistics 2 Wireless Terminals Forge](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2-wireless-terminals-forge) (by [tfarecnim](https://www.curseforge.com/members/tfarecnim/projects))
-   [DataFixerSlayer (improves RAM usage)](https://www.curseforge.com/minecraft/mc-mods/datafixerslayer) (by [Vazkii](https://www.curseforge.com/members/Vazkii/projects))
-   [Farsight: Spyglasses](https://www.curseforge.com/minecraft/mc-mods/farsight-spyglasses) (by [HerrBrandstetter](https://www.curseforge.com/members/HerrBrandstetter/projects))
-   [ModernFix](https://www.curseforge.com/minecraft/mc-mods/modernfix) (by [embeddedt](https://www.curseforge.com/members/embeddedt/projects))
-   [Neapolitan](https://www.curseforge.com/minecraft/mc-mods/neapolitan) (by [TeamAbnormals](https://www.curseforge.com/members/TeamAbnormals/projects))
-   [PackagedAuto](https://www.curseforge.com/minecraft/mc-mods/packagedauto) (by [TheLMiffy1111](https://www.curseforge.com/members/TheLMiffy1111/projects))
-   [Quark Oddities](https://www.curseforge.com/minecraft/mc-mods/quark-oddities) (by [Vazkii](https://www.curseforge.com/members/Vazkii/projects))
-   [Radon](https://www.curseforge.com/minecraft/mc-mods/radon) (by [Asek3](https://www.curseforge.com/members/Asek3/projects))
-   [Redstone Arsenal](https://www.curseforge.com/minecraft/mc-mods/redstone-arsenal) (by [TeamCoFH](https://www.curseforge.com/members/TeamCoFH/projects))
-   [Rubidium](https://www.curseforge.com/minecraft/mc-mods/rubidium) (by [Asek3](https://www.curseforge.com/members/Asek3/projects))

**Mods removed (compared with E6 1.8.0)**

-   [/tank/null](https://www.curseforge.com/minecraft/mc-mods/tank-null) (by [tfarecnim](https://www.curseforge.com/members/tfarecnim/projects))
-   [Advanced Peripherals](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals) (by [srrendi](https://www.curseforge.com/members/srrendi/projects))
-   [AIOT Botania](https://www.curseforge.com/minecraft/mc-mods/aiot-botania) (by [MelanX](https://www.curseforge.com/members/MelanX/projects))
-   [Atmospheric](https://www.curseforge.com/minecraft/mc-mods/atmospheric) (by [TeamAbnormals](https://www.curseforge.com/members/TeamAbnormals/projects))
-   [CC: Tweaked](https://www.curseforge.com/minecraft/mc-mods/cc-tweaked) (by [SquidDev](https://www.curseforge.com/members/SquidDev/projects))
-   [Chisel](https://www.curseforge.com/minecraft/mc-mods/chisel) (by [tterrag1098](https://www.curseforge.com/members/tterrag1098/projects))
-   [Chisels & Bits - For Forge](https://www.curseforge.com/minecraft/mc-mods/chisels-bits) (by [AlgorithmX2](https://www.curseforge.com/members/AlgorithmX2/projects))
-   [Connected Glass](https://www.curseforge.com/minecraft/mc-mods/connected-glass) (by [SuperMartijn642](https://www.curseforge.com/members/SuperMartijn642/projects))
-   [Cycle Paintings](https://www.curseforge.com/minecraft/mc-mods/cycle-paintings) (by [Serilum](https://www.curseforge.com/members/Serilum/projects))
-   [Dank Storage](https://www.curseforge.com/minecraft/mc-mods/dank-storage) (by [tfarecnim](https://www.curseforge.com/members/tfarecnim/projects))
-   [Diagonal Fences](https://www.curseforge.com/minecraft/mc-mods/diagonal-fences) (by [Fuzs](https://www.curseforge.com/members/Fuzs/projects))
-   [Emojiful](https://www.curseforge.com/minecraft/mc-mods/emojiful) (by [Buuz135](https://www.curseforge.com/members/Buuz135/projects))
-   [Enigmatic Graves](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves) (by [Quarris](https://www.curseforge.com/members/Quarris/projects))
-   [Entity Culling](https://www.curseforge.com/minecraft/mc-mods/entity-culling) (by [meldexun](https://www.curseforge.com/members/meldexun/projects))
-   [ExtraStorage](https://www.curseforge.com/minecraft/mc-mods/extrastorage) (by [3divad99](https://www.curseforge.com/members/3divad99/projects))
-   [Gauges and Switches](https://www.curseforge.com/minecraft/mc-mods/redstone-gauges-and-switches) (by [wilechaote](https://www.curseforge.com/members/wilechaote/projects))
-   [Immersive Cooking](https://www.curseforge.com/minecraft/mc-mods/immersive-cooking) (by [CrimsonDragonRider](https://www.curseforge.com/members/CrimsonDragonRider/projects))
-   [Inventory Tweaks Renewed](https://www.curseforge.com/minecraft/mc-mods/inventory-tweaks-renewed) (by [godemperordoge](https://www.curseforge.com/members/godemperordoge/projects))
-   [Iron Jetpacks](https://www.curseforge.com/minecraft/mc-mods/iron-jetpacks) (by [BlakeBr0](https://www.curseforge.com/members/BlakeBr0/projects))
-   [JourneyMap](https://www.curseforge.com/minecraft/mc-mods/journeymap) (by [techbrew](https://www.curseforge.com/members/techbrew/projects))
-   [JourneyMap Integration](https://www.curseforge.com/minecraft/mc-mods/journeymap-integration) (by [frankv\_](https://www.curseforge.com/members/frankv_/projects))
-   [KleeSlabs](https://www.curseforge.com/minecraft/mc-mods/kleeslabs) (by [BlayTheNinth](https://www.curseforge.com/members/BlayTheNinth/projects))
-   [Lazy DataFixerUpper(LazyDFU) [FORGE]](https://www.curseforge.com/minecraft/mc-mods/lazy-dfu-forge) (by [Corgi_Taco](https://www.curseforge.com/members/Corgi_Taco/projects))
-   [Macaw's Roofs](https://www.curseforge.com/minecraft/mc-mods/macaws-roofs) (by [sketch_macaw](https://www.curseforge.com/members/sketch_macaw/projects))
-   [MrCrayfish's More Furniture Mod](https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-more-furniture-mod) (by [MrCrayfish](https://www.curseforge.com/members/MrCrayfish/projects))
-   [Neat](https://www.curseforge.com/minecraft/mc-mods/neat) (by [Vazkii](https://www.curseforge.com/members/Vazkii/projects))
-   [Pane In The Glass](https://www.curseforge.com/minecraft/mc-mods/pane-in-the-glass) (by [MongoTheElder](https://www.curseforge.com/members/MongoTheElder/projects))
-   [Passthrough Signs](https://www.curseforge.com/minecraft/mc-mods/passthrough-signs) (by [Girafi](https://www.curseforge.com/members/Girafi/projects))
-   [Pedestals](https://www.curseforge.com/minecraft/mc-mods/pedestals) (by [Mowmaster](https://www.curseforge.com/members/Mowmaster/projects))
-   [Personality](https://www.curseforge.com/minecraft/mc-mods/personality) (by [TeamAbnormals](https://www.curseforge.com/members/TeamAbnormals/projects))
-   [Quickstack](https://www.curseforge.com/minecraft/mc-mods/quickstack) (by [tfarecnim](https://www.curseforge.com/members/tfarecnim/projects))
-   [Ranged Pumps](https://www.curseforge.com/minecraft/mc-mods/ranged-pumps) (by [raoulvdberge](https://www.curseforge.com/members/raoulvdberge/projects))
-   [Refined Cooking](https://www.curseforge.com/minecraft/mc-mods/refined-cooking) (by [ItsSebastrn](https://www.curseforge.com/members/ItsSebastrn/projects))
-   [Refined Storage](https://www.curseforge.com/minecraft/mc-mods/refined-storage) (by [raoulvdberge](https://www.curseforge.com/members/raoulvdberge/projects))
-   [Refined Storage Addons](https://www.curseforge.com/minecraft/mc-mods/refined-storage-addons) (by [raoulvdberge](https://www.curseforge.com/members/raoulvdberge/projects))
-   [Refined Storage Large Patterns](https://www.curseforge.com/minecraft/mc-mods/rslargepatterns) (by [TheLMiffy1111](https://www.curseforge.com/members/TheLMiffy1111/projects))
-   [Refined Storage: Requestify](https://www.curseforge.com/minecraft/mc-mods/rs-requestify) (by [Buuz135](https://www.curseforge.com/members/Buuz135/projects))
-   [RSInfinityBooster](https://www.curseforge.com/minecraft/mc-mods/rsinfinitybooster) (by [hexeptiondev](https://www.curseforge.com/members/hexeptiondev/projects))
-   [Runelic](https://www.curseforge.com/minecraft/mc-mods/runelic) (by [DarkhaxDev](https://www.curseforge.com/members/DarkhaxDev/projects))
-   [Simple Delights](https://www.curseforge.com/minecraft/mc-mods/simple-delights) (by [JesterBlue](https://www.curseforge.com/members/JesterBlue/projects))
-   [Simple Farming](https://www.curseforge.com/minecraft/mc-mods/simple-farming) (by [enemeez1](https://www.curseforge.com/members/enemeez1/projects))
-   [Small Ships [Fabric & Forge]](https://www.curseforge.com/minecraft/mc-mods/small-ships) (by [talhanation](https://www.curseforge.com/members/talhanation/projects))
-   [The Official Enigmatica Resource Pack](https://www.curseforge.com/minecraft/texture-packs/the-official-enigmatica-resource-pack-16x16) (by [Ridanisaurus](https://www.curseforge.com/members/Ridanisaurus/projects))
-   [TipTheScales](https://www.curseforge.com/minecraft/mc-mods/tipthescales) (by [Jaredlll08](https://www.curseforge.com/members/Jaredlll08/projects))
-   [Transport](https://www.curseforge.com/minecraft/mc-mods/transport) (by [Sky_Som](https://www.curseforge.com/members/Sky_Som/projects))
-   [TrashSlot](https://www.curseforge.com/minecraft/mc-mods/trashslot) (by [BlayTheNinth](https://www.curseforge.com/members/BlayTheNinth/projects))

**Other changes**
Too many. If you are interested in it, see the Github commit history.
