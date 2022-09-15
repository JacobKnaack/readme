'use strict';

require('dotenv').config();
const path = require('path');
const { fetch, getObjects } = require('./lib/fetchMarkdown/s3');
const { parse } = require('./lib/parseMarkdown');
const bucketName = process.env.AWS_BUCKET;
const getObject = fetch(bucketName);

/**
 * This file is for Node APIs,
 * Add any node code you want to run before we build our website
*/

// adds article data to the Home Page
exports.onCreatePage = async ({ page }) => {
  if (page.path === '/') {
    try {
      let { text, error } = await getObject('manifest.json');
      if (error) {
        throw new Error(error);
      }

      let articles = JSON.parse(text).reduce((list, article) => {
        let { dir, name, ext } = path.parse(article.key);
        dir = dir ? dir + '/' : '';
        if (ext === '.md') {
          return [...list, { ...article, key: `${dir}${name}` }];
        } else {
          return list;
        }
      }, []);

      page.context.articles = articles;
    } catch (e) {
      console.error('Home Page Error: Unable to build home page data', e);
    }
  }
}

// Function to tell Gatsby how to create pages.
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const response = await getObjects(bucketName);
  try {
    for (let object of response.objects) {
      if (object.Key[object.Key.length - 1] !== '/') {
        const markdown = await getObject(object.Key);
        let html = parse(markdown.text);
        let pageParams = path.parse(object.Key);

        createPage({
          path: `${pageParams.dir}/${pageParams.name}`,
          component: path.resolve('src/pages/article.js'),
          context: {
            html
          }
        });
      }
    }
  } catch (e) {
    console.error('** Article fetching failed **', e);
  }
};
