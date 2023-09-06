import { useRef } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Nav from "./components/Nav/Nav";
import GlobePage from "./components/Globe/Globe";
import { useDispatch } from "react-redux";
import { setDetachNav } from "./redux/uiSlice";
import { Route, Routes } from "react-router-dom";

function App() {
  const Home = () => {
    return (
      <div className="App">
        <GlobePage />
      </div>
    );
  };

  const AboutPage = () => <About />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
