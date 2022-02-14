'use strict';

require('dotenv').config();
const path = require('path');
const { fetch, getObjects } = require('./lib/fetchMarkdown/s3');
const { parse } = require('./lib/parseMarkdown');
const bucketName = process.env.AWS_BUCKET;
const getMarkdown = fetch(bucketName);

/**
 * This file is for Node APIs,
 * Add any node code you want to run before we build our website
*/

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const response = await getObjects(bucketName);

  for (let object of response.objects) {
    if (object.Key[object.Key.length - 1] !== '/') {
      const markdown = await getMarkdown(object.Key);
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
};
