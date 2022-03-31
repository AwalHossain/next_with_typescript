import React, { FC } from "react";
import { articlesType } from "../pages/articles";
import styles from "../styles/ArticleItem.module.css";
import ArticleItem from "./ArticleItem";

type Props = {
  articles: articlesType[];
  //   article: articlesType[]
};
const ArtilceList: FC<Props> = ({ articles }) => {
  console.log(articles);

  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArtilceList;
