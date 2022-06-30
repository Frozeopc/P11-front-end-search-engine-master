// model recette (objet recette)
// fonction affichage d'une recette (html)

function recipeFactory(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

    function getRecipeCardDom() {
        let htmlIngredients = '';
        ingredients.forEach(ingredient => {
            htmlIngredients += `<p class="card-text mb-0 "><span class="fw-bold">${ingredient.ingredient} </span>
            ${(ingredient.quantity) ? ": " + ingredient.quantity : ""}
            ${(ingredient.unit) ? ingredient.unit : ""}
            </p> `
        });


        const html = `
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="card border-0 my-1">
                        <div class="card-header bg-secondary" style="min-height:200px">
                           
                        </div>

                        <div class="card-body bg-light">
                            <div class="row mb-3">
                                <div class="col-8">
                                    <h5 class="card-title text-start">${name}</h5>
                                </div>
                                <div class="col-4">
                                    <p class="h5 fw-bold text-end"><i class="fa-regular fa-clock"></i> ${time} min</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6 col-12">
                                    ${htmlIngredients}
                                </div>
                                <div class="col-lg-6 col-12">
                                    <p class="card-text  card-description">${description}</p>
                                </div>
                                    
                            </div>

                        </div>
                </div>    
            </div>
                `;
        return (html)
    }
    return { getRecipeCardDom }
}