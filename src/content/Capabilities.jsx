import { HashScroll } from "react-hash-scroll";
import image from "../assets/no-glow-ember.svg";
import "../styles/Capabilities.scss";

export const Capabilities = () => {
  return (
    <HashScroll hash="capabilities">
      <article id="capabilities" className="row">
        <div className="col red-gradient">
          <img src={image} alt="" />
        </div>
        <div className="silver-slant">&nbsp;</div>
        <div className="content col">
          <h3>capabilities</h3>
          <h2>
            A+B+C+D = <span className="red-orange">Ember</span>
          </h2>
          <div className="blocks">
            <div className="block">
              <h4>Advisory</h4>
              <ul>
                <li>Digital Consulting</li>
                <li>Tokenomic Strategies</li>
                <li>Staking + Yield Farming</li>
                <li>DeFi Mechanisms</li>
                <li>Blockchain Consulting</li>
              </ul>
            </div>
            <div className="block">
              <h4>Branding</h4>
              <ul>
                <li>Brand Assessments</li>
                <li>Business + Product Naming</li>
                <li>Identity Development</li>
                <li>Brand Voice + Personality</li>
                <li>Communication + Style Guides</li>
              </ul>
            </div>
          </div>
          <img className="small-ember" src={image} alt="Ember" />
          <div className="blocks">
            <div className="block">
              <h4>Code</h4>
              <ul>
                <li>Web Development</li>
                <li>Software Engineering</li>
                <li>Smart Contract Development</li>
                <li>Custom Applications</li>
                <li>Blockchain Integrations</li>
              </ul>
            </div>
            <div className="block">
              <h4>Design</h4>
              <ul>
                <li>UX + UI Design</li>
                <li>Graphic + Web Design</li>
                <li>NFT Collections</li>
                <li>Illustration</li>
                <li>Social Strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </HashScroll>
  );
};
