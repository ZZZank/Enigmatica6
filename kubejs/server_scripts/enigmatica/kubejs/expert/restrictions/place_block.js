
restrictions.block_place = [
    /*
    {
        blocks: [],
        dimension: '', // the restricted block must be placed in specific dimension
        stageUnlock: '', // the restricted block can be placed anywhere by player who has this stage
        additional: (event) => {return true}, //optioanl
        errorMessage: ''
    },
    */
    {
        blocks: ['occultism:sacrificial_bowl'],
        dimension: 'atum:atum',
        stageUnlock: 'red_chalk',
        // additional: (event) => {return true},
        errorMessage: `${restrictions.prefix}red_chalk`
    },
    {
        blocks: [
            'bloodmagic:altar',
            'bloodmagic:alchemytable',
            'bloodmagic:demoncrucible',
            'bloodmagic:demoncrystallizer',
            'bloodmagic:soulforge',
            'bloodmagic:alchemicalreactionchamber',
            'bloodmagic:incensealtar'
        ],
        dimension: 'undergarden:undergarden',
        stageUnlock: 'master_blood_orb',
        errorMessage: `${restrictions.prefix}master_blood_orb`
    }
];

onEvent('block.place', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const block = event.block;
    const entity = event.entity;

    const isValid = (restriction) => {
        if (restriction.stageUnlock && entity.stages.has(restriction.stageUnlock)) {
            return true;
        }
        if (restriction.dimension && restriction.dimension != block.dimension) {
            return false;
        }
        if (restriction.additional && !restriction.additional(event)) {
            return false;
        }
        return true;
    };

    for (let restriction of restrictions.block_place) {
        if (restriction.blocks.indexOf(block.id) == -1) {
            continue;
        }
        // Restricted blocks must be placed by player
        if (!entity || !entity.player || entity.fake) {
            event.cancel();
            return;
        }
        if (!isValid(restriction)) {
            entity.tell(Text.translate(restriction.errorMessage).red());
            event.cancel();
            return;
        }
    }
});
