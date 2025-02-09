import React from "react";
import Logo from "../logo/logo";
import { ModeToggle } from "../dark-mode/dark-mode";
import NavBar from "../nav-bar/nav-bar";

const Header = () => {
  return (
    <header className="py-3">
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />

          <NavBar />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
