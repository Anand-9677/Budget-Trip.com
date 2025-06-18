import React from 'react'
import ImageSlider from './ImageSlider'
import Button from './Button'
import Myself from './Myself'

function Home() {
  return (
    <>
        <div className='flex flex-col items-center justify-center mt-2 mb-10'> 
          <h1 className='uppercase text-center md:text-7xl text-zinc-700 text-4xl mt-2 font-bold' style={{fontFamily: 'Dancing Script'}}>Explore Your</h1>
          <h1 className='uppercase text-center text-3xl md:text-7xl text-zinc-700 font-medium'> Dream Destinations 📸</h1>
        </div>
        <ImageSlider />
        <div className='h-[7vh] md:h-[11vh] flex items-center justify-center my-8 p-8 sm:my-24 md:my-10'>
          <Button />
        </div>
        <Myself />
    </>
  )
}

export default Home
