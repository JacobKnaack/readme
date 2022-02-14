'use strict';

const AWS = require('aws-sdk');
let credentials = new AWS.Credentials();

// configure with credentials
if (!credentials.accessKeyId || !credentials.secretAccessKey) {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });
}

const s3 = new AWS.S3();

/**
 * Higher order function for fetching markdown text from a bucket
 * @param {String} bucket
 * @returns {Function} - getMarkdown:
 *   @param {String} filename
 *   @returns {String} - markdown syntax
 */
exports.fetch = (bucket) => async (filename) => {
  let params = {
    Bucket: bucket,
    Key: filename,
  }
  let response = { error: null };
  try {
    let object = await s3.getObject(params).promise();
    let body = object.Body.toString();
    response.text = body;
  } catch (e) {
    response.error = e;
  }

  return response;
};

exports.getObjects = async (bucket) => {
  let params = {
    Bucket: bucket,
    Prefix: 'articles/',
  }
  let response = { error: null }
  try {
    let objects = await s3.listObjects(params).promise();
    response.objects = objects.Contents;
  } catch (e) {
    response.error = e;
  }

  return response;
}
