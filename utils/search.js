function search(arr, valueSearch) {
    let foundArray = []
    let resultArray = []
    var strSearch = valueSearch.toLowerCase();
    strSearch = strSearch.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    arr.filter(function (data) {
        data.ingredients.forEach(ingredient => {
            var strIngredient = ingredient.ingredient.toLowerCase();
            strIngredient = strIngredient.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (strIngredient.indexOf(strSearch) !== -1) {
                foundArray.push(data)
                //resultArray = [...new Set(foundArray)].sort()
            }
        })
        var strName = data.name.toLowerCase();
        strName = strName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (strName.indexOf(strSearch) !== -1) {
            foundArray.push(data)
            //resultArray = [...new Set(foundArray)].sort()
        }
        var strDescription = data.description.toLowerCase();
        strDescription = strDescription.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (strDescription.indexOf(strSearch) !== -1) {
            foundArray.push(data)

        }
    })

    resultArray = [...new Set(foundArray)].sort()
    return resultArray;

}