import React from 'react';
import image from '../assets/group.jpg';
import Button from '../components/Button';
import Steps from '../components/steps';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

const LandingPage = () => {
  return (
    <div>
      {/* text side */}
      <div className='px-4 md:px-24 flex flex-col md:flex-row py-10'>
        <div className='w-full md:w-1/2 flex flex-col max-sm:items-center md:mt-10 max-sm:justify-center'>
          <h1 className='text-3xl md:text-5xl max-sm:text-center font-bold text-tertiary mb-5 leading-8 md:leading-14'>
            Connecting <span className='px-2 max-sm:text-2xl rounded-md bg-accent'>Hospitals</span> with Top Medical Professionals <span className='text-primary'>Instantly!</span>
          </h1>
          <p className='text-md max-sm:text-center text-secondary'>
            Find the right healthcare professionals for your hospital or discover your next job opportunity—all in one smart, AI-powered platform.
          </p>
          <div className='flex gap-3 mt-7'>
            <Button text='Find Jobs' className='bg-primary text-white' />
            <Button text='Post Jobs' className='bg-accent text-primary' />
          </div>
        </div>
        <div className='w-full md:w-1/2 h-full flex justify-end items-center'>
          <img src={image} alt='' className='object-cover w-full md:w-[480px]' />
        </div>
      </div>

      {/* section2 */}
      <section>
        <div className='flex justify-center items-center flex-col py-10 bg-accent'>
          <p className='font-semibold text-primary text-lg'>Working Process</p>
          <h1 className='text-4xl font-bold pt-4 text-tertiary p-6'>How it Works</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Steps number='01' icon={icon1} text1='Register your Account' text2='' className='bg-[#3898E2]' />
            <Steps number='02' icon={icon2} text1='Upload your Credentials' text2='' className='bg-[#BC84CA]' />
            <Steps number='03' icon={icon3} text1='Register your Account' text2='' className='bg-[#56D8B1]' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;