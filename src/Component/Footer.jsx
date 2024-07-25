import React from 'react'
import git from '../assets/github.png'
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
    return (
        <div className=' flex flex-col justify-center items-center'>
            
                <h1 className='text-5xl mb-4'>nAvpreet.</h1>
                <h2 className='text-xxl'>navpreetsingh9878465121@gmail.com</h2>
                <hr  />
                <div className=' mb-5  items-center flex w-[80%] justify-between mt-5'>
                    <div >©️ 2024 Navpreet singh. All right reserved</div>
                    <div className='flex justify-between w-[20%] '>
                        <a  href="https://github.com/Navpreetsingh2001"><img  className='border h-10  w-15 hover:scale-110' src={git} alt="" /></a>
                        <a href="https://www.linkedin.com/in/navpreet-singh-a3a236211/"><img className=' h-10 w-15 hover:scale-110' src={linkedin} alt="" /></a>
                        <a href="https://www.instagram.com/"><img className='border h-10 w-15 hover:scale-110' src={insta} alt="" /></a>
                    </div>
                </div>
            
        </div>
    )
}

export default Footer
