import React, { FC } from "react";

export type articlesType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type Props = {
  articles: articlesType[];
};

const articles: FC<Props> = ({ articles }) => {
  return <div></div>;
};

export default articles;

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
