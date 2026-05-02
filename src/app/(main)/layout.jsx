import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <ToastContainer />
            <Footer></Footer>
        </>
    );
};

export default MainLayout;