import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="elements">Construct</Link>
        </li>
        <li>
          <Link to="capabilities">Capabilities</Link>
        </li>
        <li>
          <Link to="ethos">Ethos</Link>
        </li>
        <li>
          <Link to="partners">Partners</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <a href="https://embertoken.io" rel="noreferrer" target="_blank">
            The Ember Token
          </a>
        </li>
      </ul>
    </nav>
  );
};
