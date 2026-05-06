"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-100 to-white text-center px-4">
      
      {/* Big 404 Background */}
      <h1 className="text-[150px] md:text-[220px] font-extrabold text-gray-300 opacity-40 leading-none">
        404
      </h1>

      {/* Main Text */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Sorry, that page could not be found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-full shadow hover:bg-gray-800 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}