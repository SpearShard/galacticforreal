/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io', 'images.unsplash.com', 'cdn.pixabay.com', 'images.pexels.com'],
  },
  transpilePackages: ['scheduler'],
};

module.exports = nextConfig;
