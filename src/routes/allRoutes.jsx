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
import Profile from '../pages/users/Profile'
import Findjobs from '../pages/users/Findjobs'
import Applied from '../pages/users/Applied'
import SavedJobs from '../pages/users/SavedJobs'
import Notification from '../pages/users/Notification'
import HospitalSignUp from '../pages/auth/HospitalSignUp'
import ContactUs from '../pages/ContactUs'
import PrivateRoute from '../layout/PrivateRoute'
import JobDetails from '../pages/Detail'
import HospitalDashboard from '../pages/hopitals/HospitalDashboard'
import HospitalDashboardLayout from '../layout/HospitalDashboardLayout'
import CheckEmail from '../components/CheckEmail'

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
                <Route path='contact' element={<ContactUs/>}/>
            </Route>

            {/* auth */}
            <Route path='signup' element={<SignUp/>}/>
            <Route path='auth' element={<Login/>}/>
            <Route path='hospitalSignUp' element={<HospitalSignUp/>}/>

            {/* user dashboard */}
<Route element={<PrivateRoute/>}>
            <Route path='/userdash' element={<UserDashLayout/>}>
                <Route index element={<UserDashboard/>}/>
            <Route path='jobs/:jobId' element={<JobDetails/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path='findjob' element={<Findjobs/>}/>
                <Route path='applied' element={<Applied/>}/>
                <Route path='notification' element={<Notification/>}/>
                <Route path='savedjob' element={<SavedJobs/>}/>
            </Route>
</Route>

        {/* hospital dashboard */}
        <Route path='/hospitaldash' element={<HospitalDashboardLayout/>}>
        <Route index element={<HospitalDashboard/>}/>
        </Route>
        <Route path='/checkemail' element={<CheckEmail/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AllRoutes