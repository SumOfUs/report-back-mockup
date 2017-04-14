import React from 'react';
import { Container } from 'react-responsive-grid';
import { rhythm } from '../utils/typography';

const style = {
  maxWidth: 960,
  padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
};
export default ({ children, ...props }) => (
  <Container style={{ ...style, ...props.style }}>
    {children}
  </Container>
);
