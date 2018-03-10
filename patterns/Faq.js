const FaqElement = ({ question, answer }) => (
  <div className="eight">
    <h3>{question}</h3>
    <div dangerouslySetInnerHTML={{ __html: answer }} />
  </div>
);

const Faq = ({ list }) => (
  <div className="partner-feed">
    <div className="container">
      {list.map((item, idx) =>
        <FaqElement key={idx} {...item} />)}
    </div>
  </div>
);

export default Faq;
