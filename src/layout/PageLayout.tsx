import "./PageLayout.css";
import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { BreadCrumbs } from "@/components/breadCrumbs/BreadCrumbs";
import { PageFooter } from "@/components/footer/PageFooter";
import { useAddRoute } from "@/hooks/routers/useAddRoute";
import { PageHeader } from "@/components/header/PageHeader";

export const PageLayout: React.FC = () => {
 const { pages } = useAddRoute();

 return (
  <div className="columns is-fullheight">
   <div className="column is-2 is-fullheight">
    <Sidebar pages={pages} />
   </div>

   <div className="column is-flex is-flex-direction-column is-fullheight">
    <div className="is-flex is-flex-direction-column is-fullheight">
     <div>
      <PageHeader />
     </div>
     <div className="container mt-2">
      <BreadCrumbs />
     </div>

     <div className="container is-flex-grow-1">
      <Outlet />
     </div>

     <div className="">
      <PageFooter />
     </div>
    </div>
   </div>
  </div>
 );
};
