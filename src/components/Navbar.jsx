"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();
  const userData = authClient.useSession();

  const curUser = userData.data?.user;

  const handleLogout = () => {
    toast.success("You Logged Out!", { theme: "dark", autoClose: 3000 });
    authClient.signOut();
    redirect("/");
  };

  return (

      <div className="navbar bg-[#a3bfcd] shadow-lg rounded-md md:px-15 md:py-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
       <ul tabIndex="-1" className="font-bold menu menu-sm dropdown-content bg-white rounded-lg z-1 mt-3 w-52 p-2">
            <li><Link
                className={pathName === "/" ? "md:border-b-2 md:border-blue-600 md:text-black px-3 py-2 text-amber-600" : ""}href={"/"}>Home</Link>
            </li>
            <li><Link
                className={pathName === "/all-courses" ? "md:border-b-2 md:border-blue-600 md:text-black px-3 py-2 text-amber-600 " : ""} href={"/all-courses"}>All Courses
              </Link>
            </li>
            <li><Link
                className={pathName === "/profile" ? "border-b-2 border-blue-600 text-black px-3 py-2" : ""} href={"/profile"}>My Profile
              </Link>
            </li>
            <li><Link
                className={pathName === "/signin" ? "md:border-b-2 md:border-blue-600 md:text-black px-3 py-2 text-amber-600" : ""} href={"/signin"}>Sign In
              </Link>
            </li>
            <li><Link
                className={pathName === "/Signup" ? "md:border-b-2 md:border-blue-600 md:text-black px-3 py-2 text-amber-600" : ""} href={"/signup"}>Sign Up
              </Link>
            </li>
          </ul>
    </div>
   <h1 className="md:text-2xl text-lg font-bold"><span className="text-4xl text-amber-500">S</span>kill<span className="text-cyan-600">Sphere</span></h1>
  </div>
  <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1 flex gap-5 items-center font-bold">
            <li><Link
                className={pathName === "/" ? "border-b-2 border-blue-600 text-black px-3 py-2" : ""}href={"/"}>Home</Link>
            </li>
            <li><Link
                className={pathName === "/all-courses" ? "border-b-2 border-blue-600 text-black px-3 py-2" : ""} href={"/all-courses"}>All Courses
              </Link>
            </li>
            <li><Link
                className={pathName === "/profile" ? "border-b-2 border-blue-600 text-black px-3 py-2" : ""} href={"/profile"}>My Profile
              </Link>
            </li>
          </ul>
  </div>
  <div className="navbar-end">
        {curUser ? (
            <div className="flex gap-5 items-center">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <Link href={"/profile"}><Image src={curUser?.image} alt={curUser?.name[0]} width={100} height={100}></Image>
                  </Link>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn text-white bg-red-500 hidden md:flex">Logout
              </button>
            </div>
          ) : (
            <div className="md:flex gap-5 hidden">
              <Link href={"/signin"}>
                <button className="btn btn-primary">Sign In</button>
              </Link>
              <Link href={"/signup"}>
                <button className="btn btn-primary">Sign Up</button>
              </Link>
            </div>
          )}
  </div>
</div>
  )};
export default Navbar;
