import "./sidebar.style.css";
import React from "react";
import { Link } from "react-router-dom";
import { SidebarProps } from "./sidebar.types";

export const Sidebar: React.FC<SidebarProps> = ({ pages }) => {
 return (
  <div className="box is-fullheight is-shadowless has-verticalline">
   <aside className="menu">
    <p className="menu-label">Main navigation</p>
    <nav className="menu">
     <ul className="menu-list">
      {pages.map((page, index) => (
       <li key={index}>
        <Link to={page.path}>{page.name}</Link>
       </li>
      ))}
     </ul>
    </nav>
   </aside>
  </div>
 );
};
