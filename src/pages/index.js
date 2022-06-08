import * as React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import Event from '../components/event'
import wh_logo from '../images/wh_primary_logo.jpg'
import games_logo from '../images/games_logo.jpeg'
import airsoft_wall from '../images/airsoft_wall_cropped.jpg'
import pb_pic from '../images/paintball_event_pic_cropped.jpg'


// data
const siteUrl = "https://www.cooperscavepaintball.com"
const logo = wh_logo
const links = [
  {
    text: "Airsoft",
    url: "/airsoft",
    description:
      "Airsoft information, blah blah blah.",
  },
  {
    text: "Paintball",
    url: "/paintball",
    description:
      "Paintball information, blah blah blah.",
  },
]
{/*
const siteUrl = "https://www.cooperscavegames.com"
const logo = games_logo
const links = [
  {
    text: "Magic: The Gathering",
    url: "/mtg",
    description:
      "MTG singles, collection, accessories: card sleeves, deck boxes.",
  },
  {
    text: "Pokémon and Other TCGs",
    url: "/pokemon-and-tcgs",
    description:
      "Pokémon The Card Game, Flesh and Blood, Yu-Gi-Oh!",
  },
  {
    text: "Warhammer",
    url: "/warhammer",
    description:
      "Miniature wargaming models, codexes, paints, terrain, and assembly tools.",
  },
  {
    text: "Video Games",
    url: "/videogames",
    description:
      "",
  },
  {
    text: "Action Figures & Toys",
    url: "/action-figures-and-toys",
    description:
      ".",
  },
  {
    text: "Tabletop Games",
    url: "/tabletop-games",
    description:
      ".",
  },
  {
    text: "Comic Books & Graphic Novels",
    url: "/comic-books",
    description:
      ".",
  },
  {
    text: "Airsoft & Paintball",
    url: "/paintball-and-airsoft",
    description:
      ".",
  },
]
*/}

// markup
const IndexPage = () => {
  return (
    <main>
      <Header
        siteUrl={siteUrl}
        navData={links}
        logo={logo}
        banner={airsoft_wall}>
      </Header>
      <Event
        background_pic={pb_pic}>
      </Event>
      <footer>
        <p><Link to="/locations">Locations and Hours</Link></p>
      </footer>
    </main>

  )
}

export default IndexPage
