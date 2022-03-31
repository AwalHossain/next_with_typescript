import Link from "next/link";
import React, { FC } from "react";
import { articlesType } from "../pages/articles";
import styles from "../styles/ArticleItem.module.css";
type Props = {
  article: articlesType;
};
const ArticleItem: FC<Props> = ({ article }) => {
  console.log(article);

  return (
    <Link href={`/article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
