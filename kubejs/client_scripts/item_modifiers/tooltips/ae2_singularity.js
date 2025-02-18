{
    const keyNBT = 'freq';
    const emojis = '─│┌┐└┘├┤┬┴┼═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬▀▄█▌▐░▒▓⚠⚡⚥✂✉✎✔✘❄❣❤⭐'.split('');
    /**
     * @type {import("packages/dev/latvian/mods/rhino/mod/util/color/$Color").$Color$$Type[]}
     */
    const colorsAe = [
        // 'black',
        'dark_blue',
        'dark_green',
        'dark_aqua',
        // 'dark_red',
        'dark_purple',
        // 'gold',
        'gray',
        // 'dark_gray',
        'blue',
        'green',
        'aqua',
        // 'red',
        'light_purple',
        // 'yellow',
        'white'
    ];

    const cutDownLen = emojis.length * colorsAe.length;
    const splitLen = colorsAe.length;

    /**
     * @param {long} freq
     */
    function emojifiedFreq(freq) {
        if (freq == 0) {
            return Text.string('0');
        }
        const emojified = Text.of('Freq').green().append(Text.of(': ').white());
        if (freq < 0) {
            freq = -freq;
            emojified.append('-');
        }
        let hasNext = true;
        while (hasNext) {
            //do not use "const" in loop, fuck you rhino
            let cut = freq % cutDownLen;
            freq = Math.floor(freq / cutDownLen);
            emojified.append(
                Text.string(emojis[Math.floor(cut / splitLen)]).color(colorsAe[Math.floor(cut % splitLen)])
            );
            hasNext = freq != 0;
        }
        return emojified;
    }

    /*
    onEvent('block.right_click', event=>{
        const {hand, player, item} = event
        if (hand != MAIN_HAND
            || !player.creativeMode
            || !player.crouching
            || !item
            || item.id != "appliedenergistics2:quantum_entangled_singularity"
        ) {
            return
        }
        const e = emojifiedFreq(item.nbt.getLong(keyNBT))
        e.siblings.forEach(p => {
            player.tell(p)
        })
        player.tell(emojis)
        player.tell(emojis.length)
        player.tell(emojis[0])
    })
        */

    onEvent('item.tooltip', (event) => {
        event.addAdvanced(
            ['appliedenergistics2:quantum_entangled_singularity'],
            (stack, isAdvanced, tooltips) => {
                if (!stack.hasNBT()) {
                    return;
                }
                const freq = stack.nbt.getLong(keyNBT);
                if (!freq) {
                    return;
                }
                tooltips.add(emojifiedFreq(freq));
            }
        );
    });
}
