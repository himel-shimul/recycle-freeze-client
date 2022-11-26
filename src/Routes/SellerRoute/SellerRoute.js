import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useSeller from '../../hooks/useSeller';
import Loader from '../../pages/Loader/Loader';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isSellerLoading] = useSeller(user?.email)
    const location = useLocation();

    if (loading || isSellerLoading){
        return <Loader></Loader>
    }
    if (user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default SellerRoute;