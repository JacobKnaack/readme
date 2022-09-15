import * as React from 'react';
import ArticleListItem from './ArticleListItem.js';

const ArticleList = ({ articles }) => {
  return (
    <div id="article-list">
      <ul>
        {articles.map(article => <ArticleListItem article={article} />)}
      </ul>
    </div>
  );
}

export default ArticleList;
