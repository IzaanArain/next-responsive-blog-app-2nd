/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["googleusercontent.com"]
        remotePatterns: [
            {
                protocol:"https",
                hostname: "**",// for all hosts // googleusercontent.com
            }
        ]
    }
};

export default nextConfig;
