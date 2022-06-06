import * as React from 'react'
import Location from '../components/location.js'


// data
const locs = [
  {
    name: "Cooper's Cave Airsoft & Paintball Warehouse",
    address_line_1: "1330 Saratoga Rd",
    city_state_zip: "Gansevoort, NY 12831",
    url: "https://www.cooperscavepaintball.com",
    hours: "Tuesday - Sunday: 11am - 7pm",
  },
  {
    name: "Cooper's Cave Games",
    address_line_1: "1607 Route 9",
    city_state_zip: "Fort Edward, NY 12828",
    url: "https://www.cooperscavegames.com",
    hours: "Monday - Sunday: 10am - 7pm",
  },
]

//markup
const LocationsPage = () => {
  return (
    <main>
      <title>Locations and Hours</title>
      <h1>Locations and Hours</h1>
      <div>
        {locs.map(loc =>
          <Location
            name={loc.name}
            address_line_1={loc.address_line_1}
            city_state_zip={loc.city_state_zip}
            url={loc.url}
            hours={loc.hours} />
        )}
      </div>
    </main>
  )
}

export default LocationsPage
