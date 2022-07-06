// fonction récupération des appareils
function filterAppliance(arr) {
    let arrAppliance = [];
    let appliance = [];
    arr.forEach(recipe => {
        var strAppliance = recipe.appliance.toLowerCase();
        strAppliance = strAppliance.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        arrAppliance.push(strAppliance);
        appliance = [...new Set(arrAppliance)].sort();
    });
    return appliance;
}

