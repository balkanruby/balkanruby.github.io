import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import PageTitle from '../patterns/PageTitle';
import Schedule from '../patterns/Schedule';
import store from '../store';

const schedule = store.schedule.map(event => (
  {
    type: event.type,
    time: event.time,
    description: build_description(event, store.speakers),
    speaker_name: find_speaker_name(event, store.speakers),
    speaker_anchor: find_speaker_anchor(event, store.speakers)
  }
));

function find_speaker_anchor(event, speakers) {
  var speaker = find_speaker(event, speakers);

  if (speaker) {
    return speaker.anchor;
  } else {
    return '';
  }
}

function build_description(event, speakers) {
  var speaker = find_speaker(event, speakers);

  if (speaker) {
    return speaker.talk;
  } else {
    return event.description;
  }
}

function find_speaker_name(event, speakers) {
  var speaker = find_speaker(event, speakers);

  if (speaker) {
    return speaker.name;
  } else {
    return '';
  }
}

function find_speaker(event, speakers) {
  return speakers.find(speaker => (speaker.anchor === event.author));
}

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
