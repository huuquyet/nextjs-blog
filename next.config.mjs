/**
 * A fork of 'next-pwa' that has app directory support
 * @see https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1332258575
 */
import withPWAInit from '@ducanh2912/next-pwa'

const debug = process.env.NODE_ENV !== 'production'

const withPWA = withPWAInit({
  dest: 'public',
  disable: debug,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: !debug ? '/nextjs-blog/' : '',
  assetPrefix: !debug ? '/nextjs-blog/' : '',
  reactStrictMode: true,
  images: {
    loader: 'custom',
  },
}

export default withPWA(nextConfig)
