


export interface Ingredient {
    name: string;
    measure: string | null;
}


export interface IngredientsList {
    drinks: Drinks[]
}

export interface Drinks {
    strIngredient1: string
}