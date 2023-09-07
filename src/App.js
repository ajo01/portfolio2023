import "./App.css";
import About from "./components/About/About";
import GlobePage from "./components/Globe/Globe";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import React from "react";

function App() {
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
      <Nav />
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
