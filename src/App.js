import { useRef } from "react";
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

  const handleScroll = async () => {
    if (scrollableDivRef.current) {
      const scrollTop = scrollableDivRef.current.scrollTop;
      await dispatch(setDetachNav(scrollTop >= 0));
    }
  };

  const Home = () => {
    return (
      <div className="App">
        <Hero />
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
