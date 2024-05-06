import React from "react";
import "./header.css";
import Navbar from "../naavbar/Navbar";
import { Link } from "react-router-dom";
import MobileNav from "../MobileNav";

function Header() {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          Logo
        </Link>
        {/* for large screens */}
        <Navbar />
        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
