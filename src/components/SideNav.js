import { useState } from 'react';

function SideNav() {

  function toggle() {
    let btnEl = document.getElementById('sideNav');
    if (btnEl.className !== 'sideNavOpen') {
      btnEl.classList.add('sideNavOpen');
    } else {
      btnEl.classList.remove('sideNavOpen');
    }
  }

  return (
    <div class="navContainer">
      <img class="portrait" src="../asset/portrait.png"/>
        <p class="description">
          Jacob is a Web Develeper out of Seattle WA. When he isn't programming the internet of things, he is drawing, teaching, reviewing movies, and doing video game things.
        </p>
        <a href="/" class="homeBtn">Back to Reading List</a>
        <h2 class="sideNavToggle homeBtn" onclick={toggle}>Close</h2>
    </div>
  )
}

export default SideNav;
