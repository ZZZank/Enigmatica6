


const reg = (() => {
    return RegExp(`^emendatusenigmatica:(?:${[
        'dimensional',
        'arcane',
        'potassium_nitrate',
        'sulfur',
        'apatite',
        'cinnabar',
        'bitumen',
        'fluorite',
        'certus_quartz',
        'quartz',
        'redstone',
        'lapis',
        'emerald',
        'diamond',
        'coal',
        'sapphire',
        'ruby',
        'iridium',
        'peridot'
    ].join('|')})_(?:${['clump', 'crystal', 'dirty_dust', 'shard', 'fragment', 'gravel'].join('|')})$`);
})()

const toMatch = [
    "emerald_clump",
    "emerald__clump",
    "emerald_clump_",
    "emerald_clum",
    "ruby_clum",
]
    .map(s => "emendatusenigmatica:" + s)

console.log(reg)

toMatch.forEach(s => {
    console.log(`${s} -> ${reg.test(s)}`)
})