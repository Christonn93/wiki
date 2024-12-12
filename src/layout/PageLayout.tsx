import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { BreadCrumbs } from "@/components/breadCrumbs/BreadCrumbs";

export const PageLayout: React.FC = () => {
 return (
  <div className="columns is-fullheight">
   <div className="column is-2 is-hidden-mobile">
    <Sidebar />
   </div>
   <div className="column">
    <BreadCrumbs />
    <div className="container">
     <Outlet />
    </div>
   </div>
  </div>
 );
};
