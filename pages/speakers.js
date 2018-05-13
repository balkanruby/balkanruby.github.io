import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import PageTitle from '../patterns/PageTitle';
import ThumbFeed from '../patterns/ThumbFeed';
import store from '../store';

const speakers = store.speakers.map(speaker => ({
  anchor: speaker.anchor,
  image: speaker.image,
  link: speaker.link,
  title: speaker.name,
  description: speaker.bio,
  meta: `${speaker.company ? `<strong>${speaker.company}</strong>, ` : ''}<a href=${speaker.link} target="_blank">${speaker.link}</a>`,
}));

export default () => (
  <Layout>
    <Helmet>
      <title>Speakers | Balkan Ruby</title>
    </Helmet>

    <PageTitle title="Speakers" />

    <Container theme="blank" spacing="spacing-both">
      <ThumbFeed list={speakers} />
    </Container>
  </Layout>
);
