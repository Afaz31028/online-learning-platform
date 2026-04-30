import Image from "next/image";
import React from "react";
import img1 from "@/assests/c-1.jpg";
import { IoStar } from "react-icons/io5";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const { id, image, title, instructor, rating } = course;
  return (
    <div className="p-5 rounded-xl bg-base-100 w-96 h-110 shadow-sm ">
      <div className="mx-auto">
        <Image
            className="rounded-xl w-full"
            src={img1}
            alt={title}
            // width={226} height={150}
        />
      </div>
      <div className="">
        <h2 className="mt-5 text-xl min-h-12 font-bold text-amber-600">{title}</h2>
        <div className='text-lg flex justify-between items-center mt-2'>
                <p className=' font-bold'>Instructor: {instructor}</p>
                <div className='flex gap-2 items-center mr-5 font-bold'>
                    <IoStar className='text-yellow-500'/>
                    <p>{rating}</p>
                </div>
            </div>
        <div className="mt-5">
          <Link href={`/all-courses/${id}`}><button className="btn w-full btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
