import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";

const Search = () => {
  return (
    <div className="gap-3 p-2 w-2xl max-sm:w-70 max-sm:h-13  bg-white rounded-full flex   justify-center items-center shadow-lg shadow-black-400/50 border-gray-100 border-2 mt-[20px]">
      <div className="w-full flex flex-col md:flex-row">
        <div className=" w-full flex justify-center items-center ">
          <div className=" w-full flex items-center gap-[10px] text-gray-500">
           
            <input
              type="text"
              placeholder="Job title, Keywords, company, Name"
              className="text-gray-500 text-[18px] outline-0 p-2 max-sm:p-2 rounded-full w-full"
            />
          </div>
        </div>
        
      </div>
     <div className="bg-primary p-3  text-xl max-sm:p-2 cursor-pointer rounded-full text-white  ">
     <CiSearch  strokeWidth={2}/>
     </div>
    </div>
  );
};

export default Search;
