/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
          {
            hostname: '**',
          },
        ],
      },
}

module.exports = nextConfig;
