import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className='md:px-10'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#f3f3f3] gap-2 w-52 text-black">
                            <NavLink to='/' className={({ isActive }) => `font-bold text-2xl px-2 py-3 ${isActive ? "text-green-600 rounded-xl border-2 border-green-600" : ""}`}>Home</NavLink>
                            <NavLink to='/listedBook' className={({ isActive }) => `font-bold text-2xl px-2 py-3 ${isActive ? "text-green-600 rounded-xl border-2 border-green-600" : ""}`}>Listed Books</NavLink>
                            <NavLink to='/pageToRead' className={({ isActive }) => `font-bold text-2xl px-2 py-3 ${isActive ? "text-green-600 rounded-xl border-2 border-green-600" : ""}`}>Page to Read</NavLink>

                        </ul>
                    </div>
                    <a className="text-xl font-semibold">Book House</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <NavLink to='/' className={({ isActive }) => `font-bold text-2xl px-2 py-3 ${isActive ? "text-green-600 rounded-xl border-2 border-green-600" : ""}`}>Home</NavLink>
                        <NavLink to='/listedBook' className={({ isActive }) => `font-bold text-2xl px-2 py-3 ${isActive ? "text-green-600 rounded-xl border-2 border-green-600" : ""}`}>Listed Books</NavLink>
                        <NavLink to='/pageToRead' className={({ isActive }) => `font-bold text-2xl px-2 py-3 ${isActive ? "text-green-600 rounded-xl border-2 border-green-600" : ""}`}>Page to Read</NavLink>

                    </ul>
                </div>
                <div className="navbar-end  gap-3">
                    <a className="px-3 py-2 rounded-lg bg-[#23BE0A] font-medium hover:bg-transparent cursor-pointer hover:border-2 border-[#23BE0A]">Sign in</a>
                    <a className="px-3 py-2 rounded-lg bg-[#59C6D2] font-medium hover:bg-transparent cursor-pointer hover:border-2 border-[#59C6D2]">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default Nav

