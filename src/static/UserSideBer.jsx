import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLocationSearching } from "react-icons/md";
import { FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
const UserSideBer = () => {
  return (
    <div className='shadow-md sticky  top-0 h-screen w-[250px]'>
          <div className='flex items-center px-9'>
               <div className='flex items-center justify-center '>
                  <img src={logo} alt=""  className='size-17 max-sm:size-10 object-contain'/>
                </div>
                <h1 className='text-blue-950 font-bold text-lg max-sm:text-lg'><span className='text-primary '>Med</span>ARK</h1>
               </div>

        <div className=''>
           <Link to="/userdash"> <h1 className='px-9 py-3 hover:bg-hero  hover:border-l-3 border-primary flex items-center gap-2'> <span className='text-lg'><MdOutlineSpaceDashboard /></span>Dashboard</h1></Link>
           <Link to="profile"> <h1 className='px-9 py-3 hover:bg-hero  hover:border-l-3 border-primary flex items-center gap-2'> <span className='text-lg'><FaRegUserCircle /></span>Profile</h1></Link>
            <Link to="findjob"><h1 className='px-9 py-3 hover:bg-hero  hover:border-l-3 border-primary flex items-center gap-2'> <span className='text-lg'><MdOutlineLocationSearching /></span>Find Jobs</h1></Link>
           <Link to="applied"> <h1 className='px-9 py-3 hover:bg-hero  hover:border-l-3 border-primary flex items-center gap-2'> <span className='text-lg'><FaHouseMedicalCircleCheck /></span>Applied</h1></Link>
            <Link to="notification"><h1 className='px-9 py-3 hover:bg-hero  hover:border-l-3 border-primary flex items-center gap-2'> <span className='text-lg'><IoMdNotificationsOutline /></span>Notification</h1></Link>
            <Link to="savedjob"><h1 className='px-9 py-3 hover:bg-hero  hover:border-l-3 border-primary flex items-center gap-2'> <span className='text-lg'><FaRegBookmark /></span>Saved Jobs</h1></Link>
            <h1 className='px-9 py-3 hover:bg-hero  hover:border-l-3 border-primary flex items-center gap-2'> <span className='text-lg'><BiLogOut /></span>Log Out</h1>
        </div>
    </div>
  )
}

export default UserSideBer