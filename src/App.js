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
import Aurora from "./components/Aurora/Aurora";

function App() {
  const scrollableDivRef = useRef(null);
  const dispatch = useDispatch();

  const handleScroll = async () => {
    if (scrollableDivRef.current) {
      const scrollTop = scrollableDivRef.current.scrollTop;
      await dispatch(setDetachNav(scrollTop >= 0));
    }
  };

  const Home = () => {
    return (
      <div className="App">
        <GlobePage />
      </div>
    );
  };

  const AboutPage = () => (
    <div className="App" ref={scrollableDivRef} onScroll={handleScroll}>
      <div className="other-page">
        <div className="component">
          <About />
          <Aurora />
          <Projects />
          <Contact />
        </div>

        <Nav />
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
