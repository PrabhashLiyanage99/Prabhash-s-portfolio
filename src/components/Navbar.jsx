import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='flex gap-7'>
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center
        justify-center  font-bold shadow-md">
            <p className='text-blue-500'>AH</p>
        </NavLink>
        <nav className=' text-lg font-medium'>
            <NavLink to="/about" className={({isActive}) => isActive ?
            'text-blue-500' : 'text-black'}> About 
            </NavLink>
        </nav>
        <nav className=' text-lg font-medium'>
            <NavLink to="/project" className={({isActive}) => isActive ?
            'text-blue-500' : 'text-black'}> Project 
            </NavLink>
        </nav>
        <nav className=' text-lg font-medium'>
            <NavLink to="/contact" className={({isActive}) => isActive ?
            'text-blue-500' : 'text-black'}> Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar