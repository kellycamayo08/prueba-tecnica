import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { facebook, google } from "../../firebase/firebaseConfig"
import { typesLogin } from "../types/types"



//---------login------------//
export const loginAsync = (email, pass) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, pass)
        .then(({user})=> {
            console.log('usurio autorizado')
            dispatch(loginSync(email, pass))
        })
        .catch((error) => {
            console.log(error, 'usuario no autorizado')
        })
    }
}

export const loginSync = (email, pass) => {
    return {
        type: typesLogin.login,
        payload: {
            email, pass
        }
    }
}

//-------logout----------//
export const actionLogoutAsyn = ()=>{
    return (dispatch)=>{
        const auth = getAuth();
        signOut(auth)
        .then(({user})=>{
            dispatch(logout())
            console.log('Chao')
        })
        .catch((error)=>{console.warn(error, '')});
    }
}

export const logout = () => {
    return {
        type: typesLogin.logout,
        payload: {}
    }
}

//----------------Google---------
export const GoogleLogin = () => {
    return(dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
        .then(({user})=> {
            console.log(user)
        })
        .catch((error)=> {
            console.log(
                error
            )
        })
    }
}

//----------------Facebook---------
export const FacebookLogin = () => {
    return(dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
        .then(({user})=> {
            console.log(user)
        })
        .catch((error)=> {
            console.log(
                error
            )
        })
    }
}

//----------------Registro-------------//

export const actionRegisterAsync = (nombre, email, pass, telefono) =>{
    return (dispatch) => {
       // console.log(nombre, email, pass, telefono, direccion)
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async({user}) => {
           
            await updateProfile(auth.currentUser, {displayName: nombre})
            dispatch(registerUserSync(nombre, email, pass, telefono))
            console.log(user, 'Usuario Agregado')
        })
        .catch(err => {
            console.warn(err, 'Usuario No autorizado')
        })
     

    }
}

export const registerUserSync = (nombre, email, pass, telefono) => {
    return {
        type: typesLogin.register,
        payload: {
            nombre, email, pass, telefono
        }
    }
}
