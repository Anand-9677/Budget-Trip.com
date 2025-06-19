import React from 'react'
import { FaInstagram, FaFacebookF} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Why from './Why';


function Myself() {
  return (
    <div className='h-full w-full bg-slate-500 flex flex-col items-center px-4 sm:px-12 sm:py-2 md:px-12 md:py-2 text-white'>
        <div className='flex items-center w-full my-6 md:my-12'>
            <h1 className='max-w-md sm:max-w-full md:max-w-full mx-auto sm:px-2 sm:leading-normal md:px-0 leading-relaxed md:leading-normal md:mx-0 text-xl sm:text-2xl  md:text-center'>
                Welcome to <span className='text-2xl sm:text-3xl font-semibold hover:text-orange-400 transition duration-200 ease-in-out'>Budget-Trip.com</span> — a  sister company of <span className='text-2xl sm:text-3xl font-semibold hover:text-orange-400 transition duration-200 ease-in-out'>Pirates Of Vacation</span> — your ultimate partner for exploring the world without breaking the bank! 🌟
                We specialize in affordable, memorable, and customized travel experiences across the globe.
                From dreamy beach vacations to thrilling mountain adventures, we make sure you explore your favorite destinations with comfort and excitement.
            </h1>
        </div>
      <div className='w-full flex flex-col sm:flex-row md:flex-row items-center justify-center h-full sm:h-[30vh] md:h-[35vh] gap-5 my-4 md:my-12'>
        <img className='h-full md:w-1/4 object-cover sm:h-[95%] sm:w-[55%] rounded-xl' draggable='false' src="/ProfilePhoto.jpg" alt="Neeraj Kumar Verma" />
        <div className='flex flex-col items-center justify-center sm:items-start  md:items-start h-full'>
            <h1 className='text-3xl uppercase font-semibold'>Neeraj Kumar Verma</h1>
            <h2 className='text-xl md:text-xl leading-snug md:leading-normal mt-2 md:mt-0'>Travel Agent, Owns <span className='font-semibold hover:text-orange-500 transition ease-in-out duration-150'>Budget-Trip.com</span></h2>
            <h2 className='text-xl mt-1 md:mt-0 md:text-lg'> +91 7985740556, +91 8010643576</h2>
            <h2 className='uppercase text-xl sm:text-xl mt-2 md:mt-7  mb-2 md:mb-1 '>Connect with Us</h2>
            <div className="flex space-x-6">
            <a href="https://www.instagram.com/budget_trip2024" target="_blank" rel="noopener noreferrer"
            className="text-3xl sm:text-4xl hover:text-pink-500 transition duration-300">
            <FaInstagram />
            </a>
            <a href="https://www.facebook.com/people/Budget-Tripcom/61577578949324/" target="_blank" rel="noopener noreferrer"
            className="text-3xl sm:text-4xl hover:text-blue-500 transition duration-300">
            <FaFacebookF />
            </a>
            {/* <a href="https://www.x.com/budgettrip2024" target="_blank" rel="noopener noreferrer"
            className="text-3xl sm:text-4xl hover:text-black transition duration-300">
            <FaXTwitter />
            </a> */}
        </div>
        </div>
      </div>
      <div className='flex items-center w-full justify-between h-full md:h-[35vh] my-10'>
        <Why />
      </div>
      <div className='mt-4'>
        <p className='text-sm'>© 2025 Budget-Trip.com</p>
      </div>
    </div>
  )
}

export default Myself