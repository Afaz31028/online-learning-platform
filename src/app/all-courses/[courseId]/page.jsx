import Image from "next/image";
import React from "react";
import img1 from "@/assests/c-1.jpg";


const IndividualCourse = async ({ params }) => {
  const { courseId } = await params;
  // console.log(courseId)
  const res = await fetch(
    "https://online-learning-platform-psi-peach.vercel.app/data.json",
    { cache: "no-store" },
  );
  const courses = await res.json();

  const filterdCourse = courses.find((course) => course.id == courseId);
  const {title, instructor, duration, level, description, category, image}= filterdCourse;
  // console.log(filterdCourse.title)
  return (
    <div>
       <h1 className="text-2xl font-bold text-center mb-5"><span className="border-b">Course Info</span></h1>
      <div className=" max-w-180 lg:card-side bg-[#29465B] text-white shadow-sm flex gap-10 p-5 rounded-xl">
        <figure className="relative w-80 h-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </figure>
        <div className="">
          <h2 className="text-2xl font-bold mt-5">{title}</h2>
          <div className="flex flex-wrap text-md font-semibold mt-3 text-gray-300">
            <p>{description}</p>
          </div>
          <p className="text-md font-semibold mt-5"><span className="rounded-xl px-3 p-1 bg-amber-400 text-black">Instructor: {instructor}</span></p>
          <p className="text-md font-semibold mt-5"><span className="rounded px-3 p-1 bg-blue-300 text-black">Duration: {duration}</span></p>
          <p className="text-md font-semibold mt-5"><span className="rounded px-3 p-1 bg-emerald-300 text-black">Level: {level}</span></p>
          <p className="text-md font-semibold mt-5"><span className="rounded-xl px-3 p-1 bg-lime-400 text-black">Category: {category}</span></p>
          <div className="mt-8">
            <button className="btn">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualCourse;
