import React from 'react'
import { IoNotificationsSharp } from "react-icons/io5";

const DashBoardHeader = () => {
  return (
    <div className='w-full shadow-gray-100 shadow-md px-8 py-5 sticky top-0 bg-white z-20 flex items-center justify-between'> 
       <div>
           <h1 className='text-2xl font-semibold'>Welcome Victor</h1>  
       </div>
     <div className='flex items-center gap-3.5'>
            {/* <IoNotificationsSharp  size={20}/> */}

            <div className=' w-11 h-11 rounded-full bg-amber-300 '>
                <img src="" alt="" />
            </div>
     </div> 
    </div>
  )
}

export default DashBoardHeader