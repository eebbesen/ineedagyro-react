import { useState } from "react";
import "./App.css";
import Locations from "./Locations";

function getLocation(setLat: Function, setLng: Function): void {
  navigator.geolocation.getCurrentPosition((p) => {
    setLat(p.coords.latitude);
    setLng(p.coords.longitude);
  });
}

export default function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  getLocation(setLat, setLng);

  return (
    <div className="App">
      <header className="App-header">
        <Locations lat={lat} lng={lng} />
      </header>
    </div>
  );
}
