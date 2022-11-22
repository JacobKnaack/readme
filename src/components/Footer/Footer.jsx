import React from 'react';

function Footer() {

  let date = new Date();

  return (
    <div id="footer">
      <p>Copyright <span>&copy;</span> Jacob Knaack {date.getFullYear()}</p>
    </div>
  )
}

export default Footer;
