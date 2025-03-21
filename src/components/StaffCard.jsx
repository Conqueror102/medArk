import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const StaffCard = ({image, name, field, bio}) => {
  return (
    <div className=' shadow-lg rounded-lg'>
     <div className='p-4 bg-white rounded-t-lg grid place-items-center gap-3 '>
     <div className='rounded-full size-20 overflow-hidden '>
        <img src={image} alt="" />
        </div>
        <h1 className='text-2xl font-semibold text-tertiary '>{name} </h1>
        <h2 className='text-md font-semibold px-2 py-1 bg-accent rounded-md  text-primary'>{field}</h2>
        <p className='text-secondary text-center'>{bio} </p>
      </div> 
        <div className='bg-tertiary rounded-b-lg w-full p-2 hover:bg-primary transform- text-white flex gap-3 text-xl justify-center'>
        <FaFacebook className='cursor-pointer'/>
        <FaSquareXTwitter className='cursor-pointer'/>
        <FaLinkedin className='cursor-pointer'/>
        <FaInstagramSquare className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default StaffCard