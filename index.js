// récupération des éléments HTML
const inputSearchAppliance = document.querySelector('#applianceSearchbar');
const inputSearchUstensil = document.querySelector('#ustensilSearchbar');
const inputSearchIngredient = document.querySelector('#ingredientSearchbar');
const dropdownIngredient = document.querySelector('#dropdown-ingredient');
const dropdownAppliance = document.querySelector('#dropdown-appliance');
const dropdownUstensil = document.querySelector('#dropdown-ustensil');
const dropdownIngredientButton = document.querySelector('#dropdownIngredientButton');
const dropdownApplianceButton = document.querySelector('#dropdownApplianceButton');
const dropdownUstensilButton = document.querySelector('#dropdownUstensilButton');





//recherche par ingrédient (filtre)
// affichage de la liste des ingrédients
dropdownIngredientButton.addEventListener('click', function (event) {
    if (dropdownIngredient.classList.contains('invisible')) {
        dropdownIngredient.classList.remove('invisible');
        inputSearchIngredient.setAttribute('style', 'width:600px');
    } else {
        dropdownIngredient.classList.add('invisible');
        inputSearchIngredient.setAttribute('style', 'width:auto');
    }
    displayIngredientsDropdown(inputSearchIngredient.value);

});
//recherche d'un ingrédient
inputSearchIngredient.addEventListener('keyup', function (event) {
    if (this.value.length > 0) {
        dropdownIngredient.classList.remove('invisible');
    } else {
        dropdownIngredient.classList.add('invisible');
    }
    displayIngredientsDropdown(this.value);


});


//recherche par appareil (filtre)
// affichage de la liste des appareils
dropdownApplianceButton.addEventListener('click', function (event) {
    if (dropdownAppliance.classList.contains('invisible')) {
        dropdownAppliance.classList.remove('invisible');
        inputSearchAppliance.setAttribute('style', 'width:600px');
    } else {
        dropdownAppliance.classList.add('invisible');
        inputSearchAppliance.setAttribute('style', 'width:auto');
    }
    displayApplianceDropdown(inputSearchAppliance.value);

});
//recherche d'un appareil
inputSearchAppliance.addEventListener('keyup', function (event) {
    if (this.value.length > 0) {
        dropdownAppliance.classList.remove('invisible');
    } else {
        dropdownAppliance.classList.add('invisible');
    }
    displayApplianceDropdown(this.value);

});

//recherche par appareil (filtre)
// affichage de la liste des ustensiles
dropdownUstensilButton.addEventListener('click', function (event) {
    if (dropdownUstensil.classList.contains('invisible')) {
        dropdownUstensil.classList.remove('invisible');
        inputSearchUstensil.setAttribute('style', 'width:600px')
    } else {
        dropdownUstensil.classList.add('invisible');
        inputSearchUstensil.setAttribute('style', 'width:auto')
    }
    displayUstensilsDropdown(inputSearchUstensil.value);

});
// recherche d'un ustensiles
inputSearchUstensil.addEventListener('keyup', function (event) {
    if (this.value.length > 0) {
        dropdownUstensil.classList.remove('invisible');
    } else {
        dropdownUstensil.classList.add('invisible');
    }
    displayUstensilsDropdown(this.value);


});


function displayIngredientsDropdown(value) {

    let arrowDown = dropdownIngredientButton.querySelector(':scope >.arrowDown')
    let arrowUp = dropdownIngredientButton.querySelector(':scope >.arrowUp')
    if (dropdownIngredient.classList.contains('invisible')) {
        arrowDown.setAttribute('style', 'display:inline;');
        arrowUp.setAttribute('style', 'display:none;');
    } else {
        arrowDown.setAttribute('style', 'display:none;');
        arrowUp.setAttribute('style', 'display:inline;');
    }
    const arrIngredients = filterIngredients(arrResults);
    //rajout addeventlistener
    dropdownIngredient.innerHTML = searchAutocompletion(arrIngredients, value, "ingredient");

}

function displayApplianceDropdown(value) {

    let arrowDown = dropdownApplianceButton.querySelector(':scope >.arrowDown')
    let arrowUp = dropdownApplianceButton.querySelector(':scope >.arrowUp')
    if (dropdownAppliance.classList.contains('invisible')) {
        arrowDown.setAttribute('style', 'display:inline;');
        arrowUp.setAttribute('style', 'display:none;');
    } else {
        arrowDown.setAttribute('style', 'display:none;');
        arrowUp.setAttribute('style', 'display:inline;');
    }
    const arrAppliance = filterAppliance(arrResults);

    dropdownAppliance.innerHTML = searchAutocompletion(arrAppliance, value, "appliance");

}

function displayUstensilsDropdown(value) {

    let arrowDown = dropdownUstensilButton.querySelector(':scope >.arrowDown')
    let arrowUp = dropdownUstensilButton.querySelector(':scope >.arrowUp')
    if (dropdownUstensil.classList.contains('invisible')) {
        arrowDown.setAttribute('style', 'display:inline;');
        arrowUp.setAttribute('style', 'display:none;');
    } else {
        arrowDown.setAttribute('style', 'display:none;');
        arrowUp.setAttribute('style', 'display:inline;');
    }
    const arrUstensils = filterUstensils(arrResults);
    dropdownUstensil.innerHTML = searchAutocompletion(arrUstensils, value, "ustensil");

}


async function init() {

    displayRecipes(recipes);

}

init();
