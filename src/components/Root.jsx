import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='bg-white text-black w-full h-screen'>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default Root