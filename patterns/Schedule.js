const talkStyle = {
  fontWeight: 'bold'
};

const speakerStyle = {
  fontWeight: 'lighter'
};

const timeStyle = {
  fontSize: '1.5em'
};

const infoStyle = {
  fontSize: '1.5em'
};

const Event = ({ type, time, description, speaker_name, speaker_anchor }) => {
  if (type === 'break') {
    return <BreakItem time={time} description={description} />;
  } else if (type === 'info') {
    return <InfoItem description={description} />;
  } else {
    return <TalkItem time={time} speaker_name={speaker_name} speaker_anchor={speaker_anchor} talk={description} />;
  }
};

const TalkItem = ({ time, speaker_name, speaker_anchor, talk}) => (
  <tr>
    <td><span style={timeStyle}>{time}</span></td>
    <td>
      <span style={talkStyle}>{talk}</span>
      <br/>
      <a style={speakerStyle} href={"/speakers#" + speaker_anchor}>{speaker_name}</a>
    </td>
  </tr>
);

const BreakItem = ({time, description}) => (
  <tr>
    <td><span style={timeStyle}>{time}</span></td>
    <td><span style={talkStyle}>{description}</span></td>
  </tr>
);

const InfoItem = ({ description }) => (
  <tr><td><span style={infoStyle}>{description}</span></td></tr>
);

const Schedule = ({ list }) => (
  <div className="container">
    <div className="schedule">
      <table>
        <tbody>
          {list.map((event, idx) =>
            <Event
              key={idx}
              type={event.type}
              time={event.time}
              description={event.description}
              speaker_name={event.speaker_name}
              talk={event.talk}
              speaker_anchor={event.speaker_anchor}
            />
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default Schedule;
