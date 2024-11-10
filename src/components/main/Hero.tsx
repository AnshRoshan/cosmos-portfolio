'use client';

import { useTheme } from 'next-themes';
import HeroContent from '../sub/HeroContent';
import { Spotlight } from '../ui/spotlight';

const Hero = () => {
    const { theme } = useTheme();
    return (
        <div className="relative flex h-fit mt-20 flex-col text-gray-900 dark:text-white bg-black/20 dark:bg-white/10 w-fit mx-auto p-20 rounded-3xl">
            {/* <video
                autoPlay
                muted
                loop
                className="-z-[100] absolute top-[-50%] left-0 hidden h-full w-full min-w-full rotate-180 object-fit lg:top-[-50%] dark:block"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video> */}
            <Spotlight
                className="-top-60 md:-top-40 left-0"
                fill={theme === 'dark' ? '#fff' : '#000'}
            />
            <HeroContent />
        </div>
    );
};

export default Hero;