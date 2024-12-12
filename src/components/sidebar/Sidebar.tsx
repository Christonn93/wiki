import { Link } from "react-router-dom";

export const Sidebar = () => {
 return (
  <div className="box">
   <aside className="menu">
    <p className="menu-label"></p>
    <nav className="menu">
     <ul className="menu-list">
      <p className="menu-label">Main navigation</p>
      <li>
       <Link to="/">Home</Link>
      </li>
     </ul>
    </nav>
   </aside>
  </div>
 );
};
