import React from 'react'
import Statistic from '../../components/Statistic'
import { IoBriefcase } from "react-icons/io5";
import { FaHospital } from "react-icons/fa";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdBookmarkAdded } from "react-icons/md";
import { FaHandLizard } from "react-icons/fa";
import Card from '../../components/Card';
import logo from "../../assets/logo.png"

const HospitalDashBoard = () => {
     const card = [
            {
                logo: logo,
                jobType:"Assistant doctor",
                 hosName:"Adoba hospital",
                  address:"Lagos",
                  locum:"FullTime",
                  time:"20/10/2015"
            },
            {
                logo: logo,
                jobType:"Mid Wife",
                 hosName:"Medark hospital",
                  address:"Lagos",
                  locum:"PerTime",
                  time:"20/10/2015"
            },
    
            {
                logo: logo,
                jobType:"Dentist",
                 hosName:"Total hospital",
                  address:"Lagos",
                  locum:"FullTime",
                  time:"20/10/2015"
            },
        ]
    
  return (
    <div className='p-8 bg-gray-50'>
    <div className='grid grid-cols-4 gap-4'>
        <Statistic icon={<IoBriefcase />} text="Total Jobs" count="400" className="border-b-2 border-blue-500" iconBg="bg-blue-200  text-blue-800 " />
        {/* <Statistic icon={<FaHospital />} text="Hospitals" count="400" className="border-b-2 border-green-500" iconBg="bg-green-200  text-green-800 " /> */}
        <Statistic icon={<BsClipboard2CheckFill />} text="Jobs Posted" count="400" className="border-b-2 border-yellow-500" iconBg="bg-yellow-200  text-yellow-800 " />
        {/* <Statistic icon={<IoNotificationsSharp />} text="Notification" count="400" className="border-b-2 border-pink-500" iconBg="bg-pink-200  text-pink-800 " /> */}
        <Statistic icon={<MdBookmarkAdded />} text="Saved Jobs" count="400" className="border-b-2 border-purple-500" iconBg="bg-purple-200  text-purple-800 " />
        <Statistic icon={<FaHandLizard />} text="Jobs for you" count="400" className="border-b-2 border-red-500" iconBg="bg-red-200  text-red-800 " />

    </div>

    <h1 className='text-3xl font-semibold mt-8 mb-5'>Jobs</h1>
        <div className='grid grid-cols-3 w-full gap-3'>
           {card.map((e, index)=>(
             <Card key={index} {...e}/>
           ))}
        </div>

        <p className='text-primary text-lg font-semibold mt-4 cursor-pointer'>View More</p>
</div>
  )
}

export default HospitalDashBoard