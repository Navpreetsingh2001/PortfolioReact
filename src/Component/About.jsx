import React from 'react'
import vs from '../assets/vs.png'
import git from '../assets/git.png'
import img from '../assets/img.png'
import Html from '../assets/html.png'
import project from '../assets/project.png'
import graduation from '../assets/graduation.png'
import Navbar from './Navbar'

function About() {
    return (
        
        
        <div className='flex flex-col   p-10'>
            <h1 className='flex justify-center text-2xl mb-3 '>Introduction</h1>
            <h1 className='text-6xl flex justify-center'>About me</h1>
            <div className=' flex '>
                <div className='w-1/3  flex  rounded-md '>
                        <img className='relative shadow-xl rounded-xl hover:scale-110 shadow-gray-700 transition ease-in-out ' src={img} alt="" />
                        
                </div>
                <div className='w-3/4  h-[20%]  px-32 py-10'>
                    <div className='flex '>

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse et velit aut nihil maiores aspernatur hic libero voluptatem nisi soluta non, nesciunt eligendi. Exercitationem quis quidem debitis itaque fugiat corrupti.
                    </div>
                    <div className='h-full flex justify-between mt-12'>
                        <div className='p-3   h-60 w-[30%] rounded-xl flex justify-center items-center flex-col shadow-2xl hover:scale-110 hover:shadow-purple-500 transition ease-in-out  '>
                            <div className='flex  w-full'><img className='h-20 ' src={Html} alt="" /></div>
                            <div className='w-full'><h1 className=' flex justify-start text-xl font-bold'>Language</h1></div>
                            <h1>HTML,CSS,JavaScript React Js,NextJs</h1>
                        </div>
                        <div className='p-3 shadow-2xl h-60 w-[30%] rounded-xl flex justify-center items-center flex-col hover:scale-110 hover:shadow-purple-500 transition ease-in-out'>
                            <div className='flex  w-full'><img className='h-20 ' src={graduation} alt="" /></div>
                            <div className='w-full'><h1 className=' flex justify-start text-xl font-bold'>Education</h1></div>
                            <h1>Master's in Computer Application</h1>
                        </div>
                        <div className='p-3 shadow-2xl h-60 w-[30%] rounded-xl flex justify-center items-center flex-col hover:scale-110 hover:shadow-purple-500 transition ease-in-out'>
                        <div className='flex  w-full'><img className='h-20 ' src={project} alt="" /></div>
                            <div className='w-full'><h1 className=' flex justify-start text-xl font-bold'>Projects</h1></div>
                            <h1 >Built moe than 5 projects</h1>
                        </div>
                        
                    </div>
                    <div className=''>
                        <h1 className='my-5'>Tools i use</h1>
                        <div className=' h-20 flex'>
                            <img className='border border-gray-400 h-20 w-20  rounded-md hover:scale-110 shadow-md hover:shadow-black transition ease-in-out' src={vs} alt="" />
                            <img className='border border-gray-400 h-20 w-20 rounded-md mx-4 hover:scale-110 shadow-md hover:shadow-black transition ease-in-out' src={git} alt="" />
                            <img className='border border-gray-400 h-20 w-20 rounded-md hover:scale-110 shadow-md hover:shadow-black transition ease-in-out ' src={vs} alt="" />
                            <img className='border border-gray-400 h-20 w-20 rounded-md mx-4 hover:scale-110 shadow-md hover:shadow-black transition ease-in-out' src={git} alt="" />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

    )
}

export default About
