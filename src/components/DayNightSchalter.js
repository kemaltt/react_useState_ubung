import { useState } from "react";

const DayNightSchalter = () => {
  const [light, setLight] = useState(false);

  return (
    <div>
      <h4>react state lev2_2: day-night-change</h4>
      <div
        style={{
          backgroundColor: light ? "black" : "white",
          color: light ? "white" : "black",
        }}
        className="day_night_container"
      >
        <p> {!light ? "Day" : "Night"}</p>
        <button onClick={() => setLight(!light)}>
          Change to {light ? "Day" : "Night"}
        </button>
      </div>
    </div>
  );
};

export default DayNightSchalter;
