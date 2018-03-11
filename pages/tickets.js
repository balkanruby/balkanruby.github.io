import Helmet from 'react-helmet';
import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import SectionTitle from '../patterns/SectionTitle';
import Faq from '../patterns/Faq';
import Cta from '../patterns/Cta';

const EMAIL = 'hi@balkanruby.com'

const FAQ = [
  {

    question: 'How do I get an invoice for my ticket?',
    answer: '<p>We will send you an Invoice within a few days from the date when you purchased your ticket.</p><p>If you have any questions or special requests for the invoice do not hesitate to contact us: <a href="mailto:hi@balkanruby.com?subject=Invoice question">hi@balkanruby.com</a></p>'
  },
  {
    question: 'What information do we collect?',
    answer: '<p>We collect personal information from you when you purchase a ticket. You may however, visit our site anonymously.</p>\
    <p>Any of the information we collect from you may be used in one of the following ways:</p>\
    <ul>\
      <li>To personalize your experience</li>\
      <li>To help us to more effectively respond to your requests and support needs</li>\
      <li>To process transactions</li>\
    </ul>\
    <p>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased tickets.</p>'
  },
  {
    question: 'Prices and Local Taxes',
    answer: '<p>All ticket prices include the local sales tax where the event takes place, and any other transaction fees. Prices include VAT.</p>'
  },
  {
    question: 'Shipping Information',
    answer: '<p>All tickets are delivered via email. Upon registration at the venue, you will receive your badge and t-shirt.</p>'
  },
  {
    question: 'What do you get for your money?',
    answer: '\
      <p>\
        <ul>\
          <li>Access to all talks at the conference</li>\
          <li>A cool T-shirt</li>\
          <li>Morning and afternoon coffee breaks</li>\
          <li>Access to the after party</li>\
        </ul>\
      </p>'
  },
  {
    question: 'Refunds',
    answer: '<p>If you have to cancel your conference ticket(s), please send us an email at <a href="mailto:hi@balkanruby.com?subject=Refund">hi@balkanruby.com</a> at latest two weeks before the event. Once you cancel the ticket(s), you will receive a refund of your purchase. Cancellations made later than two weeks before the event starts and attendees who fail to attend for some reason, can’t be considered for refunds. Sorry.</p>'
  },
  {
    question: 'Transferring your ticket',
    answer: '<p>If you’d like to transfer your ticket to a friend or colleague without the reservation being refunded, that’s no problem at all — no cancellation fees will occur. Don’t forget to send us the new attendee contact details at\
    <a href="mailto:hi@balkanruby.com?subject=Ticket Transfer">hi@balkanruby.com</a> no later than five days before the event you are registered for. We’ll sort it out quickly.</p>'
  },
  {
    question: 'Event Cancellation',
    answer: '<p>If the event is cancelled, We will fully refund your registration fee with no penalties or other reductions — no questions asked! However, we can’t cover travel or hotel reservation costs.</p>'
  },
  {
    question: 'Code of Conduct',
    answer: '<p>All attendees shall conduct themselves at all times in accordance with the Conference’s Code of Conduct, as listed on <a href="http://berlincodeofconduct.org/" target="_blank">http://berlincodeofconduct.org/</a>. We reserve the right to remove from the Conference a person, Company, or any Company representative(s) violating those standards. We will not refund anyone who violates the Code of Conduct.</p>'
  }
];

const CTA = {
  title: 'Need more information?',
  description: '<br />',
  primaryLink: false,
  primaryLabel: false,
  secondaryLink: 'mailto:hi@balkanruby.com?subject=I+have+a+question',
  secondaryLabel: 'Contact us',
};

export default () => (
  <Layout>
    <Helmet>
      <title>Tickets | Balkan Ruby</title>
    </Helmet>

    <Container theme="blank" spacing="spacing-both">
      <div className="container">
        <h1>Tickets</h1>

        <script src="https://cdn.weemss.com/compiled/js/integration-embed.js?v79.7"></script>
        <iframe src="https://event.gg/9100/form" id="weemss_integration_9100" frameBorder="0" width="100%" height="100%" scrolling="no"></iframe>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-both">
      <SectionTitle title="FAQ" />
    </Container>

    <Container theme="blank" spacing="spacing-both">
      <Faq list={FAQ} />
    </Container>

    <Container theme="light-bg" spacing="spacing-both">
      <Cta {...CTA} />
    </Container>
  </Layout>
);
