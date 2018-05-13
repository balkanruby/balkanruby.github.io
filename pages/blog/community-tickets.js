import Helmet from 'react-helmet';

import Layout from '../../layouts/Default';
import Container from '../../documentation/Container';
import Text from '../..//patterns/Text';
import Heading from '../../patterns/Heading';

export default () => (
  <Layout>
    <Helmet>
      <title>Community Tickets | Balkan Ruby</title>
    </Helmet>

    <Container theme="blank" spacing="none">
      <div className="container">
        <div className="article-title">
          <h1>Community Tickets</h1>
          <div className="meta">
            14 May 2018 //{' '} <a href="https://twitter.com/gsamokovarov" target="_blank">Genadi</a>
          </div>
        </div>
      </div>
    </Container>

    <Text>
			<p>
				We may be sold out, but we have saved a few tickets to give away for free!
			</p>
    </Text>

    <Heading name="🤔" />

    <Text>
			<p>
				Are you a student, or a beginner who feels uncertain whether they are ready to
				attend a conference? Are you underrepresented in tech? Are you passionate
				about Ruby?
			</p>

			<p>
				If so, you can attend the conference for free! Click the button below
				to apply and we get will back to you with our answer soon.
			</p>

			<p>
				<em>(All of your applications will be available only to us, the conference
				organizers, no won't be given away to third-parties.)</em>
			</p>

			<p>
        <a href="https://goo.gl/forms/Hv55Eo0nAQpyOZot1" class="btn-primary lg">Apply for a free ticket</a>
			</p>

			<br/>
    </Text>
  </Layout>
);
