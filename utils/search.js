let arrResults = recipes;
const inputSearchbar = document.querySelector('#searchbar');


inputSearchbar.addEventListener('keyup', function (event) {

    search(inputSearchbar.value);

});

function search(valueSearch) {
    arrResults = recipes;
    // filtre des recettes en fonction de la barre de recherche (sur nom, description et ingrédients)
    if (valueSearch !== null && valueSearch.length > 2) {

        let strSearch = valueSearch.toLowerCase();
        strSearch = strSearch.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        arrResults = arrResults.filter((recipe) =>
            recipe.ingredients.some((ingredient) =>
                ingredient.ingredient
                    .toLowerCase()
                    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                    .includes(strSearch)
            ) ||
            recipe.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(strSearch) ||
            recipe.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(strSearch)

        );
    }

    // filtre des recettes en fonction des tags sélectionnés
    let tagList = document.querySelectorAll('.tag');

    tagList.forEach(tag => {

        switch (tag.dataset.type) {
            case 'ingredient':
                arrResults = arrResults.filter((recipe) =>
                    recipe.ingredients.some((ingredient) =>
                        ingredient.ingredient
                            .toLowerCase()
                            .includes(tag.dataset.name)
                    )
                );
                break;
            case 'appliance':
                arrResults = arrResults.filter((recipe) =>
                    recipe.appliance.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(tag.dataset.name)
                );
                break;
            case 'ustensil':
                arrResults = arrResults.filter((recipe) =>
                    recipe.ustensils.some((ustensil) =>
                        ustensil.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(tag.dataset.name))

                );
                break;
        }

    });

    // appel de la fonction pour afficher les recettes en fonction des filtres
    displayRecipes(arrResults);

}