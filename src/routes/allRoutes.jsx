import React from 'react'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import LandingPage from '../pages/LandingPage'
import About from '../pages/About'
import Hospitals from '../pages/Hospitals'
import Staffs from '../pages/Staffs'
import Service from '../pages/Service'
import SignUp from '../pages/auth/SignUp'
import UserLayout from '../layout/UserLayout'
import Login from '../pages/auth/Login'
import Jobs from '../pages/Jobs'
import UserDashLayout from '../layout/UserDashLayout'
import UserDashboard from '../pages/users/UserDashboard'
import SignUpAs from '../pages/SignUpAs'

const AllRoutes = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<UserLayout/>}>
                <Route index element={<LandingPage/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='hospitals' element={<Hospitals/>}/>
                <Route path='staff' element={<Staffs/>}/>
                <Route path='service' element={<Service/>}/>
                <Route path='jobs' element={<Jobs/>}/>
                <Route path='signUpAs' element={<SignUpAs/>}/>
            </Route>

            {/* auth */}
            <Route path='signup' element={<SignUp/>}/>
            <Route path='auth' element={<Login/>}/>

            {/* user dashboard */}

            <Route path='/userdash' element={<UserDashLayout/>}>
                <Route index element={<UserDashboard/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AllRoutes