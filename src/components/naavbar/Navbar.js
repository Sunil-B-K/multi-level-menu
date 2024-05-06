import React from "react";
import "./Navbar.css";
import { menuItemsData } from "./../menuItemsData";
import MenuItems from "../menu/MenuItems";

function Navbar() {
  const depthLevel = 0;
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
// <li className="menu-items" key={index}>
//   <a href={menu.url}>{menu.title}</a>
// </li>
