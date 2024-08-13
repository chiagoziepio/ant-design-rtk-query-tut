import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Layout = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-between'>
    <Nav/>
    <Outlet/>
    <footer>footer</footer>
    </div>
  )
}

export default Layout