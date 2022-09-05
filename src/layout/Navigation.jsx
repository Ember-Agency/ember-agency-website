import { Link } from "react-router-dom";

export const Navigation = ({ onNavigate }) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="#elements" onClick={handleClick}>
            Construct
          </Link>
        </li>
        <li>
          <Link to="#capabilities" onClick={handleClick}>
            Capabilities
          </Link>
        </li>
        <li>
          <Link to="#ethos" onClick={handleClick}>
            Ethos
          </Link>
        </li>
        <li>
          <Link to="#partners" onClick={handleClick}>
            Partners
          </Link>
        </li>
        <li>
          <Link to="#contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
        <li>
          <a href="https://embertoken.io" rel="noreferrer" target="_blank">
            Token
          </a>
        </li>
      </ul>
    </nav>
  );
};
