import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Data from '../components/Data';
import Login from '../components/Login';
import Register from '../components/Register';
import DashboardRoute from './DashboardRoute';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const AppRoute = () => {

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                console.log(user)
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })

    }, [setIsLoggedIn, setChecking])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }


    return (
        <BrowserRouter>
            <Routes>


                <Route path='/' element={
                    <PublicRouter isAutentication={isLoggedIn}>
                        <Login />
                    </PublicRouter>
                }

                />
                <Route path='/register' element={

                    <PublicRouter isAutentication={isLoggedIn}>
                        <Register />
                    </PublicRouter>
                }
                />

<Route path='/data' element={

<PublicRouter isAutentication={isLoggedIn}>
    <Data />
</PublicRouter>
}
/>

                <Route path='/*' element={

                    <PrivateRouter isAutentication={isLoggedIn}>
                        <DashboardRoute />
                    </PrivateRouter>


                } />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoute;