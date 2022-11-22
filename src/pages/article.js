import * as React from 'react';
import parse from 'html-react-parser';
import AppBar from '../components/AppBar/AppBar';
import Footer from '../components/Footer/Footer';
import '../styles/article.scss';

/**
 * Template for article content
 */

function Article({ pageContext }) {
  return (
    <div id="article-container">
      <main id="article-content">
        <AppBar />
        {parse(pageContext.html)}
      </main>
      <Footer />
    </div>
  )
}

export default Article;
