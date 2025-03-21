import React from 'react'

const LandingPageCards = ({icons, headings, contents}) => {
  return (
    <>
    <div className='group h-65 w-60 max-sm:w-full p-4 bg-white rounded-[10px] hover:scale-95 shadow-md hover:bg-primary  transition-all duration-500 ease-in-out  flex justify-center items-center '>
        <div className=' flex flex-col justify-around items-center'>
            <div className='p-4 text-primary group-hover:bg-white group-hover:shadow-lg transition-all duration-500 ease-in-out   rounded-full text-6xl mb-5 flex justify-center items-center'>
            {icons}
            </div>
            <h1 className=' text-[12px] py-1 px-2 text-primary mb-3 bg-[#eff4fa] rounded-md'>{headings}</h1>
            <p className='text-[14px] group-hover:text-white transition-all duration-500 ease-in-out text-tertiary font-semibold text-center'>{contents}</p>
        </div>
    </div>
    </>
  )
}

export default LandingPageCards

