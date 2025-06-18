import React from 'react'
import { Link } from 'react-router-dom'

function Button({text}) {
  return (
    <div>
      <Link to='/packages' className='bg-red-200 px-5 py-3 text-xl sm:text-3xl md:px-10 md:py-5 md:text-2xl rounded-full flex items-center justify-center font-semibold gap-1 text-zinc-700 hover:bg-red-300 hover:text-black transition duration-300 ease-in-out'>
        <h1>Explore Available Packages </h1>
      </Link>
    </div>
  )
}

export default Button
