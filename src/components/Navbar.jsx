import React from 'react'
import { BsMoonStarsFill } from "react-icons/bs";

const Navbar = ({darkMode,setDarkMode}) => {
  return (
  <nav className='py-10 flex justify-between'>
    <h1 className='text-2xl cursor-pointer font-bold'>CPP</h1>
    <ul className='flex items-center'>
        <li onClick={()=>{
            setDarkMode(!darkMode)
        }}><BsMoonStarsFill/></li>
        <li className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white rounded-md ml-4'><a href="/">Resume</a></li>
    </ul>
  </nav>
  )
}

export default Navbar