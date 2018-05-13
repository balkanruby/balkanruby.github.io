const Text = ({ text, centered, children }) => (
  <div className="container">
    <div className="grid">
      {text
        ? <div className={`text ${centered ? 'align-center' : ''}`} dangerouslySetInnerHTML={{ __html: text }} />
        : <div className={`text ${centered ? 'align-center' : ''}`}>
            <div className="text">{children}</div>
          </div>}
    </div>
  </div>
);

export default Text;
