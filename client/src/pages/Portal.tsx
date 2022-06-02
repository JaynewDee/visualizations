import React from "react";
import Home from "./Home";
import Covid from "./Covid";
import Climate from "./Climate";
import { Routes, Route } from "react-router-dom";

interface PortalProps {
  page: string;
}

const Portal: React.FC<PortalProps> = ({ page }) => {
  return (
    <section className="layout-container">
      <article className="scroll-and-sort">
        <h2 style={{ color: "white" }} className="page-title">
          {page}
        </h2>
        <section className="scrollable">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="covid-19" element={<Covid />}></Route>
            <Route path="climate" element={<Climate />}></Route>
          </Routes>
        </section>
      </article>
    </section>
  );
};

export default Portal;