import '@testing-library/jest-dom';
import { registerReducers } from '../../redux/reducers/registerReducer';
import { typeIngredientes, typesLogin } from '../../redux/types/types';

describe('Pruebas reducers', () => {
    test('Prueba reducers Login', () => {

        const initState = {
            email: 'kelly@gmail.com',
            pass: '123456789'
        }
        const action = {
            types: typesLogin.login,
            payload: {
                ...initState
            }
        }
        const state = registerReducers(initState, action)
        expect(state).toEqual({
            email: 'kelly@gmail.com',
            pass: '123456789'
        })

    })

    test('Prueba reducers Login(diferente)', () => {

        const initState = {
            email: 'kelly@gmail.com',
            pass: '123456789'
        }
        const action = {
            types: typesLogin.login,
            payload: {
                ...initState
            }
        }
        const state = registerReducers(initState, action)
        expect(state).not.toEqual({
            email: 'kelly123@gmail.com',
            pass: '123456789'
        })

    })

    test('Prueba reducers Logout', () => {

        const initState = {

        }

        const action = {
            types: typesLogin.logout,
        }

        const state = registerReducers(initState, action)
        expect(state).toEqual({})

    })
    test('state por default', () => {
        const initState = {
            email: 'kelly@gmail.com',
            pass: '123456789'
        }

        const action = {
            type: typesLogin.hola,
        }

        const state = registerReducers(initState, action)
        expect(state).toEqual(initState)
    })

    
})