import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import MainNav from '../components/menu/mainnav'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">{siteTitle}</Link>

      <MainNav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
