function filterUstensils(arr) {
    arrUstensils = []
    arr.forEach(recipe => {
        recipe.ustensils.forEach(ustensil => {
            let strUstensils = ustensil.toLowerCase();
            strUstensils = strUstensils.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            arrUstensils.push(strUstensils)

            ustensils = [...new Set(arrUstensils)].sort()
        })
    })
    return ustensils
};