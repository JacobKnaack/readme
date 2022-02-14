'use strict';

const { fetch, getObjects } = require('./');
jest.mock('aws-sdk');

describe('Testing the s3 module', () => {
  it('Should be able to fetch from a file from a bucket', async () => {
    let getMarkdown = fetch('test-bucket');

    let response = await getMarkdown('test article');
    expect(response.text).toBeDefined();
    expect(response.text).toBeTruthy();
    expect(typeof response.text).toEqual('string');
  });

  test('Should be able to list Objects from a bucket', async () => {
    let response = await getObjects('jacobknaack-readme');
    expect(response.objects).toBeDefined();
    expect(response.objects).toBeTruthy();
    expect(Array.isArray(response.objects)).toBeTruthy();
    expect(response.objects[0].Key).toBeDefined();
  });
});
