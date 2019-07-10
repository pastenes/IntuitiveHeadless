import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query mainNav {
        allWordpressWpApiMenusMenusItems(filter: { name: { eq: "Main Nav" } }) {
          edges {
            node {
              items {
                title
                object_slug
                wordpress_id
                url
                order
              }
              name
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="main-nav">
        <ul>
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <li key={item.wordpress_id}>
                <Link to={'/' + item.object_slug}>{item.title}</Link>
              </li>
            )
          )}
        </ul>
      </nav>
    )}
  />
)
