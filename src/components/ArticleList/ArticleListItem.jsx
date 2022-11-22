import * as React from 'react';
import Image from '../../atoms/Image/Image';

const ArticleListItem = ({ article }) => {
  console.log(article);
  return (
    <li className="list-item">
      <Image
        size="l"
        src="https://via.placeholder.com/300.png/09f/fff"
      />
      <section className="list-info">
        <p className="article keywords">
          {article.tags.map(keyword => <span className="keyword">{keyword}</span>)}
        </p>
        <a className="article title link" href={`${article.key}`}>
          {article.title}
        </a>
        <p className="description">{article.description}</p>
        <button className="callToAction">Read More</button>
      </section>
    </li>
  );
}

export default ArticleListItem;
