import React from 'react';
import Image from '../Image/Image';
import '../../styles/appBanner.scss';

export default function AppBanner() {
  return (
    <div id="app-banner">
      <div className="container row">
        {/* Use Image Component */}
        <div className="profile-image">
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
            alt="profile placeholder"
            size='m'
          />
        </div>
        <div className="container column">
          <p className="title">My Blog</p>
          <p className="text">Longer form description text</p>
          <div className="actions">
            <p>ICON</p>
            <p>ICON</p>
            <p>ICON</p>
          </div>
        </div>
      </div>
    </div>
  );
}
