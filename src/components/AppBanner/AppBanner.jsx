import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfilePic from '../../images/portrait.png';
import Image from '../../atoms/Image/Image';
import IconButton from '../../atoms/IconButton/IconButton';
import '../../styles/appBanner.scss';
/**
 *
 * @prop {title} String - title text
 * @prop {text} String - description text
 * @prop {Action} [{ Image / Icon, OnClick }]
 */
export default function AppBanner({ title, text, actions}) {
  return (
    <div id="app-banner">
      <div className="container row">
        <div className="profile-image">
          <Image
            src={ProfilePic}
            alt="profile placeholder"
            size='l'
          />
        </div>
        <div className="container column">
          <p className="title">{title}</p>
          <p className="text">{text}</p>
          <div className="actions">
            <IconButton size="m">
              <FaGithub style={{ width: '250px', height: '25px' }} />
            </IconButton>
            <IconButton size="m">
              <FaLinkedin style={{ width: '25px', height: '25px' }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
