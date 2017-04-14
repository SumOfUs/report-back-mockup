import React from 'react';
import Cover from '../Cover';
import Container from '../Container';
import HighlightedText from '../HighlightedText';
import { Icon } from 'react-fa';
import { rhythm } from '../../utils/typography';

import welcomeImg from './welcome.jpg';

const HighlightedHeader = props => (
  <h1
    style={{
      backgroundColor: 'rgba(40, 50, 80, 0.7)',
      borderRadius: rhythm(0.1),
      padding: rhythm(0.5),
      textAlign: 'center',
      textShadow: `1px 2px 1px rgba(0, 0, 0, 0.8)`,
      ...props.style,
    }}
  >
    {props.children}
  </h1>
);

export default () => (
  <Cover
    backgroundImage={welcomeImg}
    style={{
      paddingTop: rhythm(3),
    }}
  >
    <Container>
      <HighlightedHeader>
        Thousands of us took a survey about our movement and what we should do in 2017.
      </HighlightedHeader>
      <HighlightedHeader style={{ fontSize: rhythm(1) }}>
        We hope you find the results as inspiring as we do.
      </HighlightedHeader>
    </Container>
    <h1
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: rhythm(3),
        textShadow: '1px 1px 0px rgba(40, 50, 80, .7)',
      }}
    >
      <Icon name="chevron-down" />
    </h1>
  </Cover>
);
