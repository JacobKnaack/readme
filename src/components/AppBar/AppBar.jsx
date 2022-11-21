import React, { useState } from 'react';
import SearchIcon from '../../images/search_icon.svg';
import Image from '../Image/Image';
import '../../styles/appBar.scss';

export default function AppBar() {

  const [open, setOpen] = useState(false);

  const toggleSearch = () => {
    setOpen(!open);
  }

  return (
    <section className="app-bar">
      <div className="title">
        <h1 className="heading">README</h1>
      </div>
      <div className="nav-menu">
        <div className=" nav-item">
          <button className="text-btn">Home</button>
        </div>
        <div className="nav-item">
          <button className="text-btn">About</button>
        </div>
        <div className="nav-item">
          <button className="text-btn">Contact</button>
        </div>
        <div onClick={toggleSearch} className="icon-btn nav-item">
          <Image src={SearchIcon} alt="Search" />
        </div>
      </div>
      <div className={`search ${open ? 'visible' : 'hidden'}`}>
        <form className="text-input">
          <input className="user-input" type="text" />
          <div className="icon-btn">ICON</div>
        </form>
      </div>
    </section>
  )
}
