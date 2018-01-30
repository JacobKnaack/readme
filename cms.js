const articles = [
  {
    "id": 1,
    "created_on": "Jan 30, 2018",
    "name": "Building a Chat UI with basic HTML CSS and Javascript: Part 1",
    "html": "<p class='subtitle'>This post is focused on basic web developement and design methodology. The goal is to help people take a prototype from concept to a development build running on a local computer. But the build will be simple enough to push to any hosting service without and fancy tools.</p>\
            <p>Let\'s build a really simple Chat UI one that has all the features of a deployed chat application, but runs in the browser with nothing but three files:</p>\
            <ul class='articleList'>\
              <li>index.html</li>\
              <li>style.css</li>\
              <li>chat.js</li>\
            </ul>"
  },
];


const url = window.location.href;
let queryString = url.substring(url.indexOf('?') + 4);

for ( var item in articles) {
  if (url.includes('index')) {
    document.getElementById("submissions").innerHTML += "<li class='indexListItem'><a id='article" + articles[item].id +"' href='/template/article.html?id="+articles[item].id+"'>"+articles[item].name+"</a></li>"
  }
  if (url.includes('article') && parseInt(queryString) === articles[item].id) {
    document.getElementById('articleTitle').innerHTML = articles[item].name;
    document.getElementById('createdOn').innerHTML = articles[item].created_on;
    document.getElementById('articleText').innerHTML = articles[item].html;
  }
}