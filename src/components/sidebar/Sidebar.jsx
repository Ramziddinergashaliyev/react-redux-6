import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import img1 from "../../assets/icons/Logo.svg";
import img2 from "../../assets/icons/img-1.svg";
import img3 from "../../assets/icons/img-2.svg";
import img7 from "../../assets/icons/Vector.svg";
import out from "../../assets/icons/out.svg";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar__top">
        <img src={img1} alt="" />
        <h1>Dashboard</h1>
      </div>
      <ul className="sidebar__item">
        <li className="sidebar__list">
          <NavLink to={"create"} className={"sidebar__left__text"}>
            <img src={img2} alt="" />
            create products
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink to={"manage"} className={"sidebar__left__text"}>
            <img src={img3} alt="" />
            manage products
          </NavLink>
        </li>
        <div className="sidebar__btns">
          <div className="sidebar__btns__title">
            <img src={img7} alt="" />
            <p>Change mode</p>
          </div>
          <NavLink to={"/"} className="sidebar__btns__title">
            <img src={out} alt="" />
            <p>Login out</p>
          </NavLink>
        </div>
      </ul>
    </section>
  );
}

export default Sidebar;
