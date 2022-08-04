// fonction création d'un tag (filtre séléctionné)
function createTag(filter) {
    const containerTagIngredient = document.getElementById('tag-ingredient');
    const containerTagAppliance = document.getElementById('tag-appliance');
    const containerTagUstensil = document.getElementById('tag-ustensil');

    // correction

    let namefilter = filter.getAttribute('data-name');
    if (document.querySelector('[data-tag="' + namefilter + '"]')) return;
    let background = "";
    let containerHTML;
    switch (filter.getAttribute('data-type')) {
        case "ingredient":
            background = 'bg-blue';
            containerHTML = containerTagIngredient;
            dropdownIngredient.classList.add("invisible");
            inputSearchIngredient.setAttribute('style', 'width:auto');
            break;
        case "appliance":
            background = 'bg-green';
            containerHTML = containerTagAppliance;
            dropdownAppliance.classList.add("invisible");
            inputSearchAppliance.setAttribute('style', 'width:auto');
            break;
        case "ustensil":
            background = 'bg-red';
            containerHTML = containerTagUstensil;
            dropdownUstensil.classList.add("invisible");
            inputSearchUstensil.setAttribute('style', 'width:auto');
            break;
    }


    let html = `
        <span class="badge ${background} fs-6 fw-semibold tag" data-type="${filter.getAttribute('data-type')}" data-name="${namefilter}">${filter.textContent}
            <button type="button" class="btn  p-0 text-white close-tag" onclick="closeTag('${namefilter}')"><i
            class="fa-regular fa-circle-xmark"></i></button>
        </span>
    `;

    containerHTML.insertAdjacentHTML('beforeend', html);
    search(inputSearchbar.value);
}

// fonction suppression d'un tag
function closeTag(tag) {
    const tagElement = document.querySelector('[data-name="' + tag + '"]');
    tagElement.remove();
    search(inputSearchbar.value);
}

