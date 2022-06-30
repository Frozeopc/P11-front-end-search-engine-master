let arrResults = recipes;
const inputSearchbar = document.querySelector('#searchbar');

inputSearchbar.addEventListener('keyup', function (event) {
    if (inputSearchbar.value.length < 3 && inputSearchbar.value.length > 0) return;

    search(inputSearchbar.value)

    //displayRecipes(arrResults);
})

function search(valueSearch) {
    let foundArray = []
    //let resultArray = []
    if (valueSearch !== null) {
        var strSearch = valueSearch.toLowerCase();
        strSearch = strSearch.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        arrResults.filter(function (data) {
            data.ingredients.forEach(ingredient => {
                var strIngredient = ingredient.ingredient.toLowerCase();
                strIngredient = strIngredient.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                if (strIngredient.indexOf(strSearch) !== -1) {
                    foundArray.push(data)

                }
            })
            var strName = data.name.toLowerCase();
            strName = strName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (strName.indexOf(strSearch) !== -1) {
                foundArray.push(data)

            }
            var strDescription = data.description.toLowerCase();
            strDescription = strDescription.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (strDescription.indexOf(strSearch) !== -1) {
                foundArray.push(data)

            }
        })
    }


    let tagList = document.querySelectorAll('.tag');
    console.log(tagList);

    tagList.forEach(tag => {
        console.log(tag.dataset.type)
        switch (tag.dataset.type) {
            case 'ingredient':
                arrResults.filter(function (data) {
                    data.ingredients.forEach(ingredient => {
                        var strIngredient = ingredient.ingredient.toLowerCase();
                        strIngredient = strIngredient.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                        if (strIngredient.indexOf(tag.dataset.tag) !== -1) {
                            foundArray.push(data)

                        }
                    })
                })
                break;
            case 'appliance':
                arrResults.filter(function (data) {

                    var strAppliance = data.appliance.toLowerCase();
                    strAppliance = strAppliance.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                    if (strAppliance.indexOf(tag.dataset.tag) !== -1) {
                        foundArray.push(data)

                    }

                })
                break;
            case 'ustensil':
                arrResults.filter(function (data) {

                    data.ustensils.forEach(ustensil => {
                        var strUstensil = ustensil.toLowerCase();
                        strUstensil = strUstensil.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                        if (strUstensil.indexOf(tag.dataset.tag) !== -1) {
                            foundArray.push(data)

                        }
                    })

                })
                break;
        }
    })


    // arrResults = foundArray;
    console.log(arrResults);
    // displayRecipes(arrResults);

    arrResults = [...new Set(foundArray)].sort()
    displayRecipes(arrResults);
    // return resultArray;

}