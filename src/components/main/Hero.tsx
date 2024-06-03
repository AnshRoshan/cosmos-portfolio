import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex h-full min-w-full flex-col" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="object-fit absolute left-0 top-[-50%] -z-[100] hidden h-full w-full min-w-full rotate-180 dark:block lg:top-[-50%]"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
    );
};

export default Hero;
