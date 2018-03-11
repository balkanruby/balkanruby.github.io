const Faq = ({ list }) => (
  <div className="faq">
    <div className="container">
      {list.map((item, idx) =>
        <div className="faq-item">
          <h4>{item.question}</h4>
          <div dangerouslySetInnerHTML={{ __html: item.answer }} />
        </div>
      )}
    </div>
  </div>
);

export default Faq;
