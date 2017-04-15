import React from 'react';
import { rhythm } from '../utils/typography';

const DiagonalCardText = props => (
  <div
    style={{
      position: 'absolute',
      maxWidth: 500,
      minWidth: 350,
      padding: rhythm(0.85),
      zIndex: 100,
      color: 'white',
      fontSize: rhythm(0.85),
      lineHeight: rhythm(1.4),
      top: 0,
      left: props.left ? 0 : 'auto',
      right: props.right ? 0 : 'auto',
      textAlign: props.right ? 'right' : 'left',
    }}
  >
    {props.children}
  </div>
);

const DiagonalCover = props => (
  <div
    className={`DiagonalCard-cover ${props.className}`}
    style={{
      position: 'absolute',
      backgroundColor: '#00c0cf',
      width: '200%',
      height: '100%',
      transform: 'rotate(-45deg)',
      outline: '.5rem rgba(0, 192, 207, 0.5) solid',
      zIndex: 10,
      ...props.style,
    }}
  />
);
const DiagonalRight = props => (
  <div>
    <DiagonalCover
      className="right"
      style={{
        position: 'absolute',
        transformOrigin: 'bottom right',
        transform: 'rotate(45deg)',
        top: 0,
        right: 0,
      }}
    />
    <DiagonalCardText right>
      {props.content}
    </DiagonalCardText>
  </div>
);

const DiagonalLeft = props => (
  <div>
    <DiagonalCover
      className="left"
      style={{
        position: 'absolute',
        transformOrigin: 'bottom left',
        bottom: 0,
        left: 0,
      }}
    />
    <DiagonalCardText left>
      {props.content}
    </DiagonalCardText>
  </div>
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
      minHeight: 700,
      minWidth: 700,
    }}
  >
    {props.alignLeft && <DiagonalLeft content={props.children} />}
    {props.alignRight && <DiagonalRight content={props.children} />}
  </div>
);
