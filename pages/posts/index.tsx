import {GetStaticProps} from "next";
import Heading from "../../components/Heading";
import Head from 'next/head'
import Link from "next/link";
import s from '../../styles/Posts.module.scss'

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: { posts: data }
    }
}
const Posts = ({posts}) => {
  return (
      <>
          <Head>
              <title>Posts</title>
          </Head>
          <Heading text='Posts list:'/>
          <ul className={s.posts}>
              {posts && posts.map(({id, title}) => (
                  <li key={id}>
                      <Link href={`/posts/${id}`}>{title}</Link>
                  </li>
              ))}
          </ul>
      </>
  )
}
export default Posts
