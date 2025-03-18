import React from 'react'
import Button from "../components/Button";

const hospitalComponent = ({hospitalName, hospitalAddress, image}) => {
  return (
    <>
    <div className={`w-[23%] flex flex-col justify-around items-center bg-hero border-gray-200 border-2 rounded-[10px] p-2`}>
        <div className="w-[30%]">
          <img className="size-full object-contain overflow-hidden rounded-[5px]" src={image} alt="Image could'nt render!" />
        </div>
        <h3 className='text-primary font-semibold'>{hospitalName}</h3>
        <p className='text-gray-600 text-center'>{hospitalAddress}</p>
        <Button text="Apply Now" className="h-[15%] w-[50%] bg-primary text-white flex justify-center items-center"/>
    </div>
  </>
  )
}

export default hospitalComponent