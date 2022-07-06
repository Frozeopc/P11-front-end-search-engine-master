// récupération des éléments HTML
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




//recherche par ingrédient (filtre)
// affichage de la liste des ingrédients
dropdownIngredientButton.addEventListener('click', function (event) {
    displayIngredientsDropdown(inputSearchIngredient.value);

});
//recherche d'un ingrédient
inputSearchIngredient.addEventListener('keyup', function (event) {
    displayIngredientsDropdown(this.value);
    dropdownListIngredient.show();
    inputSearchIngredient.focus();

});


//recherche par appareil (filtre)
// affichage de la liste des appareils
dropdownApplianceButton.addEventListener('click', function (event) {
    displayApplianceDropdown(inputSearchAppliance.value);

});
//recherche d'un appareil
inputSearchAppliance.addEventListener('keyup', function (event) {
    displayApplianceDropdown(this.value);
    dropdownListAppliance.show();
    inputSearchAppliance.focus();
});

//recherche par appareil (filtre)
// affichage de la liste des ustensiles
dropdownUstensilButton.addEventListener('click', function (event) {
    displayUstensilsDropdown(inputSearchUstensil.value);

});
// recherche d'un ustensiles
inputSearchUstensil.addEventListener('keyup', function (event) {
    displayUstensilsDropdown(this.value);
    dropdownListUstensil.show();
    inputSearchUstensil.focus();

});


function displayIngredientsDropdown(value) {
    const arrIngredients = filterIngredients(recipes);
    //rajout addeventlistener
    dropdownIngredient.innerHTML = searchAutocompletion(arrIngredients, value, "ingredient");

}

function displayApplianceDropdown(value) {
    const arrAppliance = filterAppliance(recipes);

    dropdownAppliance.innerHTML = searchAutocompletion(arrAppliance, value, "appliance");

}

function displayUstensilsDropdown(value) {
    const arrUstensils = filterUstensils(recipes);
    dropdownUstensil.innerHTML = searchAutocompletion(arrUstensils, value, "ustensil");

}


async function init() {

    displayRecipes(recipes);

};

init();
