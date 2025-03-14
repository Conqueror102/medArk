import React from 'react';

const Steps = ({ number, icon, text1, text2, className }) => {
  return (
    <div className='flex flex-col w-full md:w-[400px]'>
      <h1 className='text-4xl md:text-8xl font-extrabold text-[#c1cffa]'>{number}</h1>
      <div className='flex md:ml-28 relative flex-col'>
        <div className=''>
          <div className='p-4 bg-white shadow-2xl rounded-lg absolute top-4 left-3'>
            <img src={icon} alt='' className='w-10 h-12 md:w-15 md:h-18 object-contain' />
          </div>
          <div className={`p-5  rounded-lg w-full text-white font-semibold text-lg ${className}`}>
            <p className='pl-5 max-sm:ml-13 max-sm:text-[15px]'>{text1}</p>
          </div>
        </div>
        <p className='mt-14'>{text2}</p>
      </div>
    </div>
  );
};

export default Steps;