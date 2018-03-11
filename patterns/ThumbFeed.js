const Thumb = ({ anchor, title, description, meta, image }) => (
  <div id={anchor} className="grid thumb">
    <div className="fourth">
      <img src={image} alt={title} />
    </div>
    <div className="eight">
      <h3>{title}</h3>
      <div className="meta" dangerouslySetInnerHTML={{ __html: meta }} />
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

const ThumbFeed = ({ list }) => (
  <div className="thumb-feed">
    <div className="container">
      {list.map((item, idx) =>
        <Thumb key={idx} {...item} />
      )}
    </div>
  </div>
);

export default ThumbFeed;
