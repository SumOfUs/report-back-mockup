import React from 'react';
import { rhythm } from '../utils/typography';

export default props => (
  <div className="Card-root">
    <h3>{props.title}</h3>
    <div
      className="Card-image"
      style={{
        position: 'relative',
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        minHeight: 205,
        maxHeight: 305,
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, .45)',
          color: 'white',
          paddingLeft: rhythm(0.5),
          paddingRight: rhythm(0.5),
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {props.imageCaption}
      </div>
    </div>
    <div
      className="Card-text"
      style={{
        backgroundColor: '#ececec',
        padding: rhythm(1),
        marginBottom: rhythm(2),
      }}
    >
      {props.children}
      <a
        className="Card-more"
        style={{
          color: 'black',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
        href={props.href}
      >
        Learn more ≫
      </a>
    </div>
  </div>
);
