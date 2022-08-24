import { Waves } from "../animations";
import { discord, telegram } from "../content/SocialLinks";
import "../styles/Contact.scss";

export const Contact = () => {
  return (
    <article id="contact" className="row">
      <div className="content col">
        <h3>Contact</h3>
        <h2>Get in touch</h2>
        <p>
          We are driven by our unmatched customer service and commitment to
          bringing new hope to new and struggling projects in the
          crypto/blockchain space. If there's a project you feel could use the
          "Ember Touch," please recommend it on this form. Alternatively, if you
          have a question or want to say "Hi" that's perfectly fine too... But
          that's more easily done via{" "}
          <a href={telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>{" "}
          &amp;{" "}
          <a href={discord} target="_blank" rel="noreferrer">
            Discord
          </a>
          .
        </p>
        <p>
          You can also email us directly at{" "}
          <a href="mailto:support@emberagency.io">support@emberagency.io</a> and
          we will do our best to respond within 24 hours.
        </p>
      </div>
      <div className="contact-form col">
        {/* Wufoo Form */}
        <a href="/" className="pill">
          Submit &rsaquo;
        </a>
      </div>
      <Waves />
    </article>
  );
};
