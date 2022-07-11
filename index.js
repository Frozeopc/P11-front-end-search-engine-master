// JS de la page d'accueil

// import { recipes } from "./data/data.js";
// import { recipeFactory } from "./models/recipe.js";


// const inputSearchbar = document.querySelector('#searchbar');
const inputSearchAppliance = document.querySelector('#applianceSearchbar');
const inputSearchUstensil = document.querySelector('#ustensilSearchbar');
const inputSearchIngredient = document.querySelector('#ingredientSearchbar');
const dropdownIngredient = document.querySelector('#dropdown-ingredient');
const dropdownAppliance = document.querySelector('#dropdown-appliance');
const dropdownUstensil = document.querySelector('#dropdown-ustensil');
const dropdownIngredientButton = document.querySelector('#dropdownIngredientButton');
const dropdownListIngredient = new bootstrap.Dropdown(dropdownIngredientButton);
const dropdownApplianceButton = document.querySelector('#dropdownApplianceButton');
const dropdownListAppliance = new bootstrap.Dropdown(dropdownApplianceButton);
const dropdownUstensilButton = document.querySelector('#dropdownUstensilButton');
const dropdownListUstensil = new bootstrap.Dropdown(dropdownUstensilButton);






//recherche par ingrédient 
dropdownIngredientButton.addEventListener('click', function (event) {
    console.log('ceci est mon tableau de recette filtré', arrResults);
    displayIngredientsDropdown(inputSearchIngredient.value);

})


inputSearchIngredient.addEventListener('keyup', function (event) {
    displayIngredientsDropdown(this.value);
    dropdownListIngredient.show();
    inputSearchIngredient.focus();

})
//recherche par appareil 
dropdownApplianceButton.addEventListener('click', function (event) {
    displayApplianceDropdown(inputSearchAppliance.value);

})


inputSearchAppliance.addEventListener('keyup', function (event) {
    displayApplianceDropdown(this.value)
    dropdownListAppliance.show();
    inputSearchAppliance.focus();
})

dropdownUstensilButton.addEventListener('click', function (event) {
    displayUstensilsDropdown(inputSearchUstensil.value);

})

// recherche par ustensil
inputSearchUstensil.addEventListener('keyup', function (event) {
    displayUstensilsDropdown(this.value)
    dropdownListUstensil.show();
    inputSearchUstensil.focus();

})

function displayIngredientsDropdown(value) {
    const arrIngredients = filterIngredients(arrResults);
    //rajout addeventlistener
    dropdownIngredient.innerHTML = searchAutocompletion(arrIngredients, value, "ingredient");

}

function displayApplianceDropdown(value) {
    const arrAppliance = filterAppliance(arrResults);

    dropdownAppliance.innerHTML = searchAutocompletion(arrAppliance, value, "appliance");

}

function displayUstensilsDropdown(value) {
    const arrUstensils = filterUstensils(arrResults);

    dropdownUstensil.innerHTML = searchAutocompletion(arrUstensils, value, "ustensil");

}

// appel de la fonction affichage de toutes les recettes
// function displayRecipes(recipes) {
//     const recipesSection = document.querySelector(".container__recipes");
//     let contentHTML = "";
//     recipes.forEach(recipe => {
//         let recipeModel = recipeFactory(recipe);
//         let recipeCardDom = recipeModel.getRecipeCardDom();
//         contentHTML += recipeCardDom;
//     });
//     recipesSection.innerHTML = contentHTML;
// }

async function init() {

    displayRecipes(recipes);

};

init();
