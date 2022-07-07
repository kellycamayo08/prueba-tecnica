import '@testing-library/jest-dom';
import { typeIngredientes, typesLogin } from '../../redux/types/types';

describe('Verificar types', () => {
    test('Comparar types login y register', () => {
        expect(typesLogin).toEqual({
            register: 'registro usuario',
            login: 'login',
            logout: 'logout'
        })
    })

    test('Comparar types ingredients ', () => {
        expect(typeIngredientes).toEqual({
            list: '[ing] list',
            add: '[ing] agregar',
            delete: '[ing] eliminar',
            edit: '[ing] editar',

        })
    })
    

})