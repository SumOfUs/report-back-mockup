import React from 'react';
import Section from '../Section';
import HighlightedTitle from '../HighlightedTitle';
import { rhythm } from '../../utils/typography';

import img from './img1.png';

export default () => (
  <div
    style={{
      backgroundColor: '#048bad',
    }}
  >
    <Section>
      <HighlightedTitle color="white" backgroundColor="#30394f">
        Already in 2017 we're winning campaigns around the world...
      </HighlightedTitle>
      <img src={img} />
    </Section>
  </div>
);
