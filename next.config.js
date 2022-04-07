module.exports = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/:path*',
          destination: 'http://localhost:3001/:path*',
        },
      ];
    }
    return [];
  },
};
