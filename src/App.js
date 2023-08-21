import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Nav from "./components/Nav/Nav";
import { useDispatch } from "react-redux";
import { setDetachNav } from "./redux/uiSlice";
import { Route, Routes } from "react-router-dom";
import Aurora from "./components/Aurora/Aurora";
import Hero from "./components/Hero/Hero";

function App() {
  const scrollableDivRef = useRef(null);
  const dispatch = useDispatch();
  const navRef = useRef(null);
  const [initialNavPos, setInitialNavPos] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setInitialNavPos(navRef.current.offsetTop);
    }
  }, []);

  const handleScroll = async () => {
    if (scrollableDivRef.current) {
      const scrollTop = scrollableDivRef.current.scrollTop;
      await dispatch(setDetachNav(scrollTop >= initialNavPos));
    }
  };

  const Home = () => {
    return (
      <div className="App">
        <Hero />
        <div className="component">
          <About />
          <Projects />
          <Contact />
        </div>
        <Nav navRef={navRef} />
      </div>
    );
  };

  const AboutPage = () => (
    <div className="App" ref={scrollableDivRef} onScroll={handleScroll}>
      <div className="other-page">
        <div className="component">
          <About />
          <Projects />
          <Contact />
          <Aurora />
        </div>
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
