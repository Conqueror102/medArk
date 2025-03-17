import React from 'react'

const LandingPageCards = ({icons, headings, contents}) => {
  return (
    <>
    <div className='h-[50%] w-[23%] bg-white rounded-[10px] border-gray-200 border-2 flex justify-center items-center hover:bg-primary hover:text-white'>
        <div className='h-[90%] w-[90%] flex flex-col justify-around items-center'>
            <div className='h-[25%] w-[25%] flex justify-center items-center'>
            {icons}
            </div>
            <h1 className='font-semibold text-secondary'>{headings}</h1>
            <p className='text-[18px] text-tertiary font-semibold text-center'>{contents}</p>
        </div>
    </div>
    </>
  )
}

export default LandingPageCards

