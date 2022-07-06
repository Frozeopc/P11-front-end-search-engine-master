let arrResults = recipes;
const inputSearchbar = document.querySelector('#searchbar');

inputSearchbar.addEventListener('keyup', function (event) {

    search(inputSearchbar.value)

})

function search(valueSearch) {
    arrResults = recipes
    //BRANCH 2
    if (valueSearch !== null && valueSearch.length > 2) {

        var strSearch = valueSearch.toLowerCase();
        strSearch = strSearch.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        arrResults = arrResults.filter((recipe) =>
            recipe.ingredients.some((ingredient) =>
                ingredient.ingredient
                    .toLowerCase()
                    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                    .includes(strSearch)
            )
            || recipe.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(strSearch)
            || recipe.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(strSearch)

        )
    }


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
                )
                break;
            case 'appliance':
                arrResults = arrResults.filter((recipe) =>
                    recipe.appliance.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(tag.dataset.name)
                )
                break;
            case 'ustensil':
                arrResults = arrResults.filter((recipe) =>
                    recipe.ustensils.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(tag.dataset.name)
                )
                break;
        }

    })

    displayRecipes(arrResults);

}