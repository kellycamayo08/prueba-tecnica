import { typeIngredientes } from "../types/types";

const initialState = {
    ing: []
}

export const ingreReducers = (state = initialState, action) => {
    switch (action.type) {
        case typeIngredientes.list:
            return {
                ing: [...action.payload]
            }
        case typeIngredientes.add:
            return {
                ing: [...state.ing, action.payload]
            }
        case typeIngredientes.delete:
            return {
                ing: state.ing.filter(f => f.product !== action.payload)
            }
        case typeIngredientes.edit:
            return {
                ...state
            }
        default:
            return state
    }
}