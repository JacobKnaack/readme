import React from 'react';

export default function Card({ children, width = '100%'}) {

  const styles = {
    container: {
      width,
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s'
    },
    contents: {
      padding: '2px 16px',
    }
  }

  return (
    <div style={styles.container} className="card">
      <div className="contents">
        {children}
      </div>
    </div>
  );
}
