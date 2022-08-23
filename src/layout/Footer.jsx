import { Navigation } from "./Navigation";
import { SocialIcons } from "../content/SocialLinks";
import logo from "../assets/logo-vertical.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="top-section">
        <h1 className="typewriter">Come hang with us</h1>
        <SocialIcons />
      </div>
      <img src={logo} className="logo" alt="Ember Agency" />
      <Navigation />
      <p>&copy; 2022 Ember Agency, LLC. All Rights Reserved.</p>
    </footer>
  );
};
