import React from 'react'

const ProfileView = ({image, name, gmail}) => {
  return (
    <div className='flex gap-2'>
        <div className='w-13 h-13 rounded-full bg-amber-400 overflow-hidden'>
           {image}
        </div>
        <div>
            <h3 className='text-lg font-semibold'>{name}</h3>
            <p className='text-[13px]'>{gmail}</p>   
        </div>
    </div>
  )
}

export default ProfileView