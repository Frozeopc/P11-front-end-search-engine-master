
function createTag(filter) {
    const containerTagIngredient = document.getElementById('tag-ingredient')
    const containerTagAppliance = document.getElementById('tag-appliance');
    const containerTagUstensil = document.getElementById('tag-ustensil');


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
        <span class="badge ${background} fs-6 fw-semibold tag" data-type="${filter.getAttribute('data-type')}" data-name="${namefilter}">${namefilter}
            <button type="button" class="btn ptn-primary p-0 text-white close-tag" onclick="closeTag('${namefilter}')"><i
            class="fa-regular fa-circle-xmark"></i></button>
        </span>
    `;

    containerHTML.insertAdjacentHTML('beforeend', html);
    search(inputSearchbar.value);
}

function closeTag(tag) {
    const tagElement = document.querySelector('[data-name="' + tag + '"]');
    tagElement.remove();
    search(inputSearchbar.value)
}

