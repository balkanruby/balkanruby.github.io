const Text = ({ text, centered }) => (
  <div className="container">
    <div className="grid">
      <div className={`text ${centered ? 'align-center' : ''}`} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </div>
);

export default Text;
