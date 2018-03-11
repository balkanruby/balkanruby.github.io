const Speaker = ({ image, name, link, talk }) => (
  <div className="fourth">
    <div className="speaker">
      <a href={link} target="_blank" className="image-wrapper">
        <img src={image} alt={name} />
      </a>

      <div className="content">
        <h4><a href={link} className="card">{name}</a></h4>
        <p>{talk}</p>
      </div>
    </div>
  </div>
);

const Speakers = ({ list }) => (
  <div className="speakers">
    <div className="container">
      <div className="grid">
        {list.map((speaker, idx) =>
          <div className="fourth">
            <Speaker
              key={idx}
              image={speaker.image}
              name={speaker.name}
              link={speaker.link}
              talk={speaker.talk}
            />
          </div>
        )}
      </div>
    </div>
  </div>
);

Speakers.defaultProps = {
  list: [
    {
      image: 'http://placehold.it/400x400',
      link: 'https://example.com/',
      name: 'John doe',
      company: 'ACME Inc.',
      bio: '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga iusto quo labore alias illo laborum quisquam ipsa sunt ut expedita ipsam nulla odio in dolore veritatis temporibus, veniam velit porro?</p>',
      talk: 'Talk',
      description: '<p>To be announced. Stay tuned!</p>',
    },
  ],
};

export default Speakers;
