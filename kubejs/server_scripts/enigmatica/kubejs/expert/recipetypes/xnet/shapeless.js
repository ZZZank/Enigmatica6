onEventExpert('recipes', (event) => {
    /*
        ,
        {
            output: '',
            inputs: [''],
            id: ''
        }
    */

    const recipes = [
        {
            output: 'xnet:connector_upgrade',
            inputs: [
                '#forge:paper',
                '#forge:dusts/flux_infused',
                '#forge:gems/diamond',
                '#forge:gems/diamond'
            ],
            id: 'xnet:connector_upgrade'
        },
        {
            output: 'xnet:advanced_connector_routing',
            inputs: [
                `xnet:connector_routing`,
                '#forge:dusts/flux_infused',
                '#forge:gems/diamond',
                '#forge:gems/diamond'
            ],
            id: 'xnet:advanced_connector_routing'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });

    ['red', 'green', 'blue', 'yellow'].forEach((color) => {
        event
            .shapeless(Item.of(`xnet:advanced_connector_${color}`), [
                `xnet:connector_${color}`,
                '#forge:dusts/flux_infused',
                '#forge:gems/diamond',
                '#forge:gems/diamond'
            ])
            .id(`xnet:advanced_connector_${color}`);
    });
});
