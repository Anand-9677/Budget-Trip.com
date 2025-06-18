import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

function Form({ destination, heading }) {
  const formRef = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current,
      publicKey
    ).then(
      () => {
        toast.success('Form submitted successfully. Our team will contact you soon', {
          position: 'top-right',
          autoClose: 5000
        });
      },
      (error) => {
        toast.error('Failed to submit form. Please try again.', {
          position: 'top-right',
          autoClose: 5000
        });
        console.error(error.text);
      }
    );
  };

    return (
    <div className={`flex flex-col w-full mt-8 md:mt-0 ${heading ? 'md:w-full' : 'md:w-[45%] '}  h-full`}>
        <h2 className='text-2xl text-slate-700 uppercase text-center font-semibold'>{ heading ? heading : `For any Query related to ${destination} Package`}</h2>
        <form ref={formRef} className='mt-5 space-y-2' onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' value={destination} {...register('destination')} name='destination' />
            <div className='flex flex-col gap-2'>
                <div className='w-full'>
                    <input type="email" id='email' {...register('userEmail', { required: 'Email is required' })} placeholder='Enter email' name='userEmail' className='px-3 py-2 outline-none border border-slate-500 text-lg rounded-sm w-full' />
                    {errors.userEmail && <p className="text-red-500">{errors.userEmail.message}</p>}
                </div>
                <div className='w-full flex justify-between'>
                    <div className='w-[60%] flex flex-col'>
                      <input type="text" id='name' {...register('name', { required: 'Name is required' })}  name='name' className='appearance-none px-3 py-2 outline-none border border-slate-500 text-lg rounded-sm' placeholder='Enter name' />
                      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className='w-[38%] flex flex-col'>
                      <input type="number" id='mobileNo' {...register('mobileNo', { required: 'Mobile No is required' })} name='mobileNo' className='appearance-none px-3 py-2 outline-none border border-slate-500 text-lg rounded-sm' placeholder='Mobile No.' />
                      {errors.mobileNo && <p className="text-red-500">{errors.mobileNo.message}</p>}
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <textarea id="query" {...register('query', {required: 'Query is required'})} name='query' className='text-lg w-full border border-slate-500 outline-none px-3 py-2 rounded-sm' placeholder='Enter Query' ></textarea>
                {errors.query && <p className='text-red-500'>{errors.query.message}</p>}
            </div>
            <div className='w-full flex justify-center'>
                <button className='text-xl px-5 py-2 rounded-md bg-slate-400  text-zinc-800 hover:bg-slate-500  hover:text-zinc-100 font-semibold transition duration-150 ease-in-out '>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form
