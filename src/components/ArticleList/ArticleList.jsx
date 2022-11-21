import * as React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({ articles }) => {
  // Article list must be able to work when no articles are present
  return (
    <div id="article-list">
      <ul>
        {articles.map(article => <ArticleListItem article={article} />)}
      </ul>
    </div>
  );
}

export default ArticleList;
