import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLocationSearching } from "react-icons/md";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const HospitalSideBar = () => {
  return (
    <div>
      <div className="shadow-md sticky top-0 h-screen w-[250px]">
        <div className="flex items-center px-9">
          <div className="flex items-center justify-center ">
            <img
              src={logo}
              alt="Logo"
              className="size-17 max-sm:size-10 object-contain"
            />
          </div>
          <h1 className="text-blue-950 font-bold text-lg max-sm:text-lg">
            <span className="text-primary">Med</span>ARK
          </h1>
        </div>

        <div>
          <Link to="/hospitaldash">
            <h1 className="px-9 py-3 hover:bg-hero hover:border-l-3 border-primary flex items-center gap-2">
              <span className="text-lg">
                <MdOutlineSpaceDashboard />
              </span>
              Dashboard
            </h1>
          </Link>
          <Link to="/hospitaldash/hospitalProfile">
            <h1 className="px-9 py-3 hover:bg-hero hover:border-l-3 border-primary flex items-center gap-2">
              <span className="text-lg">
                <FaRegUserCircle />
              </span>
              Hospital Profile
            </h1>
          </Link>
          <Link to="/hospitaldash/jobListing">
            <h1 className="px-9 py-3 hover:bg-hero hover:border-l-3 border-primary flex items-center gap-2">
              <span className="text-lg">
                <MdOutlineLocationSearching />
              </span>
              Job Listing
            </h1>
          </Link>
          <Link to="/hospitaldash/applicationPage">
            <h1 className="px-9 py-3 hover:bg-hero hover:border-l-3 border-primary flex items-center gap-2">
              <span className="text-lg">
                <FaHouseMedicalCircleCheck />
              </span>
              Applications
            </h1>
          </Link>
          <Link to="/hospitaldash/getStaffs">
            <h1 className="px-9 py-3 hover:bg-hero hover:border-l-3 border-primary flex items-center gap-2">
              <span className="text-lg">
                <FaRegBookmark />
              </span>
              Staffs
            </h1>
          </Link>
          <h1 className="px-9 py-3 hover:bg-hero hover:border-l-3 border-primary flex items-center gap-2">
            <span className="text-lg">
              <BiLogOut />
            </span>
            Log Out
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HospitalSideBar;
