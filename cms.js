const url = window.location.href;
let queryString = url.substring(url.indexOf('?') + 4);

window.addEventListener('DOMContentLoaded', function() {
  for (var item of articles) {
    if (document.getElementById("submissions")) {
      document.getElementById("submissions").innerHTML += "<li class='indexListItem'><p class='date'>"+item.created_on+"</p><a id='article" + item.id + "' class='listAnchor' href='"+url+"template/article.html?id=" + item.id + "'><i class='fa fa-code indexListImg' class aria-hidden='true'></i>"+item.name+"</a><p class='articleDescription'>"+item.description+"</p></li>"
    }
    if (url.includes('article.html') && parseInt(queryString) === item.id) {
      document.getElementById('articleTitle').innerHTML = item.name;
      document.getElementById('createdOn').innerHTML = item.created_on;
      document.getElementById('articleText').innerHTML = item.html;
    }
  }
});
