//let arrResults = recipes;
const inputSearchbar = document.querySelector('#searchbar');

inputSearchbar.addEventListener('keyup', function (event) {

    search(inputSearchbar.value)

})

function search(valueSearch) {
    arrResults = recipes
    if (valueSearch !== null && valueSearch.length > 2) {
        var foundArray = []
        var strSearch = valueSearch.toLowerCase();
        strSearch = strSearch.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        for (var i = 0; i < arrResults.length; i++) {
            var recipeName = arrResults[i].name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(strSearch);
            var recipeDescription = arrResults[i].description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(strSearch);
            var recipeIngredient = false;

            for (var j = 0; j < arrResults[i].ingredients.length; j++) {
                if (arrResults[i].ingredients[j].ingredient
                    .toLowerCase()
                    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                    .includes(strSearch)) {
                    recipeIngredient = true
                }
            }

            if (recipeName || recipeDescription || recipeIngredient) {
                foundArray.push(arrResults[i]);
            }
        }
        arrResults = [...new Set(foundArray)].sort();
    }


    let tagList = document.querySelectorAll('.tag');

    tagList.forEach(tag => {
        var foundArray = []
        switch (tag.dataset.type) {
            case 'ingredient':
                for (var i = 0; i < arrResults.length; i++) {
                    for (var j = 0; j < arrResults[i].ingredients.length; j++) {
                        if (arrResults[i].ingredients[j].ingredient
                            .toLowerCase()
                            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                            .includes(tag.dataset.name)) {
                            foundArray.push(arrResults[i])
                        }
                    }
                }
                break;
            case 'appliance':
                for (var i = 0; i < arrResults.length; i++) {
                    if (arrResults[i].appliance.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(tag.dataset.name)) {
                        foundArray.push(arrResults[i])
                    }
                }

                break;
            case 'ustensil':
                for (var i = 0; i < arrResults.length; i++) {
                    if (arrResults[i].ustensils.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(tag.dataset.name)) {
                        foundArray.push(arrResults[i])
                    }
                }

                break;
        }
        arrResults = [...new Set(foundArray)].sort();
    })

    displayRecipes(arrResults);

}