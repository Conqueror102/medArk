import React from 'react'
import logo from "../assets/logo.png"
import Button from '../components/Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='w-full bg-white shadow-md px-10 py-2 flex justify-between items-center sticky top-0 z-50'>
      <Link to="/">
      <div className='flex items-center '>
       <div className='  flex items-center justify-center '>
          <img src={logo} alt=""  className='size-17  object-contain'/>
        </div>
        <h1 className='text-blue-950 font-bold text-2xl'><span className='text-primary '>Med</span>ARK</h1>
       </div>
      </Link>

     <div className='flex space-x-5 items-center'>
     <nav className='flex justify-center '>
        <ul className='flex space-x-8  font-semibold'>
          <Link to="/"><li className=' hover:text-primary'>Home</li></Link>
         <Link to="about"><li className=' hover:text-primary'>About Us</li></Link>
         <Link to="service"><li className=' hover:text-primary'>Service</li></Link>
         <Link to="jobs"><li className=' hover:text-primary'>Jobs</li></Link>
          <Link to="hospitals"><li className=' hover:text-primary'>Hospitals</li></Link>
         <Link to="staff"><li className=' hover:text-primary'>Staffs</li></Link>
        </ul>
      </nav>

      <div className='flex gap-3'>
        <Link to="/auth">
        <Button text="Log In " className="bg-primary text-white "/>
        </Link>

        <Link to="/signup">
        <Button text="Sign Up" className="bg-accent text-primary"/>
        </Link>
      </div>
     </div>
    </div>
  )
}

export default Header