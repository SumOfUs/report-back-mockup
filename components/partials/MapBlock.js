import React from 'react';
import Section from '../Section';
import HighlightedText from '../HighlightedText';
import { rhythm } from '../../utils/typography';

import img from './img1.png';

export default () => (
  <div
    style={{
      backgroundColor: '#048bad',
    }}
  >
    <Section>
      <h2>
        <HighlightedText color="white" backgroundColor="#30394f">
          Already in 2017 we're winning campaigns around the world...
        </HighlightedText>
        <img src={img} />
      </h2>
    </Section>
  </div>
);
