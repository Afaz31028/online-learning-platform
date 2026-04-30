import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import img1 from '@/assests/c-1.jpg'
import { IoStar } from 'react-icons/io5';


const CourseCard = ({course}) => {
    const {image, title,instructor, rating} =course; 
    return (
        <Card className='p-5'>
            <div className='mx-auto'>
                <Image className='rounded-xl w-full bg-amber-100' src={image} alt={title} ></Image>
            </div>
            <div className=''>
                <p className='text-xl mt-4 font-bold text-pink-700'>{title}</p>
                <div className='text-lg flex justify-between items-center mt-2'>
                    <p className=' font-bold'>Instructor: {instructor}</p>
                    <div className='flex gap-2 items-center mr-5 font-bold'>
                        <IoStar className='text-yellow-500'/>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <Button className="w-full">View Details</Button>
                </div>
            </div>
        </Card>
    );
};

export default CourseCard;