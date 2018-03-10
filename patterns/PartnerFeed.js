const Thumb = ({ title, description, link, image }) => (
  <div className="partner grid">
    <div className="third">
      <a href={link} className="partner-logo" target="_blank">
        <img src={image} alt={title}/>
      </a>
    </div>
    <div className="eight">
      <h3>{title}</h3>
      <div className="meta">
        <a href={link} target="_blank">{link}</a>
      </div>

      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

const PatnerFeed = ({ list, type }) => (
  <div className="partner-feed">
    <div className="container">
      <h2>{type} Partners</h2>
      {list.map((item, idx) =>
        <Thumb key={idx} {...item} />
      )}
    </div>
  </div>
);

export default PatnerFeed;
