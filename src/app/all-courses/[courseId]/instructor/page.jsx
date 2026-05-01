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
    <div className="max-w-4xl h-150 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-5 mb-10">
        <span className="border-b-2 pb-2">Instructor Profile</span>
      </h1>
      <div className="flex gap-5">
        <div className=" bg-gray-200 p-5">
          <div>
            <Image
              className=""
              src={img1}
              alt={name}
              width={400}
              height={400}
            ></Image>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold mt-5">{name}</h1>
            <p className="mt-3 text-lg font-semibold text-blue-700">
              Experience: {experience}+
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-5">
            <h1><span className="border-b mb-5">Personal Info</span></h1>
            <p>{bio}</p>
            <p>{achievement}</p>
            <p>Taken Courses:</p>
            <div>
                {
                    courses.map((course,index)=> <p key={index}>{course}</p>)
                }
            </div>
            <p>{email}</p>
            <p>{contact}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorPage;
