import store from './store';

const findSpeakerAnchor = (event, speakers) => {
  const speaker = findSpeaker(event, speakers);

  if (speaker) {
    return speaker.anchor;
  } else {
    return '';
  }
};

const buildDescription = (event, speakers) => {
  const speaker = findSpeaker(event, speakers);

  if (speaker) {
    return speaker.talk;
  } else {
    return event.description;
  }
};

const findSpeakerName = (event, speakers) => {
  const speaker = findSpeaker(event, speakers);

  if (speaker) {
    return speaker.name;
  } else {
    return '';
  }
};

const findSpeaker = (event, speakers) =>
  speakers.find(speaker => speaker.anchor === event.author);

export default store.schedule.map(event =>
  ({
    type: event.type,
    time: event.time,
    description: buildDescription(event, store.speakers),
    speaker_name: findSpeakerName(event, store.speakers),
    speaker_anchor: findSpeakerAnchor(event, store.speakers)
  })
);
