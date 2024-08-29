import React from 'react'
import vs from '../assets/vs.png'
import git from '../assets/git.png'
import img from '../assets/img.png'
import Html from '../assets/html.png'
import project from '../assets/project.png'
import graduation from '../assets/graduation.png'
import mongoDb from '../assets/MongoDB.png'
import postman from '../assets/Postman.png'

function About() {
    return (
        
        
        <div className='flex flex-col   p-10'>
            <h1 className='flex justify-center text-2xl mb-3 '>Introduction</h1>
            <h1 className='text-6xl flex justify-center animate-bounce'>About me</h1>
            <div className=' flex '>
                <div className='w-1/3  flex  rounded-md '>
                        <img className='relative shadow-xl rounded-xl hover:scale-110 shadow-gray-700 transition ease-in-out ' src={img} alt="" />
                        
                </div>
                <div className='w-3/4  h-[20%]  px-32 py-10'>
                    <div className='flex '>
                    Aspiring software developer with a strong foundation in frontend and backend technologies, passionate about creating dynamic web applications. Experienced in React.js, database management, and Android development, with a proven ability to deliver user-friendly solutions.
                    
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
                            <img className='border border-gray-400 h-20 w-20  rounded-md hover:scale-110 shadow-md hover:shadow-black transition ease-in-out' src={mongoDb} alt="" />
                            <img className='border border-gray-400 h-20 w-20 rounded-md mx-4 hover:scale-110 shadow-md hover:shadow-black transition ease-in-out' src={postman} alt="" />
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
