import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from './Form';

function Package() {
    const { id } = useParams();
    const [packageData, setPackageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false); 

    useEffect(() => {
        axios.get(`https://budget-trip-com-server.onrender.com/api/packages/${id}`)
            .then((response) => {
                setPackageData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error in Fetching Package Details...', error);
                setError(true); 
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className='text-2xl text-center'>Loading Package Details...</div>;
    }

    if (error || !packageData) {
        return <div className='text-2xl text-center text-red-500'>Package not found.</div>;
    }

    return (
        <div className='p-8 w-full h-full flex flex-col md:flex-row items-start justify-between'>
            <div className='w-full md:w-[48%] flex flex-col'>
                <img src={packageData.image} alt={packageData.name} className='rounded-xl' />
                <h1 className='text-2xl mt-4'>Package Name: <span className='uppercase font-semibold'>{packageData.name}</span></h1>
                <h3 className='text-xl'>Duration: <span className='font-semibold'>{packageData.duration}</span></h3>
                <h2 className='text-xl'>About Package: <span className='font-semibold'>{packageData.description}</span></h2>
                <h3 className='text-xl'>Price: <span className='font-semibold'>₹{packageData.price}</span></h3>
                <h3 className='text-xl mt-4 mb-1 font-semibold'>Package Inclusions:</h3>
                <ul className='list-disc list-inside font-semibold text-lg text-gray-800'>
                {packageData.packageInclusion.split('.').map((item, index) => (
                <li key={index}>{item.trim()}</li>
                ))}
                </ul>
            </div>
            <Form destination={packageData.name} />
        </div>
    );
}

export default Package;
