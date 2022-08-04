// fonction récupération des ingrédients
function filterIngredients(arr) {
    let arrIngredients = [];
    let ingredients = [];
    arr.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            let strIngredients = ingredient.ingredient.toLowerCase();
            strIngredients = strIngredients.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            arrIngredients.push(strIngredients);

            ingredients = [...new Set(arrIngredients)].sort();
        });
    });
    return ingredients;
}
