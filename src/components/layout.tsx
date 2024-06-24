import styles from '@/styles/layout.module.css'
import utilStyles from '@/styles/utils.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

const myLoader = ({ src, width, quality }: { src: string; width: number; quality: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function Layout({ children, home }: { children: ReactNode; home?: boolean }) {
  return (
    <div className={styles['container']}>
      <Head>
        <link rel="icon" href={'/favicon.ico'} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta property="og:image" content="/icons/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles['header']}>
        {home ? (
          <>
            <Image
              loader={myLoader}
              priority
              src={'/icons/profile.jpg'}
              className={utilStyles['borderCircle']}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles['heading2Xl']}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                loader={myLoader}
                priority
                src={'/icons/profile.jpg'}
                className={utilStyles['borderCircle']}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles['headingLg']}>
              <Link href="/" className={utilStyles['colorInherit']}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles['backToHome']}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
