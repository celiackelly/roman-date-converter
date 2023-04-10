import { React, useState } from "react";
import MobileMenuToggleButton from "./MobileMenuToggleButton";
import Link from "./Link";
import Logo from "../assets/images/Janus.svg";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  function handleToggleMobile() {
    setIsNavExpanded(!isNavExpanded);
  }

  return (
    <>
      <div className="spacer"></div>
      <header>
        <div>
          <img id="logo" src={Logo}></img>
          <MobileMenuToggleButton
            className="button-mobile-menu-toggle"
            handleToggleMobile={handleToggleMobile}
          />
        </div>
        <nav className={isNavExpanded ? "navbar expanded" : "navbar"}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="spacer"></div>
    </>
  );
}
