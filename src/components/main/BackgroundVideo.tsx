/**
 * Cinematic looping video backdrop, fixed behind all content.
 * Sits on the cosmic-navy base with a dark gradient scrim (for text contrast)
 * and a film-grain veil on top. Drop a /hero-bg.webm next to the mp4 later and
 * uncomment the source below; the browser will prefer it automatically.
 */
export default function BackgroundVideo() {
    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-[#040115]"
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover opacity-90"
            >
                {/* <source src="/hero-bg.webm" type="video/webm" /> */}
                <source src="/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Readability scrim: darker top/bottom, lighter middle */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#040115]/80 via-[#040115]/45 to-[#040115]/90" />
            {/* Side vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(120% 80% at 50% 35%, transparent 45%, rgba(4,1,21,0.65) 100%)",
                }}
            />
            {/* Film grain */}
            <div className="grain-overlay absolute inset-0 opacity-[0.05] mix-blend-soft-light" />
        </div>
    );
}
