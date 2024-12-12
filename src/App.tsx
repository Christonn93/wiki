import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import { PageLayout } from "./layout/PageLayout";

const App: React.FC = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<PageLayout />}>
     <Route path="/" element={<HomePage />} />
    </Route>
   </Routes>
  </Router>
 );
};

export default App;
