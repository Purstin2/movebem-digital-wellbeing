/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  },
};

module.exports = nextConfig; 