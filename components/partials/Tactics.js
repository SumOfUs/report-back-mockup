import React from 'react';
import Container from '../Container';
import DiagonalCard from '../DiagonalCard';

import { rhythm } from '../../utils/typography';

export default () => (
  <section id="tactics" style={{ backgroundColor: '#ececec' }}>
    <Container>
      <h2>
        And to have as much impact as we can, you'll see more new tactics
        like these in the months ahead:
      </h2>
    </Container>

    <DiagonalCard
      alignLeft
      backgroundImage="https://d210i8t551lxm.cloudfront.net/images/contents/000/005/299/large/emmaprotest.jpg?1491919487"
    >
      In Ottawa, Canada, SumOfUs members took to the streets, protesting at
      Shopify's headquarters against the hateful "Trump News" site, Breitbart.
    </DiagonalCard>

    <DiagonalCard
      alignRight
      backgroundImage="https://d210i8t551lxm.cloudfront.net/images/contents/000/002/899/large/sumofus_at_7_city_demo_against_TTIP_CETA.jpg?1482193670"
    >
      Across Europe, we raised our voices, phoning in to our elected
      representatives at the European Parliament, calling on them to fight the
      CETA trade deal -- a corporate power-grab.
    </DiagonalCard>
    <DiagonalCard
      alignLeft
      backgroundImage="https://d210i8t551lxm.cloudfront.net/images/contents/000/005/301/large/trump.jpg?1491919490"
    >
      <p>
        And in the US, we're laying the groundwork for a huge network of offline
        grassroots actions targeting corporations colluding with Trump's
        far-right, big-business agenda.
      </p>
    </DiagonalCard>
  </section>
);
