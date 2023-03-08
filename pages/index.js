import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lig/posts';

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {props.posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
