/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
            },
        ],
    },
}

export default nextConfig
