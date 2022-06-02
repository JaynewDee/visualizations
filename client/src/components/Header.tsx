import React from "react";

interface HeaderProps {
  setHeader?: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setHeader }) => {
  return (
    <header className="header-box">
      <div className="title-box">
        <p className="the">- the -</p>
        <p className="Current">Current</p>
        <p className="subtitle">Interactive Data Visualizations</p>
      </div>
    </header>
  );
};

export default Header;
