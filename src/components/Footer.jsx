import React from "react";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoCall, IoLocation } from "react-icons/io5";
import { MdEmail, MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black w-full text-white px-5 md:px-50">
      <div className="flex flex-col md:flex-row justify-between pt-15 text-center md:text-start">
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-5xl text-amber-500">S</span>kill
            <span className="text-cyan-300">Sphere</span>
          </h1>
          <p className="mt-3 text-sm">
            Master in-demand skills like Web Development,
            <br /> Python, Graphic Design, and Digital Marketing <br /> — all in
            one place
          </p>
          <ul className="flex flex-col text-sm justify-center items-center md:items-start">
            <div className="flex gap-2 items-center mt-5">
              <IoCall className="text-red-500" />
              <li>031-234567</li>
            </div>
            <div className="flex gap-2 items-center mt-1 md:mt-3">
              <MdEmail className="text-orange-600" />
              <li>skillsphere@gamil.com</li>
            </div>
            <div className="flex gap-2 items-center mt-1 md:mt-3">
              <IoLocation className="text-red-500" />
              <li>Surama R/A, Road-2, Sylhet Sadar, Sylhet</li>
            </div>
          </ul>
        </div>
          <div>
            <h1 className="text-md md:text-lg font-bold mb-2 mt-5 md:mt-0 md:mb-4">Our Services</h1>
            <ul className="space-y-1 md:space-y-3 cursor-pointer">
              <li className="hover:text-amber-500 text-sm">
                Expert Instructors
              </li>
              <li className="hover:text-amber-500 text-sm">
                Community Support
              </li>
              <li className="hover:text-amber-500 text-sm">
                Dedicated Guidance
              </li>
              <li className="hover:text-amber-500 text-sm">Job Placement</li>
              <li className="hover:text-amber-500 text-sm">Certification</li>
              <li className="hover:text-amber-500 text-sm">Lifetime Accesss</li>
            </ul>
          </div>
          <div>
            <h1 className="text-md md:text-lg font-bold mt-5 md:mt-0 mb-2 md:mb-4">Follow Us</h1>
            <div className="flex justify-center">
              <ul className="space-y-1 md:space-y-3 cursor-pointer text-center">
              <div className="flex gap-2 items-center text-sm hover:text-cyan-400">
                <MdOutlineFacebook className="text-xl" />
                <li>Facebook</li>
              </div>
              <div className="flex gap-2 items-center text-sm hover:text-cyan-400">
                <FaLinkedin className="text-xl" />
                <li>LinkedIn</li>
              </div>
              <div className="flex gap-2 items-center text-sm hover:text-cyan-400">
                <FaInstagramSquare className="text-xl" />
                <li>Instragram</li>
              </div>
              <div className="flex gap-2 items-center text-sm hover:text-cyan-400">
                <FaTwitterSquare className="text-xl" />
                <li>Twitter</li>
              </div>
            </ul>
            </div>
          </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5 pb-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          <p>&copy; 2026 skillsphere. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex mt-3 md:mt-0 gap-5 items-center text-sm">
            <li>Privacy</li>
            <li>Terms & Conditions</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
