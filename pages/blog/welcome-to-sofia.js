import Helmet from 'react-helmet';

import Layout from '../../layouts/Default';
import Container from '../../documentation/Container';

const blueLineStyle = {
  color: 'blue'
};

const redLineStyle = {
  color: 'red'
};

export default () => (
  <Layout>
    <Helmet>
      <title>Welcome to Sofia | Balkan Ruby</title>
    </Helmet>

    <Container theme="blank" spacing="none">
      <div className="container">
        <div className="article-title">
          <h1>Welcome to Sofia</h1>
          <div className="meta">
            22 May 2018 //{' '}
            <a href="https://twitter.com/SvetlioMihailov" target="_blank">
              Svetlozar
            </a>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="text">
            Balkan Ruby is this Friday and we want to welcome you to late sprong Sofia!
            We're going to talk about the local currency, how to get to the venue and sightseeing in Sofia.
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="text">
            <h2>Currency</h2>

            <p>
              While Bulgaria is in the EU, it has not adopted the Euro. Our currency is
              called Bulgarian Lev and is bound to the Euro around the rate of 1.96 Leva for
              1 Euro. Most of our ATMs support Visa and MasterCard and they can be your
              easier way to get levs. If you have America Express, you may try exchanging
              money in a bank.
            </p>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="text">
            <h2>Public Transport</h2>

            <p>
              Public transport in Sofia is cheap. There are three types of it - buses, trams
              and underground railway (Metro). We recommend using the Metro for your visit
              here, as it should be the easiest way for you to get to and from the venue.
            </p>

            <p>
              The ticket machines at the Metro stations only sell single-ride tickets, at the
              price of 1.6 Leva, or 80 Euro cents. While most of them accept only coins, you
              can use paper money at some of them. Make sure you have banknotes of 2, 5 or 10
              leva, as they do not accept banknotes of 20 and above.

              <br/>
              Also, if you are traveling with bulkier luggage (if the dimensions exceed
              60х40х40 cm), make sure to take another ticket for your luggage.
            </p>

            <p>
              There are only two lines of underground trains in Sofia - Line 1 (<span
              style={redLineStyle}>red</span>), and Line 2 (<span style={blueLineStyle}>blue</span>).
              Line 1 connects the districts of Lyulin and Mladost, while Line 2 connects the Obelya and Lozenets districts.
            </p>

            <p>
              The conference venue, Generator Sofia is on the blue line. If you are coming
              directly from the airport, you should change at Serdika station (<span
              style={redLineStyle}>red</span>) and take the train in the <span>Lozenets</span>
              (<span style={blueLineStyle}>blue</span>) direction. You will need to get off at
              station <a target="_blank" href="https://www.google.com/maps/place/Vitosha+Metro+Station/@42.6594738,23.3142288,17z/data=!3m1!4b1!4m5!3m4!1s0x40aa845c18dd07cd:0x10131a6f5bd24570!8m2!3d42.6594738!4d23.3164175">
                Vitosha
              </a>, that's the closest one to Generator.
            </p>

            <p>
              If your flight arrives late, your only option might be taking a taxi to the
              city center. You may want to avoid taking a taxi from the drivers right at the
              arrival section. On both terminals, there are regulated taxi stops. It might be
              better to use them. Take a look at the prices (usually located on back seat
              window), and make sure that the “TRANSPORT (leva per km)” price is not more
              than 1.00 lv.
            </p>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="text">
            <h2>Sightseeing</h2>

            <p>
              Sofia is an old city, inhabited as early as 7000 BC. For centuries, this has
              been the city of Thracians, Byzantines, Slavs and Bulgars. It has been the
              residence of Roman emperors, an administrative centre under the First Bulgarian
              Kingdom, and a capital of an Ottoman province. You can see a monument of almost
              each historical era inside the city. If you have some spare time you can try <a target="_blank" href="https://freesofiatour.com/"> a free Sofia tour</a>
            </p>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="blank" spacing="spacing-bottom">
      <div className="container">
        <div className="grid">
          <div className="text">
            This is it, folks! Can't way to see you all in Sofia! ❤️
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);
