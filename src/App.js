import "./App.css";
import About from "./components/About/About";
import GlobePage from "./components/Globe/Globe";
import { Route, Routes } from "react-router-dom";

function App() {
  const Home = () => {
    return (
      <div className="App">
        <GlobePage />
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
