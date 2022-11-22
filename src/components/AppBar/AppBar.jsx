import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import IconButton from '../../atoms/IconButton/IconButton';
import '../../styles/appBar.scss';

export default function AppBar() {

  const [open, setOpen] = useState(false);

  const toggleSearch = () => {
    setOpen(!open);
  }

  /**
   * TODO
   *  handle search features
   *  configure links
   *  add Nav Item component??
   * */

  return (
    <section className="app-bar">
      <div className="title">
        <h1 className="heading">
          READ<span className="splash">ME</span>
          </h1>
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
          <FaSearch />
        </div>
      </div>
      <div className={`search ${open ? 'visible' : 'hidden'}`}>
        <form className="text-input">
          <input className="user-input" type="text" />
          <IconButton size="m" onClick={toggleSearch}>
            <AiOutlineCloseCircle style={{ width: '40px', height: '40px'}} />
          </IconButton>
        </form>
      </div>
    </section>
  )
}
