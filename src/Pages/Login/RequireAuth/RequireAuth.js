import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    if (!user.emailVerified) {
        return <div>
            <h2 className='text-danger'>Your Email is not Verification</h2>
            <h3 className='text-success'> Please Enter Your Email address1</h3>
            <button>set Email Verification</button>
        </div>
    }
    return children;
};

export default RequireAuth;