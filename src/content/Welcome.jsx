import { Link } from "react-router-dom";
import { SocialIcons } from "../content/SocialLinks";
import { Waves } from "../animations";
import "../styles/Welcome.scss";

export const Welcome = () => {
  return (
    <article id="welcome" className="row">
      <div className="content col">
        <h3>Introducing Ember</h3>
        <h1 className="typewriter">We build better brands on the Blockchain</h1>
        <p>
          We are Ember. A hybrid, blockchain experience agency crafting brands,
          websites, marketing strategies, products, and pretty much anything you
          can imagine in the "cryptosphere." Our mission is to build better
          brands and position them for growth with a focus on security,
          transparency, advisory and governance.
        </p>
        <div>
          <Link to="#contact" className="pill">
            Let's Work Together &rsaquo;
          </Link>
          <a href="https://embertoken.io" rel="noreferrer" target="_blank">
            Check out our token &rsaquo;
          </a>
        </div>
        <SocialIcons />
      </div>
      <Waves />
    </article>
  );
};
