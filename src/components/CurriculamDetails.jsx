import React from "react";

const CurriculamDetails = ({ module, len, id }) => {
    // console.log(len,id)
  return (
    <>
      { id < len-1 ? (
        <div className=" md:ml-20 lg:ml-50 font-bold text-sm md:text-md">
          <div className="flex gap-3 items-center">
            <p className="w-5 h-5 rounded-full bg-red-600"></p>
            <p>{module}</p>
          </div>
          <div className="border-l-3 h-13 ml-2 border-black"></div>
        </div>
        
      ) : (
        <div className="md:ml-20 lg:ml-50 font-bold text-sm md:text-md">
          <div className="flex gap-3 items-center">
            <p className="w-5 h-5 rounded-full bg-red-600"></p>
            <p>{module}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CurriculamDetails;
