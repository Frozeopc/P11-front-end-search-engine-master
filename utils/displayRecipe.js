function displayRecipes(recipes) {
    const recipesSection = document.querySelector(".container__recipes");
    let contentHTML = "";
    recipes.forEach(recipe => {
        let recipeModel = recipeFactory(recipe);
        let recipeCardDom = recipeModel.getRecipeCardDom();
        contentHTML += recipeCardDom;
    });
    recipesSection.innerHTML = contentHTML;
}