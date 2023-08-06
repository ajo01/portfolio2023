import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Nav from "./components/Nav/Nav";
import GlobePage from "./components/Globe/Globe";

function App() {
  const [detachNav, setDetachNav] = useState(false);
  const scrollableDivRef = useRef(null);

  const handleScroll = () => {
    if (scrollableDivRef.current) {
      const scrollTop = scrollableDivRef.current.scrollTop;
      setDetachNav(scrollTop > 100);
    }
  };

  return (
    <div className="App" ref={scrollableDivRef} onScroll={handleScroll}>
      <div id="home"></div>
      <GlobePage />
      <div className="component">
        <About />
        <Projects />
        <Contact />
      </div>
      <Nav detachNav={detachNav} />
    </div>
  );
}

export default App;
