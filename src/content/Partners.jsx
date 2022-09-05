import { HashScroll } from "react-hash-scroll";
import { FloatingEmbers } from "../animations";
import logoBeast from "../assets/logo-beast.svg";
import logoBlockSyndicate from "../assets/logo-block-syndicate.svg";
import logoBdCapital from "../assets/logo-bd-capital.svg";
import logoInterFi from "../assets/logo-interfi.svg";
import logoBlockStar from "../assets/logo-blockstar.svg";
import "../styles/Partners.scss";

export const Partners = () => {
  return (
    <HashScroll hash="partners">
      <article id="partners">
        <div className="content row">
          <div className="partner-content col">
            <h3>Partners</h3>
            <h2>In this space, it takes a village</h2>
            <p>
              We're proud to call these guys "partners." They all play a major
              role in our growing ecosystem.
            </p>
          </div>
          <div className="partner-logos col">
            <a
              href="https://beast-protocol.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoBeast} alt="Beast" />
            </a>
            <a
              href="https://blocksyndicate.co/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoBlockSyndicate} alt="Block Syndicate" />
            </a>
            <a
              href="https://www.bd-capital.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoBdCapital} alt="BD Capital" />
            </a>
            <a href="https://blockstar.site/" target="_blank" rel="noreferrer">
              <img src={logoBlockStar} alt="BlockStar" />
            </a>
            <a
              href="https://www.interfi.network/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoInterFi} alt="InterFi" />
            </a>
          </div>
        </div>
        <FloatingEmbers />
      </article>
    </HashScroll>
  );
};
