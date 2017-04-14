import React from 'react';
import Helmet from 'react-helmet';
import Section from '../components/Section';
import { config } from 'config';

/* partials */
import WelcomeSection from '../components/partials/Welcome';
import WorldWordMapSection from '../components/partials/WorldWordMap';
import MapBlock from '../components/partials/MapBlock';
import BigIssues from '../components/partials/BigIssues';
import Tactics from '../components/partials/Tactics';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <WelcomeSection />
        <WorldWordMapSection />
        <MapBlock />
        <BigIssues />
        <Tactics />
      </div>
    );
  }
}
