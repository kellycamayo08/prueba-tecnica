import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({isAutentication, children}) => {
    return isAutentication
    ? children
    :
    <Navigate to="/" />
};

export default PrivateRouter;