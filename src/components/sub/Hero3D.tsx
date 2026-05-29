"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";

/**
 * Real WebGL hero accent: a slowly morphing, floating distorted sphere wrapped
 * in a faint wireframe shell, lit with an amber key light to match the page
 * accent. Sits behind the portrait to give the hero genuine 3D depth.
 * Motion (distortion + float + rotation) collapses to a static mesh under
 * prefers-reduced-motion.
 */
export default function Hero3D() {
    const reduce = useReducedMotion();

    return (
        <Canvas
            camera={{ position: [0, 0, 4.2], fov: 42 }}
            dpr={[1, 1.6]}
            gl={{ antialias: true, alpha: true }}
            className="!absolute inset-0"
            aria-hidden
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 4, 3]} intensity={1.6} color="#ffd98a" />
            <pointLight position={[-4, -2, -2]} intensity={2} color="#F5B544" />
            <pointLight position={[2, -3, 2]} intensity={0.8} color="#6b5bff" />

            <Float
                speed={reduce ? 0 : 1.4}
                rotationIntensity={reduce ? 0 : 0.7}
                floatIntensity={reduce ? 0 : 1.1}
            >
                {/* Solid morphing core */}
                <Sphere args={[1.35, 96, 96]}>
                    <MeshDistortMaterial
                        color="#161023"
                        emissive="#F5B544"
                        emissiveIntensity={0.12}
                        roughness={0.25}
                        metalness={0.85}
                        distort={reduce ? 0 : 0.38}
                        speed={reduce ? 0 : 1.8}
                    />
                </Sphere>

                {/* Faint wireframe shell for a techy, layered read */}
                <Icosahedron args={[1.78, 2]}>
                    <meshBasicMaterial
                        color="#F5B544"
                        wireframe
                        transparent
                        opacity={0.12}
                    />
                </Icosahedron>
            </Float>
        </Canvas>
    );
}
