import { React, useState } from "react";
import MobileMenuToggleButton from "./MobileMenuToggleButton";
import Link from "./Link";
import Logo from "../assets/images/Janus.svg";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleToggleMobile() {
    setShowMobileMenu(!showMobileMenu);
  }

  const navLinks = (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );

  return (
    <header>
      <nav>
        <img id="logo" src={Logo}></img>
        {showMobileMenu ? navLinks : null}
        <MobileMenuToggleButton
          className="button-mobile-menu-toggle"
          handleToggleMobile={handleToggleMobile}
        />
      </nav>
    </header>
  );
}
