import MyDate from '@/components/date'
import Layout, { siteTitle } from '@/components/layout'
import { getSortedPostsData } from '@/lib/posts'
import utilStyles from '@/styles/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

interface PostData {
  id: string
  date: any
  title: string
}

export default function Home({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles['headingMd']}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles['headingMd']} ${utilStyles['padding1px']}`}>
        <h2 className={utilStyles['headingLg']}>Blog</h2>
        <ul className={utilStyles['list']}>
          {allPostsData.map(({ id, date, title }: PostData) => (
            <li className={utilStyles['listItem']} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles['lightText']}>
                <MyDate dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
