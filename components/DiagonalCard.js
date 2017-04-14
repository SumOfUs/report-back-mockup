import React from 'react';
import { rhythm } from '../utils/typography';

const DiagonalCover = props => (
  <div
    className={`DiagonalCard-cover ${props.className}`}
    style={{
      position: 'absolute',
      backgroundColor: '#00c0cf',
      width: '1000vw',
      height: '1000vh',
      transform: 'rotate(45deg)',
      outlineColor: 'rgba(0, 192, 207, 0.5) solid',
      outlineOffset: 5,
      ...props.style,
    }}
  />
);
const DiagonalRight = props => (
  <DiagonalCover
    className="right"
    style={{
      transform: 'rotate(-45deg)',
    }}
  />
);

const DiagonalLeft = props => (
  <DiagonalCover
    className="left"
    style={{
      transform: 'rotate(-45deg)',
      top: '-870vh',
      left: '-800vw',
    }}
  />
);

export default props => (
  <div
    className="DiagonalCard-root"
    style={{
      overflow: 'hidden',
      position: 'relative',
      backgroundImage: `url(${props.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div
      style={{
        maxWidth: '40%',
        padding: rhythm(2),
      }}
    >
      {props.children}
    </div>
    {props.alignLeft && <DiagonalLeft />}
    {props.alignRight && <DiagonalRight />}
  </div>
);
