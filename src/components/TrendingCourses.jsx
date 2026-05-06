import React from "react";
import TrendingCourseCard from "./TrendingCourseCard";

const TrendingCourses = async () => {
  const trendingCourses = [
    {
      id: 1,
      title: "Canva Design Mastery",
      instructor: "Sahriar Hossain",
      duration: "10 hours",
      level: "Beginner",
      description:
        "Learn how to create stunning graphics, social media posts, and presentations using Canva.",
      image: "https://res.cloudinary.com/dpi4wnosa/image/upload/v1778064132/0_Oq8_-vODMKqxt01l_rgptgq.jpg",
      category: "Design",
    },
    {
      id: 2,
      title: "Automation with No-Code Tools",
      instructor: "Afazur Rahman",
      duration: "14 hours",
      level: "Intermediate",
      description:
        "Automate repetitive tasks using tools like Zapier and Make without coding.",
      image: "https://res.cloudinary.com/dpi4wnosa/image/upload/v1778064159/images_dvkwkw.jpg",
      category: "Productivity",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      instructor: "Rifat Chowdhury",
      duration: "28 hours",
      level: "Advanced",
      description:
        "Master key data structures and algorithms for problem solving and coding interviews.",
      image:"https://res.cloudinary.com/dpi4wnosa/image/upload/v1778064145/download_1_ayrvta.jpg",
      category: "Computer Science",
    },
  ];

  return (
    <div className="my-25 md:max-w-7xl w-full px-5 mx-auto">
        <h1 className="text-3xl font-bold text-center mt-5 animate__animated animate__heartBeat animate__slower animate__infinite"><span className="border-b-2 pb-2">Trending Courses</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 place-items-center container mx-auto">
            {
              trendingCourses.map(course=> <TrendingCourseCard key={course.id} course={course}></TrendingCourseCard>)
            }
      </div>
    </div>
  );
};

export default TrendingCourses;
