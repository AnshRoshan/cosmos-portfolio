import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full min-w-full' id='about-me'>
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-46%] lg:top-[-40%]  w-screen h-full min-w-full left-0 z-[-1] object- lg:object-cover '
      >
        <source src='blackhole.webm' type='video/webm' />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
