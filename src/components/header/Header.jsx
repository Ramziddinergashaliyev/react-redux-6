import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <header className="header ">
      <nav className="header__nav container">
        <h3 className="header__nav__logo">
          <NavLink to="/">Logo</NavLink>
        </h3>
        <ul className="header__nav__item">
          <li className="header__nav__list">
            <NavLink className={"header__nav__link"} to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="header__nav__list">
            <NavLink className={"header__nav__link"} to={"/wishlist"}>
              Wishlist
            </NavLink>
          </li>
          <li className="header__nav__list">
            <NavLink className={"header__nav__link"} to={"/admin"}>
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
