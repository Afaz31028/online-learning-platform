import React from 'react';
import CourseCard from './CourseCard';

const TopRatedCourses = async() => {
    const res = await fetch('https://online-learning-platform-psi-peach.vercel.app/data.json');
    const courses= await res.json();
    const topCourses= courses.slice(0,3);
    return (
        <div>
            {
                topCourses.map(course=> <CourseCard key={course.id} course={course}></CourseCard>)
            }
        </div>
    );
};

export default TopRatedCourses;