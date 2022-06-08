import * as React from 'react'
import { Link } from 'gatsby'
import { headerStyle, logoStyle, bannerStyle, navStyle } from '../components/header.module.css'


const Header = ({ siteUrl, navData, logo, banner, children }) => {
  return (
    <div className={headerStyle}>
      <div className={logoStyle}>
        <Link to="/">
          <img src={logo} height="100" width="500" alt="Logo"/>
        </Link>
      </div>
      <nav>
        {navData.map (nav => (
          <div className={navStyle}>
            <Link to={`${siteUrl}${nav.url}`}>{nav.text}</Link>
          </div>
        ))}
      </nav>
      <div className={bannerStyle}>
        <img src={banner} height="200" width="1200" alt="Logo"/>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Header
