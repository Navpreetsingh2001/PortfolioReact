import React from 'react'
import light from '../assets/light.png'
import tele from '../assets/telephone.png'

import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <div className='
       h-20  flex justify-around mt-3 static'>
            <div className='w-1/3  flex justify-center items-center'>
                <h1 className='items-center text-3xl font-bold animate-bounce '>nAvpreet.</h1>
                
            </div>
            <div className='flex bg-white  rounded-full w-1/3 justify-center shadow-lg'>
                <ul className='flex justify-center items-center   '>
                    {/* <li className='px-4'><a className='cursor-pointer hover:text-purple-400' href="">HOME</a></li>
                    <li  href="About">ABOUT ME</a></li>
                    <li className='px-4'><a className='cursor-pointer hover:text-purple-400' href="">SERVICES</a></li>
                    <li className='px-4'><a className='cursor-pointer hover:text-purple-400' href="">MY WORK</a></li>
                    <li className='px-4'><a className='cursor-pointer hover:text-purple-400' href="">CONTACT ME</a></li> */}
                <NavLink className='cursor-pointer hover:text-purple-400 px-4 hover:scale-110' to={'/'}>Home</NavLink>
                <NavLink className='cursor-pointer hover:text-purple-400 px-4 hover:scale-110' to={'/about'}>About</NavLink>
                <NavLink className='cursor-pointer hover:text-purple-400 px-4 hover:scale-110' to={'/services'}>Services</NavLink>
                <NavLink className='cursor-pointer hover:text-purple-400 px-4 hover:scale-110' to={'/mywork'}>My work</NavLink>
                <NavLink className='cursor-pointer hover:text-purple-400 px-4 hover:scale-110' to={'/contact'}>Contact me</NavLink>
                </ul>
            </div>
            <div className=' px-3 flex justify-center w-1/3 items-center'>
                <button  className='px-4'><img className='h-10 ' src={light} alt="" /></button>
                <button className='border border-gray-400 p-4 w-[30%] rounded-full flex justify-center items-center bg-white hover:bg-gray-200 hover:border-none transition ease-in-out  '>Contact <img className='h-7 px-3' src={tele} alt="" /></button>

            </div>
        </div>
    )
}

export default Navbar
