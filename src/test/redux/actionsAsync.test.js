import thunk from "redux-thunk";
import configureStore from 'redux-mock-store'
import { actionAddAsync } from "../../redux/actions/actionIng";
import { actionRegisterAsync } from "../../redux/actions/actionsRegister";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    login :{
        id:'testing'
    }
}

let store = mockStore(initState)

describe('Pruebas con las acciones', ()=> {
    beforeEach(()=> {
        store = mockStore(initState)
    })

    test('Crear ingrediente', async()=> {
        await store.dispatch(actionAddAsync({
            product: 'arroz con coco',
            items: '2',
            quantity: '200 gr',
            price: '1.50'
        }))
        const actions = store.getActions()
    })

    test('Crear Usuario', async()=> {
        await store.dispatch(actionRegisterAsync({
            email:'jeison@gmail.com',
            pass: '123456',
            name: 'jeison'
        }))
        const actions = store.getActions()
    })

    
})