import * as React from 'react'
import { Link } from 'gatsby'
import { locationStyle } from '../components/location.module.css'


const Location = (props) => {
  return (
    <div className={locationStyle}>
      <title>{props.name}</title>
      <p>{props.address_line_1}</p>
      <p>{props.city_state_zip}</p>
      <p>{props.hours}</p>
      <p><Link to={props.url}>{props.url}</Link></p>
      <p>{props.phone}</p>
    </div>
  )
}

export default Location
