/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["googleusercontent.com"]
        remotePatterns: [
            {
                protocol:"https",
                hostname: "**",// allows images from any secure host
            }
        ]
    }
};

export default nextConfig;
