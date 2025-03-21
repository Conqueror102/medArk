import React from 'react'

const ServiceCard = ({icon, heading, content, className}) => {
  return (
    <div>
        <div className={` ${className}  shadow-2xl p-4 w-68 max-sm:w-full h-60 flex justify-center items-center rounded-[6px]   max-[769px]:w-[90%]`}>
                <div className="h-[90%]  flex items-center flex-col justify-around">
                  <div className="size-18 mb-4 p-5 shadow-lg bg-white  flex justify-center items-center rounded-[6px]">
                    {icon}
                  </div>
                  <h1 className="text-[16px] text-center  font-semibold">{heading}</h1>
                  <p className="text-[14px] text-gray-800  text-center">
                   {content}
                  </p>
                 
                </div>
              </div>
   
    </div>
  )
}

export default ServiceCard