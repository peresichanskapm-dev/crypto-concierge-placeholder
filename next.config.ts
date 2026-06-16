import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/placeholder',
    assetPrefix: '/placeholder/',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
