import React from 'react'

function Contact() {
    return (
        <div className='
         mt-20 flex justify-center items-center'>
            <div className='w-[50%]    flex flex-col justify-center items-center'>
                <h3 className='mb-4'>Connect with us</h3>
                <h1 className='text-6xl mb-5'>Get in Touch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sed.</p>

                <div className= 'w-full flex justify-between my-10 '>
                    <input placeholder='Enter your name' className=' border border-gray-400 rounded-xl w-[45%] p-5' type="text" />
                    <input placeholder='Enter your email' className='border border-gray-400 rounded-xl w-[45%] p-5' type="text" />

                </div>
                <div className=' w-full h-64'>
                    <textarea placeholder='Enter your Message...' name="" className='p-5 border border-gray-400 h-60 w-full rounded-xl' id=""></textarea>

                </div>
                <div>
                    <button className='border
                     border-gray-600 px-12 py-5 rounded-full text-white bg-gray-600' onClick={alert("Not working yet")}>Submit now</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
