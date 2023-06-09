import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PostList from '@/Components/PostList'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {
  console.log(posts)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <PostList posts={posts} />

      </div>
    </>
  )
}
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  const posts = await res.json();
  return {
    props: {
      posts
    }
  }
}