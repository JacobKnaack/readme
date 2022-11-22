import * as React from "react";
import AppBar from '../components/AppBar/AppBar';
import AppBanner from '../components/AppBanner/AppBanner';
import ArticleList from "../components/ArticleList/ArticleList";
import Footer from '../components/Footer/Footer';
import '../styles/index.scss';
import '../styles/modules.scss';

const Home = ({ pageContext }) => {
  let { articles } = pageContext;
  return (
    <main>
      <title>Home Page</title>
      <AppBar />
      <AppBanner
        title="A Blog for Anyone, but especially Software Developers."
        text="I'm Jacob,  software developer, web designer, and Instructor in Seattle WA.  You have found my blog about developer things.  Here are some topics that I find useful."
      />
      {articles
        ? <ArticleList articles={articles}/>
        : <p>No Articles</p>}
      <Footer />
    </main>
  )
}

export default Home;
