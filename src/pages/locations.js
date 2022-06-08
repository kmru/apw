import * as React from 'react'
import Location from '../components/location.js'
import { Link } from 'gatsby'
import {title} from '../components/location.module.css'


// data
const pageTitle = "Locations & Hours"
const locs = [
  {
    name: "Cooper's Cave Airsoft & Paintball Warehouse",
    address_line_1: "1330 Saratoga Rd",
    city_state_zip: "Gansevoort, NY 12831",
    hours: ["Tuesday - Saturday: 11am - 7pm", "Sunday: 11am - 5pm"],
    url: "https://www.cooperscavepaintball.com",
    phone: "(518) 409-4547",
  },
  {
    name: "Cooper's Cave Games",
    address_line_1: "1607 Route 9",
    city_state_zip: "Fort Edward, NY 12828",
    hours: [
      "Monday: 10am - 9pm",
      "Tuesday - Thursday: 10am - 7pm",
      "Friday: 10am - 9pm",
      "Saturday & Sunday: 10am - 7pm"],
    url: "https://www.cooperscavegames.com",
    phone: "(518) 745-4263",
  },
]

//markup
const LocationsPage = () => {
  return (
    <main className={title}>
      <Link to="/">Home</Link>
      <title>{pageTitle}</title>
      <h1>{pageTitle}</h1>
      <div>
        {locs.map(loc =>
          <Location
            name={loc.name}
            address_line_1={loc.address_line_1}
            city_state_zip={loc.city_state_zip}
            hours={loc.hours}
            url={loc.url}
            phone={loc.phone} />
        )}
      </div>
    </main>
  )
}

export default LocationsPage
