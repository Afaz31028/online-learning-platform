import React from "react";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoCall, IoLocation } from "react-icons/io5";
import { MdEmail, MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-white px-40">
      <div className="flex justify-between pt-15">
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-5xl text-amber-500">S</span>kill
            <span className="text-cyan-300">Sphere</span>
          </h1>
          <p className="mt-3">
            Master in-demand skills like Web Development,
            <br /> Python, Graphic Design, and Digital Marketing <br /> — all in
            one place
          </p>
          <ul className="">
            <div className="flex gap-2 items-center mt-5">
              <IoCall className="text-red-500" />
              <li>031-234567</li>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <MdEmail className="text-orange-600" />
              <li>skillsphere@gamil.com</li>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <IoLocation className="text-red-500" />
              <li>
                Surama R/A, Road-2,
                <br /> Sylhet Sadar, Sylhet
              </li>
            </div>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Features</h1>
          <ul className="space-y-3 cursor-pointer">
            <li className="hover:text-amber-500">Expert Instructors</li>
            <li className="hover:text-amber-500">Community Support</li>
            <li className="hover:text-amber-500">Dedicated Guidance</li>
            <li className="hover:text-amber-500">Job Placement</li>
            <li className="hover:text-amber-500">Certification</li>
            <li className="hover:text-amber-500">Lifetime Accesss</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Follow Us</h1>
          <ul className="space-y-3">
            <div className="flex gap-2 items-center hover:text-cyan-400">
              <MdOutlineFacebook className="text-xl" />
              <li>Facebook</li>
            </div>
            <div className="flex gap-2 items-center hover:text-cyan-400">
              <FaLinkedin className="text-xl" />
              <li>LinkedIn</li>
            </div>
            <div className="flex gap-2 items-center hover:text-cyan-400">
              <FaInstagramSquare className="text-xl" />
              <li>Instragram</li>
            </div>
            <div className="flex gap-2 items-center hover:text-cyan-400">
              <FaTwitterSquare className="text-xl" />
              <li>Twitter</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5 pb-4 flex justify-between items-center">
        <div>
            <p>&copy; 2026 skillsphere. All rights reserved.</p>
        </div>
        <div>
            <ul className="flex gap-5 items-center">
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
