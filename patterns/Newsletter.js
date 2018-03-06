import Container from '../documentation/Container';

const Newsletter = () => (
  <Container theme="purple-bg" spacing="none">
    <div className="newsletter" dangerouslySetInnerHTML={{ __html: `
      <form
        action="//balkanruby.us16.list-manage.com/subscribe/post?u=690a4f9d71c3a29f39792b453&amp;id=d13d0bd575"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        noValidate=""
      >
        <div class="form-group">
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="you@awesome.conf" />
        </div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_690a4f9d71c3a29f39792b453_d13d0bd575" tabIndex="-1" value="" />
        </div>
        <button type="submit" value="Subscribe" name="subscribe" class="btn-primary">
          Subscribe
        </button>
      </form>
    ` }} />
  </Container>
);

export default Newsletter;
