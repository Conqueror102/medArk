import React from 'react'
import { Outlet } from 'react-router-dom'
import DashBoardHeader from '../static/dashBoardHeader'
import HospitalSideBar from '../static/HospitalSideBar'

const HospitalDashboardLayout = () => {
  return (
    <div className='flex'>
    <HospitalSideBar/>
  <div className='w-full'>
  <DashBoardHeader/>
  {<Outlet/>}
  </div>
    </div>
  )
}

export default HospitalDashboardLayout