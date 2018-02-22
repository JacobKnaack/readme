const url = window.location.href;
let queryString = url.substring(url.indexOf('?') + 4);

window.addEventListener('DOMContentLoaded', function() {
  for (var item in articles) {
    if (document.getElementById("submissions")) {
      document.getElementById("submissions").innerHTML += "<li class='indexListItem'><p class='date'>"+articles[item].created_on+"</p><a id='article" + articles[item].id + "' class='listAnchor' href='"+url+"template/article.html?id=" + articles[item].id + "'><i class='fa fa-code indexListImg' class aria-hidden='true'></i>"+articles[item].name+"</a><p class='articleDescription'>"+articles[item].description+"</p></li>"
    }
    if (url.includes('article.html') && parseInt(queryString) === articles[item].id) {
      document.getElementById('articleTitle').innerHTML = articles[item].name;
      document.getElementById('createdOn').innerHTML = articles[item].created_on;
      document.getElementById('articleText').innerHTML = articles[item].html;
    }
  }
});