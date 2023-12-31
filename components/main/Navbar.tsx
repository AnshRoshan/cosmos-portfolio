import { Socials } from '@/constants';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#about-me' className='h-auto w-auto hidden md:flex flex-row items-center'>
          {/* <Image src='//logo.png' alt='logo' width={40} height={40} className='rounded-full' /> */}
          <span className='font-bold ml-[10px] block text-gray-300'>Ansh Roshan</span>
        </a>

        <div className='w-full md:w-2/3 h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            <Link href='#about-me'>
              <p>About</p>
            </Link>

            <Link href='#skills'>
              <p>Skills</p>
            </Link>

            <Link href='#projects'>
              <p>Projects</p>
            </Link>

            <Link href='#contact'>
              <p>Contact</p>
            </Link>
          </div>
        </div>

        <div className='hidden md:flex flex-row gap-5'>
          {Socials.map(social => (
            <Link href={social.link} key={social.name}>
              <Image src={social.src} alt={social.name} key={social.name} width={24} height={24} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
