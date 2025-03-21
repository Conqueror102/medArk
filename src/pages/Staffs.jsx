import React from 'react'
import StaffCard from '../components/StaffCard'
import PageHead from '../components/PageHead'
import hospital1 from "../assets/images.jpg";
import hospital2 from "../assets/images1.png";
import hospital3 from "../assets/imge.jpg";
import hospital4 from "../assets/logos.png";
import Search from '../components/Search';

const Staffs = () => {
  return (
    <div>
      <PageHead content="Staffs"/>
      <div className='px-20 pt-10 max-sm:p-5 item-center flex justify-center'>
        <Search/>
      </div>
      <div className="grid grid-cols-4 gap-8 max-sm:grid-cols-1 px-20 py-15 max-sm:p-5">
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
          <StaffCard  image={hospital1} bio="my name is victor am a doctor with 5 yrs exprience" field="Doctor" name="victor Onyema"/>
        </div>
    </div>
  )
}

export default Staffs