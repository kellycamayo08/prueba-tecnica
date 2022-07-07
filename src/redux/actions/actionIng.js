import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { BD } from "../../firebase/firebaseConfig"
import { typeIngredientes } from "../types/types"

//----------editar----------------//

export const actionEditAsync = (nuevo) => {
    return async (dispatch) => {
        const collectIng = collection(BD, "rissotoplato")
        const q = query(collectIng, where("product", "==", nuevo.product))
        const datosQ = await getDocs(q)
        let id = ''

        datosQ.forEach(async (docu) => {
            id = docu.id
        })

        console.log(id)

        const docRef = doc(BD, "rissotoplato", id)

        await updateDoc(docRef, nuevo)
        .then(resp => {
            dispatch(actionEditSync(nuevo))
            dispatch(listAsync())
        })
        .catch(error => console.log(error))
    
    }
}


export const actionEditSync = (nuevo) => {
    return {
        type: typeIngredientes.edit,
        payload : {nuevo}
    }
}


//---------eliminar-------------//
export const actionDeleteAsync = (product) => {
    return async (dispatch) => {
        const collectionIngredients = collection(BD, "rissotoplato")
        const q = query(collectionIngredients, where("product", "==", product))

        const datosQ = await getDocs(q)
        console.log(datosQ)

        datosQ.forEach(docu => {
            deleteDoc(doc(BD, "rissotoplato", docu.id))
        })
        dispatch(actionDeleteSync(product))
    }
}


export const actionDeleteSync = (product) => {
    return {
        type: typeIngredientes.delete,
        payload : product
    }
}


//---------agregar------------//
export const actionAddAsync = (formValue) => {
    return (dispatch) => {
        addDoc(collection(BD, "rissotoplato"), formValue)
        .then( resp => {
            dispatch(actionAddSync(formValue))
            alert('datos guardados exitosamente')
        })
        .catch(error => {
            console.warn(error, "datos no guardados")
        })
    }
}


export const actionAddSync = (formValue) => {

    return {
        type: typeIngredientes.add,
        payload: formValue
    }

}



//-------listar-------------//
export const listAsync = () => {
    return async (dispatch) => {
        const collectionListar = await getDocs(collection(BD, "rissotoplato"))
    console.log(collectionListar)

    const listA = []
    collectionListar.forEach(list => {
        listA.push({
            ...list.data()
        })
    })
    dispatch(listSync(listA))
   
    }
}

export const listSync = (agenda) => {
    return {
        type: typeIngredientes.list,
        payload: agenda
    }
    
}