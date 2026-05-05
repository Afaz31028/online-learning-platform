import React from 'react';
import bannerImg from '@/assests/o4Jph.jpg'
import Image from 'next/image';
import { MdOutlineCastForEducation } from 'react-icons/md';

const Banner = () => {
    return (
        <div className='mt-20 md:px-10 md:py-20 flex md:flex-row flex-col-reverse gap-10 md:justify-center md:gap-30 bg-gray-700 max-w-full md:max-w-7xl mx-auto rounded-2xl'>
           <div className='md:text-start text-center px-3'>
                <h1 className='text-white md:text-5xl text-3xl font-bold'><span className='text-amber-400'>Level up</span> your future <br /> with <span className='text-pink-500'>SkillSphere</span></h1>
                <p className=' mt-5 text-sm md:text-lg text-gray-200'>Master in-demand skills like Web Development, Python, <br /> Graphic Design, and Digital Marketing — all in one place.</p>
                <h3 className='text-gray-100 mt-5 text-lg md:text-xl font-bold'>Start learning today, build your tomorrow.</h3>
                <div className='mt-12 mb-10 md:mb-0 flex justify-center items-center  md:block'>
                    <button className="btn btn-primary"><MdOutlineCastForEducation />Explore More</button>
                </div>
           </div>
           <div className=''>
                 <Image className='rounded-xl' src={bannerImg} alt={"banner Image"} width={500} height={500}></Image>
           </div>
        </div>
    );
};

export default Banner;