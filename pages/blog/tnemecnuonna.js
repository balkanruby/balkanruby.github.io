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
          <h1>Introducing Balkan Ruby</h1>
          <div className="meta">
            19 December 2017 //{' '}
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
              Hello, I'm Genadi and those are friends – Vestimir, Svetlio & Svetlio.
            </p>
            <p>
              Together, we have been searching for that perfect object that encapsulates the
              things we love — the Balkans and Ruby. We tried in the yellow pages, but nope.
              Nothing there. We searched this thing called the internet, and holy shit! What
              is this thing filled with? Cats and crypto currencies? Heck, we even tried
              outside, alas to no avail.
            </p>
            <p>
              This quest... it left us a bit empty. So we dug. We dug deep into the
              intelligible realm of them forms and there it was! Right in front of us, it
              stood as this majestic monolith. Oh, and it was beautiful! All those people
              bringing their laughter, and infinite knowledge. Everybody had read the code of
              conduct and was actually nice. Forget twitter and youtube comments. It was
              heaven! All of it was in the Balkans. It looked like Sofia, Bulgaria, but yet,
              it wasn't. We had to take it out of this perfect space. We had to!
            </p>
            <p>
              When we travel, I always try to bring my proton pack. "You never know when
              you'll need one" I say, but the guys — they always complain. "You bring too much
              luggage" they say. But did they wish to have one right now... And of course they
              did! We were in the perfect realm of them forms, after all. They just had to
              imagine it. I always bring too much luggage...
            </p>
            <p>
              Charging them up, the sound reminded me of an old rusty hard-drive defragging a
              10G FAT32 partition. Even here, the proton packs looked like they came out of
              an 80's classic movie. After a round of belot, a few curses and almost a fight
              later, the guns charged. We decided to cross streams. It was the only way. We
              had to!
            </p>
            <p>
              There we were, crossing streams of radially polarized protons, holding on to our
              existence. The side effects could have been severe, but we managed to get away
              without any mutations. And boy, oh boy — did all this hard work payed off! Here,
              we have it in the plain old boring object space. Immutable, like the perfect
              string!
            </p>
            <p>
              Ladies and gentlemen, let me present Balkan Ruby to you. A brand new Ruby
              conference to be held on 25th and 26th of May, 2018, in Sofia, Bulgaria. We
              want to share this meta moment with all of you! We have a call for papyrus open
              and we welcome every little crazy idea you have. Don't be shy!
            </p>
            <p>
              If it's Ruby...<br/>
              Or close by.<br/>
              Submit a CFP.<br/>
              There is no try!
            </p>
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
