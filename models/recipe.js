// model recette (objet recette)
// fonction affichage d'une recette (html)

export function recipeFactory(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

    function getRecipeCardDom() {
        const html = `
            <div>
                <h1>${name}</h1>
                <p>${description}</p>
            </div>    
        `;
        return (html)
    }
    return { getRecipeCardDom }
}