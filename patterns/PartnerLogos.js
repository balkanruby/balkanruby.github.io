const PartnerLogos = ({ list }) => (
  <div className="partner-logos">
    <div className="container">
      {list.map((logo, idx) =>
        <a href={logo.link} title={logo.title}>
          <img src={logo.image} alt={logo.title} />
        </a>
      )}
    </div>
  </div>
);

PartnerLogos.defaultProps = {
  list: [
    {
      title: 'Partner 1',
      link: '#',
      image: 'http://placehold.it/400x300',
    }
  ],
};

export default PartnerLogos;
