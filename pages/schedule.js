import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import PageTitle from '../patterns/PageTitle';
import Schedule from '../patterns/Schedule';
import schedule from '../schedule';

export default () => (
  <Layout>
    <Helmet>
      <title>Schedule | Balkan Ruby</title>
    </Helmet>

    <PageTitle title="Schedule" />

    <Container theme="blank" spacing="spacing-both">
      <Schedule list={schedule} />
    </Container>
  </Layout>
);
