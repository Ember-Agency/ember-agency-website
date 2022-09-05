import { useState } from "react";
import "../styles/MobileMenu.scss";
import { Navigation } from ".";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    setOpen(false);
  };

  return (
    <div className={`mobile-nav ${open ? "is-open" : ""}`}>
      <button aria-label="mobile navigation" onClick={() => setOpen(!open)}>
        <span className="burger"></span>
        <span className="burger-text">{open ? "Close" : "Menu"}</span>
      </button>
      <Navigation onNavigate={handleNavigate} />
    </div>
  );
};
