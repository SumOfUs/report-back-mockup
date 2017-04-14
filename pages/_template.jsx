import React from 'react';
import { Container } from 'react-responsive-grid';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Headroom from 'react-headroom';
import Header from '../components/partials/Header/Header';
import '../css/markdown-styles';

import { rhythm } from '../utils/typography';

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    };
  },
  render() {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            width: '100vw',
            zIndex: 1000,
          }}
        >
          <Header />
        </Headroom>
        {this.props.children}
      </div>
    );
  },
});
