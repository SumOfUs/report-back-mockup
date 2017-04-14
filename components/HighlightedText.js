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
    lineHeight: rhythm(2),
    backgroundColor: backgroundColor,
    boxShadow: `${rhythm(0.25)} 0 0 ${backgroundColor}, -${rhythm(0.25)} 0 0 ${backgroundColor}`,
    color: color,
  };
};
export default ({ children, ...props }) => {
  return (
    <span style={style(props)}>
      {children}
    </span>
  );
};
