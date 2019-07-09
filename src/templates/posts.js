import React, { Component } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import Img from "gatsby-image"
import Layout from "../components/layout"

class PostsTemplate extends Component {
  render() {
    const posts = this.props.data

    console.log(posts)

    return (
      <Layout>
        <div>
          <h1>Blog</h1>

          {posts.allWordpressPost.edges.map(post => (
            <div key={post.node.wordpress_id}>
              <Link to={"/blog/" + post.node.slug}>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: post.node.title,
                  }}
                />
              </Link>
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              {/* <img src="" alt={post.node.alt_text} /> */}
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default PostsTemplate

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
            source_url
            alt_text
          }
          wordpress_id
        }
      }
    }
  }
`
