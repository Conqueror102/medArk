import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";

const Search = () => {
  return (
    <>
      <div className="h-[10%] w-[60%] bg-white rounded-[10px] flex justify-center items-center shadow-lg shadow-black-400/50 border-gray-100 border-2 mt-[20px]">
        <div className="h-[80%] w-[50%] flex justify-center items-center border-r">
          <div className="h-[90%] w-[90%] flex items-center gap-[10px]">
            <CiSearch size={30} />
            <input
              type="text"
              placeholder="Job title, Keywords, or company"
              className="text-gray-500 text-[18px] outline-0 w-[80%]"
            />
          </div>
        </div>
        <div className="h-[80%] w-[50%] flex justify-center items-center">
          <div className="h-[90%] w-[90%] flex justify-around items-center">
            <FaLocationDot />
            <input
              type="text"
              placeholder="City, state, Address"
              className="text-gray-500 text-[18px] outline-0"
            />
            <Button
              text="Find Jobs"
              className="bg-primary w-[30%] h-[100%] text-white flex justify-center items-center"
            />
          </div>
        </div>
      </div>
      {/* <h1 className='text-[16px] text-tertiary font-semibold'>Post Your CV To Be Able To Apply</h1> */}
    </>
  );
};

export default Search;
