export interface Ingredients {
    ingredients: Ingredient[];
}

export interface Ingredient {
    strDrink: string
    strDrinkThumb: string
    idDrink: string
}


export interface IngredientsList {
    drinks: Drinks[]
}

export interface Drinks {
    strIngredient1: string
}