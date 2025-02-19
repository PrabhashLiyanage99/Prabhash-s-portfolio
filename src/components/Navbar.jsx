import React from 'react'
import { NavLink } from 'react-router-dom'
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

function Navbar() {
  return (
    <header className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-gray-800 `}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
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
        </div>
    </header>
  )
}

export default Navbar