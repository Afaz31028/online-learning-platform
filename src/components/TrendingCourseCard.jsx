import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoStar } from 'react-icons/io5';

const TrendingCourseCard = ({course}) => {
    const { image, title, instructor, rating } = course;
    return (
        <div className="p-5 rounded-xl bg-base-100 w-full md:w-96 shadow-lg ">
      <div className="mx-auto relative w-80 h-60">
        <Image
            className="rounded-xl object-cover"
            src={image}
            alt={title}
            fill
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
          <Link href={"#"}><button className="btn w-full btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
    );
};

export default TrendingCourseCard;