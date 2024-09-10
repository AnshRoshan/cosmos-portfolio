import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="relative flex h-full min-w-full flex-col" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="-z-[100] absolute top-[-50%] left-0 hidden h-full w-full min-w-full rotate-180 object-fit lg:top-[-50%] dark:block"
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
    );
};

export default Hero;
