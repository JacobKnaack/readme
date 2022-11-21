import * as React from 'react';

const ArticleListItem = ({ article }) => {
  return (
    <li key={article.key}>
      <span>
        <a href={`${article.key}`}>
          {article.title}
        </a>
        <p >{article.description}</p>
        <section id="article keywords">
          {article.tags.map(keyword => <span>{keyword}</span>)}
        </section>
      </span>
    </li>
  );
}

export default ArticleListItem;
