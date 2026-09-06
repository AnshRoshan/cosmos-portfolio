/** @type {import('next').NextConfig} */
const nextConfig = {
    // Pin the workspace root so Turbopack doesn't infer it from a stray
    // lockfile elsewhere on the machine (e.g. ~/package-lock.json).
    turbopack: {
        root: import.meta.dirname,
    },
    experimental: {
        // Tree-shake large barrel-export packages so only the icons/helpers we
        // use ship to the client (big win for @tabler/icons-react).
        optimizePackageImports: [
            "@tabler/icons-react",
            "framer-motion",
            "lucide-react",
        ],
    },
};

export default nextConfig;
