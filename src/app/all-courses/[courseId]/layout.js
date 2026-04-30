
import SideBar from '@/components/SideBar';
import React from 'react';

const Course = ({ children }) => {
    return (
        <div className='flex gap-60'>
            <div>
                <SideBar></SideBar>
            </div>
            <div className='flex justify-center mt-10'>
                {children}
            </div>
        </div>
    );
};

export default Course;