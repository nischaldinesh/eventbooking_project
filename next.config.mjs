

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.io']
    },
    remotePatters: [
        {
            protocol: 'https',
            hostname: 'utfs.io',
            port: ''
        }
    ]
};

export default nextConfig;
