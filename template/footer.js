let idQuery = window.location.href.slice(-1);
let nextArticle = parseInt(idQuery) + 1;
let footerNext = window.location.href.slice(0, -1) + nextArticle;

document.getElementById('footer').innerHTML = "\
  <a class='footerBtn back' href='../'><i class='fas fa-arrow-left'></i>reading list</a>\
  <a class='footerBtn next' href='"+ footerNext +"'>continue<i class='fas fa-arrow-right'></i></a>\
  "