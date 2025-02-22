onEventExpert('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/create/pressing/';
    const recipes = [
        {
            output: 'powah:thermoelectric_plate',
            inputs: ['immersiveengineering:thermoelectric_generator'],
            id: `${id_prefix}thermoelectric_plate`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
