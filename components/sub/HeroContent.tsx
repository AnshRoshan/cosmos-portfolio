'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-col lg:flex-row items-center justify-between gap-24 px-20 mt-48 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div variants={slideInFromTop} className='Welcome-box p-2 border border-[#7042f88b] opacity-[0.9]'>
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-8 w-8' />
          <h1 className='Welcome-text text-lg tracking-wider flex flex-col md:flex-row py-2'>
            <span> - Fullstack Developer </span>
            <span> - DevOps Engineer </span>
            <span> - Electrical Engineer</span>
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
            Hi I&apos;m{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
              Ansh Roshan
            </span>
          </span>
          <span>Wecome To My </span>
          <span className='text-transparent bg-clip-text bg-gradient-to-r to-violet-500 from-orange-500'>
            Portfolio Website
          </span>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-5 max-w-[600px]'>
          I&apos;m a Full Stack Software Engineer with experience in Website, Mobile, and Software development and
          dedicated DevOps Engineer, skilled in software development tools, Linux, git, Kubernetes, AWS, and a seasoned
          Web Developer in MERN Stack, Next.js.Check out my Resume below!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className='py-2 button-primary text-center text-xl text-white cursor-pointer rounded-full max-w-[200px]'
        >
          Resume
        </motion.a>
      </div>
      <Image
        src='main.png'
        alt='work icons'
        height={500}
        width={400}
        className='object-contain h-96 w-96 rounded-full p-8 border-2  shadow-slate-600 filter shadow-lg'
      />
      <motion.div variants={slideInFromRight(0.8)} className='w-full h-full flex justify-evenly items-center '>
        <Image src='mainIconsdark.svg' alt='work icons' height={500} width={400} className='object-contain' />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
