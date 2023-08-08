import { useRef, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Nav from "./components/Nav/Nav";
import GlobePage from "./components/Globe/Globe";
import { useDispatch } from "react-redux";
import { setDetachNav } from "./redux/uiSlice";

function App() {
  const scrollableDivRef = useRef(null);
  const dispatch = useDispatch();
  const [tab, setTab] = useState("HOME");

  const handleScroll = async () => {
    if (scrollableDivRef.current) {
      const scrollTop = scrollableDivRef.current.scrollTop;
      await dispatch(setDetachNav(scrollTop >= 0));
    }
  };

  const renderPage = () => {
    if (tab === "HOME") {
      return <GlobePage setTab={setTab} />;
    }
    return (
      <div className="other-page">
        <div className="component">
          <About />
          <Projects />
          <Contact />
        </div>

        <Nav setTab={setTab} />
      </div>
    );
  };

  return (
    <div className="App" ref={scrollableDivRef} onScroll={handleScroll}>
      {renderPage()}
    </div>
  );
}

export default App;
