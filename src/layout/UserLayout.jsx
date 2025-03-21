import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../static/Header'
import Footer from '../static/Footer'

const UserLayout = () => {
  return (
    <>
        <Header/>
        {<Outlet/>}
        <Footer/>
    </>
  )
}

export default UserLayout