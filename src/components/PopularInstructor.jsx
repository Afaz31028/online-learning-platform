import Image from "next/image";
import React from "react";
import Link from "next/link";

const PopularInstructor = async() => {
    const res= await fetch('https://online-learning-platform-psi-peach.vercel.app/instructor.json', {cache: "no-store"});
    const instructors= await res.json();
  return (
    <div className="my-25 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mt-5"><span className="border-b-2 pb-2">Popular Instructors</span></h1>
        <div className="grid grid-cols-3 gap-8 mt-20 place-items-center container mx-auto">
            {
                instructors?.map(instructor=> (<div key={instructor.id} className="card text-white pt-5 pb-8 bg-gray-300 w-80 shadow-lg shadow-red-500">
        <div className="mx-auto relative w-70 h-50">
                <Image
                    className="rounded-xl object-cover"
                    src={instructor.image}
                    alt="Instructor Image"
                    fill
                />
              </div>
        <div className="mx-auto">
          <h2 className=" text-xl text-black font-bold mt-5">{instructor.name}</h2>
          <p className=" mt-3"><span className="bg-[#374d63] text-lg text-white font-semibold rounded-xl px-2 py-1">Experience: {instructor.experience}+</span></p>
          <div className="mt-8">
            <Link href={`/all-courses/${instructor.id}/instructor`}><button className="btn text-white font-bold w-70 rounded-lg bg-[#16755f]">View Profile</button></Link>
          </div>
        </div>
      </div>))
            }
        </div>

      
    </div>
  );
};

export default PopularInstructor;
