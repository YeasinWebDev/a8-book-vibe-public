import React from 'react'
import { FaStar } from "react-icons/fa";

function Contact() {
    return (
        <div className='flex justify-center flex-col items-center mt-10'>
            <h1 className='font-semibold text-4xl'>Contact  Book House</h1>

            <form className='flex flex-col '>
                <label className='font-semibold text-xl my-2 '>Topic: <br />
                    <input className='w-60 h-10 bg-white border-2 border-gray-300 ml-2' type="text" required />
                </label>
                <label className='font-semibold text-xl my-2 '>Your Name:  <br />
                    <input className='w-60 h-10 bg-white border-2 border-gray-300 ml-2' type="text" required />
                </label>
                <label className='font-semibold text-xl my-2 '>Your Email Address: <br />
                    <input className='w-60 h-10 bg-white border-2 border-gray-300 ml-2' type="email" required />
                </label>
                <label className='font-semibold text-xl my-2 '>Your Country: <br />
                    <input className='w-60 h-10 bg-white border-2 border-gray-300 ml-2' type="text" required />
                </label>
                <label className='font-semibold text-xl my-2 '>Your Message: <br />
                    <textarea  className='bg-white border-2 border-gray-300 ml-2 xl:w-[30vw] xl:h-[10vw] w-[80vw] h-[20vw]' type="text" required></textarea>
                </label>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded '>Submit</button>
            </form>
        </div>
    )
}

export default Contact