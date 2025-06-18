import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Form from './Form';

function Contact() {
  return (
    <div className='w-full p-4 md:p-6 h-full flex flex-col md:flex-row justify-between'>
      <div className='md:w-[55%]'>
        <Form heading={'For any Query, Kindly fill this form. Our team will contact you.'}  />
      </div>
      <div className='mt-8 md:mt-0 md:w-[35%] flex flex-col space-y-2 items-start'>
        <div className='flex text-xl gap-1 text-slate-700 hover:text-orange-500'>
          <FaMobileAlt size={'25px'} />
          <h1><span className='font-semibold'>Mobile:</span> +91 7985740556, +91 8010643576</h1>
        </div>
        <div className='flex text-xl gap-1 text-slate-700 hover:text-orange-500'>
          <MdOutlineMailOutline size={'25px'} />
          <h1><span className='font-semibold'>Mail:</span> travel@budget-trip.com</h1>
        </div>
        <div className='flex text-xl gap-1 text-slate-700 hover:text-orange-500'>
          <FaLocationDot size={'25px'} />
          <h1><span className='font-semibold'>Address:</span> 69, Shop No. 4, N-2 Road Lal Bunglow Kanpur 208007</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact