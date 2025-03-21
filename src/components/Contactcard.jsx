import React from 'react'

const Contactcard = ({icon, con, title, content}) => {
  return (
    <div className='grid place-items-center p-5'>
        <div className='w-18 h-16 p-2 mb-5 text-primary grid place-items-center text-4xl text-center bg-accent rounded-lg shadow-md'>
           {icon}
        </div>
        <h2 className='font-semibold text-lg'>{title}</h2>
        <p className='text-secondary mb-4'>{content}</p>
        <h3 className='text-primary font-semibold'>{con}</h3>
    </div>
  )
}

export default Contactcard