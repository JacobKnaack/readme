import * as React from 'react';
import parse from 'html-react-parser';
import '../styles/article.scss';

/**
 * Template for article content
 */

function Article({ pageContext }) {
  return (
    <div id="article-container">
      {parse(pageContext.html)}
    </div>
  )
}

export default Article;
