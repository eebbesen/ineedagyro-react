import { useState, useEffect } from 'react'
import getData from './getData'
import Location from './Location'

export default function Locations() {
  const [ locations, setLocations ] = useState([])

  useEffect(() => {
    getData()
      .then(data => {
        setLocations(data.businesses)
        console.log('data set', data.businesses)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div id="locations">
      <ul>
        {locations.map((l: { alias: string, name: string, location: { address1: string }, distance: number, url: string }) => (
        <li>
          <Location key={l.alias} alias={l.alias} name={l.name} location={l.location} distance={l.distance} url={l.url} />
        </li>
        ))}
      </ul>
    </div>
  )
}
