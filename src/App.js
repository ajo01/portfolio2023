import { useEffect, useRef } from "react";
import "./App.css";
import Globe from "react-globe.gl";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const globeEl = useRef();

  const N_PATHS = 10;
  const MAX_POINTS_PER_LINE = 10000;
  const MAX_STEP_DEG = 1;
  const MAX_STEP_ALT = 0.015;

  const gData = [...Array(N_PATHS).keys()].map(() => {
    let lat = (Math.random() - 0.5) * 90;
    let lng = (Math.random() - 0.5) * 360;
    let alt = 0;

    return [
      [lat, lng, alt],
      ...[...Array(Math.round(Math.random() * MAX_POINTS_PER_LINE)).keys()].map(
        () => {
          lat += (Math.random() * 2 - 1) * MAX_STEP_DEG;
          lng += (Math.random() * 2 - 1) * MAX_STEP_DEG;
          alt += (Math.random() * 2 - 1) * MAX_STEP_ALT;
          alt = Math.max(0, alt);

          return [lat, lng, alt];
        }
      ),
    ];
  });

  useEffect(() => {
    const globe = globeEl.current;

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;
  }, []);

  const N = 5;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
  }));

  const colorScheme = () => ["#006db0", "white"];
  console.log(window.innerHeight * 0.8);

  return (
    <div className="App">
      <div className="home-container">
        <div className="globe-container">
          <Globe
            ref={globeEl}
            height={window.innerHeight * 0.8 || 600}
            width={window.innerWidth || 1300}
            atmosphereAltitude={0.3}
            pathsData={gData}
            pathColor={colorScheme}
            pathDashLength={0.01}
            pathDashGap={0.004}
            pathDashAnimateTime={100000}
            pathPointAlt={0.1}
            pathTransitionDuration={1000}
            arcsData={arcsData}
            arcColor={colorScheme}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 2000}
            arcAltitude={0.6}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          />
        </div>
        <div className="text-container">
          <div className="title">AMY JO</div>
          <div className="subtitle">
            Software Engineer | Web Developer | Data Visualization
          </div>
        </div>
        <div className="nav">
          <div onClick={() => document.getElementById("home").scrollIntoView()}>
            Home
          </div>
          <div
            onClick={() => document.getElementById("about").scrollIntoView()}
          >
            About
          </div>
          <div
            onClick={() => document.getElementById("projects").scrollIntoView()}
          >
            Projects
          </div>
          <div
            onClick={() => document.getElementById("contact").scrollIntoView()}
          >
            Contact
          </div>
        </div>
      </div>
      <div className="component">
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
