'use strict';

const aws_sdk = jest.createMockFromModule('aws-sdk');

aws_sdk.Credentials = jest.fn().mockImplementation(() => ({
  accessKeyId: 'test-string-for-testing',
  secretAccessKey: 'test-string-for-testing',
  region: 'test-region'
}));

aws_sdk.config = {
  update: jest.fn(),
}

aws_sdk.S3 = jest.fn().mockImplementation(() => ({
  getObject: jest.fn(params => ({
    promise: jest.fn(() => new Promise((resolve, reject) => {
      if (params.Bucket && params.Key) {
        resolve({
          Body: {
            toString: () => '# test markdown\n Here is some text\n 1.enumerated\n 1.list',
          }
        })
      } else {
        reject({
          error: 'invalid params',
        })
      }
    }))
  })),
  listObjects: jest.fn(params => ({
    promise: jest.fn(() => new Promise((resolve, reject) => {
      if (params.Bucket) {
        resolve({
          Contents: [{Key: 'testfile'}]
        })
      } else {
        reject({
          error: 'invalid parameters',
        })
      }
    }))
  }))
}));

module.exports = aws_sdk;
