import * as React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import Event from '../components/event'
import {siteUrl, links, logo, header_banner, event_banner} from './wh_data'

const IndexPage = () => {
  return (
    <main>
      <Header
        siteUrl={siteUrl}
        navData={links}
        logo={logo}
        banner={header_banner}>
      </Header>
      <Event
        background_pic={event_banner}>
      </Event>
      <footer>
        <p><Link to="/locations">Locations and Hours</Link></p>
      </footer>
    </main>
  )
}

export default IndexPage
