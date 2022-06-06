import * as React from 'react'
import { Link } from 'gatsby'

const Location = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.address_line_1}</p>
      <p>{props.city_state_zip}</p>
      <p>{props.hours}</p>
      <p><Link to={props.url}>{props.url}</Link></p>
      <p>{props.phone}</p>
    </div>
  )
}

export default Location
