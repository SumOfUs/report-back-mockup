import React from 'react';

export default props => (
  <div
    style={{
      position: 'relative',
      margin: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'black',
      color: 'white',
      backgroundImage: `url(${props.backgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    {props.children}
  </div>
);
