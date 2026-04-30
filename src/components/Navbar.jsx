'use client'
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName= usePathname();
    // console.log("corrent path:",pathName)

  return (
    <nav className=" bg-cyan-700 text-white">
      <div className="flex justify-between items-center px-6 py-5 font-bold">
        <div>
          <h1 className="text-2xl"><span className="text-4xl text-amber-500">S</span>kill<span className="text-cyan-300">Sphere</span></h1>
        </div>
        <ul className="flex gap-3 items-center">
          <li>
            <Link className={pathName==='/' ? 'bg-blue-300 text-black px-3 py-2 rounded-xl' : ""} href={"/"}>Home</Link>
          </li>
          <li>
            <Link className={pathName==='/all-courses' ? 'bg-blue-300 text-black px-3 py-2 rounded-xl' : ""} href={"/all-courses"}>All Courses</Link>
          </li>
          <li>
            <Link className={pathName==='/profile' ? 'bg-blue-300 text-black px-3 py-2 rounded-xl' : ""} href={"/profile"}>My Profile</Link>
          </li>
        </ul>
        <div className="flex gap-3">
          <Link href={"/"}><Button>Sign In</Button></Link>
          <Link href={"/"}><Button>Sign Up</Button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
