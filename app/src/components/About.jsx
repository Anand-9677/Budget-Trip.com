import React from 'react'
import Why from './Why.jsx';

function About() {
  return (
    <div className='h-full w-full px-4 sm:p-8 flex flex-col items-center gap-10'>
      <div>
      <h1 className='text-3xl md:text-5xl text-center text-slate-600 uppercase font-semibold tracking-tighter'>About Us</h1>
        <p className='md:mt-8 mt-2 text-zinc-700 md:text-center text-lg'>
      We are a trusted domestic and international tour operator, specializing in customized travel experiences that cater to every kind of traveler. Internationally, we offer expertly curated tour packages to some of the world’s most sought-after destinations including Thailand, Singapore, Malaysia, Mauritius, Europe, Dubai, Hong Kong, the Maldives, Sri Lanka, and many more. Whether you're looking for a relaxing beach holiday, an adventure-filled getaway, or a cultural exploration, we have the perfect international package for you. Within India, we provide a wide range of comprehensive tour packages to iconic and offbeat destinations alike. Our specialties include Kashmir, Himachal Pradesh, Uttarakhand, North East India, the Golden Triangle (Delhi–Agra–Jaipur), Kerala, South India, and Goa. Each package is thoughtfully designed to offer you the best of local culture, nature, and hospitality. Let us take care of all the details while you enjoy a hassle-free, memorable journey—wherever your wanderlust takes you.</p>
      </div>
        <div className='flex items-center w-full justify-between md:h-[35vh] md:my-6'>
          <Why heading={"Why we are the best?"} />
        </div>
    </div>
  )
}

export default About
