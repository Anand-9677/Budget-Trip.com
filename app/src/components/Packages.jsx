import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/packages/')
    .then((response)=>{
      setPackages(response.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.error('Error in Fetching Packages', error);
      setLoading(false);
    });
  }, []);


  return loading ? (<div className='text-2xl flex items-center justify-center'>Loading Packages...</div>) : (
    <div className='p-8'>
    <div className='w-full h-full'>
      <h1 className='text-center text-2xl md:text-4xl uppercase font-medium'>"Go now, before the price takes off."</h1>
    </div>
    <div className="w-full h-full mt-10 flex flex-col sm:flex-row md:flex-row flex-wrap items-center justify-center sm:gap-6 gap-12">
        {packages.map((pkg) => (
            <Link to={`/packages/${pkg._id}`} key={pkg._id} className="w-full sm:w-[48%] md:w-[30%]">
            <div className="h-[72vh] flex justify-between flex-col border-2 border-slate-300 p-5 hover:shadow-md cursor-pointer ">
              <div>
              <img src={pkg.image} alt={pkg.name} className="h-60 w-full object-cover mb-4" />
              <h2 className="text-center text-2xl font-semibold">{pkg.name}</h2>
              <h2 className='text-center text-xl font-semibold'>{pkg.price}</h2>
              <h3 className='text-center text-lg font-semibold text-slate-700'>{pkg.duration}</h3>
              </div>
              <div className='flex justify-center mt-2'>
              <button className='bg-slate-700 px-4 py-2 text-white font-semibold'>More Info</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Packages
