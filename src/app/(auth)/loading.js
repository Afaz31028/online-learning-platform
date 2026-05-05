import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='text-3xl font-bold text-black flex justify-center items-center min-h-screen'>
            <div>
                <h1 className='mb-6 text-3xl font-boldmb-3'>Loading.......</h1>
                <HashLoader height={100} width={100}/>
            </div>
        </div>
    );
};

export default LoadingPage;