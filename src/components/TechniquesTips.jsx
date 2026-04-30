import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const TechniquesTips = () => {
  return (
    <div className="mt-10">
        <h1 className="text-3xl font-bold text-center mb-10"><span className="border-b-2 pb-2">Study Techniques & Time Management Tips</span></h1>
      <div className="grid grid-cols-2 max-w-5xl mx-auto">
        <div className="card w-96 bg-[#DADBDD] shadow-sm py-5">
          <div className="card-body">
            <h1 className="text-xl font-bold">Some Important Study Techniques</h1>
            <ul className="mt-4 flex flex-col gap-2 text-xs">
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li  className="text-lg">Study actively, not passively</li>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li  className="text-lg ">Practice regularly, build projects</li>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li className="text-lg "> Break topics into smaller parts</li>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li  className="text-lg"> Revise lessons every week</li>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li  className="text-lg ">Use Pomodoro focus technique</li>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li  className="text-lg ">Take clear, concise notes</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="card w-96 bg-[#DADBDD] shadow-sm">
          <div className="card-body">
            <h1 className="text-xl font-bold">Time Management Tips</h1>
            <ul className="mt-4 flex flex-col gap-2 text-xs">
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li  className="text-lg">Create a daily study plan</li>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li  className="text-lg ">Set clear achievable goals</li>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li className="text-lg ">Avoid multitasking while studying</li>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li  className="text-lg">Prioritize difficult important topics</li>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li  className="text-lg ">Limit distractions, stay focused</li>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className="text-green-500 text-lg"/>
                <li  className="text-lg ">Stay consistent every single day</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechniquesTips;
