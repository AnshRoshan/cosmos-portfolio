'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
      <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
      >
        <SparklesIcon className='text-[#b49bff] mr-2 h-5 w-5' />
        <h1 className='Welcome-text text-lg'>Skills And Tools </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-2xl  tracking-wider underline underline-offset-4 text-gray-200 mb-10 mt-2 text-center'
      >
        The best tool for a coder is their brain. Everything else is just an extension of that.
      </motion.div>
      <div className='w-full h-auto flex '></div>
    </div>
  );
};

export default SkillText;
