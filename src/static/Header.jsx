import React, { useState } from 'react'
import logo from "../assets/logo.png"
import Button from '../components/Button'
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path ? "text-primary" : "";


  return (
    <div className='w-full shadow-md px-20 max-sm:px-5 bg-white py-1 flex justify-between items-center sticky top-0 z-50 max-[321px]:px-3'>
      <Link to="/">
      <div className='flex items-center'>
       <div className='flex items-center justify-center '>
          <img src={logo} alt=""  className='size-17 max-sm:size-10 object-contain'/>
        </div>
        <h1 className='text-blue-950 font-bold text-2xl max-sm:text-lg'><span className='text-primary '>Med</span>ARK</h1>
       </div>
      </Link>

     <div className='flex space-x-5 items-center '>
     <nav className='flex justify-center max-sm:hidden'>
        <ul className='flex space-x-8  font-semibold text-tertiary'>
          <Link to="/"><li className={` hover:text-primary  ${isActive("/")} `}>Home</li></Link>
         <Link to="about"><li className={`hover:text-primary  ${isActive("/about")} `}>About Us</li></Link>
         <Link to="jobs"><li className={`hover:text-primary  ${isActive("/jobs")} `}>Jobs</li></Link>
          {/* <Link to="hospitals"><li className={`hover:text-primary  ${isActive("/hospitals")} `}>Hospitals</li></Link> */}
         {/* <Link to="staff"><li className={`hover:text-primary  ${isActive("/staff")} `}>Staffs</li></Link> */}
         <Link to="service"><li className={`hover:text-primary  ${isActive("/service")} `}>Service</li></Link>
         <Link to="contact"><li className={`hover:text-primary  ${isActive("/contact")} `}>Contact Us</li></Link>
        </ul>
      </nav>

      <div className='flex gap-3  max-sm:hidden'>
        <Link to="/signUpAs">
        <Button text="Get Started " className="bg-primary text-white "/>
        </Link>

      </div>

      <div className="flex items-center">
         
          <div
            className="text-lg cursor-pointer bg-primary text-white p-2 font-semibold rounded-sm hidden max-md:flex"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu />
          </div>
        </div>
     </div>

    
        
          <div
            className={`fixed top-12 left-0 w-3/4 h-full bg-white shadow-lg z-50 hidden max-md:flex flex-col ${isOpen === true ? "translate-x-[0px]" : "-translate-x-[350px]"} transition duration-500 ease-in-out`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col  font-semibold cursor-pointer text-tertiary  text-lg p-5">
              <Link to="/" exact className={`w-full p-3  ${isActive("/")}  `} onClick={toggleMenu}><li>Home</li></Link>
              <Link to="about" className={`w-full p-3 ${isActive("/about")}`} onClick={toggleMenu}><li>About</li></Link>
              <Link to="contact" className={`w-full p-3 ${isActive("/contact")}`} onClick={toggleMenu}><li>Contact Us</li></Link>
              <Link to="service" className={`w-full p-3 ${isActive("/service")}`} onClick={toggleMenu}><li>Services</li></Link>
              <Link to="jobs" className={`w-full p-3 ${isActive("/jobs")}`} onClick={toggleMenu}><li>Jobs</li></Link>
              {/* <Link to="hospitals" className={`w-full p-3 ${isActive("/hospitals")}`} onClick={toggleMenu}><li>Hospitals</li></Link> */}
              {/* <Link to="staff" className={`w-full p-3 ${isActive("/staff")}`} onClick={toggleMenu}><li>Staffs</li></Link> */}
            </ul>
          </div>

      
    </div>
  )
}

export default Header