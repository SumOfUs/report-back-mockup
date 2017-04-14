import React from 'react';
import Container from './Container';
import { rhythm } from '../utils/typography';

export default props => (
  <section
    className="Section-root"
    style={{ padding: `${rhythm(0.5)} auto`, ...props.style }}
  >
    <Container>
      {props.children}
    </Container>
  </section>
);
