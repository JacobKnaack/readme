document.getElementById("sideNav").innerHTML = 
  "<div class='navContainer'>\
    <img class='portrait' src='../asset/portrait.png'>\
    <p class='description'>\
      Jacob is a Web Develeper out of Seattle WA. When he isn\'t programming the internet of things, he is drawing, teaching, reviewing movies, and doing video game things.\
    </p>\
    <a href='../' class='homeBtn'>Back to Reading List</a>\
    <h2 class='sideNavToggle homeBtn' onclick='toggleSideNav()'>Close</h2>\
  </div>"

  function toggleSideNav () {
    var btnEl = document.getElementById('sideNav');
    if (btnEl.className !== 'sideNavOpen') {
      btnEl.classList.add('sideNavOpen');
    } else {
      btnEl.classList.remove('sideNavOpen');
    }
  }