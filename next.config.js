/** @type {import('next').NextConfig} */

// const runtimeCaching = require('next-pwa/cache');
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   // for now
//   disable: true,
//   sw: '/sw.js',
//   buildExcludes: [/middleware-manifest\.json$/],
// });

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self' *.imagekit.io;",
  },
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ik.imagekit.io'],
  },
  experimental: {
    optimizeCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Adding policies:
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
