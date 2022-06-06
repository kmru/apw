import * as React from 'react'

const Location = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.address_line_1}</p>
      <p>{props.city_state_zip}</p>
      <p>{props.hours}</p>
      <p>{props.url}</p>
      <p>{props.phone}</p>
    </div>
  )
}

export default Location
