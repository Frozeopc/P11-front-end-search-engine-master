let arrResults = recipes;
const inputSearchbar = document.querySelector('#searchbar');

inputSearchbar.addEventListener('keyup', function (event) {

    search(inputSearchbar.value)

})

function search(valueSearch) {
    arrResults = recipes
    if (valueSearch !== null && valueSearch.length > 2) {
        let foundArray = []
        let strSearch = valueSearch.toLowerCase();
        strSearch = strSearch.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        for (let i = 0; i < arrResults.length; i++) {
            let recipeName = arrResults[i].name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(strSearch);
            let recipeDescription = arrResults[i].description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(strSearch);
            let recipeIngredient = false;

            for (let j = 0; j < arrResults[i].ingredients.length; j++) {
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
        let foundArray = []
        switch (tag.dataset.type) {
            case 'ingredient':
                for (let i = 0; i < arrResults.length; i++) {
                    for (let j = 0; j < arrResults[i].ingredients.length; j++) {
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
                for (let i = 0; i < arrResults.length; i++) {
                    if (arrResults[i].appliance.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(tag.dataset.name)) {
                        foundArray.push(arrResults[i])
                    }
                }

                break;
            case 'ustensil':
                for (let i = 0; i < arrResults.length; i++) {
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