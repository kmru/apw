import * as React from 'react'
import { Link } from 'gatsby'
import { eventStyle } from '../components/event.module.css'


const Event = ({ background_pic }) => {
  return (
    <div className={eventStyle}>
{/*
      <Link to="/">
        <img src={background_pic} height="200" width="1200" alt="pb_pic"/>
      </Link>
*/}
      <main>
        <img src={background_pic} height="600" width="1200" alt="pb_pic"/>
      </main>
    </div>
  )
}

export default Event
