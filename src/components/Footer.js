import React from 'react';

function Footer() {
  return (
    <div id="footer">
      <a className="footerBtn back">
        <i class="fas fa-arrow-left"></i>
        reading list
      </a>
      <a class="footerBtn next" href="">
        continue
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  )
}

export default Footer;
