// fonction création et intégration html des recettes
function displayRecipes(recipes) {
    const recipesSection = document.querySelector(".container__recipes");
    let contentHTML = "";
    // console.log(recipes);
    if (recipes.length != 0) {
        recipes.forEach(recipe => {
            let recipeModel = recipeFactory(recipe);
            let recipeCardDom = recipeModel.getRecipeCardDom();
            contentHTML += recipeCardDom;
        });
    } else {
        contentHTML = `<h5>Aucun résultat ne correspond à votre recherche</h5>`;
    }

    recipesSection.innerHTML = contentHTML;
}

