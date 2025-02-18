// priority: 1005

const $PatchouliAPI = java('packages/vazkii/patchouli/api/$PatchouliAPI');

// @ts-ignore
const $Character = java('java.lang.Character');

/**
 * @param {$ResourceLocation_} id
 * @param {string[][]} pattern note that there shall be one (and only one) `0`, marking the center of multiblock
 * @param {{[x in string]: $Block_}} keymaps
 */
function PatchouliMultiblock(id, pattern, keymaps) {
    this.id = id;
    this.pattern = pattern;
    this.maps = keymaps;
}

PatchouliMultiblock.prototype = {
    makePatchouliMultiblock: function () {
        const keymaps = [];
        for (let key in this.maps) {
            let value = this.maps[key];
            keymaps.push($Character.valueOf(key), value);
        }
        return $PatchouliAPI.get().makeMultiblock(this.pattern, keymaps);
    },
    /**
     * the `event` param is only used for informing users that registering should only happens in such event,
     * and the event will not be used
     *
     * note that `$PatchouliAPI.instance.showMultiblock(...)` does not need registering
     * @param {$StartupEventJS_} event
     */
    register: function (event) {
        $PatchouliAPI.get().registerMultiblock(this.id, this.makePatchouliMultiblock());
    }
};
