import React from 'react'
import Card from '../components/Card';
// import logo from "../assets/images.jpg"
import PageHead from '../components/PageHead';
import Search from '../components/Search';
import hospital1 from "../assets/images.jpg";
// import hospital2 from "../assets/images1.png";
// import hospital3 from "../assets/imge.jpg";
// import hospital4 from "../assets/logos.png";
import StaffCard from '../components/StaffCard';

const Hospitals = () => {
   return (
    <>
        <PageHead content="Hospitals"/>
      <div className="px-20 max-sm:p-5 bg-[#e1e1e1f] flex  w-full items-center  flex-col">
        <div className=''>
        <Search />
        </div>
        <div className="grid grid-cols-4 gap-8 w-full max-sm:grid-cols-1  py-15  max-sm:py-5">
          <StaffCard  image={hospital1} bio="we are the hopital care" field="medark@gmail.com" name="MedArk hospital"/>
          <StaffCard  image={hospital1} bio="we are the hopital care" field="medark@gmail.com" name="MedArk hospital"/>
          <StaffCard  image={hospital1} bio="we are the hopital care" field="medark@gmail.com" name="MedArk hospital"/>
          <StaffCard  image={hospital1} bio="we are the hopital care" field="medark@gmail.com" name="MedArk hospital"/>
          <StaffCard  image={hospital1} bio="we are the hopital care" field="medark@gmail.com" name="MedArk hospital"/>
          <StaffCard  image={hospital1} bio="we are the hopital care" field="medark@gmail.com" name="MedArk hospital"/>
          <StaffCard  image={hospital1} bio="we are the hopital care" field="medark@gmail.com" name="MedArk hospital"/>
          <StaffCard  image={hospital1} bio="we are the hopital care" field="medark@gmail.com" name="MedArk hospital"/>
          <StaffCard  image={hospital1} bio="we are the hopital care" field="medark@gmail.com" name="MedArk hospital"/>
          
        </div>
        
      </div>
    </>




  )
}

export default Hospitals