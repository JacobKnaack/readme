'use strict';

const showdown = require('showdown');
const converter = new showdown.Converter();
converter.setFlavor('github');

// Converts Markdown syntax to our flavor of HTML
exports.parse = function(markdown) {
  return converter.makeHtml(markdown);
}
