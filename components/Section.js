import React from 'react';
import Container from './Container';
import { rhythm } from '../utils/typography';

export default ({ id, ...props }) => (
  <section
    id={id}
    className="Section-root"
    style={{ padding: `${rhythm(0.5)} auto`, ...props.style }}
  >
    <Container>
      {props.children}
    </Container>
  </section>
);
