const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  basePath: !debug ? '/nextjs-blog/' : '',
  assetPrefix: !debug ? '/nextjs-blog/' : '',
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
}
