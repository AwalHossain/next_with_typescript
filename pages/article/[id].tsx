import Link from "next/link";
import { FC } from "react";
import { articlesType } from "../articles";

type Props = {
  article: articlesType;
};

const article: FC<Props> = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  console.log(article);

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">
        <a
          style={{
            backgroundColor: "bisque",
            padding: "10px",
            borderRadius: "20px",
            color: "navy",
          }}
        >
          Go Back
        </a>
      </Link>
    </>
  );
};

// export const getStaticProps = async (context: any) => {
//   console.log(context.params.id);

//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();
//   console.log(article);

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

//   const articles = await res.json();
//   console.log(article);

//   const ids = articles.map((article: any) => article.id);

//   const paths = ids.map((id: { toString: () => any }) => ({
//     params: { id: id.toString() },
//   }));
//   return {
//     props: {
//       paths,
//       fallback: false,
//     },
//   };
// };

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article: any) => article.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
