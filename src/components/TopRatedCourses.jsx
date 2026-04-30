import React from "react";
import CourseCard from "./CourseCard";

const TopRatedCourses = async () => {
  const res = await fetch(
    "https://online-learning-platform-psi-peach.vercel.app/data.json",
  );
  const courses = await res.json();
  const topCourses = courses.slice(0, 3);
  return (
    <div className="my-15">
        <h1 className="text-3xl font-bold text-blue-500 text-center mt-5">Popular Courses</h1>
        <div className="grid grid-cols-3 gap-5 mt-6">
            {
                topCourses.map((course) => ( <CourseCard key={course.id} course={course}></CourseCard>))
            }
      </div>
    </div>
  );
};

export default TopRatedCourses;
