import React from 'react';
import bannerImg from '@/assests/o4Jph.jpg'
import Image from 'next/image';
import { MdOutlineCastForEducation } from 'react-icons/md';

const Banner = () => {
    return (
        <div className='mt-20 px-10 py-20 flex justify-center gap-30 bg-gray-700 max-w-7xl mx-auto rounded-2xl'>
           <div className=''>
                <h1 className='text-white text-5xl font-bold'><span className='text-amber-400'>Level up</span> your future <br /> with <span className='text-pink-500'>SkillSphere</span></h1>
                <p className=' mt-5 text-lg text-gray-200'>Master in-demand skills like Web Development, Python, <br /> Graphic Design, and Digital Marketing — all in one place.</p>
                <h3 className='text-gray-100 mt-5 text-xl font-bold'>Start learning today, build your tomorrow.</h3>
                <div className='mt-12'>
                    <button className="btn btn-primary"><MdOutlineCastForEducation />Explore More</button>
                </div>
           </div>
           <div>
                 <Image className='rounded-xl' src={bannerImg} alt={"banner Image"} width={500} height={500}></Image>
           </div>
        </div>
    );
};

export default Banner;