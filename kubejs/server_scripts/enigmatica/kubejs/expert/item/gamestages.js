{
    const stageMap = {
        // item : stage ,
        'kubejs:medium_machinery_schematics': 'medium_machinery_schematics',
        'kubejs:heavy_machinery_schematics': 'heavy_machinery_schematics',
        'occultism:chalk_red': 'red_chalk',
        'bloodmagic:masterbloodorb': 'master_blood_orb',
        'bloodmagic:soulgemlesser': 'lesser_tartaric_gem'
    };

    onEvent('item.right_click', (event) => {
        if (global.isNormalMode) {
            return;
        }

        const player = event.player;
        if (!player || !player.player || player.fake || player.mainHandItem.empty) {
            return;
        }

        const stage_name = stageMap[player.mainHandItem.id];
        if (stage_name && !player.stages.has(stage_name)) {
            player.tell(`Gamestage Granted: ${titleCase(stage_name.replace(/_+/g, ' '))}`);
            player.stages.add(stage_name);
        }
    });
}
