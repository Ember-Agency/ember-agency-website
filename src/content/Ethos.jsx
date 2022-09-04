import { HashScroll } from "react-hash-scroll";
import { Link } from "react-router-dom";
import "../styles/Ethos.scss";

export const Ethos = () => {
  return (
    <HashScroll hash="ethos">
      <article id="ethos" className="row">
        <div className="content col">
          <h3>Ethos</h3>
          <h2>We are the pioneers of change.</h2>
          <p>
            Ember stands to build and help{" "}
            <strong>
              empower promising projects in the web, blockchain and
              cryptocurrency spaces
            </strong>{" "}
            through digital leadership and immersive experience design. We
            believe in the power of emboldened leadership and its necessity in
            the blockchain space. Ember agency is a driving force of
            technological advancement through advisory, branding, code, and
            design.
          </p>
          <p>
            Our commitment to building{" "}
            <strong>
              trusting partnerships, products, and projects is the fire that
              burns within us
            </strong>
            . Our philosophies stretch far beyond the realm of service and
            consulting as we are driven by a greater purpose of truth and
            triumph. The Ember Token is coming and we are bringing it to the
            world on the backbone of refuge that will bring recovery to good
            people, and good projects. In the continually evolving blockchain
            ecosystem filled with bad actors, dark alleys, and smoldering fires,
            we are the hope. We are the constant.{" "}
            <strong>We are the Ember</strong>.
          </p>
          <Link to="#contact" className="pill">
            Submit a Project &rsaquo;
          </Link>
        </div>
      </article>
    </HashScroll>
  );
};
