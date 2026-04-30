"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  // console.log("corrent path:",pathName)

  return (
    <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md px-15 py-2">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <h1 className="text-2xl font-bold"><span className="text-4xl text-amber-500">S</span>kill<span className="text-cyan-600">Sphere</span></h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 items-center font-bold">
          <li>
            <Link className={pathName==='/' ? 'border-b-2 border-blue-600 text-black px-3 py-2' : ""} href={"/"}>Home</Link>
          </li>
          <li>
            <Link className={pathName==='/all-courses' ? 'border-b-2 border-blue-600 text-black px-3 py-2' : ""} href={"/all-courses"}>All Courses</Link>
          </li>
          <li>
            <Link className={pathName==='/profile' ? 'border-b-2 border-blue-600 text-black px-3 py-2' : ""} href={"/profile"}>My Profile</Link>
          </li>
        </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <Link href={"/"}><button className="btn btn-primary">Sign In</button></Link>
          <Link href={"/"}><button className="btn btn-primary">Sign Up</button></Link>
        </div>
      </div>
      <div className="collapse-content lg:hidden z-1">
        <ul className="flex gap-5 items-center font-bold">
          <li>
            <Link className={pathName==='/' ? 'border-b-2 border-blue-600 text-black px-3 py-2 rounded-xl' : ""} href={"/"}>Home</Link>
          </li>
          <li>
            <Link className={pathName==='/all-courses' ? 'border-b-2 border-blue-600 text-black px-3 py-2 rounded-xl' : ""} href={"/all-courses"}>All Courses</Link>
          </li>
          <li>
            <Link className={pathName==='/profile' ? 'border-b-2 border-blue-600 text-black px-3 py-2 rounded-xl' : ""} href={"/profile"}>My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
