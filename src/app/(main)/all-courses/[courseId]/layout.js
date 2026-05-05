
import SideBar from '@/components/SideBar';
import React from 'react';

const Course = ({ children }) => {
    return (
        <div className='flex md:gap-40'>
            <div className=''>
                <SideBar></SideBar>
            </div>
            <div className='flex justify-center mt-20'>
                {children}
            </div>
        </div>
    );
};

export default Course;