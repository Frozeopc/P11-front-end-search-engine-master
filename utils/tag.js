
function createTag(filter) {
    const containerTagIngredient = document.getElementById('tag-ingredient')
    const containerTagAppliance = document.getElementById('tag-appliance');
    const containerTagUstensil = document.getElementById('tag-ustensil');

    console.log(arrResults);
    var namefilter = filter.getAttribute('data-name');
    if (document.querySelector('[data-tag="' + namefilter + '"]')) return;
    var background = "";
    var containerHTML;
    switch (filter.getAttribute('data-type')) {
        case "ingredient":
            background = 'bg-primary';
            containerHTML = containerTagIngredient;
            break;
        case "appliance":
            background = 'bg-success';
            containerHTML = containerTagAppliance;
            break;
        case "ustensil":
            background = 'bg-danger';
            containerHTML = containerTagUstensil;
            break;
    }


    var html = `
        <span class="badge ${background} fs-6 fw-semibold tag" data-type="${filter.getAttribute('data-type')}" data-tag="${namefilter}">${namefilter}
            <button type="button" class="btn ptn-primary p-0 text-white close-tag" onclick="closeTag('${namefilter}')"><i
            class="fa-regular fa-circle-xmark"></i></button>
        </span>
    `;

    containerHTML.insertAdjacentHTML('beforeend', html);
    search(null);
}

function closeTag(tag) {
    const tagElement = document.querySelector('[data-tag=' + tag + ']');
    tagElement.remove();
}

// function updateTag() {
//     let tagList = document.querySelectorAll('.tag');
//     console.log(tagList);
//     let foundArray = [];
//     tagList.forEach(tag => {
//         console.log(tag.dataset.type)
//         switch (tag.dataset.type) {
//             case 'ingredient':
//                 arrResults.filter(function (data) {
//                     data.ingredients.forEach(ingredient => {
//                         var strIngredient = ingredient.ingredient.toLowerCase();
//                         strIngredient = strIngredient.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
//                         if (strIngredient.indexOf(tag.dataset.tag) !== -1) {
//                             foundArray.push(data)

//                         }
//                     })
//                 })
//                 break;
//             case 'appliance':
//                 arrResults.filter(function (data) {

//                     var strAppliance = data.appliance.toLowerCase();
//                     strAppliance = strAppliance.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
//                     if (strAppliance.indexOf(tag.dataset.tag) !== -1) {
//                         foundArray.push(data)

//                     }

//                 })
//                 break;
//             case 'ustensil':
//                 arrResults.filter(function (data) {

//                     data.ustensils.forEach(ustensil => {
//                         var strUstensil = ustensil.toLowerCase();
//                         strUstensil = strUstensil.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
//                         if (strUstensil.indexOf(tag.dataset.tag) !== -1) {
//                             foundArray.push(data)

//                         }
//                     })

//                 })
//                 break;
//         }
//     })


//     arrResults = foundArray;
//     console.log(arrResults);
//     displayRecipes(arrResults);
// }