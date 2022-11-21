import * as React from "react";
import AppBar from '../components/AppBar/AppBar';
import AppBanner from '../components/AppBanner/AppBanner';
import ArticleList from "../components/ArticleList/ArticleList";
import '../styles/index.scss';
import '../styles/modules.scss';

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}


// data
const data = [
  {
    title: 'Test Title 1',
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    keywords: ['one', 'two', 'three'],
  }
]

const Home = ({ pageContext }) => {

  let { articles } = pageContext;

  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <AppBar />
      <AppBanner />
      {articles
        ? <ArticleList articles={articles}/>
        : <p>No Articles</p>}
    </main>
  )
}

export default Home;
