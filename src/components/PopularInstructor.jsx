import Image from "next/image";
import React from "react";
import img1 from "@/assests/c-1.jpg";

const PopularInstructor = async() => {
    const res= await fetch('https://online-learning-platform-psi-peach.vercel.app/instructor.json', {cache: "no-store"});
    const instructors= await res.json();
  return (
    <div className="my-10">
        <h1 className="text-3xl font-bold text-center mt-5"><span className="border-b-2 pb-2">Popular Instructors</span></h1>
        <div className="grid grid-cols-3 gap-8 mt-10 place-items-center container mx-auto">
            {
                instructors?.map(instructor=> (<div key={instructor.id} className="card bg-base-100 w-96 shadow-sm">
        <figure className="relative w-100 h-80">
          <Image
            src={instructor.image}
            alt="Shoes" fill
           className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{instructor.name}</h2>
          <p><span className="bg-blue-500 text-lg text-gray-200 font-semibold rounded-xl px-2 py-1">Experience: {instructor.experience}+</span></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Profile</button>
          </div>
        </div>
      </div>))
            }
        </div>

      
    </div>
  );
};

export default PopularInstructor;
