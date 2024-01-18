const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', "picsum.photos"],
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    
}

module.exports = withMDX(nextConfig)

