import "./App.css";
import About from "./components/About/About";
import GlobePage from "./components/Globe/Globe";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const Home = () => {
    return (
      <div className="App">
        <GlobePage />
      </div>
    );
  };

  const AboutPage = () => (
    <div className="App">
      <About />
      <div className="home-btn">
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
