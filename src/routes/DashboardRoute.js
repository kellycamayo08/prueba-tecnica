import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Editar from '../components/Editar';
import Home from '../components/Home';

const DashboardRoute = () => {
    return (
        <>
        <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/editar" element={<Editar/>}/>
        </Routes>
    </>
    );
};

export default DashboardRoute;