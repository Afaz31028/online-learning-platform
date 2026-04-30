import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const CourseCard = ({course}) => {
    const {image, title,instructor, rating} =course; 
    return (
        <Card>
            <div>
                <Image src={image} alt={title} width={200} height={200}></Image>
            </div>
        </Card>
    );
};

export default CourseCard;