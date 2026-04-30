import React, { cache } from "react";
import CourseCard from "./CourseCard";

const TopRatedCourses = async () => {
  const res = await fetch("https://online-learning-platform-psi-peach.vercel.app/data.json",{cache: "no-store"});
  const courses = await res.json();
  const topCourses = courses.slice(0, 3);
  return (
    <div className="my-15">
        <h1 className="text-3xl font-bold text-center mt-5"><span className="border-b-2 pb-2">Popular Courses</span></h1>
        <div className="grid grid-cols-3 gap-5 mt-6 place-items-center container mx-auto">
            {
                topCourses.map((course) => ( <CourseCard key={course.id} course={course}></CourseCard>))
            }
      </div>
    </div>
  );
};

export default TopRatedCourses;
