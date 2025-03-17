import React from 'react'

const Statistic = ({icon, text, count, className, iconBg}) => {
  return (
    <div>
      <div className={`p-8 rounded-lg ${className} shadow-md flex gap-3 bg-white`}>
          <div className={`w-15 h-15  flex items-center justify-center text-2xl rounded-full ${iconBg}`}>
          {icon}
          </div>
        <div className="">
          <div>
            <h1 className='text-2xl font-semibold'>
                {text}
            </h1>
            <p className='text-2xl'>
              {count}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistic