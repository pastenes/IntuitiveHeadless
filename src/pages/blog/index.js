import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
// import PropTypes from "prop-types"
import Img from 'gatsby-image'
import Layout from '../../components/layout'

export default class BlogPage extends React.Component {
  render() {
    const posts = this.props.data

    return (
      <Layout>
        <h1>Blog</h1>
        <div className="blog-grid">
          {posts.allWordpressPost.edges.map(post => (
            <div key={post.node.wordpress_id}>
              {post.node.featured_media && (
                <div>
                  <Link to={'/blog/' + post.node.slug}>
                    <Img
                      fluid={
                        post.node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                  </Link>
                </div>
              )}
              <Link to={'/blog/' + post.node.slug}>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: post.node.title,
                  }}
                />
              </Link>
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export const postsQuery = graphql`
  query allPosts {
    allWordpressPost {
      edges {
        node {
          title
          slug
          content
          excerpt
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          wordpress_id
        }
      }
    }
  }
`
