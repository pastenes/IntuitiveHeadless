import React, { Component } from 'react'
// import PropTypes from "prop-types"
import Img from 'gatsby-image'
import Layout from '../components/layout'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const featured =
      post.featured_media && post.featured_media.localFile.childImageSharp.fluid

    return (
      <Layout>
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          {featured && (
            <div>
              <Img fluid={featured} />
            </div>
          )}

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
