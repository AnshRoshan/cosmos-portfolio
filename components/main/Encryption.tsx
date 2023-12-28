'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Encryption = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm('anshcode', 'temp_code', form.current, 'uFpikehUSidg_HfOC').then(
      () => {
        toast.success('Message Sent Successfully');
      },
      error => {
        toast.error('Message Not Sent');
      },
    );
    e.target.reset();
  };

  return (
    <div className='flex flex-row relative items-center justify-center min-h-screen w-full h-full' id='contact'>
      <div className='absolute w-auto h-auto top-0 z-[5]'>
        <motion.div variants={slideInFromTop} className='text-[40px] font-medium text-center text-gray-200'>
          Connect with me.
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            {' '}
            Your&apos;s{' '}
          </span>
          opinion matters.
        </motion.div>
      </div>

      <div className='flex flex-col text-white items-center justify-center translate-y-[-50px] absolute top-[32%] z-[10] min-w-96 w-[40%]'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 h-full w-full'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Full Name'
            className='rounded-full bg-black/40 border-2 p-1 text-center'
          />
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            className='rounded-full  bg-black/40 border-2  p-1 text-center'
          />
          <input
            type='text'
            name='subject'
            id='subject'
            placeholder='Subject'
            className='rounded-full bg-black/40 border-2 p-1 px-4 text-center'
          />
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            className='rounded-md text-justify bg-black/40 border-2   p-2 h-36'
          ></textarea>
          <button className='flex flex-col items-center group cursor-pointer w-auto h-auto p-2 rounded-full'>
            <Image
              src='/LockTop.png'
              alt='Lock top'
              width={50}
              height={50}
              className='w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11'
            />
            <Image src='/LockMain.png' alt='Lock Main' width={70} height={70} className='' />
          </button>
        </form>
        <ToastContainer position='top-center' theme='dark' autoClose={1500} />
      </div>

      <div className='w-full flex items-start justify-center absolute '>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload='false'
          className='w-full h-auto z-[-10]'
          src='/encryption.webm/'
        />
      </div>
    </div>
  );
};

export default Encryption;
