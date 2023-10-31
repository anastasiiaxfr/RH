/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    basePath: '',
    env: {
        NEXT_API_URL: process.env.NEXT_API_URL,
        NEXT_SITE_URL: process.env.NEXT_SITE_URL,
    },
    images: {
        domains: [''],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

module.exports = nextConfig;
