import React from 'react';
import { ToastContainer } from 'react-toastify';

const AuthLayout = ({children}) => {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    );
};

export default AuthLayout;