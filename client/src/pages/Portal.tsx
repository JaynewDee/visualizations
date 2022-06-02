import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Covid from "./Covid";
import Climate from "./Climate";

interface PortalProps {
  page: string;
}

const Portal: React.FC<PortalProps> = ({ page }) => {
  
  return (
    <article className="layout-container">
      <h2 style={{ color: "white" }} className="page-title">
        {page}
      </h2>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="covid-19" element={<Covid />}></Route>
        <Route path="climate" element={<Climate />}></Route>
      </Routes>
    </article>
  );
};

export default Portal;
