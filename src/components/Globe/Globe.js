import React from "react";
import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import styles from "./Globe.module.css";

const GlobePage = ({ setTab }) => {
  const colorScheme = () => ["#006db0", "white"];
  const canvasHeight = window.innerHeight * 0.8;
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

  const N = 5;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
  }));

  useEffect(() => {
    const globe = globeEl.current;

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;
  }, []);

  const Msg = () => (
    <div className={styles.msg}>
      Try rotating the globe or zooming in and out by dragging/zooming with the
      mouse
    </div>
  );

  return (
    <div className="home-container">
      <div className="globe-container">
        <Globe
          ref={globeEl}
          height={canvasHeight || 600}
          width={window.innerWidth || 1800}
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
        <div className="sub">
          Software Engineer | Web Developer | Data Visualization
        </div>
        <button className={styles.glowingBtn} onClick={() => setTab("about")}>
          <span className={styles.glowingTxt}>START</span>
        </button>
      </div>
      <Msg />
    </div>
  );
};

export default GlobePage;
