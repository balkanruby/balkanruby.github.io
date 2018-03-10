import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import PageTitle from '../patterns/PageTitle';
import PartnerFeed from '../patterns/PartnerFeed';
import Cta from '../patterns/Cta';
import Text from '../patterns/Text';
import store from '../store.js';

const CTA = {
  title: 'Become a partner',
  description: '<p>If your company is interested in supporting Balkan Ruby, you can learn more about the partner opportunities by following the link below.</p>',
  primaryLink: '/static/files/balkan_ruby_packages.pdf',
  primaryLabel: 'View packages',
  secondaryLink: '#',
  secondaryLabel: '',
};

export default () => (
  <Layout>
    <Helmet>
      <title>Partners | Balkan Ruby</title>
    </Helmet>

    <PageTitle title="Partners" />

    <Text centered text="<p>We are supported by these awesome companies!</p>" />

    <Container theme="blank" spacing="spacing-both">
      <PartnerFeed list={store.sponsors.pro} type="Pro" />
    </Container>

    <Container theme="blank" spacing="spacing-both">
      <PartnerFeed list={store.sponsors.speaker} type="Speaker" />
    </Container>

    <Container theme="light-bg" spacing="spacing-both">
      <Cta {...CTA} />
    </Container>
  </Layout>
);
