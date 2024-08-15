import React, { useState } from 'react'
import { Menu, Drawer } from 'antd'
import { Link , NavLink} from 'react-router-dom'
import { CloseCircleFilled, MenuOutlined } from '@ant-design/icons'

const MobileNav =({isMobile, setiSMobile})=>{
    const closeMobileNav = ()=>{
        setiSMobile(false)
    }

    return(
        <>
        <Drawer
        
        placement='left'
        width="65%"
        onClick={closeMobileNav}
        open={isMobile}
      >
        <div className='flex flex-row-reverse justify-between !w-full '>
            <span><CloseCircleFilled onClick={closeMobileNav}/></span>
            <div className='flex flex-col gap-x-4 h-full'>
            <NavLink to="/office">Offices</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to ="/products">Products</NavLink>
            <NavLink to ="/userdisplaylist">UsersTable</NavLink>
            </div>
            
        </div>
        
      </Drawer>
        
        </>
    )
}

const Nav = () => {
    const [isMobile, setiSMobile] = useState(false)
    const ShowMobileNav = ()=>{
       setiSMobile(!isMobile)
        
    }
  return (
    <div className='flex flex-row justify-around items-center w-full meun p-3 h-[50px] bg-red-900 '>
        <div className='text-white w-[10%] '>Logo</div>
        
        <Menu
        className='flex flex-row justify-between bg-transparent w-[50%] max-500:hidden '
        items={[
            {label: <Link to= "/office" className='!text-white'>Offices</Link>, key: "office"},
            {label: <Link to= "/dashboard" className='!text-white'>Dashboard</Link>, key: "dashboard"},
            {label: <Link to= "/register" className='!text-white'>Register</Link>, key: "register"},
            {label: <Link to= "/login" className='!text-white'>Login</Link>, key: "login"},
            {label: <Link to= "/products" className='!text-white'>Products</Link>, key: "products"},
            {label: <Link to= "/userdisplaylist" className='!text-white'>UsersTable</Link>, key: "userTable"},
        ]}
    >

    </Menu>
        
        <MenuOutlined onClick={ShowMobileNav} className='text-white hidden max-500:block'/>
        <MobileNav isMobile={isMobile} setiSMobile={setiSMobile}/>
    </div>
  )
}

export default Nav