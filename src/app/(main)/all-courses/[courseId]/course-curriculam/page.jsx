import CurriculamDetails from '@/components/CurriculamDetails';
import React from 'react';
const CourseCurriculamPage = async({params}) => {
    const {courseId} = await params;
    // console.log(courseId)

    const courseCurriculam=[
        {
            id:"1",
            title: "Complete Web Development",
            data:[
                "Module-01: Introduction to Web & HTML5",
                "Module-02: Styling with CSS3 & Modern Flexbox/Grid",
                "Module-03: Responsive Design & CSS Frameworks (Tailwind)",
                "Module-04: JavaScript Programming Fundamentals",
                "Module-05: Advanced JavaScript & DOM Manipulation",
                "Module-06: Modern ES6+, APIs & Asynchronous Programming",
                "Module-07: Version Control with Git & GitHub",
                "Module-08: Front-end Framework: React.js Fundamentals",
                "Module-09: React State Management & Hooks",
                "Module-10: Backend Basics with Node.js & Express.js",
                "Module-11: Database Integration (MongoDB)",
                "Module-12:Authentication, Error Management & Security",
                "Module-13: Full-Stack Project Deployment (Vercel/Netlify)",
                "Module-14: Final Capstone Project: Real-world E-commerce or LMS",
            ]
        },
        {
            id:"2",
            title: "Python for Beginners",
            data:[
                "Module-01: Introduction to Python & Environment Setup",
                "Module-02: Python Syntax, Variables & Basic Data Types",
                "Module-03: Control Flow: Decisions (If-Else) & Logical Operators",
                "Module-04: Mastering Loops (For, While) & Iterations",
                "Module-05: Data Structures: Lists, Tuples, and Sets",
                "Module-06: Working with Dictionaries & Key-Value Pairs",
                "Module-07: Functions, Arguments & Return Values",
                "Module-08: Python Modules, Packages & Library Imports",
                "Module-09: File Handling: Reading and Writing Files",
                "Module-10: Error Handling & Exception Management (Try-Except)",
                "Module-11: Introduction to Object-Oriented Programming (OOP) Basics",
                "Module-12: Final Mini-Project: Building a Practical Application",
            ]
        },
        {
            id:"3",
            title: "UI/UX Design Masterclass",
            data:[
                "Module-01: Introduction to UI/UX Design",
                "Module-02: Design Fundamentals & Visual Hierarchy",
                "Module-03: User Flows & Wireframing",
                "Module-04: Prototyping & Interaction Design",
                "Module-05: Design Systems & Components",
                "Module-06: Accessibility & Handoff Management",
                "Module-07: Final Mini-Project & Portfolio",
            ]
        },
        {
            id:"4",
            title: "Digital Marketing Essentials",
            data:[
                "Module-01: Fundamentals of Digital Marketing",
                "Module-02: Content Marketing & Strategy",
                "Module-03: Social Media Marketing (SMM)",
                "Module-04: Search Engine Optimization (SEO)",
                "Module-05: Paid Advertising & SEM (Google & Meta Ads)",
                "Module-06: Email Marketing & Automation",
                "Module-07: Analytics, Data Tracking & Reporting",
                "Module-08: Final Strategy Project & Freelancing Guide",
            ]
        },
        {
            id:"5",
            title: "React.js Complete Guide",
            data:[
                "Module-01: Introduction to React & Modern JavaScript (ES6+)",
                "Module-02: Components, JSX & Rendering Elements",
                "Module-03: Props & State Management",
                "Module-04: Working with Lists, Keys & Forms",
                "Module-05: Understanding React Hooks (useState, useEffect, useContext)",
                "Module-06: Routing with React Router DOM",
                "Module-07: API Integration & Handling Side Effects (Fetch/Axios)",
                "Module-08: State Management with Redux Toolkit or Context API",
                "Module-09: Error Handling, Optimization & Deployment",
                "Module-10: Final Capstone Project: Real-world Web Application",
            ]
        },
        {
            id:"6",
            title: "Graphic Design Fundamentals",
            data:[
                "Module-01: Introduction to Graphic Design & Visual Communication",
                "Module-02: Elements of Design (Line, Shape, Texture, Space)",
                "Module-03: Principles of Design (Balance, Contrast, Hierarchy, Unity)",
                "Module-04: Color Theory & Psychology in Branding",
                "Module-05: Typography: Choosing and Pairing Fonts",
                "Module-06: Vector vs. Raster Graphics (Adobe Illustrator vs. Photoshop)",
                "Module-07: Image Editing & Manipulation Techniques",
                "Module-08: Logo Design & Brand Identity Systems",
                "Module-09: Layout Design for Print and Digital Media",
                "Module-10: Design Process: From Brief to Final Export",
                "Module-11: Portfolio Building & Freelancing Essentials",
            ]
        },
        {
            id:"7",
            title: "Data Science with Python",
            data:[
                "Module-01: Introduction to Data Science & Python Environment Setup",
                "Module-02: Python Essentials for Data Science (Lists, Dictionaries, Functions)",
                "Module-03: Mathematical Foundations: Statistics & Linear Algebra",
                "Module-04: Data Manipulation with NumPy (Numerical Computing)",
                "Module-05: Data Analysis with Pandas (DataFrames & Series)",
                "Module-06: Data Cleaning & Preprocessing Techniques",
                "Module-07: Exploratory Data Analysis (EDA) & Data Visualization",
                "Module-08: Introduction to Machine Learning with Scikit-Learn",
                "Module-09: Supervised Learning: Regression & Classification Models",
                "Module-10: Unsupervised Learning: Clustering & Dimensionality Reduction",
                "Module-11: Working with Real-world Datasets & Model Evaluation",
                "Module-12: Final Capstone Project: End-to-End Data Science Pipeline"
            ]
        },
        {
            id:"8",
            title: "Freelancing Career Guide",
            data:[
                "Module-01: Introduction to Freelancing & Market Mindset",
                "Module-02: Identifying Your Niche & High-Demand Skill Selection",
                "Module-03: Building a Professional Brand & Online Presence",
                "Module-04: Mastering Freelance Marketplaces (Upwork, Fiverr & LinkedIn)",
                "Module-05: Communication Skills, Client Onboarding & Relationship Management",
                "Module-06: Leveraging AI Tools for Productivity & Workflow Automation",
                "Module-07: Financial Management, Invoicing & International Payment Gateways",
                "Module-08: Scaling Your Business: From Individual Freelancer to Agency",
                "Module-09:Legal Essentials, Taxes & Managing Freelance Burnout",
            ]
        },

    ]

    const courseCur= courseCurriculam.find(course=> course.id==courseId);
    const displayModules= courseCur.data.slice(0,5);
    // console.log(courseCur)
    const len=displayModules.length
    return (
        <div className='w-full pb-10'>
            <div className='text-center px-5 lg:px-0 lg:ml-50'>
                <h1 className='text-2xl text-green-700 font-bold'>{courseCur.title}</h1>
                <h1 className='border-b p-1 text-lg font-bold mt-5'>Course Curriculam</h1>
            </div>
            <div className='my-15 px-5'>
               {
                    displayModules.map((module, index)=> <CurriculamDetails key={index} module={module} len={len} id={index}/>)
               }
            </div>
            <div className='flex justify-center'>
                <button className='btn bg-green-800 text-white'>Next Modules</button>
            </div>
        </div>
    );
};

export default CourseCurriculamPage;