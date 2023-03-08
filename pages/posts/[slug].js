import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';

export async function getStaticPaths() {
  const slugs = await getSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    props: {
      post,
    },
  };
}

const PostPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <main>
        <p>{props.post.date}</p>
        <h1>{props.post.title}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: props.post.body }}
        ></article>
      </main>
    </>
  );
};
export default PostPage;
