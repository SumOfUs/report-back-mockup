import React from 'react';
import Cover from '../Cover';
import Container from '../Container';
import HighlightedText from '../HighlightedText';
import { Icon } from 'react-fa';
import { rhythm } from '../../utils/typography';

import welcomeImg from './welcome.jpg';

export default () => (
  <Cover backgroundImage={welcomeImg}>
    <Container style={{ height: '100vh' }}>
      <h1
        style={{
          textShadow: '1px 2px 1px rgba(0, 0, 0, .5)',
          backgroundColor: 'rgba(0, 0, 0, .7)',
          padding: rhythm(0.5),
        }}
      >
        Thousands of us took a survey about our movement and what we should do in 2017.
      </h1>
      <h1
        style={{
          fontSize: rhythm(1.15),
          textShadow: '1px 2px 1px rgba(0, 0, 0, .5)',
          backgroundColor: 'rgba(0, 0, 0, .7)',
          padding: rhythm(0.5),
          paddingTop: rhythm(0.4),
          paddingBottom: rhythm(0.4),
        }}
      >
        We hope you find the results as inspiring as we do.
      </h1>

      <h1
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: rhythm(3),
          textShadow: '3px 3px 8px rgba(0, 0, 0, .99)',
        }}
      >
        <Icon name="chevron-down" />
      </h1>
    </Container>
  </Cover>
);
