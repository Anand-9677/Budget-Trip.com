import React, { useState } from 'react'
import { MdOutlineTravelExplore } from "react-icons/md";
import { GiHidden } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaSuitcaseRolling } from "react-icons/fa";

function Why({heading}) {
  // eslint-disable-next-line no-unused-vars
  const [heding, setHeding] = useState(heading || "Why Choose Us?");
  
  return (
    <div className='flex flex-col md:flex-row items-center justify-between w-full sm:flex-row'>
        <div className='flex flex-col px-1 sm:px-0 sm:w-2/3 md:px-0'>
            <h1 className={`text-4xl text-center md:text-left md:text-5xl font-semibold mb-3 md:mb-6 uppercase ${heading ? 'text-slate-700' : ''}`}>{heding}</h1>
            <ul className='text-xl sm:text-2xl space-y-1 sm:leading-tight'>
                <li className='flex md:items-center gap-3 hover:text-orange-400 transition duration-200 ease-in-out'><MdOutlineTravelExplore className=' text-3xl md:text-2xl' />Curated travel packages for every budget.</li>
                <li className='flex md:items-center gap-3 hover:text-orange-400 transition duration-200 ease-in-out'><GiHidden className='text-3xl md:text-2xl' /> Hidden gems and local experiences you won't find elsewhere.</li>
                <li className='flex md:items-center gap-3 hover:text-orange-400 transition duration-200 ease-in-out'><BiSupport className='text-3xl md:text-2xl' /> Hassle-free bookings and 24/7 support.</li>
                <li className='flex md:items-center gap-3 hover:text-orange-400 transition duration-200 ease-in-out'><FaSuitcaseRolling className='text-3xl md:text-2xl' /> Special offers for group trips, honeymoon packages, and solo adventures.</li>
            </ul>
        </div>
        <div className='h-full mt-4 md:mt-0 flex items-center'>
            <img className={`h-auto max-h-56 w-full rounded-lg transition duration-300 ease-in-out  ${heading ? 'shadow-lg border border-zinc-400' : ''}`} draggable='false' src="/BtLogo.png" alt="BudgetTrip.com" />
        </div>
    </div>
  )
}

export default Why
