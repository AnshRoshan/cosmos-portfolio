/**
 * Cinematic backdrop: a cosmic-navy base washed with slow-drifting aurora
 * color blobs (teal, cyan, indigo) and a fine film-grain veil. Pure CSS, fixed
 * behind the 3D starfield and all content. No pointer interception.
 */
export default function AuroraBackground() {
    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-20 overflow-hidden bg-[#040115]"
        >
            {/* Aurora color blobs */}
            <div
                className="aurora-blob left-[-10%] top-[-12%] h-[55vmax] w-[55vmax]"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, #0e7490 0%, rgba(14,116,144,0) 70%)",
                    animation: "aurora-a 26s ease-in-out infinite",
                }}
            />
            <div
                className="aurora-blob right-[-12%] top-[8%] h-[48vmax] w-[48vmax]"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, #15803d 0%, rgba(21,128,61,0) 70%)",
                    animation: "aurora-c 32s ease-in-out infinite",
                }}
            />
            <div
                className="aurora-blob bottom-[-18%] left-[20%] h-[60vmax] w-[60vmax]"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, #3730a3 0%, rgba(55,48,163,0) 72%)",
                    animation: "aurora-b 30s ease-in-out infinite",
                }}
            />
            {/* Vignette to keep edges deep and content readable */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(120% 90% at 50% 30%, transparent 40%, rgba(4,1,21,0.7) 100%)",
                }}
            />
            {/* Film grain */}
            <div className="grain-overlay absolute inset-0 opacity-[0.06] mix-blend-soft-light" />
        </div>
    );
}
