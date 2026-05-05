'use client'
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
    const {courseId} = useParams();
    const pathName = usePathname();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#0c5d4a] h-full w-80 p-4 text-white">
          {/* Sidebar content here */}
          <li>
            <Link className={`text-lg font-bold ${pathName=== `/all-courses/${courseId}` ? 'text-amber-500  px-3 py-2' : ""}`} href={`/all-courses/${courseId}`}>Course Details</Link>
          </li>
          <li>
            <Link className={`text-lg font-bold ${pathName=== `/all-courses/${courseId}/instructor` ? 'text-amber-500 px-3 py-2' : ""}`} href={`/all-courses/${courseId}/instructor`}>Instructor Info</Link>
          </li>
          <li>
            <Link className={`text-lg font-bold ${pathName=== `/all-courses/${courseId}/course-curriculam` ? 'text-amber-500 px-3 py-2' : ""}`} href={`/all-courses/${courseId}/course-curriculam`}>Course Curriculam</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
