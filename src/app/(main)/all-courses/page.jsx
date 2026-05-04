"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "@/components/CourseCard";
import { ImSearch } from "react-icons/im";

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const res = await fetch(
        "https://online-learning-platform-psi-peach.vercel.app/data.json",
      );
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses()
  }, []);

    const handleSubmit=(e)=>{
      e.preventDefault();
      setSearchText(e.target.search.value);
  }

  const filteredCourses = courses.filter((course) =>
    course.title.replace(/\s+/g, "").toLowerCase().includes(searchText.replace(/\s+/g, "").toLowerCase())
  );
  const displayCourses = filteredCourses.length > 0 ? filteredCourses : courses;

  return (
    <div>
      <div className="flex justify-center mt-15">
        <div className="join flex">
          <div className="flex ">
            <div className="border-2 border-green-700">
              <form onSubmit={handleSubmit} className="flex">
                <label className="input validator flex items-center gap-2 px-2">
                  <ImSearch className="text-xl" />
                  <input
                    className="w-50 bg-white outline-none"
                    type="text"
                    placeholder="Search by Course Title"
                    name="search"
                  />
                </label>
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-10 pt-10 pb-20">
        <h1 className="text-3xl font-bold text-center mt-10 mb-5">
          <span className="border-b-2 pb-2">Our All Courses</span>
        </h1>
        {loading ? (
          <p>Loading.....</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {displayCourses.map((course, index) => (
              <CourseCard key={index} course={course}></CourseCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCoursesPage;
