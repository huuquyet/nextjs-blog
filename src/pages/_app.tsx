import '@/styles/global.css'
import type { FC } from 'react'

export default function App({ Component, pageProps }: { Component: FC; pageProps: any }) {
  return <Component {...pageProps} />
}
