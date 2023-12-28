import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  github: string;
}

const ProjectCard = ({ src, title, description, link, github }: Props) => {
  return (
    <div className='relative mx-auto shadow-lg border border-[#2A0E61]  cursor-pointer z-30 '>
      <div className=' bg-gradient-radial from-sky-500  to-emerald-500 opacity-0 hover:opacity-80 transition-opacity duration-200 h-full w-full absolute rounded-lg p-4 pt-8 z-40'>
        <div className='flex flex-row items-center justify-center h-1/2 w-full gap-12 '>
          <Link href={github} target='_blank'>
            <Image src='/github.svg' alt='arrow right' width={70} height={70} />
          </Link>
          <Link href={link} target='_blank'>
            <Image src='/google.png' alt='arrow right' width={70} height={70} />
          </Link>
        </div>
        <p className='mt-2 text-lg font-bold text-black'>{description}</p>
      </div>
      <Image src={src} alt={title} width={500} height={500} className=' cursor-pointer transition-all duration-200' />
      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
