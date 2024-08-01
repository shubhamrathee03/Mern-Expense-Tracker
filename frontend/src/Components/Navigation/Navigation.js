import React from "react";
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/menuItems";
import "./navigation.css";

function Navigation({ active, setActive }) {
  return (
    <nav className="nav">
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Tushar</h2>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
