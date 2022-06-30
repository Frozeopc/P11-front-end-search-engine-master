function searchAutocompletion(arrData, search, type) {
    // en fonction de ce que l'utilisateur tape, on filtre les ingrédients
    const resultSearch = arrData.filter(function (data) {
        if (data.indexOf(search) === -1) {
            return false
        } else {
            return true
        }

    })


    var html = ''
    if (resultSearch.length === 0) return `<li><p class="dropdown-item text-white">Aucun résultat</p></li>`
    resultSearch.forEach(result => {
        html += `<li><a class="dropdown-item text-white" onclick="createTag(this)" data-name="${result}" data-type="${type}">${result}</a></li>`
    });
    return html;
}