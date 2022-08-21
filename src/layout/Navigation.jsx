import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Construct</Link>
        </li>
        <li>
          <Link to="/">Capabilities</Link>
        </li>
        <li>
          <Link to="/">Ethos</Link>
        </li>
        <li>
          <Link to="/">Partners</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
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
