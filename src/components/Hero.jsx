import React from 'react'
import banner from '../img/banner.png'
import { NavLink } from 'react-router-dom'

function Hero() {
    return (
        <div className='bg-[#f3f3f3] flex flex-col md:flex-row justify-between items-center md:px-36 px-8 py-10 rounded-2xl'>
            <div className="left">
                <h1 className='md:text-4xl text-xl'>Books to freshen up your bookshelf</h1>
                <NavLink to={'/listedBook'}><button className='px-3 py-2 rounded-lg bg-[#23BE0A] font-medium cursor-pointer my-4 text-2xl'>View The List</button></NavLink>
            </div>
            <div className="right md:w-[20vw] w-[40vw">
                <img className='w-full h-full object-cover' src={banner} alt="bannerimg" />
            </div>
        </div>
    )
}

export default Hero