import { Link } from "react-router-dom";
import { HashScroll } from "react-hash-scroll";
import emberText from "../assets/ember-text.svg";
import elements from "../assets/elements.svg";
import "../styles/Elements.scss";

export const Elements = () => {
  return (
    <HashScroll hash="elements">
      <article id="elements" className="row">
        <img className="ember-text" src={emberText} alt="Ember" />
        <div className="content col">
          <h3>Construct</h3>
          <h2>The 3 elements of fire</h2>
          <p>
            <strong>Ember is "agency first; product second."</strong> This means
            that the core of our business isn't built on a product that will
            fluctuate based on global social, economic, or market conditions.
            Those elements have very little influence on our core business
            foundation and that's what promotes an infinite lifecycle for Ember.
            Our Construct is driven by a cyclical triad of advisory, consulting,
            and product.
          </p>
          <p>
            The <span className="blue">Advisory</span> is the oxygen we breathe
            into every project.
            <br />
            The <span className="red">Consulting</span> is the heat we bring
            into the blockchain space.
            <br />
            The <span className="orange">Token</span> is our fuel that builds
            our momentum.
          </p>
          <p>
            These three combined "elements of fire" are what breathes life,
            energy, and traction into our company, team, product, and, most
            importantly, community. In the end, we aren't the Ember...
            <strong>you are</strong>.
          </p>
          <Link to="#contact" className="pill">
            Let's Work Together &rsaquo;
          </Link>
        </div>
        <div className="col">
          <img
            className="elements"
            src={elements}
            alt="Advisory, Token, Consulting"
          />
        </div>
      </article>
    </HashScroll>
  );
};
