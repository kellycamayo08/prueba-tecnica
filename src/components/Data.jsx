import React from 'react';
// import { BD } from '../firebase/firebaseConfig';
// import {addDoc, collection} from 'firebase/firestore'


const Data = () => {

    const url = 'https://recipe-rissoto.vercel.app/recipe'

    const cargarApi = async (url) => {
      const resp = await fetch(url)
      const data = await resp.json()
     console.log(data)
    //  enviarAFirebase(data.ingredients)
    }
    cargarApi(url)
    

    // const enviarAFirebase = (data) => {

    //     data.forEach(card => {

    //         const { items, price, product, quantity} = card

    //         const cargarDatos = {
               
    //             items: items,
    //             price: price,
    //             product: product,
    //             quantity: quantity

    //         }

    //         addDoc(collection(BD,"rissotoplato"), cargarDatos)
    //         .then(resp => console.log('Datos agregados'))
    //         .catch(error => console.warn(error))
    //     })
    // }
    return (
        <div>
            <h1>api</h1>
        </div>
    );
};

export default Data;