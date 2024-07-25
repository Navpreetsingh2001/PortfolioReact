import React from 'react'
import Man from '../assets/man.png'
import dowld from '../assets/dowld.png'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div className='p-12 m-12 flex justify-center items-center'>

            <div className='  w-[70%] h-4/5  flex justify-center items-center flex-col'>
                    <div className='rounded-[50%]   mb-3'><img className='h-40 shadow-xl rounded-full hover:scale-110 shadow-purple-400 transition ease-in-out' src={Man} alt="" /></div>
                    <div><h1 className='mb-5 text-2xl' >Hi! I' m Navpreet Singh 👋</h1></div>
                    <div className='flex items-center justify-center'><h1 className='text-center text-7xl mb-6 animate-pulse  '>Front end web developer <br /> based in India</h1></div>
                    <div><h1 className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, aliquam. Quis suscipit, dignissimos neque, </h1></div>
                    <div className='mt-5 flex' >

                        
                        <NavLink className=' px-12 py-4 rounded-full mx-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:brightness-125 hover:scale-110 transition ease-in-out cursor-pointer' to={'/contact'}>Contact me</NavLink>
                        <button className='border flex justify-center items-center border-gray-500 px-5 py-4 rounded-full hover:brightness-125 hover:scale-110 transition ease-in-out cursor-pointer'>My resume <img className='h-7 px-3' src={dowld} alt="" /></button>
                    </div>
            </div>
            
                

            
        </div>
    )
}

export default Home
