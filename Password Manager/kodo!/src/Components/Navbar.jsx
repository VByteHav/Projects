import React from 'react'
import { NavLink } from 'react-router-dom'
import './Styler.css'

const Navbar = () => {
   
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer  flex justify-between items-center py-5 px-4 h-14">
                <div className="logo font-extrabold l text-white text-xl md:text-2xl">
                    <span className='text-green-500 '>  &lt;</span>
                    <span>KO</span>
                    <span className='text-green-500 '>DO!/ &gt;</span>


                </div>
                <ul>
                    <li className='flex gap-4'>
                        <NavLink className={(e)=>{return e.isActive?' hover:font-bold s underline ': "s"}} to="/">Home</NavLink>
                        <NavLink className={(e)=>{return e.isActive?' hover:font-bold s  underline': "s"}} to="/passgen">Pass Generator</NavLink>
                
                    </li>
                </ul>
               
                <a href="https://github.com/VByteHav" target='_blank'>
                    <button className='text-white  my-5 mx-2 rounded-full flex  cursor-pointer justify-between items-center ring-white ring-1'>

                        <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                        <span className='font-bold px-2'>GitHub</span>

                    </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
