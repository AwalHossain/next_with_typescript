import { FC } from "react";
import ArticleList from "../Component/ArticleList";
import { articlesType } from "./articles";
type Props = {
  articles: articlesType[];
};

const Home: FC<Props> = ({ articles }) => {
  return (
    <div>
      <div>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
