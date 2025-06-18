import React from 'react'
import Navbar from './components/Navbar'
import Routing from './utils/Routing'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='w-full h-full overflow-x-hidden md:w-full md:h-full md:overflow-x-hidden '>
      <Navbar />
      <Routing />
      <ToastContainer />
    </div>
  )
}

export default App
