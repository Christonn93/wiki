import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import { PageLayout } from "./layout/PageLayout";
import { useAddRoute } from "@/hooks/routers/useAddRoute";

const App: React.FC = () => {
 const { pages } = useAddRoute();

 return (
  <Router>
   <Routes>
    <Route path="/" element={<PageLayout />}>
     <Route path="/" element={<HomePage />} />
     {pages.map((page, index) => (
      <Route key={index} path={page.path} element={<div>{page.name} Page</div>} />
     ))}
    </Route>
   </Routes>
  </Router>
 );
};

export default App;
