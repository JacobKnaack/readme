import React from 'react';

export default function IconButton(props) {

  const { size, children } = props;

  const getSize = (size) => {
    switch(size) {
      case 's':
        return '30px';
      case 'm':
        return '40px';
      case 'l':
        return '50px'
      case 'xl':
      default:
        return '60px'
    }
  }

  const getPadding = (size) => {
    switch(size) {
      case 's':
        return '8px';
      case 'm':
        return '12px';
      case 'l':
        return '16px';
      case 'xl':
        return '24px';
      default:
        return '16px'
    }
  }

  return (
    <div className="icon-btn" style = {{
      width: getSize(size),
      height: getSize(size),
      padding: getPadding(size),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} {...props}>
      {children}
    </div>
  );
}
