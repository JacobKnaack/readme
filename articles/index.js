'use strict';

/*
* Loads JSON articles from this directory and returns appropriate DOM elements
*/

const articleName = getUrlParam('article', 'Empty');
const request = new XMLHttpRequest();
const jsonArticles = [
  'building_a_chat_ui_with_basic_html_css_and_javascript_part_1.json',
  'building_a_chat_ui_with_basic_html_css_and_javascript_part_2.json',
  'creating_a_reddit_clone_with_create_react_app_and_matrial_ui.json',
]

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue) {
  var urlparameter = defaultvalue;
  if (window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
}

function fetchArticles(path) {
  return new Promise(function (resolve, reject) {
    request.open('GET', `${window.location.origin}/articles/${path}`, true);
    request.onload = function (e) {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(JSON.parse(request.responseText));
        }
      }
    }

    request.onerror = function (e) {
      reject(request.statusText);
    }
    request.send(null);
  })
}

function checkArticle(article) {
  const query = decodeURIComponent(window.location.search);
  if (query.match(article.name)) {
    return true
  }

  return false
}

window.addEventListener('DOMContentLoaded', async function () {
  for (var index in jsonArticles) {
    var article = await fetchArticles(jsonArticles[index]);

    if (document.getElementById('submissions')) {
      document.getElementById('submissions').innerHTML +=
        "<li class='indexListItem'>\
        <p class='date'>" + article.created_on + "</p>\
        <a id='article" + article.id + "' class='listAnchor' href='" + window.location.href + "template/article.html?article=" + encodeURIComponent(article.name) + "'>\
        <i class='fa fa-code indexListImg' class aria-hidden='true'></i>" + article.name + "</a>\
        <p class='articleDescription'>" + article.description + "</p>\
      </li>"
    }

    if (window.location.search.includes('?article') && checkArticle(article)) {
      document.getElementById('articleTitle').innerHTML = article.name;
      document.getElementById('createdOn').innerHTML = article.created_on;
      document.getElementById('articleText').innerHTML = article.html;
    }
  }
});
