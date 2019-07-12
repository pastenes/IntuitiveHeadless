import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query footerNav {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Footer Nav" } }
        ) {
          edges {
            node {
              items {
                object_slug
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="footer-nav">
        <ul>
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <li key={item.object_slug}>
                <Link to={'/' + item.object_slug}>{item.title}</Link>
              </li>
            )
          )}
        </ul>
      </nav>
    )}
  />
)
