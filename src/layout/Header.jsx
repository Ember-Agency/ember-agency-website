import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo" alt="Ember Agency" />
      </Link>
      <Navigation />
    </header>
  );
};
