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
    description: buildDescription(event, store.speakers),
    speaker_name: findSpeakerName(event, store.speakers),
    speaker_anchor: findSpeakerAnchor(event, store.speakers)
  }
));

function findSpeakerAnchor(event, speakers) {
  var speaker = findSpeaker(event, speakers);

  if (speaker) {
    return speaker.anchor;
  } else {
    return '';
  }
}

function buildDescription(event, speakers) {
  var speaker = findSpeaker(event, speakers);

  if (speaker) {
    return speaker.talk;
  } else {
    return event.description;
  }
}

function findSpeakerName(event, speakers) {
  var speaker = findSpeaker(event, speakers);

  if (speaker) {
    return speaker.name;
  } else {
    return '';
  }
}

function findSpeaker(event, speakers) {
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
