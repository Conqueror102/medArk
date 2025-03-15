import React from 'react'
import { Outlet } from 'react-router-dom'
import UserSideBer from '../static/UserSideBer'
import DashBoardHeader from '../static/dashBoardHeader'

const UserDashLayout = () => {
  return (
    <div className='flex'>
    <UserSideBer/>
  <div className='w-full'>
  <DashBoardHeader/>
  {<Outlet/>}
  </div>
    </div>
  )
}

export default UserDashLayout