import React, { useState } from "react";
import "./styles/App.scss";
import "./styles/index.scss";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Portal from './pages/Portal';
interface ApplicationProps {
  children?: JSX.Element | JSX.Element[];
}

const App: React.FC<ApplicationProps> = (props) => {
  const [page, setPage] = useState("Home");

  return (
    <div className="App">
      <Header />
      <Navigation setPage={setPage} children />
      <Portal page={page} />
    </div>
  );
};

export default App;
