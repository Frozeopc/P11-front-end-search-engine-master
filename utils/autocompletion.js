function searchAutocompletion(arrData, search) {
    // en fonction de ce que l'utilisateur tape, on filtre les ingrédients
    const resultSearch = arrData.filter(function (data) {
        if (data.indexOf(search) === -1) {
            return false
        } else {
            return true
        }

    })

    // création html en fonction du résultat (à mettre dans le return)
    console.log(resultSearch);
    return resultSearch;
}