import React from 'react';
import { rhythm } from '../../../utils/typography';
import logo from './sumofus-logo-white.png';

const styles = {
  header: {
    padding: 18,
    backgroundColor: 'rgba(48, 57, 79, 0.8)',
  },
  logo: {
    width: 150,
    display: 'inline-block',
    margin: 0,
  },
  motto: {
    marginLeft: rhythm(0.5),
    color: 'white',
    fontSize: 20,
    fontWeight: 300,
  },
};

export default function Header() {
  return (
    <div className="Header-root" style={styles.header}>
      <a className="Header-logo" href="https://www.sumofus.org">
        <img style={styles.logo} src={logo} alt="SumOfUs" width="150" />
      </a>
      <span style={styles.motto}>
        Fighting for people over profits
      </span>
    </div>
  );
}
