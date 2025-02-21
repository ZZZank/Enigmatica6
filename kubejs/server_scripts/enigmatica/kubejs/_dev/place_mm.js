(() => {
    const $HashMap = java('packages/java/util/$HashMap');
    return;

    onEvent('block.right_click', (event) => {
        const player = event.player;
        if (
            player &&
            player.creativeMode &&
            player.crouching &&
            event.hand == MAIN_HAND &&
            event.item.id == 'redstone_arsenal:obsidian_rod' &&
            player.offHandItem.id == 'projectvibrantjourneys:pearl'
        ) {
            player.tell('invoked');
            const start = event.block.pos;

            const api = $PatchouliAPI.get();
            const legend = mmData.legend;
            const maps = new $HashMap();

            mmData.layout.forEach((layer, dy) => {
                layer.forEach((line, dx) => {
                    line.split('').forEach((c, dz) => {
                        if (c == ' ') {
                            return;
                        }
                        const got = legend[c];
                        if (got == undefined) {
                            player.tell('no mapping for ' + c);
                        }
                        if (!got['match']) {
                            got['match'] = api.looseBlockMatcher(got.block);
                        }
                        maps.put(new BlockPos(dx, dy, dz), got['match']);
                    });
                });
            });

            api.showMultiblock(
                api.makeSparseMultiblock(maps),
                Text.of('example'),
                start.above(),
                'counterclockwise_90'
            );
        }
    });

    const mmData = {
        type: 'masterfulmachinery:machine_structure',
        id: 'stellar_neutron_activator_structure',
        controllerId: 'stellar_neutron_activator',
        name: 'Stellar Neutron Activator',
        layout: [
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           )         ',
                '                     ',
                '         )   )       ',
                '                     ',
                '           )         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '          ***        ',
                '    +++  ,,),,       ',
                '   ++++ *,,,,,*      ',
                '   ++++ *),-,)*      ',
                '   ++++ *,,,,,*      ',
                '    +++  ,,),,       ',
                '          ***        ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '         . / .       ',
                '                     ',
                '                     ',
                '         /   /       ',
                '                     ',
                '                     ',
                '          000        ',
                '    121  00300   /  .',
                '   144200055500      ',
                '   2442  356530     /',
                '   144200055500      ',
                '    121  00300   /  .',
                '          000        ',
                '                     ',
                '                     ',
                '         /   /       ',
                '                     ',
                '                     ',
                '         . / .       '
            ],
            [
                '          .7.        ',
                '                     ',
                '                     ',
                '         8   8       ',
                '                     ',
                '                     ',
                '          ***        ',
                '    292  ,,),,   8   ',
                '   24420*,,,,,*     .',
                '   :442 *),-,)*     7',
                '   24420*,,,,,*     .',
                '    2;2  ,,),,   8   ',
                '          ***        ',
                '                     ',
                '                     ',
                '         8   8       ',
                '                     ',
                '                     ',
                '          .7.        '
            ],
            [
                '           <         ',
                '           .         ',
                '                     ',
                '         8   8       ',
                '                     ',
                '                     ',
                '                     ',
                '    121    )     8   ',
                '   144=0             ',
                '   2442  )   )     .<',
                '   144=0             ',
                '    121    )     8   ',
                '                     ',
                '                     ',
                '                     ',
                '         8   8       ',
                '                     ',
                '           .         ',
                '           <         '
            ],
            [
                '                     ',
                '                     ',
                '           .         ',
                '       >>7>>>7>>     ',
                '      >>>>>>>>>>>    ',
                '     >>>       >>>   ',
                '     >>         >>   ',
                '    +++    ?    >7   ',
                '   +@@+A        >>   ',
                '   +@@+A ? B ?  >>.  ',
                '   +@@+A        >>   ',
                '    +++    ?    >7   ',
                '     >>         >>   ',
                '     >>>       >>>   ',
                '      >>>>>>>>>>>    ',
                '       >>7>>>7>>     ',
                '           .         ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '       <<<< <<<<     ',
                '      < <<<<<<< <    ',
                '     < <       < <   ',
                '     <<         <<   ',
                '    < <    ?    <<   ',
                '   <  D+        <<   ',
                '   <  D+ ? B ?  <    ',
                '   <  D+        <<   ',
                '    < <    ?    <<   ',
                '     <<         <<   ',
                '     < <       < <   ',
                '      < <<<<<<< <    ',
                '       <<<< <<<<     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           ?         ',
                '       A   B         ',
                '       C ?BBB?       ',
                '       A   B         ',
                '           ?         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           ?         ',
                '           B         ',
                '         ?BBB?       ',
                '           B         ',
                '           ?         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '          BBB        ',
                '         BBBBB       ',
                '          BBB        ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '          BBB        ',
                '         BBEBB       ',
                '          BBB        ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '          BBB        ',
                '         BBBBB       ',
                '         BBEBB       ',
                '         BBBBB       ',
                '          BBB        ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '          BBB        ',
                '         BBBBB       ',
                '        BBBEBBB      ',
                '         BBBBB       ',
                '          BBB        ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '          BBB        ',
                '         BBBBB       ',
                '        BBBEBBB      ',
                '        BBEFEBB      ',
                '        BBBEBBB      ',
                '         BBBBB       ',
                '          BBB        ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '          BBB        ',
                '         BBBBB       ',
                '        BBBEBBB      ',
                '       BBBEFEBBB     ',
                '        BBBEBBB      ',
                '         BBBBB       ',
                '          BBB        ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '          GHG        ',
                '                     ',
                '                     ',
                '                     ',
                '          BBB        ',
                '         BBBBB       ',
                '        BBBBBBB      ',
                '   G   BBBEFEBBB   G ',
                '   H   BBBFFFBBB   H ',
                '   G   BBBEFEBBB   G ',
                '        BBBBBBB      ',
                '          BBBB       ',
                '          BBB        ',
                '                     ',
                '                     ',
                '                     ',
                '          GHG        ',
                '                     '
            ],
            [
                '                     ',
                '        GI)J)IG      ',
                '       GG     GG     ',
                '     GGG       GGG   ',
                '     G     B     G   ',
                '    GG    BBB    GG  ',
                '   GG    BBBBB    GG ',
                '   I    BBBBBBB    I ',
                '   )   BBBEFEBBB   ) ',
                '   J  BBBBFFFBBBB  J ',
                '   )   BBBEFEBBB   ) ',
                '   I    BBBBBBB    I ',
                '   GG     BBBB    GG ',
                '    GG    BBB    GG  ',
                '     G     B     G   ',
                '     GGG       GGG   ',
                '       GG     GG     ',
                '        GI)J)IG      ',
                '                     '
            ],
            [
                '                     ',
                '        KHJLJHK      ',
                '       KK     KK     ',
                '     )KK       KK)   ',
                '     K    BBB    K   ',
                '    KK   BBBBB   KK  ',
                '   KK   BBBBBBB   KK ',
                '   H   BBBEEEBBB   H ',
                '   J  BBBEEMEEBBB  J ',
                '   L  BBBEMMMEBBB  L ',
                '   J  BBBEEMEEBBB  J ',
                '   H   BBBEEEBBB   H ',
                '   KK   BBBBBBB   KK ',
                '    KK   BBBBB   KK  ',
                '     K    BBB    K   ',
                '     )KK       KK)   ',
                '       KK     KK     ',
                '        KHJLJHK      ',
                '                     '
            ],
            [
                '                     ',
                '        GI)J)IG      ',
                '       GG     GG     ',
                '     GGG       GGG   ',
                '     G     B     G   ',
                '    GG    BBB    GG  ',
                '   GG    BBBBB    GG ',
                '   I    BBBBBBB    I ',
                '   )   BBBEFEBBB   ) ',
                '   J  BBBBFFFBBBB  J ',
                '   )   BBBEFEBBB   ) ',
                '   I    BBBBBBB    I ',
                '   GG    BBBBB    GG ',
                '    GG    BBB    GG  ',
                '     G     B     G   ',
                '     GGG       GGG   ',
                '       GG     GG     ',
                '        GI)J)IG      ',
                '                     '
            ],
            [
                '                     ',
                '          GHG        ',
                '                     ',
                '                     ',
                '                     ',
                '          BBB        ',
                '         BBBBB       ',
                '        BBBBBBB      ',
                '   G   BBBEFEBBB   G ',
                '   H   BBBFFFBBB   H ',
                '   G   BBBEFEBBB   G ',
                '        BBBBBBB      ',
                '         BBBBB       ',
                '          BBB        ',
                '                     ',
                '                     ',
                '                     ',
                '          GHG        ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '          BBB        ',
                '         BBBBB       ',
                '        BBBEBBB      ',
                '       BBBEFEBBB     ',
                '        BBBEBBB      ',
                '         BBBBB       ',
                '          BBB        ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '          BBB        ',
                '         BBBBB       ',
                '        BBBEBBB      ',
                '        BBEFEBB      ',
                '        BBBEBBB      ',
                '         BBBBB       ',
                '          BBB        ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '          BBB        ',
                '         BBBBB       ',
                '        BBBEBBB      ',
                '         BBBBB       ',
                '          BBB        ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '          BBB        ',
                '         BBBBB       ',
                '         BBEBB       ',
                '         BBBBB       ',
                '          BBB        ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '          BBB        ',
                '         BBEBB       ',
                '          BBB        ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '          BBB        ',
                '         BBBBB       ',
                '          BBB        ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '          BBB        ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '          BBB        ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ],
            [
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '           B         ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     ',
                '                     '
            ]
        ],
        legend: {
            '@': { block: 'immersiveengineering:treated_wood_horizontal' },
            A: { block: 'immersiveengineering:stairs_hempcrete' },
            B: { block: 'tconstruct:light_blue_clear_stained_glass' },
            D: { block: 'pneumaticcraft:display_table' },
            E: { block: 'integratedterminals:menril_glass' },
            F: { block: 'powah:niotic_crystal_block' },
            G: { block: 'bloodmagic:dungeon_tile_slab' },
            H: { block: 'bloodmagic:dungeon_pillar_cap' },
            I: { block: 'bloodmagic:dungeon_brick_stairs' },
            J: { block: 'bloodmagic:dungeon_pillar_special' },
            K: { block: 'betterendforge:terminite_bars' },
            L: { block: 'masterfulmachinery:stellar_neutron_activator_mana_port_botania_mana_input' },
            M: { block: 'powah:nitro_crystal_block' },
            ')': { block: 'betterendforge:aeternium_block' },
            '*': { block: 'botania:mossy_livingrock_bricks_slab' },
            '+': { block: 'immersiveengineering:hempcrete' },
            ',': { block: 'botania:mossy_livingrock_bricks_stairs' },
            '-': { block: 'powah:spirited_crystal_block' },
            '.': { block: 'engineersdecor:steel_catwalk_stairs' },
            '/': { block: 'engineersdecor:thin_steel_pole_head' },
            0: { block: 'create:fluid_pipe' },
            1: { block: 'immersiveengineering:storage_steel' },
            2: { block: 'immersiveengineering:sheetmetal_steel' },
            3: { block: 'botania:mana_diamond_block' },
            4: { block: 'immersiveengineering:heavy_engineering' },
            5: { block: 'botania:bifrost_perm' },
            6: { block: 'botania:terrasteel_block' },
            7: { block: 'engineersdecor:steel_catwalk_ta' },
            8: { block: 'engineersdecor:thin_steel_pole' },
            9: { block: 'masterfulmachinery:stellar_neutron_activator_fluid_port_fluids_input' },
            ':': { block: 'masterfulmachinery:stellar_neutron_activator_energy_port_energy_input' },
            ';': { block: 'masterfulmachinery:stellar_neutron_activator_fluid_port_fluids_output' },
            '<': { block: 'engineersdecor:steel_railing' },
            '=': { block: 'create:fluid_tank' },
            '>': { block: 'engineersdecor:steel_floor_grating' },
            '?': { block: 'betterendforge:thallasium_chain' },
            C: { block: 'masterfulmachinery:stellar_neutron_activator_controller' }
        }
    };
})();
