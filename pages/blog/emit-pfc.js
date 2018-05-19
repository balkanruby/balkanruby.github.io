import Helmet from 'react-helmet';

import Layout from '../../layouts/Darkside';
import Container from '../../documentation/Container';

export default () => (
  <Layout>
    <Helmet>
      <title>Introducing Balkan Ruby | Balkan Ruby</title>
    </Helmet>

    <Container theme="yellow-bg" spacing="none">
      <div className="container">
        <div className="article-title">
          <h1>CFP Time</h1>
          <div className="meta">
            8 January 2018 //{' '}
            <a href="https://twitter.com/gsamokovarov" target="_blank">
              Genadi
            </a>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="yellow-bg" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="text">
            <p>
              Have you ever <em>really</em> wished for something, only for it to become true? We
              were supposed to chase this McGuffin of ours for eternity and now, Balkan Ruby
              is out of the intelligible realm of them forms.
            </p>

            <p>&ldquo;Abe Momcheta&hellip;&rdquo; Vesti said &ldquo;How does ownership work across dimensions?&rdquo;</p>

            <p>
              Damn Vesti always having a point. We never though of the legality of it all,
              but I guess we are multidimensional pirates now. Being the balkaninas we are, there
              was blame to be shared. So we opened the internet and wrote:
            </p>

            <blockquote>
              <p>Apply to our Call for Papers and if selected:</p>

              <ul>
                <li>Fly by plane!</li>
                <li>Sleep free in a Slavic Hotel!</li>
                <li>The Balkans are sooo fancy, everybody be jealous! (Gain the respect and
                  adulation of your peers!)</li>
              </ul>

              <p>
                Where do you sign up? <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2">Here</a>. But beware, there be <a href="https://en.wikipedia.org/wiki/Slavic_dragon">lamyas</a>! To overcome the lamya you have to be:
              </p>

              <ul>
                <li>Awesome, Passionate!</li>
                <li>Like Ruby!</li>
                <li>Know about it too!</li>
                <li>Okay not only Ruby, Ruby-like works too!</li>
                <li>We have this thing for weird&hellip;</li>
                <li>Sign up until 14th of February.</li>
              </ul>

              <p>Cheers!</p>
            </blockquote>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="yellow-bg" spacing="none">
      <div className="lead-image height-min">
        <div className="grid">
          <div className="content-container align-center">
            <div className="container">
              <div className="btn-wrapper">
                <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2" className="btn-primary lg" >
                  Submit a talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);
