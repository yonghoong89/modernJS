/** @type {import('next'.NextConfig)} */
const nextConfig = {
  //리액트 엄격모드
  reactStrictMode: true,
  //x-powerd-by 헤더 제거
  poweredByHeader: false,
  //빌드시 eslint 무시
  eslint: {
    ignoreDuringBuilds: true,
  },
  styledComponents: true
};

module.exports = nextConfig;
