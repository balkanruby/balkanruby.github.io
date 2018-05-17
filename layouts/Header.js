import Helmet from 'react-helmet';
import Container from '../documentation/Container';

export default () => (
  <div className="site-header-wrapper">
    <Container theme="purxle-bg" spacing="none">
      <div className="container">
        <div className="site-header">
          <a href="/" className="logo">
            <img src="/static/assets/balkanruby-logo.svg" alt="" className="logo" />
          </a>

          <nav className="lead-navigation">
            <a href="/schedule">Schedule</a>
            <a href="/speakers">Speakers</a>
            <a href="/sponsors">Partners</a>
            <a href="/blog">Blog</a>
            <a href="/blog/introducing-generator">Venue</a>
          </nav>
        </div>
      </div>
    </Container>
  </div>
);
