import { Navigate, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProviders';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) {
        return <span>Loading</span>
    }

    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoute;