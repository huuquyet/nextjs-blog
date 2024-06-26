import MyDate from '@/components/date'
import Layout from '@/components/layout'
import { getAllPostIds, getPostData } from '@/lib/posts'
import utilStyles from '@/styles/utils.module.css'
import Head from 'next/head'

export default function Post({ postData }: { postData: any }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles['headingXl']}>{postData.title}</h1>
        <div className={utilStyles['lightText']}>
          <MyDate dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
