/** @type {import('next').NextConfig} */

const Dotenv = require("dotenv-webpack"); // 작성 1

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // 작성 2
    // 기존의 웹팩 플러그인에 새로운 Dotenv플러그인을 연결시켜준다.
    // silent는 옵션은 .env파일을 찾지 못했을 때 에러를 일으키지 않도록 설정해주는 옵션이다.
    config.plugins.push(new Dotenv({ silent: true }));
    config.resolve.fallback = { fs: false };
    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'http://ec2-13-209-3-104.ap-northeast-2.compute.amazonaws.com/detail_ajax/:path*',
  //     },
  //   ];
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
};
module.exports = nextConfig;
