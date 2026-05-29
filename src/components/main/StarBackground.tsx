"use client";

import { PointMaterial, Points, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useEffect, useRef, useState } from "react";
import type { Group, Points as ThreePoints } from "three";

function Scene() {
    const outer = useRef<Group>(null);
    const inner = useRef<ThreePoints>(null);
    // 6000 is divisible by 3 (2000 xyz points) so no NaN bounding sphere.
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(6000), { radius: 1.4 })
    );

    useFrame((state, delta) => {
        if (inner.current) {
            inner.current.rotation.x -= delta / 16;
            inner.current.rotation.y -= delta / 22;
        }
        if (outer.current) {
            // Smooth parallax toward the cursor for depth.
            outer.current.rotation.y +=
                (state.pointer.x * 0.18 - outer.current.rotation.y) * 0.03;
            outer.current.rotation.x +=
                (-state.pointer.y * 0.18 - outer.current.rotation.x) * 0.03;
        }
    });

    return (
        <group ref={outer}>
            <group rotation={[0, 0, Math.PI / 4]}>
                <Points ref={inner} positions={sphere} stride={3} frustumCulled>
                    <PointMaterial
                        transparent
                        color="#a9dcff"
                        size={0.0035}
                        sizeAttenuation
                        depthWrite={false}
                    />
                </Points>
            </group>
            <Sparkles
                count={70}
                scale={[11, 11, 11]}
                size={3}
                speed={0.25}
                opacity={0.6}
                color="#7dd3fc"
            />
        </group>
    );
}

const StarsCanvas = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="pointer-events-none fixed inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.6]}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
