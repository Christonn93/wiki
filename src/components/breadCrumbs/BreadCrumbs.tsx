import { useLocation, Link } from "react-router-dom";

export const BreadCrumbs: React.FC = () => {
 const location = useLocation();
 const pathSegments = location.pathname.split("/").filter(Boolean);

 return (
  <nav className="breadcrumb" aria-label="breadcrumbs">
   <ul>
    <li>
     <Link to="/">
      <span className="icon">
       <i className="fas fa-home"></i>
      </span>
      Home
     </Link>
    </li>
    {pathSegments.map((segment, index) => {
     const to = `/${pathSegments.slice(0, index + 1).join("/")}`;
     return (
      <li key={index}>
       {index === pathSegments.length - 1 ? (
        <span>{segment}</span>
       ) : (
        <Link to={to}>
         <span className="icon">
          <i className="fas fa-folder"></i>
         </span>
         {segment}
        </Link>
       )}
      </li>
     );
    })}
   </ul>
  </nav>
 );
};
