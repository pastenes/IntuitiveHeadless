/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import MainNav from '../components/menu/mainnav'
import FooterNav from '../components/menu/footernav'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteMeta {
      allWordpressSiteMetadata {
        edges {
          node {
            description
            home
            name
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.allWordpressSiteMetadata.edges[0].node.name} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100vw`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <MainNav />
        <main>{children}</main>
        <footer>
          <FooterNav />© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
