import { useState, useEffect } from "react";
import getData from "./getData";
import Location from "./Location";
import Loading from "./Loading";

export default function Locations({ lat, lng }: { lat: Number; lng: Number }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getData(lat, lng)
      .then((data) => {
        setLocations(data.businesses);
      })
      .catch((err) => console.error(err));
  }, [lat, lng]);

  if (lat !== 0 && lng !== 0) {
    return (
      <div id="locations">
        <ul>
          {locations.map(
            (l: {
              alias: string;
              name: string;
              location: { address1: string };
              distance: Number;
              url: string;
            }) => (
              <li key={l.alias}>
                <Location
                  alias={l.alias}
                  name={l.name}
                  location={l.location}
                  distance={l.distance}
                  url={l.url}
                />
              </li>
            ),
          )}
        </ul>
      </div>
    );
  } else {
    return (
      <div id="locations">
        <Loading />
      </div>
    );
  }
}
