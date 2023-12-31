/** @type {import('next').NextConfig} */
const nextConfig = {
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      // 他に必要なモジュールがあれば追加
    },
  },
};

module.exports = nextConfig;
