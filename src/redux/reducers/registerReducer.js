import { typesLogin } from "../types/types"

export const registerReducers = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.register:
            return {
                nombre: action.payload.nombre,
                email: action.payload.email,
                pass: action.payload.pass,
                telefono: action.payload.telefono
            }
        case typesLogin.login:
            return {
                email: action.payload.email,
                pass: action.payload.pass
            }
        case typesLogin.logout:
            return { }
    
        default:
            return state
    }
}