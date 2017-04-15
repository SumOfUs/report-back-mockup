import React from 'react';
import Section from '../Section';
import HighlightedTitle from '../HighlightedTitle';
import Card from '../Card';

export default () => (
  <Section>
    <HighlightedTitle color="white" backgroundColor="#048bad">
      These are some of the big issues that matter to us -- and what we're already up to in 2017:
    </HighlightedTitle>
    <Card
      title="1. Fighting climate change and blocking oil and gas drilling"
      imageCaption="357,910 actions"
      backgroundImage="https://d210i8t551lxm.cloudfront.net/images/contents/000/003/301/large/standing-rock-kid-with-fist_h_0.jpg"
      href="https://actions.sumofus.org/a/banks-need-to-divest-from-the-dakota-access-pipeline-now"
    >
      <p>
        Thousands of us are standing strong with activists fighting the Dakota
        Access and Kinder Morgan pipelines. we're targeting banks financing
        extraction, and scaling up plans to resist the Trump agenda.
      </p>
    </Card>
    <Card
      title="2. Protecting the bees and our food supplies"
      imageCaption="1,478,534 actions"
      backgroundImage="https://d210i8t551lxm.cloudfront.net/images/contents/000/000/960/large/Dead_Bee_EPA_campaign.jpg?1482191681"
      href="https://actions.sumofus.org/a/bayer-bees-lawsuit"
    >
      <p>
        Bayer and Syngenta are suing the European Union for banning toxic,
        bee-killing chemicals. We've teamed up with the Bee Defenders Alliance
        to stand up for the bees at the European Court of Justice.
      </p>
    </Card>
    <Card
      title="3. Challenging businesses backing the far right"
      imageCaption="551,105 actions"
      backgroundImage="https://d210i8t551lxm.cloudfront.net/images/contents/000/003/870/large/amazon3.image/jpeg?1482196899"
      href="https://actions.sumofus.org/a/amazon-stop-investing-in-hate"
    >
      <p>
        Breitbart News, the extremist website that helped elect Trump,
        is trying to fast-track a global expansion. we're pushing back,
        targeting its sponsors -- and winning.
      </p>

    </Card>
  </Section>
);
