import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import PageTitle from '../patterns/PageTitle';
import PartnerFeed from '../patterns/PartnerFeed';
import Cta from '../patterns/Cta';
import Text from '../patterns/Text';

const SPONSORS = [
  {
    image: '/static/images/sponsors/emerchantpay_logo.svg',
    link: 'https://www.emerchantpay.com/',
    title: 'eMerchantPay',
    description: '<p>eMerchantPay is a leading online, mobile and POS payment service provider. We help e-commerce businesses of all sizes and sectors accept payments via multiple customer touch points. Designed to increase conversions, our offering includes robust payment processing technology, coupled with popular alternative payment methods and a range of acquiring services. eMerchantPay Limited is registered as an authorised Electronic Money Institution (EMI) and has the FCA’s permission to issue electronic money (e-money) and provide payment services under registration number <a href="https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000003jN1U9AAK">900778</a>.</p><p>We are a self-funded, product-based company, and working on a number of challenging (both code and infrastructure), high-uptime (99.99%) payment products, utilising predominantly the Ruby and Rails stack.</p>',
  },
  {
    image: '/static/images/sponsors/receipt_bank_logo.svg',
    link: 'https://www.receipt-bank.com/',
    title: 'Receipt Bank',
    description: '<p>Receipt Bank is an award-winning accounting software used by 30,000+ small business to make bookkeeping effortless. Our automation saves them hundreds of hours every year - and we’re just getting started!</p><p>We are based around the globe, but our development team is mostly here in Bulgaria. We are a start-up that cares deeply about high quality and sane development practices. We have learned through blood and tears that the best way is almost always through beautiful, easily maintained code.</p<p>We are down to earth, happy Rails users and extremely proud sponsors of Balkan Ruby.</p>',
  },
];

const CTA = {
  title: 'Become a partner',
  description: '<p>If your company is interested in supporting Balkan Ruby, you can learn more about the partner opportunities by following the link below.</p>',
  primaryLink: '/static/files/balkan_ruby_packages.pdf',
  primaryLabel: 'View packages',
  secondaryLink: '#',
  secondaryLabel: '',
};

export default () => (
  <Layout>
    <Helmet>
      <title>Partners | Balkan Ruby</title>
    </Helmet>

    <PageTitle title="Partners" />

    <Text centered text="<p>Balkan Ruby is supported by these awesome companies</p>" />

    <br/>

    <Container theme="blank" spacing="spacing-both">
      <PartnerFeed list={SPONSORS} />
    </Container>

    <Container theme="light-bg" spacing="spacing-both">
      <Cta {...CTA} />
    </Container>
  </Layout>
);
