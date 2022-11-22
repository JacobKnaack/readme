import * as React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({ articles }) => {
  // Article list must be able to work when no articles are present
  return (
    <div id="articles">
      <h2 className="heading">Latest Articles</h2>
      <ul className="list">
        {articles.map(article => <ArticleListItem key={article.key} article={article} />)}
      </ul>
    </div>
  );
}

export default ArticleList;
