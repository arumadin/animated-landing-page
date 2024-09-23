/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/animated-landing-page",
    output: "export",
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
            }
        ],
    },
};

export default nextConfig;
