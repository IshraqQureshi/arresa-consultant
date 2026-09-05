import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content.js";
import { MenuIcon, CloseIcon } from "./Icons.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Arresa Consultant home">
          <img src="/img/logo.png" alt="Arresa Consultant" width="109" height="44" />
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="#get-started" className="btn btn-primary btn-sm">
            Get Started
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
        <nav className="mobile-menu-inner" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link-mobile" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#get-started" className="btn btn-primary btn-block" onClick={closeMenu}>
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
