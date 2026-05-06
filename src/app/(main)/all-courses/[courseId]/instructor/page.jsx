import React from "react";
import img1 from "@/assests/c-1.jpg";
import Image from "next/image";

const InstructorPage = async ({ params }) => {
  const { courseId } = await params;

  const res = await fetch(
    "https://online-learning-platform-psi-peach.vercel.app/instructor.json",
    { cache: "no-store" },
  );
  const instructors = await res.json();
  
  const filteredInstructor = instructors?.find(
    (instructor) => instructor.id == courseId,
  );

  const {
    image,
    id,
    name,
    experience,
    rating,
    bio,
    email,
    contact,
    achievement,
    courses,
  } = filteredInstructor;
  return (
    <div className="w-full md:max-w-200 lg:max-w-4xl lg:h-150 mx-auto px-5 pb-18 lg:p-0">
      <h1 className="text-xl md:text-3xl font-bold text-center mt-5 mb-10">
        <span className="border-b-2 pb-2">Instructor Profile</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-3">
        <div className=" bg-gray-200 p-5 rounded-2xl">
          <div className="relative w-full md:w-80 h-70">
            <Image
              className="object-center"
              src={image}
              alt={name}
              fill
            ></Image>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold mt-5">{name}</h1>
            <p className="mt-3 text-lg font-semibold text-blue-700">
              Experience: {experience}+
            </p>
            <p className="mt-3 text-lg font-semibold">Rating: {rating}</p>
          </div>
        </div>
        <div className="bg-gray-200 w-full p-5 rounded-2xl">
            <p><span className="border-b text-lg font-semibold">Achievemnets:</span></p>
            <p className="text-lg font-semibold">{achievement}</p>
            <p className="mt-5"><span className="border-b text-lg font-semibold">Objectives:</span></p>
            <p className="text-lg font-semibold">{bio}</p>
            <p className="mt-5"><span className="border-b text-lg font-semibold">Taken Courses:</span></p>
            <div>
                  {
                    courses.map((course,index)=> <li className="text-lg font-semibold" key={index}>{course}</li>)
                  }
            </div>
            <p className="mt-5"><span className="border-b text-lg font-semibold">Contact:</span></p>
            <p className="text-lg font-semibold">{email}</p>
            <p className="text-lg font-semibold">{contact}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorPage;
