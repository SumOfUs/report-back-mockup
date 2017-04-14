import React from 'react';
import { rhythm } from '../../../utils/typography';
import logo from './sumofus-logo-white.png';

const styles = {
  header: {},
  logo: {
    width: 150,
    display: 'inline',
    margin: 0,
  },
  motto: {
    marginLeft: rhythm(0.5),
  },
};

export default function Header() {
  return (
    <div style={styles.header}>
      <a href="https://www.sumofus.org">
        <img style={styles.logo} src={logo} alt="SumOfUs" />
        <span style={styles.motto}>Fighting for people over profits</span>
      </a>
    </div>
  );
}
