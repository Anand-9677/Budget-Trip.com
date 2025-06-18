import React from 'react'
import Why from './Why.jsx';

function About() {
  return (
    <div className='h-full w-full px-4 sm:p-8 flex flex-col items-center gap-10'>
      <div>
      <h1 className='text-3xl md:text-5xl text-center text-slate-600 uppercase font-semibold tracking-tighter'>About Us</h1>
        <p className='md:mt-8 mt-2 text-zinc-700 md:text-center text-lg'>We are domestic and outbound international tour operator Our agency's Area of specialization in International Tour Package is for the following destinations: Thailand, Singapore, Malaysia, Mauritius, Europe, Dubai, Hong Kong, Maldives, Sri Lanka, & all other Destinations In India our company has comprehensive best packages for Kashmir, Himachal, Uttaranchal, North East, Golden Triangle [Delhi - Agra – Jaipur], Kerala, South India & Goa.</p>
      </div>
        <div className='flex items-center w-full justify-between md:h-[35vh] md:my-6'>
          <Why heading={"Why we are the best?"} />
        </div>
    </div>
  )
}

export default About
