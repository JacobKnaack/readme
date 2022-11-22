'use strict';

const { parse } = require('./');

describe('testing the markdown parsing module', () => {
  it('Should convert markdown into an HTML string', () => {
    let markdown = '# Here is a heading\n Here is some heading text'

    let html = parse(markdown);
    expect(html.includes('h1')).toBeTruthy();
    expect(html.includes('p')).toBeTruthy();
  });
});
