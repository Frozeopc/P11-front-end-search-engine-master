// JS de la page d'accueil

import { recipes } from "./data/data.js";
import { recipeFactory } from "./models/recipe.js";


const inputSearchbar = document.querySelector('#searchbar');
const inputSearchAppliance = document.querySelector('#applianceSearchbar');
const inputSearchUstensil = document.querySelector('#ustensilSearchbar');
const inputSearchIngredient = document.querySelector('#ingredientSearchbar');
var arrResults = new Array();

inputSearchbar.addEventListener('keyup', function (event) {
    if (inputSearchbar.value.length < 3) return;
    arrResults = search(recipes, inputSearchbar.value)
    console.log(arrResults);
    displayRecipes(arrResults);
})

//recherche par ingrédient //enlever arringredients de addeventlistener
inputSearchIngredient.addEventListener('keyup', function (event) {
    const arrIngredients = filterIngredients(recipes);
    //la fonction retourne un string HTML pour l'afficher en dessus de l'input recherche ingrédient
    searchAutocompletion(arrIngredients, this.value);

})

//recherche par appareil // 
inputSearchAppliance.addEventListener('keyup', function (event) {
    const arrAppliance = filterAppliance(recipes);

    //la fonction retourne un string HTML pour l'afficher en dessus de l'input recherche ingrédient
    searchAutocompletion(arrAppliance, this.value);

})

// recherche par ustensil
inputSearchUstensil.addEventListener('keyup', function (event) {
    const arrUstensils = filterUstensils(recipes);

    //la fonction retourne un string HTML pour l'afficher en dessus de l'input recherche ingrédient
    searchAutocompletion(arrUstensils, this.value);

})

// appel de la fonction affichage de toutes les recettes
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

async function init() {

    displayRecipes(recipes);

};

init();
