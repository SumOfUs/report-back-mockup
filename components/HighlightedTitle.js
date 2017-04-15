// @flow
import React from 'react';
import { rhythm } from '../utils/typography';

const defaultStyle = {
  color: 'black',
  backgroundColor: 'white',
};
const style = ({ color, backgroundColor } = defaultStyle) => {
  return {
    display: 'inline',
    padding: rhythm(0.25),
    paddingLeft: 0,
    lineHeight: rhythm(2),
    backgroundColor: backgroundColor,
    boxShadow: `${rhythm(0.25)} 0 0 ${backgroundColor}, -${rhythm(0.25)} 0 0 ${backgroundColor}`,
    color: color,
  };
};

export default ({ children, ...props }) => {
  return (
    <h2 style={{ paddingLeft: rhythm(0.25) }}>
      <span style={style(props)}>
        {children}
      </span>
    </h2>
  );
};
