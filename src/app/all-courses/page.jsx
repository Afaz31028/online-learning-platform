import CourseCard from '@/components/CourseCard';
import React from 'react';

const AllCoursesPage = async() => {
    const res = await fetch("https://online-learning-platform-psi-peach.vercel.app/data.json",{cache: "no-store"});
    const courses = await res.json();
    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <h1 className='text-3xl font-bold text-center mt-10 mb-5'><span className="border-b-2 pb-2">Our All Courses</span></h1>
            <div className='grid grid-cols-3 gap-8'>
                {
                    courses.map(course=> <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;