import React from 'react';

export default function Image({ src, alt, size }) {

  const getSize = (size) => {
    switch(size) {
      case 's':
        return '20px';
      case 'm':
        return '100px';
      case 'l':
        return '200px';
      case 'xl':
        return '500px';
      default:
        return '900px';
    }
  }

  const styles = {
    container: {
      padding: '8px',
      maxWidth: '900px',
      width: getSize(size),
    },
    img: {
      width: '100%'
    }
  }

  return (
    <div className="image" style={styles.container}>
      <img style={styles.img} className="img-el" src={src} alt={alt}/>
    </div>
  )
}
