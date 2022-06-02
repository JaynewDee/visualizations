import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Navigation: React.FC<NavProps> = ({ setPage }) => {
  const [visibility, setVisibility] = useState("section-hide");
  const [btnState, setBtn] = useState("inactive");

  
  const handleExpansion = (): void => {
    if (visibility === "section-hide") {
      setVisibility("section-show");
      setBtn("active");
    } else {
      setVisibility("section-hide");
      setBtn("inactive");
    }
  };

  const handleNavSelection = (e: any): void => {
    let selected = e.target.innerText;
    setPage(selected);
  };

  return (
    <nav className="nav-box">
      <button
        value={btnState}
        onClick={() => {
          handleExpansion();
        }}
        className="expansion-btn"
      >
        NAVIGATE
      </button>
      <section
        onClick={(e) => {
          handleNavSelection(e);
        }}
        className={visibility}
      >
        <Link to="/">Home</Link>
        <Link to="/covid-19">Covid-19</Link>
        <Link to="/climate">Climate</Link>
      </section>
    </nav>
  );
};

export default Navigation;
