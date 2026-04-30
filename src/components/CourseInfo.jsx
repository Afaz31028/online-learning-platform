import Image from "next/image";
import React from "react";
import img1 from "@/assests/c-1.jpg";

const CourseInfo = () => {
    
  return (
    <div className="conatiner mx-auto">
      <div className="flex justify-center bg-base-100 shadow-sm">
        <div>
          <figure className="relative w-[500px] h-[500px]">
            <Image src={img1} alt="Album" fill className="object-cover" />
          </figure>
        </div>
        <div className="">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className=" justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
