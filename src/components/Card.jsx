import React from 'react'
import Button from './Button'

const Card = ({logo, jobType, hosName, address, locum, time }) => {
  return (
    <div className='p-5 shadow-md rounded-md border border-gray-200 bg-white'>
      <div>
     <div className='flex  justify-between'>
     <div className=' w-20 rounded-md p-4 mb-3 shadow-primary/10 border-gray-200 border shadow-lg'>
            <img src={logo} alt="" />
        </div>
        <p className=' bg-green-200 text-green-600 font-semibold rounded-md p-1 h-8'>
          {locum}
        </p>
     </div>

        <div>
            <h1 className='font-semibold text-2xl'>
                {jobType}
            </h1>
        </div>
      </div>

      <h1>
            {hosName}
      </h1>

      <p>{address}</p>

     
      <div className='flex text-gray-400 items-center justify-between'>
      <p>
        {time}
      </p>
      <Button text="Details " className="bg-tertiary text-white mt-2 "/>
      </div>
    </div>
  )
}

export default Card