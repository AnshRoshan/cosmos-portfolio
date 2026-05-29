import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Marquee from "@/components/main/Marquee";
import Projects from "@/components/main/Projects";

export default function Home() {
    return (
        <div className="flex w-full flex-col">
            <Hero />
            <Marquee />
            <About />
            <Projects />
        </div>
    );
}
